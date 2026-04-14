Page({
  data: {
    list: [],
  },

  onShow() {
    this.setData({ list: wx.getStorageSync('wrong_list') || [] });
  },

  removeItem(e) {
    const id = e.currentTarget.dataset.id;
    const list = (wx.getStorageSync('wrong_list') || []).filter((w) => w.id !== id);
    wx.setStorageSync('wrong_list', list);
    this.setData({ list });
    wx.showToast({ title: '已移除', icon: 'none' });
  },

  practiceOne(e) {
    const index = e.currentTarget.dataset.index;
    const item = this.data.list[index];
    if (!item) return;
    wx.setStorageSync('ai_generated_questions', [item]);
    wx.navigateTo({ url: '/pages/quiz/quiz?source=ai' });
  },

  goQuiz() {
    wx.switchTab({ url: '/pages/quiz/quiz' });
  },
});
