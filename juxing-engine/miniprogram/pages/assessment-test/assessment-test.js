const { pickAssessmentQuestions } = require('../../data/question-bank.js');

Page({
  data: {
    meta: null,
    loading: true,
    questions: [],
    currentIndex: 0,
    currentQuestion: null,
    totalQuestions: 0,
    progressDots: [],
    selectedAnswer: '',
    answered: false,
    isCorrect: false,
    hasNext: false,
    correctCount: 0,
    finished: false,
    sessionStats: { total: 0, correct: 0, rate: 0 },
  },

  onLoad(options) {
    this._answers = {};
    const count = parseInt(options.count, 10) || 20;
    const difficulty = options.difficulty || 'medium';
    this._difficulty = difficulty;
    this._questionCount = count;

    const meta = wx.getStorageSync('currentAssessment') || {};
    const questions = pickAssessmentQuestions(count, difficulty);

    if (questions.length === 0) {
      this.setData({
        loading: false,
        finished: true,
        meta,
        sessionStats: { total: 0, correct: 0, rate: 0 },
      });
      wx.showToast({ title: '暂无可用题目', icon: 'none' });
      return;
    }

    this.setData({
      loading: false,
      meta,
      questions,
      totalQuestions: questions.length,
      currentIndex: 0,
      currentQuestion: questions[0],
      progressDots: questions.map(() => ({})),
      answered: false,
      selectedAnswer: '',
      hasNext: questions.length > 1,
      correctCount: 0,
      finished: false,
    });
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

    const q = this.data.currentQuestion;
    this._answers[q.id] = this.data.selectedAnswer;

    const isCorrect = this.data.selectedAnswer === q.answer;
    const newCount = this.data.correctCount + (isCorrect ? 1 : 0);

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
      const rate = total > 0 ? Math.round((correct / total) * 100) : 0;

      const bySubject = {};
      this.data.questions.forEach((q) => {
        const sub = q.subject || '其他';
        if (!bySubject[sub]) bySubject[sub] = { correct: 0, total: 0 };
        bySubject[sub].total += 1;
        if (this._answers[q.id] === q.answer) {
          bySubject[sub].correct += 1;
        }
      });

      wx.setStorageSync('assessment_report', {
        meta: this.data.meta,
        total,
        correct,
        rate,
        bySubject,
        difficulty: this._difficulty,
        requestedCount: this._questionCount,
        finishedAt: Date.now(),
      });

      this.setData({
        finished: true,
        currentQuestion: null,
        sessionStats: { total, correct, rate },
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

  goHome() {
    wx.switchTab({ url: '/pages/index/index' });
  },

  goBack() {
    wx.navigateBack({ delta: 1 });
  },
});
