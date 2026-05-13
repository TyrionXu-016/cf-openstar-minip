const app = getApp();
const { request } = require('../../utils/http.js');

function buildTip(hasQr, hasPhone) {
  if (!hasQr && !hasPhone) {
    return '管理员暂未配置客服电话或二维码。如需换号合并学习数据等，请稍后再试或通过其他渠道联系。';
  }
  if (hasPhone && hasQr) {
    return '可拨打下方客服电话，或使用微信「扫一扫」扫描二维码添加客服。';
  }
  if (hasPhone) {
    return '可点击下方号码复制后拨打，联系客服。';
  }
  return '请使用微信「扫一扫」扫描下方二维码添加客服。';
}

Page({
  data: {
    loading: true,
    hasQr: false,
    hasPhone: false,
    phone: '',
    qrSrc: '',
    tip: '',
  },

  onLoad() {
    this.load();
  },

  onPullDownRefresh() {
    this.load(() => wx.stopPullDownRefresh());
  },

  copyPhone() {
    const p = this.data.phone;
    if (!p) return;
    wx.setClipboardData({
      data: p,
      success: () => {
        wx.showToast({ title: '号码已复制', icon: 'success', duration: 1500 });
      },
    });
  },

  load(done) {
    const baseUrl = app.globalData.backendBaseUrl;
    if (!baseUrl) {
      this.setData({
        loading: false,
        hasQr: false,
        hasPhone: false,
        phone: '',
        qrSrc: '',
        tip: '未配置服务地址，无法加载联系客服信息。请在小程序配置中设置后端地址。',
      });
      if (typeof done === 'function') done();
      return;
    }

    this.setData({ loading: true });

    request({
      url: `${baseUrl}/api/v1/mini/support-wechat`,
      method: 'GET',
      timeout: 15000,
    })
      .then((res) => {
        const d = res.data;
        const hasQr = !!(d && d.success && d.hasQr);
        const phone = d && d.success && d.phone ? String(d.phone).trim() : '';
        const hasPhone = !!(d && d.success && d.hasPhone && phone);
        const qrSrc = hasQr ? `${baseUrl}/api/v1/mini/support-wechat/qr?t=${Date.now()}` : '';
        this.setData({
          loading: false,
          hasQr,
          hasPhone,
          phone: hasPhone ? phone : '',
          qrSrc,
          tip: buildTip(hasQr, hasPhone),
        });
      })
      .catch((err) => {
        this.setData({
          loading: false,
          hasQr: false,
          hasPhone: false,
          phone: '',
          qrSrc: '',
          tip: (err && err.message) ? String(err.message) : '加载失败，请下拉刷新重试。',
        });
      })
      .then(() => {
        if (typeof done === 'function') done();
      });
  },
});
