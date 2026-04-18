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
    const id = e.currentTarget.dataset.id;
    let item = this.data.list[index];
    if (!item && id !== undefined) {
      item = (this.data.list || []).find((q) => String(q.id) === String(id));
    }
    if (!item) {
      wx.showToast({ title: '题目数据异常，请重试', icon: 'none' });
      return;
    }
    wx.setStorageSync('ai_generated_questions', [item]);
    wx.setStorageSync('quiz_source', 'ai');
    const app = getApp();
    if (app && app.globalData) {
      app.globalData.pendingQuizSource = 'ai';
    }
    wx.showLoading({ title: '正在打开题目...' });
    wx.switchTab({
      url: '/pages/quiz/quiz',
      success: () => wx.hideLoading(),
      fail: () => {
        wx.hideLoading();
        // 极端场景兜底：switchTab 失败时强制重启到刷题页
        wx.reLaunch({ url: '/pages/quiz/quiz' });
      },
    });
  },

  goQuiz() {
    wx.switchTab({ url: '/pages/quiz/quiz' });
  },
});
