const { applyHistoryItemAsCurrent } = require('../../utils/study-stats-sync.js');

Page({
  data: {
    list: [],
  },

  onShow() {
    this.loadList();
  },

  loadList() {
    try {
      const list = wx.getStorageSync('student_history') || [];
      this.setData({ list: Array.isArray(list) ? list : [] });
    } catch (e) {
      this.setData({ list: [] });
    }
  },

  useItem(e) {
    const idx = Number(e.currentTarget.dataset.index);
    const item = this.data.list[idx];
    if (!item || !item.phone) {
      wx.showToast({ title: '档案缺少手机号', icon: 'none' });
      return;
    }
    applyHistoryItemAsCurrent(item);
    wx.navigateTo({
      url: `/pages/job-match/job-match?data=${encodeURIComponent(JSON.stringify(item))}`,
    });
  },

  goFill() {
    wx.navigateTo({ url: '/pages/student-info/student-info' });
  },
});
