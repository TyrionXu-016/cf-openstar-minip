// 学员信息录入页面
const app = getApp();
const { request, formatErrorBody } = require('../../utils/http.js');
const { setSyncStudentPhone } = require('../../utils/study-stats-sync.js');

Page({
  data: {
    // 基本信息
    name: '',
    phone: '',
    age: '',
    gender: '',

    // 教育背景
    education: '',
    school: '',
    major: '',

    // 考试类型
    examType: '两者都',

    // 状态
    loading: false,
    hasHistory: false
  },

  onLoad: function() {
    // 加载历史记录
    this.loadHistory();
  },

  // 输入监听
  onInput: function(e) {
    const field = e.currentTarget.dataset.field;
    this.setData({
      [field]: e.detail.value
    });
  },

  // 选择性别
  onSelectGender: function(e) {
    const gender = e.currentTarget.dataset.gender;
    this.setData({ gender });
  },

  // 选择学历
  onSelectEducation: function(e) {
    const edu = e.currentTarget.dataset.edu;
    this.setData({ education: edu });
  },

  // 选择考试类型
  onSelectExamType: function(e) {
    const type = e.currentTarget.dataset.type;
    this.setData({ examType: type });
  },

  // 表单验证
  validateForm: function() {
    const { name, phone, age, gender, education, major } = this.data;

    if (!name || name.trim() === '') {
      wx.showToast({ title: '请输入姓名', icon: 'none' });
      return false;
    }

    if (!phone || !/^1[3-9]\d{9}$/.test(phone)) {
      wx.showToast({ title: '请输入正确的手机号', icon: 'none' });
      return false;
    }

    if (!age || parseInt(age) < 18 || parseInt(age) > 65) {
      wx.showToast({ title: '请输入有效年龄(18-65岁)', icon: 'none' });
      return false;
    }

    if (!gender) {
      wx.showToast({ title: '请选择性别', icon: 'none' });
      return false;
    }

    if (!education) {
      wx.showToast({ title: '请选择学历层次', icon: 'none' });
      return false;
    }

    if (!major || major.trim() === '') {
      wx.showToast({ title: '请输入专业名称', icon: 'none' });
      return false;
    }

    return true;
  },

  // 提交表单
  onSubmit: function() {
    if (!this.validateForm()) return;

    this.setData({ loading: true });

    const studentInfo = {
      name: this.data.name,
      phone: this.data.phone,
      age: parseInt(this.data.age),
      gender: this.data.gender,
      education: this.data.education,
      school: this.data.school,
      major: this.data.major,
      examType: this.data.examType,
      createTime: new Date().toISOString()
    };

    this.saveHistory(studentInfo);
    setSyncStudentPhone(studentInfo.phone);

    const matchUrl = `/pages/job-match/job-match?data=${encodeURIComponent(JSON.stringify(studentInfo))}`;
    const baseUrl = app.globalData.backendBaseUrl;

    if (!baseUrl) {
      this.setData({ loading: false });
      wx.showToast({ title: '未配置服务，已保存本机', icon: 'none', duration: 2200 });
      wx.navigateTo({ url: matchUrl });
      return;
    }

    this.saveToBackend(studentInfo)
      .then(() => {
        this.setData({ loading: false });
        wx.showToast({ title: '已同步云端', icon: 'success', duration: 1200 });
        setTimeout(() => wx.navigateTo({ url: matchUrl }), 350);
      })
      .catch((err) => {
        this.setData({ loading: false });
        const detail = (err && err.message) ? String(err.message) : '请检查网络后重试';
        const content = formatErrorBody(
          `本机已保存学员信息。\n\n${detail}\n\n是否仍进入智能选岗？`
        );
        wx.showModal({
          title: '云端保存失败',
          content,
          confirmText: '仍进入',
          cancelText: '留在本页',
          success: (res) => {
            if (res.confirm) wx.navigateTo({ url: matchUrl });
          },
        });
      });
  },

  /** @returns {Promise<void>} */
  saveToBackend: function(studentInfo) {
    const baseUrl = app.globalData.backendBaseUrl;
    if (!baseUrl) return Promise.resolve();

    return request({
      url: `${baseUrl}/api/v1/mini/students`,
      method: 'POST',
      header: { 'Content-Type': 'application/json' },
      data: {
        name: studentInfo.name,
        phone: studentInfo.phone,
        age: studentInfo.age,
        gender: studentInfo.gender,
        education: studentInfo.education,
        school: studentInfo.school,
        major: studentInfo.major,
        examType: studentInfo.examType
      },
      timeout: 15000,
    }).then(() => {});
  },

  // 加载历史记录
  loadHistory: function() {
    try {
      const history = wx.getStorageSync('student_history') || [];
      this.setData({ hasHistory: history.length > 0 });
    } catch (e) {
      console.error('加载历史失败', e);
    }
  },

  // 保存历史记录：按「手机号 + 姓名」合并，与云端「一号」对齐，又避免同号代填不同人时被一条盖掉。
  saveHistory: function(info) {
    try {
      let history = wx.getStorageSync('student_history') || [];
      const phone = String(info.phone || '').trim();
      const name = String(info.name || '').trim();
      const idx = history.findIndex(
        (h) => String(h.phone || '').trim() === phone && String(h.name || '').trim() === name
      );
      if (idx > -1) {
        history.splice(idx, 1);
      }
      history.unshift(info);
      if (history.length > 10) {
        history = history.slice(0, 10);
      }
      wx.setStorageSync('student_history', history);
    } catch (e) {
      console.error('保存历史失败', e);
    }
  },

  goToHistory: function() {
    wx.navigateTo({
      url: '/pages/student-history/student-history'
    });
  },

  // 隐私政策
  showPrivacy: function() {
    wx.showModal({
      title: '隐私保护政策',
      content: '我们仅在提供学习服务时收集必要信息（如昵称头像、手机号、学员信息、题目作答与上传图片）。信息用于个性化推荐、学习记录与AI功能处理，不会在未经授权情况下向第三方披露。',
      showCancel: false,
      confirmText: '我知道了'
    });
  }
});
