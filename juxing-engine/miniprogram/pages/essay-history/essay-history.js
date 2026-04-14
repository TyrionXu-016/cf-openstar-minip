function pad2(n) {
  return n < 10 ? `0${n}` : `${n}`;
}

function formatTime(ts) {
  if (!ts) return '';
  const d = new Date(ts);
  return `${d.getMonth() + 1}/${d.getDate()} ${pad2(d.getHours())}:${pad2(d.getMinutes())}`;
}

Page({
  data: {
    list: [],
  },

  onShow() {
    const raw = wx.getStorageSync('essay_history') || [];
    this.setData({
      list: raw.map((r) => ({
        ...r,
        timeText: formatTime(r.createdAt),
      })),
    });
  },

  openDetail(e) {
    const index = e.currentTarget.dataset.index;
    const row = this.data.list[index];
    if (!row || !row.snapshot) {
      wx.showToast({ title: '记录无效', icon: 'none' });
      return;
    }
    wx.setStorageSync('essay_result', row.snapshot);
    wx.navigateTo({ url: '/pages/essay-result/essay-result' });
  },

  goEssay() {
    wx.navigateTo({ url: '/pages/essay/essay' });
  },
});
