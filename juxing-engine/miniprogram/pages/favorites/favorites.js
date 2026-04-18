Page({
  data: {
    list: [],
    loading: false,
    studentPhone: '',
  },

  onShow() {
    this.loadFavorites();
  },

  getStudentPhone() {
    const history = wx.getStorageSync('student_history') || [];
    return history?.[0]?.phone || wx.getStorageSync('favorite_student_phone') || '';
  },

  loadFavorites() {
    const localList = wx.getStorageSync('favorite_positions') || wx.getStorageSync('favorite_list') || [];
    const studentPhone = this.getStudentPhone();
    const app = getApp();
    const baseUrl = app && app.globalData ? app.globalData.backendBaseUrl : '';

    this.setData({ loading: true, list: localList, studentPhone });

    if (!baseUrl || !studentPhone) {
      this.setData({ loading: false });
      return;
    }

    wx.request({
      url: `${baseUrl}/api/v1/mini/favorites`,
      method: 'GET',
      data: { student_phone: studentPhone, limit: 200 },
      success: (res) => {
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
      },
      fail: (err) => {
        console.warn('读取收藏失败，回退本地缓存', err);
      },
      complete: () => this.setData({ loading: false }),
    });
  },

  removeItem(e) {
    const id = e.currentTarget.dataset.id;
    const list = (wx.getStorageSync('favorite_positions') || wx.getStorageSync('favorite_list') || []).filter((w) => w.id !== id);
    wx.setStorageSync('favorite_positions', list);
    wx.setStorageSync('favorite_list', list);
    this.setData({ list });
    this.removeFromBackend(id);
    wx.showToast({ title: '已取消收藏', icon: 'none' });
  },

  removeFromBackend(positionId) {
    const app = getApp();
    const baseUrl = app && app.globalData ? app.globalData.backendBaseUrl : '';
    const phone = this.data.studentPhone || this.getStudentPhone();
    if (!baseUrl || !phone) return;
    wx.request({
      url: `${baseUrl}/api/v1/mini/favorites/${positionId}?student_phone=${encodeURIComponent(phone)}`,
      method: 'DELETE',
      fail: (err) => {
        console.warn('后端取消收藏失败', err);
      },
    });
  },

  openPosition(e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/job-match/job-match?mode=history&highlight=${id}`,
    });
  },
});
