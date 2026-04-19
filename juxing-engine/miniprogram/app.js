// app.js

function computeSafeInsets() {
  try {
    const win = wx.getWindowInfo ? wx.getWindowInfo() : wx.getSystemInfoSync();
    const menu = wx.getMenuButtonBoundingClientRect();
    const w = win.windowWidth || win.screenWidth || 375;
    const statusBar = Number(win.statusBarHeight) || 0;
    const menuTop = menu && menu.top != null ? Number(menu.top) : 0;
    const safeTop = win.safeArea && win.safeArea.top != null ? Number(win.safeArea.top) : 0;
    const topPx = Math.max(statusBar, menuTop, safeTop, 24);
    const capsuleRightPx =
      menu && menu.left != null ? Math.max(0, w - menu.left + 12) : 100;
    return {
      navTopRpx: (topPx * 750) / w,
      capsuleRightRpx: (capsuleRightPx * 750) / w,
    };
  } catch (e) {
    return { navTopRpx: 96, capsuleRightRpx: 200 };
  }
}

App({
  onLaunch() {
    this.globalData.safeInsets = computeSafeInsets();

    // 初始化云开发
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力');
    } else {
      wx.cloud.init({
        env: 'cloud1-6ghzmoc304200b12',  // 替换为你的云开发环境ID
        traceUser: true,
      });
    }

    // 获取用户信息（静默）
    this.getUserInfo();
  },

  globalData: {
    safeInsets: { navTopRpx: 96, capsuleRightRpx: 200 },
    userInfo: null,
    // FastAPI 后端（nginx 反代后）的基础地址
    // 生产环境需要换成你的域名，并在小程序后台配置域名白名单
    backendBaseUrl: "https://cf-api.openstar.ltd",
    studyStats: {
      totalQuestions: 0,
      correctRate: 0,
      studyDays: 0,
      essayCount: 0,
    }
  },

  getUserInfo() {
    const userInfo = wx.getStorageSync('userInfo');
    if (userInfo) {
      this.globalData.userInfo = userInfo;
    }
  }
});
