// pages/quiz/quiz.js

const { QUESTION_BANK } = require('../../data/question-bank.js');

Page({
  data: {
    subjects: [
      { id: 'all', name: '全部' },
      { id: 'lx', name: '逻辑推理' },
      { id: 'yc', name: '言语理解' },
      { id: 'sl', name: '数量关系' },
      { id: 'cg', name: '常识' },
      { id: 'cz', name: '资料分析' },
      { id: 'sl2', name: '申论小题' },
    ],
    activeSubject: 'all',
    loading: false,
    finished: false,
    questions: [],
    currentIndex: 0,
    currentQuestion: null,
    totalQuestions: 0,
    progressDots: [],
    selectedAnswer: '',
    answered: false,
    isCorrect: false,
    hasNext: false,
    sessionStats: { total: 0, correct: 0, rate: 0 },
    correctCount: 0,
    aiSource: false,
  },

  onLoad(options) {
    if (options.source === 'ai') {
      const list = wx.getStorageSync('ai_generated_questions') || [];
      if (!list.length) {
        wx.showToast({ title: '暂无题目，请先生成', icon: 'none' });
        setTimeout(() => wx.switchTab({ url: '/pages/index/index' }), 1500);
        return;
      }
      this.setData({ loading: true, aiSource: true });
      setTimeout(() => {
        const questions = list.slice().sort(() => Math.random() - 0.5);
        this.setData({
          loading: false,
          finished: false,
          questions,
          totalQuestions: questions.length,
          currentIndex: 0,
          correctCount: 0,
          progressDots: questions.map(() => ({})),
          currentQuestion: questions[0] || null,
          answered: false,
          selectedAnswer: '',
          hasNext: questions.length > 1,
        });
      }, 200);
      return;
    }

    const category = options.category || 'all';
    this.setData({ activeSubject: category, aiSource: false });
    this.loadQuestions(category);
  },

  loadQuestions(subject) {
    this.setData({ loading: true });
    setTimeout(() => {
      let questions = [];
      if (subject === 'all') {
        Object.values(QUESTION_BANK).forEach((list) => {
          questions = questions.concat(list);
        });
      } else {
        questions = QUESTION_BANK[subject] || [];
      }

      questions = questions.sort(() => Math.random() - 0.5);

      this.setData({
        loading: false,
        finished: false,
        questions,
        totalQuestions: questions.length,
        currentIndex: 0,
        correctCount: 0,
        progressDots: questions.map(() => ({})),
        currentQuestion: questions[0] || null,
        answered: false,
        selectedAnswer: '',
        hasNext: questions.length > 1,
      });
    }, 300);
  },

  switchSubject(e) {
    if (this.data.aiSource) {
      wx.showToast({ title: '当前为专项题目，请返回刷题首页切换', icon: 'none' });
      return;
    }
    const id = e.currentTarget.dataset.id;
    this.setData({ activeSubject: id });
    this.loadQuestions(id);
  },

  getOptionClass(key) {
    if (!this.data.answered) {
      return this.data.selectedAnswer === key ? 'selected' : '';
    }
    if (key === this.data.currentQuestion.answer) return 'correct';
    if (key === this.data.selectedAnswer) return 'wrong';
    return '';
  },

  selectOption(e) {
    if (this.data.answered) return;
    const key = e.currentTarget.dataset.key;
    this.setData({ selectedAnswer: key });
  },

  submitAnswer() {
    if (!this.data.selectedAnswer) {
      wx.showToast({ title: '请先选择答案', icon: 'none' });
      return;
    }

    const isCorrect = this.data.selectedAnswer === this.data.currentQuestion.answer;
    const newCount = this.data.correctCount + (isCorrect ? 1 : 0);

    const todayKey = `study_${new Date().toISOString().slice(0, 10)}`;
    const todayData = wx.getStorageSync(todayKey) || { questions: 0 };
    todayData.questions += 1;
    wx.setStorageSync(todayKey, todayData);

    this.setData({
      answered: true,
      isCorrect,
      correctCount: newCount,
    });

    if (isCorrect) {
      wx.vibrateShort({ type: 'light' });
    }
  },

  nextQuestion() {
    const nextIndex = this.data.currentIndex + 1;
    if (nextIndex >= this.data.questions.length) {
      const total = this.data.questions.length;
      const correct = this.data.correctCount;
      const totalData = wx.getStorageSync('study_total') || { total: 0, correct: 0, days: 0, essay: 0 };
      totalData.total += total;
      totalData.correct += correct;
      totalData.days = totalData.days || 0;
      wx.setStorageSync('study_total', totalData);

      this.setData({
        finished: true,
        currentQuestion: null,
        sessionStats: {
          total,
          correct,
          rate: total > 0 ? Math.round((correct / total) * 100) : 0,
        },
      });
      return;
    }

    this.setData({
      currentIndex: nextIndex,
      currentQuestion: this.data.questions[nextIndex],
      answered: false,
      selectedAnswer: '',
      isCorrect: false,
      hasNext: nextIndex < this.data.questions.length - 1,
    });
  },

  markWrong() {
    const wrongList = wx.getStorageSync('wrong_list') || [];
    const q = this.data.currentQuestion;
    if (!wrongList.find((w) => w.id === q.id)) {
      wrongList.push({ ...q, markedAt: Date.now() });
      wx.setStorageSync('wrong_list', wrongList);
    }
    wx.showToast({ title: '已标记为错题', icon: 'success' });
  },

  markFavorite() {
    const q = this.data.currentQuestion;
    if (!q) return;
    const list = wx.getStorageSync('favorite_list') || [];
    if (list.find((f) => f.id === q.id)) {
      wx.showToast({ title: '已在收藏中', icon: 'none' });
      return;
    }
    list.push({ ...q, favoritedAt: Date.now() });
    wx.setStorageSync('favorite_list', list);
    wx.showToast({ title: '已收藏', icon: 'success' });
  },

  restartQuiz() {
    if (this.data.aiSource) {
      const list = wx.getStorageSync('ai_generated_questions') || [];
      if (!list.length) {
        this.loadQuestions('all');
        this.setData({ aiSource: false });
        return;
      }
      const questions = list.slice().sort(() => Math.random() - 0.5);
      this.setData({
        finished: false,
        questions,
        totalQuestions: questions.length,
        currentIndex: 0,
        correctCount: 0,
        progressDots: questions.map(() => ({})),
        currentQuestion: questions[0] || null,
        answered: false,
        selectedAnswer: '',
        hasNext: questions.length > 1,
      });
      return;
    }
    this.loadQuestions(this.data.activeSubject);
  },

  goHome() {
    wx.switchTab({ url: '/pages/index/index' });
  },
});
