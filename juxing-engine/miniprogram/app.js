// app.js
App({
  onLaunch() {
    // 初始化云开发
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力');
    } else {
      wx.cloud.init({
        env: 'cloud1-6ghzmoc304200b12',  // 替换为你的云开发环境ID
        traceUser: true,
      });
    }

    // 获取用户信息（静默）
    this.getUserInfo();
  },

  globalData: {
    userInfo: null,
    studyStats: {
      totalQuestions: 0,
      correctRate: 0,
      studyDays: 0,
      essayCount: 0,
    }
  },

  getUserInfo() {
    const userInfo = wx.getStorageSync('userInfo');
    if (userInfo) {
      this.globalData.userInfo = userInfo;
    }
  }
});
