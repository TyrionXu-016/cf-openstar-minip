// pages/essay-result/essay-result.js

Page({
  data: {
    result: null,
    answer: '',
    topic: null,
    showAnswer: false,
  },

  onLoad() {
    const data = wx.getStorageSync('essay_result');
    if (data) {
      this.setData({
        result: data.result,
        answer: data.answer,
        topic: data.topic,
      });

      // 更新申论计数
      const total = wx.getStorageSync('study_total') || { total: 0, correct: 0, days: 0, essay: 0 };
      total.essay = (total.essay || 0) + 1;
      wx.setStorageSync('study_total', total);
    }
  },

  toggleAnswer() {
    this.setData({ showAnswer: !this.data.showAnswer });
  },

  goEssay() {
    wx.navigateBack();
  },

  goHome() {
    wx.switchTab({ url: '/pages/index/index' });
  },
});
