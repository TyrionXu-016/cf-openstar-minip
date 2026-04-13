// pages/index/index.js
const app = getApp();

Page({
  data: {
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
    categories: [
      { id: 'lx', icon: '🧩', name: '逻辑推理', count: 1280, bgColor: 'rgba(26,31,94,0.1)' },
      { id: 'sl', icon: '🔢', name: '数量关系', count: 860, bgColor: 'rgba(245,166,35,0.1)' },
      { id: 'yc', icon: '📖', name: '言语理解', count: 1540, bgColor: 'rgba(7,193,96,0.1)' },
      { id: 'cz', icon: '📊', name: '资料分析', count: 720, bgColor: 'rgba(100,100,255,0.1)' },
      { id: 'cg', icon: '⚖️', name: '常识判断', count: 980, bgColor: 'rgba(238,10,36,0.1)' },
      { id: 'sl2', icon: '📜', name: '申论专练', count: 320, bgColor: 'rgba(255,153,102,0.1)' },
    ],
    recommendQuestion: {
      subject: '逻辑推理',
      difficulty: '中等',
      question: '某单位有员工甲、乙、丙三人，他们分别在行政部、技术部、财务部工作...',
    }
  },

  onLoad() {
    this.initDate();
    this.loadStats();
  },

  onShow() {
    this.loadStats();
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
