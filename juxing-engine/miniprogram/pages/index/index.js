// pages/index/index.js
const { getCategoryCounts, getAllQuestions } = require('../../data/question-bank.js');
const app = getApp();

Page({
  data: {
    navTopRpx: 96,
    capsuleRightRpx: 200,
    currentDate: '',
    greetingText: '早上好',
    userName: '同学',
    todayQuestions: 0,
    dailyGoal: 30,
    progressWidth: 0,
    stats: [
      { key: 'total', icon: '📚', value: '0', label: '累计刷题' },
      { key: 'rate', icon: '🎯', value: '0%', label: '正确率' },
      { key: 'days', icon: '🔥', value: '0', label: '连续天数' },
      { key: 'essay', icon: '📝', value: '0', label: '申论篇数' },
    ],
    categories: [],
    recommendQuestion: null,
  },

  onLoad() {
    const s = app.globalData.safeInsets || {};
    this.setData({
      navTopRpx: s.navTopRpx != null ? s.navTopRpx : 96,
      capsuleRightRpx: s.capsuleRightRpx != null ? s.capsuleRightRpx : 200,
    });
    this.initDate();
    this.refreshLibraryMeta();
    this.loadStats();
  },

  onShow() {
    this.loadStats();
  },

  refreshLibraryMeta() {
    const counts = getCategoryCounts();
    const all = getAllQuestions();
    const pick = all.length > 0 ? all[Math.floor(Math.random() * all.length)] : null;
    let qText = '';
    if (pick) {
      qText = pick.question.length > 72 ? `${pick.question.slice(0, 72)}…` : pick.question;
    }
    this.setData({
      categories: [
        { id: 'lx', icon: '🧩', name: '逻辑推理', count: counts.lx, bgColor: 'rgba(26,31,94,0.1)' },
        { id: 'sl', icon: '🔢', name: '数量关系', count: counts.sl, bgColor: 'rgba(245,166,35,0.1)' },
        { id: 'yc', icon: '📖', name: '言语理解', count: counts.yc, bgColor: 'rgba(7,193,96,0.1)' },
        { id: 'cz', icon: '📊', name: '资料分析', count: counts.cz, bgColor: 'rgba(100,100,255,0.1)' },
        { id: 'cg', icon: '⚖️', name: '常识判断', count: counts.cg, bgColor: 'rgba(238,10,36,0.1)' },
        { id: 'sl2', icon: '📜', name: '申论专练', count: counts.sl2, bgColor: 'rgba(255,153,102,0.1)' },
      ],
      recommendQuestion: pick
        ? { subject: pick.subject, difficulty: pick.difficulty, question: qText }
        : null,
    });
  },

  initDate() {
    const now = new Date();
    const hours = now.getHours();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const weeks = ['日', '一', '二', '三', '四', '五', '六'];
    const week = weeks[now.getDay()];

    let greeting = '早上好';
    if (hours >= 12 && hours < 18) greeting = '下午好';
    else if (hours >= 18) greeting = '晚上好';

    const userInfo = wx.getStorageSync('userInfo');
    const userName = userInfo ? (userInfo.nickName || '同学') : '同学';

    this.setData({
      currentDate: `${month}月${day}日 周${week}`,
      greetingText: greeting,
      userName: userName,
    });
  },

  loadStats() {
    const todayKey = new Date().toISOString().slice(0, 10);
    const todayData = wx.getStorageSync(`study_${todayKey}`) || { questions: 0 };
    const totalData = wx.getStorageSync('study_total') || {
      total: 0, correct: 0, days: 0, essay: 0
    };

    const correctRate = totalData.total > 0
      ? Math.round(totalData.correct / totalData.total * 100)
      : 0;

    const progressWidth = Math.min(
      Math.round(todayData.questions / this.data.dailyGoal * 100), 100
    );

    this.setData({
      todayQuestions: todayData.questions,
      progressWidth,
      stats: [
        { key: 'total', icon: '📚', value: totalData.total.toString(), label: '累计刷题' },
        { key: 'rate', icon: '🎯', value: correctRate + '%', label: '正确率' },
        { key: 'days', icon: '🔥', value: totalData.days.toString(), label: '连续天数' },
        { key: 'essay', icon: '📝', value: totalData.essay.toString(), label: '申论篇数' },
      ]
    });
  },

  goQuiz() {
    wx.switchTab({ url: '/pages/quiz/quiz' });
  },

  goCategory(e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({ url: `/pages/quiz/quiz?category=${id}` });
  },

  goGenerate() {
    wx.navigateTo({ url: '/pages/ai-generate/ai-generate' });
  },

  goEssay() {
    wx.navigateTo({ url: '/pages/essay/essay' });
  },

  goChat() {
    wx.switchTab({ url: '/pages/ai-chat/ai-chat' });
  },

  goOCR() {
    wx.navigateTo({ url: '/pages/ocr-scan/ocr-scan' });
  },

  goAssessment() {
    wx.navigateTo({ url: '/pages/student-info/student-info' });
  },
});
