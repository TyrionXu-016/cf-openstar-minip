// 智能选岗推荐页面
const positionsDB = require('../../data/positions.js');

Page({
  data: {
    studentInfo: null,
    positions: [],
    matchRate: 0,
    showModal: false,
    selectedPosition: null,
    isLoading: false,
    totalPositions: 0,
    currentPositions: 0
  },

  onLoad: function(options) {
    this._cloudPromptShown = false;

    if (options.mode === 'history') {
      this.loadFromHistory();
    } else if (options.data) {
      try {
        const studentInfo = JSON.parse(decodeURIComponent(options.data));
        this.setData({ studentInfo });
        this.loadCloudData(studentInfo);
      } catch (e) {
        wx.showToast({ title: '数据加载失败', icon: 'none' });
      }
    }

    this.setData({
      currentPositions: 0,
      totalPositions: 0,
    });
  },

  onShow: function() {
    const app = getApp();
    const baseUrl =
      app && app.globalData && app.globalData.backendBaseUrl ? app.globalData.backendBaseUrl : '';
    if (!baseUrl) return;
    if (this._cloudPromptShown) return;
    if (!this.data.studentInfo) return;
    if (this.data.isLoading) return;
    if (this.data.positions && this.data.positions.length > 0) return;

    this._cloudPromptShown = true;
    this.loadCloudData(this.data.studentInfo);
  },

  // 检查云端数据
  checkCloudData: function() {
    wx.showModal({
      title: '岗位推荐更新',
      content: `将使用后端语义推荐候选岗位并生成 Top15。是否继续？`,
      confirmText: '继续推荐',
      cancelText: '使用本地',
      success: (res) => {
        if (res.confirm) this.loadCloudData(this.data.studentInfo);
      },
    });
  },

  // 从后端获取岗位候选（语义推荐），失败则回退全量岗位
  loadCloudData: function(studentInfoOverride) {
    this.setData({ isLoading: true });
    wx.showLoading({ title: '加载数据中...' });

    const app = getApp();
    const baseUrl =
      app && app.globalData && app.globalData.backendBaseUrl ? app.globalData.backendBaseUrl : '';
    if (!baseUrl) {
      wx.hideLoading();
      this.setData({ isLoading: false });
      const info = studentInfoOverride || this.data.studentInfo;
      if (info) {
        this.setData({ currentPositions: positionsDB.length, totalPositions: 1776 });
        this.calculateMatches(info);
      }
      return;
    }

    const studentInfo = studentInfoOverride || this.data.studentInfo;

    // 1) 优先：语义推荐
    wx.request({
      url: `${baseUrl}/api/v1/mini/recommend`,
      method: 'POST',
      header: { 'content-type': 'application/json' },
      data: { studentInfo, topK: 120 },
      success: (res) => {
        wx.hideLoading();
        const payload = res.data;
        if (payload && payload.success && payload.data && Array.isArray(payload.data)) {
          const candidates = payload.data;
          wx.showToast({
            title: `获取推荐候选 ${candidates.length} 个`,
            icon: 'success'
          });
          this.setData({ currentPositions: candidates.length, totalPositions: candidates.length });
          this.calculateMatches(studentInfo, candidates);
          this.setData({ isLoading: false });
          return;
        }

        // 2) 兜底：全量岗位
        this.loadAllPositionsFromBackend(studentInfo);
      },
      fail: (err) => {
        wx.hideLoading();
        console.error('推荐候选失败:', err);
        wx.showToast({ title: '语义推荐失败，回退全量', icon: 'none' });
        this.loadAllPositionsFromBackend(studentInfo);
      },
    });
  },

  loadAllPositionsFromBackend: function(studentInfo) {
    wx.showLoading({ title: '加载完整岗位中...' });
    const app = getApp();
    const baseUrl =
      app && app.globalData && app.globalData.backendBaseUrl ? app.globalData.backendBaseUrl : '';

    wx.request({
      url: `${baseUrl}/api/v1/mini/positions`,
      method: 'GET',
      data: { page: 1, page_size: 2000 },
      success: (res) => {
        wx.hideLoading();
        const payload = res.data;
        if (payload && payload.success) {
          const cloudData = payload.data;
          const existingIds = new Set(positionsDB.map(p => p.id));
          const newData = cloudData.filter(p => !existingIds.has(p.id));
          const allData = [...positionsDB, ...newData];

          wx.showToast({ title: `已加载 ${allData.length} 条数据`, icon: 'success' });
          this.setData({ currentPositions: allData.length, totalPositions: allData.length });
          this.calculateMatches(studentInfo, allData);
        } else {
          wx.showToast({ title: '后端数据暂不可用', icon: 'none' });
        }
        this.setData({ isLoading: false });
      },
      fail: (err) => {
        wx.hideLoading();
        console.error('加载后端全量数据失败:', err);
        wx.showToast({ title: '请检查后端地址与域名配置', icon: 'none' });
        this.setData({ isLoading: false });
      },
    });
  },

  loadFromHistory: function() {
    try {
      const history = wx.getStorageSync('student_history') || [];
      if (history.length > 0) {
        this.setData({ studentInfo: history[0] });
        this.loadCloudData(history[0]);
      } else {
        wx.showToast({ title: '暂无历史记录', icon: 'none' });
        setTimeout(() => wx.navigateBack(), 1500);
      }
    } catch (e) {}
  },

  // 智能匹配算法
  calculateMatches: function(studentInfo, dataSource = null) {
    const { major, education, examType, gender } = studentInfo;
    const majorKeywords = this.normalizeMajor(major);
    const positions = dataSource || positionsDB;

    // 按考试类型筛选
    let filtered = positions.filter(pos => {
      if (examType === '国考') return pos.category === '国考';
      if (examType === '省考') return pos.category === '省考';
      return true;
    });

    // 计算匹配分数
    const scored = filtered.map(pos => {
      let score = 0;
      
      // 专业匹配 (40分)
      const majorMatch = this.checkMajorMatch(majorKeywords, pos.requirements.majors);
      score += majorMatch.score * 40;

      // 学历匹配 (30分)
      const eduLevel = { '专科': 1, '本科': 2, '硕士': 3, '博士': 4 };
      let posEdu = pos.requirements.education;
      // 处理数组或字符串
      if (Array.isArray(posEdu)) {
        posEdu = posEdu[0] || '本科';
      }
      const studentEduLevel = eduLevel[education] || 2;
      const eduRequired = eduLevel[posEdu] || 2;
      score += eduRequired <= studentEduLevel ? 30 : 10;

      // 性别匹配 (15分)
      const isMale = gender === '男';
      const tags = pos.tags || [];
      const maleHeavy = tags.some(t => (t || '').includes('男性优先'));
      const hasReq = tags.some(t => (t || '').includes('体能'));
      if (!hasReq || isMale) score += 15;

      // 竞争难度 (15分)
      const difficulty = pos.difficulty || '中等';
      score += difficulty === '较易' ? 15 : (difficulty === '中等' ? 10 : 5);

      const matchScore = Math.round(score);
      const matchLevel = matchScore >= 80 ? 'high' : (matchScore >= 60 ? 'medium' : 'low');

      return { ...pos, matchScore, matchLevel };
    });

    // 排序并取前15
    scored.sort((a, b) => b.matchScore - a.matchScore);
    const top = scored.slice(0, 15);
    const avgMatch = top.length > 0 ? Math.round(top.reduce((s, p) => s + p.matchScore, 0) / top.length) : 0;

    this.setData({ positions: top, matchRate: avgMatch });
  },

  normalizeMajor: function(major) {
    if (!major) return [];
    const m = major.toLowerCase().replace(/\s/g, '');
    const map = {
      '计算机': ['计算机', '软件', '网络', '信息安全', '物联网'],
      '法学': ['法学', '法律'],
      '经济': ['经济', '金融', '财政', '贸易'],
      '管理': ['管理', '工商'],
      '财务': ['会计', '审计', '财务'],
      '汉语言': ['汉语言', '中文', '对外汉语'],
      '英语': ['英语', '翻译', '外语'],
      '数学': ['数学', '统计'],
      '新闻': ['新闻', '传播', '广告', '新媒体'],
      '土木': ['土木', '建筑', '工程'],
      '教育': ['教育', '师范'],
      '心理': ['心理'],
      '社会': ['社会', '社会工作'],
      '政治': ['政治'],
      '文学': ['文学', '文秘'],
      '哲学': ['哲学'],
      '历史': ['历史'],
      '医学': ['医学', '临床', '护理', '药学'],
      '公安': ['公安', '侦查', '治安'],
      '环境': ['环境', '生态'],
      '安全': ['安全', '应急'],
      '测绘': ['测绘', '遥感'],
      '林学': ['林学', '林业', '园林'],
    };
    
    const keywords = [m];
    for (const [cat, words] of Object.entries(map)) {
      if (words.some(w => m.includes(w))) keywords.push(cat);
    }
    return keywords;
  },

  checkMajorMatch: function(studentMajors, posMajors) {
    if (!posMajors || posMajors.length === 0) {
      return { score: 0.5, reason: '专业不限' };
    }
    const posStr = posMajors.join('').toLowerCase();
    for (const sm of studentMajors) {
      if (posStr.includes(sm)) return { score: 1, reason: '专业匹配' };
    }
    return { score: 0.3, reason: '专业不完全匹配' };
  },

  showDetail: function(e) {
    this.setData({ selectedPosition: e.currentTarget.dataset.position, showModal: true });
  },

  closeModal: function() {
    this.setData({ showModal: false });
  },

  saveResult: function() {
    const { studentInfo, positions } = this.data;
    try {
      const saveData = { studentInfo, positions, saveTime: new Date().toISOString() };
      wx.setStorageSync('match_result', saveData);
      wx.showToast({ title: '保存成功', icon: 'success' });
    } catch (e) {
      wx.showToast({ title: '保存失败', icon: 'none' });
    }
  },

  restartAssessment: function() {
    wx.navigateTo({ url: '/pages/student-info/student-info' });
  },

  shareResult: function() {
    wx.showShareMenu({ withShareTicket: true });
    wx.showToast({ title: '可分享此页面', icon: 'none' });
  },

  saveCurrentPosition: function() {
    const position = this.data.selectedPosition;
    if (!position || !position.id) {
      wx.showToast({ title: '未找到岗位信息', icon: 'none' });
      return;
    }
    try {
      const list = wx.getStorageSync('favorite_positions') || [];
      const exists = list.some((item) => item.id === position.id);
      if (exists) {
        wx.showToast({ title: '已收藏过该岗位', icon: 'none' });
        return;
      }
      list.unshift({
        ...position,
        savedAt: new Date().toISOString(),
      });
      wx.setStorageSync('favorite_positions', list.slice(0, 100));
      // 兼容旧收藏页读取逻辑
      wx.setStorageSync('favorite_list', list.slice(0, 100));
      this.saveFavoriteToBackend(position);
      wx.showToast({ title: '收藏成功', icon: 'success' });
      this.closeModal();
    } catch (e) {
      wx.showToast({ title: '收藏失败', icon: 'none' });
    }
  },

  saveFavoriteToBackend: function(position) {
    const app = getApp();
    const baseUrl = app && app.globalData ? app.globalData.backendBaseUrl : '';
    if (!baseUrl) return;

    const history = wx.getStorageSync('student_history') || [];
    const phone = this.data.studentInfo?.phone || history?.[0]?.phone;
    if (!phone) return;
    wx.setStorageSync('favorite_student_phone', phone);

    wx.request({
      url: `${baseUrl}/api/v1/mini/favorites`,
      method: 'POST',
      header: { 'Content-Type': 'application/json' },
      data: {
        studentPhone: phone,
        positionId: position.id,
        positionName: position.name,
        payload: position,
      },
      fail: (err) => {
        console.warn('收藏写入后端失败', err);
      },
    });
  }
});
