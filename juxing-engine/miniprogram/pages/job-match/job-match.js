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
    this._offerCloudAfterLoad = !!(options && options.data);
    this._cloudPromptShown = false;

    if (options.mode === 'history') {
      this.loadFromHistory();
    } else if (options.data) {
      try {
        const studentInfo = JSON.parse(decodeURIComponent(options.data));
        this.setData({ studentInfo });
        this.calculateMatches(studentInfo);
      } catch (e) {
        wx.showToast({ title: '数据加载失败', icon: 'none' });
      }
    }

    this.setData({
      currentPositions: positionsDB.length,
      totalPositions: 1776,
    });
  },

  onShow: function() {
    if (!wx.cloud || typeof wx.cloud.callFunction !== 'function') return;
    if (!this._offerCloudAfterLoad || this._cloudPromptShown) return;
    if (wx.getStorageSync('job_match_cloud_prompt_done')) return;
    if (positionsDB.length >= 1776) return;

    this._cloudPromptShown = true;
    this.checkCloudData();
  },

  // 检查云端数据
  checkCloudData: function() {
    wx.showModal({
      title: '数据更新提示',
      content: `本地有 ${positionsDB.length} 条岗位数据，是否加载完整 1776 条数据？`,
      confirmText: '加载完整',
      cancelText: '使用本地',
      success: (res) => {
        wx.setStorageSync('job_match_cloud_prompt_done', true);
        if (res.confirm) {
          this.loadCloudData();
        }
      },
    });
  },

  // 从云端加载完整数据
  loadCloudData: function() {
    this.setData({ isLoading: true });
    wx.showLoading({ title: '加载数据中...' });

    wx.cloud.callFunction({
      name: 'getPositions',
      data: { pageSize: 2000 },
      success: (res) => {
        wx.hideLoading();
        if (res.result && res.result.success) {
          const cloudData = res.result.data;
          // 合并数据
          const existingIds = new Set(positionsDB.map(p => p.id));
          const newData = cloudData.filter(p => !existingIds.has(p.id));
          const allData = [...positionsDB, ...newData];
          
          wx.showToast({ 
            title: `已加载 ${allData.length} 条数据`, 
            icon: 'success' 
          });
          
          // 更新本地数据
          this.setData({ currentPositions: allData.length });
          
          // 重新计算匹配
          if (this.data.studentInfo) {
            this.calculateMatches(this.data.studentInfo, allData);
          }
        } else {
          wx.showToast({ 
            title: '云端数据暂不可用', 
            icon: 'none' 
          });
        }
      },
      fail: (err) => {
        wx.hideLoading();
        console.error('加载云端数据失败:', err);
        wx.showToast({ 
          title: '请先开通云开发', 
          icon: 'none' 
        });
      },
      complete: () => {
        this.setData({ isLoading: false });
      }
    });
  },

  loadFromHistory: function() {
    try {
      const history = wx.getStorageSync('student_history') || [];
      if (history.length > 0) {
        this.setData({ studentInfo: history[0] });
        this.calculateMatches(history[0]);
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

  startPractice: function() {
    wx.switchTab({ url: '/pages/quiz/quiz' });
  },

  shareResult: function() {
    wx.showShareMenu({ withShareTicket: true });
    wx.showToast({ title: '可分享此页面', icon: 'none' });
  },

  practicePosition: function() {
    this.closeModal();
    wx.switchTab({ url: '/pages/quiz/quiz' });
  }
});
