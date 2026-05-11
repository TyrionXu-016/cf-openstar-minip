/**
 * 统一封装 wx.request：超时、HTTP 状态、弱网提示。
 * 默认超时 30s；长任务页面可传入更大 timeout。
 */

function getBaseUrl() {
  try {
    const app = getApp();
    return app && app.globalData && app.globalData.backendBaseUrl
      ? String(app.globalData.backendBaseUrl).replace(/\/$/, '')
      : '';
  } catch (e) {
    return '';
  }
}

/**
 * @param {string} url 完整 https 地址，或以 / 开头的路径（自动拼接 globalData.backendBaseUrl）
 */
function normalizeUrl(url) {
  if (!url) return '';
  if (/^https?:\/\//i.test(url)) return url;
  const base = getBaseUrl();
  const path = url.startsWith('/') ? url : `/${url}`;
  return base ? `${base}${path}` : '';
}

function describeHttpError(res, wxErr) {
  if (wxErr && wxErr.errMsg) {
    const m = String(wxErr.errMsg);
    if (/timeout|超时/i.test(m)) return '请求超时，请稍后重试';
    if (/certificate|SSL|证书/i.test(m)) return '安全连接失败，请检查系统时间';
    if (/fail|连接|CONNECTION|NETWORK/i.test(m)) return '网络不可用，请检查网络';
    return '网络异常，请稍后重试';
  }
  const code = res && res.statusCode;
  if (!code) return '请求失败';
  if (code === 404) return '服务不存在或已更新';
  if (code === 401 || code === 403) return '无访问权限';
  if (code >= 500) return '服务繁忙，请稍后重试';
  let detail = '';
  try {
    const d = res.data;
    if (d && typeof d === 'object' && d.detail != null) {
      detail = typeof d.detail === 'string' ? d.detail : JSON.stringify(d.detail);
    }
  } catch (e) {}
  if (detail) return detail.length > 40 ? `${detail.slice(0, 38)}…` : detail;
  return `请求失败(${code})`;
}

/** 微信 toast 标题不宜过长 */
function toastTitle(msg) {
  const s = String(msg || '请求失败').replace(/\s+/g, ' ').trim();
  return s.length > 16 ? `${s.slice(0, 14)}…` : s;
}

/**
 * @param {object} opts
 * @param {string} opts.url
 * @param {string} [opts.method='GET']
 * @param {object} [opts.data]
 * @param {object} [opts.header]
 * @param {number} [opts.timeout=30000] ms
 * @param {boolean} [opts.showErrorToast=false] 失败时是否自动 toast（默认静默，由各页决定）
 */
function request(opts) {
  const url = normalizeUrl(opts.url);
  const timeout = opts.timeout != null ? opts.timeout : 30000;
  const method = opts.method || 'GET';

  return new Promise((resolve, reject) => {
    if (!url) {
      const err = new Error('未配置后端地址');
      err.code = 'NO_BASE_URL';
      reject(err);
      return;
    }

    wx.request({
      url,
      method,
      data: opts.data,
      header: opts.header || {},
      timeout,
      success: (res) => {
        const ok = res.statusCode >= 200 && res.statusCode < 300;
        if (ok) {
          resolve(res);
          return;
        }
        const msg = describeHttpError(res, null);
        const err = new Error(msg);
        err.statusCode = res.statusCode;
        err.response = res;
        if (opts.showErrorToast) {
          wx.showToast({ title: toastTitle(msg), icon: 'none', duration: 2800 });
        }
        reject(err);
      },
      fail: (wxErr) => {
        const msg = describeHttpError(null, wxErr);
        const err = new Error(msg);
        err.wxErr = wxErr;
        if (opts.showErrorToast) {
          wx.showToast({ title: toastTitle(msg), icon: 'none', duration: 2800 });
        }
        reject(err);
      },
    });
  });
}

module.exports = {
  request,
  getBaseUrl,
  normalizeUrl,
  describeHttpError,
  toastTitle,
};
