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
