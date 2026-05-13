const { request } = require('../../utils/http.js');
const { getStudentPhone } = require('../../utils/study-stats-sync.js');

Page({
  data: {
    list: [],
    loading: false,
    studentPhone: '',
    emptyReason: '',
    showPhoneHint: false,
    hasArchiveHistory: false,
  },

  onShow() {
    this._refreshHasArchiveHistory();
    this.loadFavorites();
  },

  _refreshHasArchiveHistory() {
    try {
      const h = wx.getStorageSync('student_history') || [];
      this.setData({ hasArchiveHistory: Array.isArray(h) && h.length > 0 });
    } catch (e) {
      this.setData({ hasArchiveHistory: false });
    }
  },

  goArchiveSwitch() {
    wx.navigateTo({ url: '/pages/student-history/student-history' });
  },

  _refreshMeta() {
    const app = getApp();
    const baseUrlRaw = app && app.globalData && app.globalData.backendBaseUrl;
    const baseUrl = baseUrlRaw ? String(baseUrlRaw).trim() : '';
    const phone = (this.data.studentPhone || '').trim();
    const list = this.data.list || [];
    let emptyReason = '';
    let showPhoneHint = false;
    if (list.length === 0) {
      if (!phone) emptyReason = 'need_phone';
      else if (!baseUrl) emptyReason = 'need_backend';
      else emptyReason = 'no_favorites';
    } else if (!phone) {
      showPhoneHint = true;
    }
    this.setData({ emptyReason, showPhoneHint });
  },

  loadFavorites() {
    const localList = wx.getStorageSync('favorite_positions') || wx.getStorageSync('favorite_list') || [];
    const studentPhone = getStudentPhone();
    const app = getApp();
    const baseUrlRaw = app && app.globalData ? app.globalData.backendBaseUrl : '';
    const baseUrl = baseUrlRaw ? String(baseUrlRaw).trim() : '';

    this.setData({ loading: true, list: localList, studentPhone });

    const done = () => {
      this.setData({ loading: false });
      this._refreshMeta();
    };

    if (!studentPhone) {
      done();
      return;
    }
    if (!baseUrl) {
      done();
      return;
    }

    request({
      url: `${baseUrl}/api/v1/mini/favorites`,
      method: 'GET',
      data: { student_phone: studentPhone, limit: 200 },
      timeout: 20000,
    })
      .then((res) => {
        const payload = res.data;
        const rows = payload && payload.success
          ? (Array.isArray(payload.data) ? payload.data : (payload.data ? [payload.data] : []))
          : [];
        if (rows.length > 0) {
          const remoteList = rows.map((item) => ({
            ...(item.payload || {}),
            id: item.positionId,
            name: item.positionName,
            savedAt: item.createdAt,
          }));
          wx.setStorageSync('favorite_positions', remoteList);
          wx.setStorageSync('favorite_list', remoteList);
          this.setData({ list: remoteList });
        }
      })
      .catch((err) => {
        console.warn('读取收藏失败，回退本地缓存', err && err.message);
      })
      .then(done);
  },

  goStudentInfo() {
    wx.navigateTo({ url: '/pages/student-info/student-info' });
  },

  removeItem(e) {
    const id = e.currentTarget.dataset.id;
    const list = (wx.getStorageSync('favorite_positions') || wx.getStorageSync('favorite_list') || []).filter((w) => w.id !== id);
    wx.setStorageSync('favorite_positions', list);
    wx.setStorageSync('favorite_list', list);
    this.setData({ list });
    this._refreshMeta();
    this.removeFromBackend(id);
    wx.showToast({ title: '已取消收藏', icon: 'none' });
  },

  removeFromBackend(positionId) {
    const app = getApp();
    const baseUrl = app && app.globalData && app.globalData.backendBaseUrl ? String(app.globalData.backendBaseUrl).trim() : '';
    const phone = this.data.studentPhone || getStudentPhone();
    if (!baseUrl || !phone) return;
    request({
      url: `${baseUrl}/api/v1/mini/favorites/${positionId}?student_phone=${encodeURIComponent(phone)}`,
      method: 'DELETE',
      timeout: 15000,
    }).catch((err) => {
      console.warn('后端取消收藏失败', err && err.message);
    });
  },

  openPosition(e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/job-match/job-match?mode=history&highlight=${id}`,
    });
  },
});
