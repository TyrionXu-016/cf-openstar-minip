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
});
