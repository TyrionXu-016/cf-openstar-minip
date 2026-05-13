const DAILY_GOAL_PRESETS = [10, 20, 30, 40, 50];

Page({
  data: {
    quietCloudFallback: false,
    showDailyGoalReminderRow: true,
    dailyGoalReminder: false,
    dailyGoalQuestions: 30,
    dailyGoalPresets: ['10 题', '20 题', '30 题', '40 题', '50 题'],
    dailyGoalPresetIndex: 2,
  },

  onShow() {
    const savedGoal = Number(wx.getStorageSync('settings_daily_goal_questions'));
    const dailyGoalQuestions =
      DAILY_GOAL_PRESETS.includes(savedGoal) ? savedGoal : 30;
    const dailyGoalPresetIndex = Math.max(0, DAILY_GOAL_PRESETS.indexOf(dailyGoalQuestions));
    this.setData({
      quietCloudFallback: !!wx.getStorageSync('settings_quiet_cloud_fallback'),
      dailyGoalReminder: !!wx.getStorageSync('settings_daily_goal_reminder'),
      dailyGoalQuestions,
      dailyGoalPresetIndex,
    });
  },

  onQuietChange(e) {
    const v = !!e.detail.value;
    wx.setStorageSync('settings_quiet_cloud_fallback', v);
    this.setData({ quietCloudFallback: v });
  },

  onDailyReminderChange(e) {
    if (!this.data.showDailyGoalReminderRow) return;
    const v = !!e.detail.value;
    wx.setStorageSync('settings_daily_goal_reminder', v);
    this.setData({ dailyGoalReminder: v });
    if (v) {
      try {
        wx.removeStorageSync('goal_reminder_banner_dismissed_date');
      } catch (e) {
        /* ignore */
      }
      wx.showToast({
        title: '打开首页时将提示未达标',
        icon: 'none',
        duration: 2200,
      });
    }
  },

  onDailyGoalPresetChange(e) {
    const ix = Number(e.detail.value);
    if (isNaN(ix) || ix < 0 || ix >= DAILY_GOAL_PRESETS.length) return;
    const dailyGoalQuestions = DAILY_GOAL_PRESETS[ix];
    wx.setStorageSync('settings_daily_goal_questions', dailyGoalQuestions);
    try {
      wx.removeStorageSync('goal_reminder_banner_dismissed_date');
    } catch (e) {
      /* ignore */
    }
    this.setData({ dailyGoalPresetIndex: ix, dailyGoalQuestions });
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
