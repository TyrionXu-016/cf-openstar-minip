// pages/profile/profile.js

const app = getApp();

Page({
  data: {
    profileHeroTopRpx: 136,
    capsuleRightRpx: 200,
    userInfo: {},
    draftUserInfo: { nickName: '', avatar: '' },
    showProfileEditor: false,
    wrongCount: 0,
    stats: [
      { key: 'total', name: '累计刷题', value: '0' },
      { key: 'rate', name: '正确率', value: '0%' },
      { key: 'days', name: '学习天数', value: '0' },
      { key: 'essay', name: '申论篇数', value: '0' },
    ],
  },

  onLoad() {
    const s = app.globalData.safeInsets || {};
    const top = s.navTopRpx != null ? s.navTopRpx : 96;
    this.setData({
      profileHeroTopRpx: top + 40,
      capsuleRightRpx: s.capsuleRightRpx != null ? s.capsuleRightRpx : 200,
    });
  },

  onShow() {
    this.loadUserData();
  },

  loadUserData() {
    // 用户信息
    const userInfo = wx.getStorageSync('userInfo') || {};
    this.setData({ userInfo });

    // 错题数
    const wrongList = wx.getStorageSync('wrong_list') || [];
    this.setData({ wrongCount: wrongList.length });

    // 学习统计
    const todayKey = `study_${new Date().toISOString().slice(0, 10)}`;
    const todayData = wx.getStorageSync(todayKey) || { questions: 0 };
    const totalData = wx.getStorageSync('study_total') || { total: 0, correct: 0, days: 0, essay: 0 };

    const correctRate = totalData.total > 0 ? Math.round(totalData.correct / totalData.total * 100) : 0;

    this.setData({
      stats: [
        { key: 'total', name: '累计刷题', value: totalData.total.toString() },
        { key: 'rate', name: '正确率', value: correctRate + '%' },
        { key: 'days', name: '学习天数', value: totalData.days.toString() },
        { key: 'essay', name: '申论篇数', value: (totalData.essay || 0).toString() },
      ]
    });
  },

  getUserInfo() {
    wx.getUserProfile({
      desc: '用于展示学习数据',
      success: (res) => {
        const current = this.data.userInfo || {};
        const profileNick = (res.userInfo.nickName || '').trim();
        const currentNick = (current.nickName || '').trim();
        const normalizedNick =
          currentNick && currentNick !== '微信用户'
            ? currentNick
            : (profileNick && profileNick !== '微信用户' ? profileNick : '');
        const merged = {
          nickName: normalizedNick,
          avatar: current.avatar || res.userInfo.avatarUrl || '',
        };
        this.setData({
          draftUserInfo: merged,
          showProfileEditor: true,
        });
      },
      fail: () => {
        wx.showToast({ title: '你取消了授权', icon: 'none' });
      },
    });
  },

  closeProfileEditor() {
    this.setData({ showProfileEditor: false });
  },

  onChooseAvatar(e) {
    const avatar = e.detail.avatarUrl || '';
    if (!avatar) return;
    this.setData({
      draftUserInfo: {
        ...this.data.draftUserInfo,
        avatar,
      },
    });
  },

  onNicknameBlur(e) {
    const nickName = (e.detail.value || '').trim();
    this.setData({
      draftUserInfo: {
        ...this.data.draftUserInfo,
        nickName,
      },
    });
  },

  onNicknameInput(e) {
    const nickName = (e.detail.value || '').trim();
    this.setData({
      draftUserInfo: {
        ...this.data.draftUserInfo,
        nickName,
      },
    });
  },

  noop() {},

  saveUserInfo() {
    const draft = this.data.draftUserInfo || {};
    const nickName = (draft.nickName || '').trim();
    const avatar = draft.avatar || '';
    if (!nickName) {
      wx.showToast({ title: '请填写昵称', icon: 'none' });
      return;
    }
    if (!avatar) {
      wx.showToast({ title: '请先选择头像', icon: 'none' });
      return;
    }

    const userInfo = { nickName, avatar };
    this.setData({
      userInfo,
      showProfileEditor: false,
    });
    wx.setStorageSync('userInfo', userInfo);
    wx.showToast({ title: '保存成功', icon: 'success' });
  },

  goWrongList() {
    wx.navigateTo({ url: '/pages/wrong-list/wrong-list' });
  },

  goEssayHistory() {
    wx.navigateTo({ url: '/pages/essay-history/essay-history' });
  },

  goFavorites() {
    wx.navigateTo({ url: '/pages/favorites/favorites' });
  },

  goAIGallery() {
    wx.navigateTo({ url: '/pages/ai-generate/ai-generate' });
  },

  goSettings() {
    wx.navigateTo({ url: '/pages/settings/settings' });
  },

  goAbout() {
    wx.showModal({
      title: '关于我们',
      content: '聚星引擎 v1.0.0\n\n专注公考学习，AI赋能备考\n\n功能模块：\n• 学员测评 - 智能评估考生水平\n• AI批改 - 申论智能评分\n• 专项练习 - 针对薄弱环节\n• 智能答疑 - 7×24小时AI助手',
      showCancel: false,
    });
  },

  goAssessment() {
    wx.navigateTo({ url: '/pages/assessment/assessment' });
  },
});
