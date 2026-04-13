// pages/profile/profile.js

Page({
  data: {
    userInfo: {},
    wrongCount: 0,
    stats: [
      { key: 'total', name: '累计刷题', value: '0' },
      { key: 'rate', name: '正确率', value: '0%' },
      { key: 'days', name: '学习天数', value: '0' },
      { key: 'essay', name: '申论篇数', value: '0' },
    ],
  },

  onShow() {
    this.loadUserData();
  },

  loadUserData() {
    // 用户信息
    const userInfo = wx.getStorageSync('userInfo') || {};
    this.setData({ userInfo });

    // 错题数
    const wrongList = wx.getStorageSync('wrong_list') || [];
    this.setData({ wrongCount: wrongList.length });

    // 学习统计
    const todayKey = `study_${new Date().toISOString().slice(0, 10)}`;
    const todayData = wx.getStorageSync(todayKey) || { questions: 0 };
    const totalData = wx.getStorageSync('study_total') || { total: 0, correct: 0, days: 0, essay: 0 };

    const correctRate = totalData.total > 0 ? Math.round(totalData.correct / totalData.total * 100) : 0;

    this.setData({
      stats: [
        { key: 'total', name: '累计刷题', value: totalData.total.toString() },
        { key: 'rate', name: '正确率', value: correctRate + '%' },
        { key: 'days', name: '学习天数', value: totalData.days.toString() },
        { key: 'essay', name: '申论篇数', value: (totalData.essay || 0).toString() },
      ]
    });
  },

  getUserInfo() {
    wx.getUserProfile({
      desc: '用于展示学习数据',
      success: (res) => {
        const userInfo = res.userInfo;
        this.setData({ userInfo });
        wx.setStorageSync('userInfo', userInfo);
        wx.showToast({ title: '授权成功', icon: 'success' });
      }
    });
  },

  goWrongList() {
    wx.showModal({
      title: '错题本',
      content: '功能正在完善中...\n\n暂时可通过「首页→专项练习」查看题目，在答题时点击「标记错题」按钮添加。',
      showCancel: false,
    });
  },

  goEssayHistory() {
    wx.showModal({
      title: '申论历史',
      content: '申论练习记录功能正在完善中...\n\n暂时可通过「首页→申论AI批改」继续练习。',
      showCancel: false,
    });
  },

  goFavorites() {
    wx.showModal({
      title: '我的收藏',
      content: '收藏功能正在完善中...\n\n暂时可通过「首页→专项练习」继续刷题。',
      showCancel: false,
    });
  },

  goAIGallery() {
    wx.navigateTo({ url: '/pages/ai-generate/ai-generate' });
  },

  goSettings() {
    wx.showModal({
      title: '设置',
      content: '• 每日目标提醒\n• 消息通知\n• 深色模式\n等功能正在开发中...',
      showCancel: false,
    });
  },

  goAbout() {
    wx.showModal({
      title: '关于我们',
      content: '聚星引擎 v1.0.0\n\n专注公考学习，AI赋能备考\n\n功能模块：\n• 学员测评 - 智能评估考生水平\n• AI批改 - 申论智能评分\n• 专项练习 - 针对薄弱环节\n• 智能答疑 - 7×24小时AI助手',
      showCancel: false,
    });
  },

  goAssessment() {
    wx.navigateTo({ url: '/pages/assessment/assessment' });
  },
});
