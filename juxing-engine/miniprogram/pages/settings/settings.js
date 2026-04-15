Page({
  data: {
    quietCloudFallback: false,
    dailyGoalReminder: false,
  },

  onShow() {
    this.setData({
      quietCloudFallback: !!wx.getStorageSync('settings_quiet_cloud_fallback'),
      dailyGoalReminder: !!wx.getStorageSync('settings_daily_goal_reminder'),
    });
  },

  onQuietChange(e) {
    const v = !!e.detail.value;
    wx.setStorageSync('settings_quiet_cloud_fallback', v);
    this.setData({ quietCloudFallback: v });
  },

  onDailyReminderChange(e) {
    const v = !!e.detail.value;
    wx.setStorageSync('settings_daily_goal_reminder', v);
    this.setData({ dailyGoalReminder: v });
    if (v) {
      wx.showToast({ title: '提醒功能后续版本开放', icon: 'none' });
    }
  },

  showPrivacyPolicy() {
    wx.showModal({
      title: '隐私保护政策',
      content:
        '我们仅在提供学习服务时收集必要信息（如昵称头像、手机号、学员信息、题目作答与上传图片）。信息用于个性化推荐、学习记录与AI功能处理，不会在未经授权情况下向第三方披露。',
      showCancel: false,
      confirmText: '我知道了',
    });
  },
});
