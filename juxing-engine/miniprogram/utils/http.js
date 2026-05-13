/**
 * 统一封装 wx.request：超时、HTTP 状态、弱网提示。
 * 默认超时 30s；长任务页面可传入更大 timeout。
 *
 * 失败展示：可选 showErrorToast（较长 Toast）或 showErrorModal（完整说明，重要错误优先）。
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
    if (d && typeof d === 'object') {
      if (d.detail != null) {
        detail = typeof d.detail === 'string' ? d.detail : JSON.stringify(d.detail);
      } else if (typeof d.message === 'string' && d.message.trim()) {
        detail = String(d.message).trim();
      } else if (d.msg != null && String(d.msg).trim()) {
        detail = String(d.msg).trim();
      }
    }
  } catch (e) {
    /* ignore */
  }
  const cap = 220;
  if (detail) return detail.length > cap ? `${detail.slice(0, cap - 1)}…` : detail;
  return `请求失败(${code})`;
}

/**
 * Toast 单行不宜过长；默认略放宽（旧版 16 字易截断后端 detail）
 * @param {string} msg
 * @param {number} [maxLen=26]
 */
function toastTitle(msg, maxLen) {
  const max = maxLen != null ? maxLen : 26;
  const s = String(msg || '请求失败').replace(/\s+/g, ' ').trim();
  return s.length > max ? `${s.slice(0, max - 1)}…` : s;
}

/** 弹窗正文（微信建议控制长度，此处给到约两行英文量级） */
function formatErrorBody(msg, maxLen) {
  const max = maxLen != null ? maxLen : 480;
  const s = String(msg || '请求失败').replace(/\s+/g, ' ').trim();
  return s.length > max ? `${s.slice(0, max - 1)}…` : s;
}

/**
 * 重要错误：用 Modal 展示完整信息（各页 catch 中可调用）
 * @param {Error & { message?: string }} err
 * @param {string} [title]
 * @param {string} [suffix] 追加在 message 后的说明（如已本地降级）
 */
function showRequestFailureModal(err, title, suffix) {
  let msg = (err && err.message) || '请求失败';
  if (suffix) msg = `${msg}${suffix}`;
  wx.showModal({
    title: title || '请求失败',
    content: formatErrorBody(msg),
    showCancel: false,
    confirmText: '我知道了',
  });
}

/**
 * @param {object} opts
 * @param {string} opts.url
 * @param {string} [opts.method='GET']
 * @param {object} [opts.data]
 * @param {object} [opts.header]
 * @param {number} [opts.timeout=30000] ms
 * @param {boolean} [opts.showErrorToast=false] 失败时自动 Toast（略长文案）
 * @param {number} [opts.toastMaxLen] 传给 toastTitle 的最大长度
 * @param {boolean} [opts.showErrorModal=false] 失败时自动弹窗（与 showErrorToast 同时 true 时优先 Modal）
 * @param {string} [opts.errorModalTitle] 弹窗标题
 * @param {string} [opts.errorModalSuffix] 弹窗正文末尾追加说明
 */
function request(opts) {
  const url = normalizeUrl(opts.url);
  const timeout = opts.timeout != null ? opts.timeout : 30000;
  const method = opts.method || 'GET';

  const notifyFail = (msg, err) => {
    if (opts.showErrorModal) {
      showRequestFailureModal(err || new Error(msg), opts.errorModalTitle, opts.errorModalSuffix);
    } else if (opts.showErrorToast) {
      const len = opts.toastMaxLen != null ? opts.toastMaxLen : 28;
      wx.showToast({
        title: toastTitle(msg, len),
        icon: 'none',
        duration: 4000,
      });
    }
  };

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
        notifyFail(msg, err);
        reject(err);
      },
      fail: (wxErr) => {
        const msg = describeHttpError(null, wxErr);
        const err = new Error(msg);
        err.wxErr = wxErr;
        notifyFail(msg, err);
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
  formatErrorBody,
  showRequestFailureModal,
};
