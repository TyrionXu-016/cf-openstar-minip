// 学员信息录入页面
const app = getApp();

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

    // 保存到本地存储
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

    // 保存历史记录
    this.saveHistory(studentInfo);

    // 跳转到智能选岗页面
    setTimeout(() => {
      this.setData({ loading: false });
      wx.navigateTo({
        url: `/pages/job-match/job-match?data=${encodeURIComponent(JSON.stringify(studentInfo))}`
      });
    }, 500);
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

  // 保存历史记录
  saveHistory: function(info) {
    try {
      let history = wx.getStorageSync('student_history') || [];
      // 去重：如果同姓名同专业已存在，更新
      const index = history.findIndex(h => h.name === info.name && h.major === info.major);
      if (index > -1) {
        history[index] = info;
      } else {
        history.unshift(info);
      }
      // 最多保存10条
      if (history.length > 10) {
        history = history.slice(0, 10);
      }
      wx.setStorageSync('student_history', history);
    } catch (e) {
      console.error('保存历史失败', e);
    }
  },

  // 查看历史
  goToHistory: function() {
    wx.navigateTo({
      url: '/pages/job-match/job-match?mode=history'
    });
  },

  // 隐私政策
  showPrivacy: function() {
    wx.showModal({
      title: '隐私保护政策',
      content: '我们非常重视您的隐私保护。所有信息仅用于公考选岗推荐，不会泄露给第三方。',
      showCancel: false,
      confirmText: '我知道了'
    });
  }
});
