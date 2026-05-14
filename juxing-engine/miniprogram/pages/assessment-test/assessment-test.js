const { pickAssessmentQuestions } = require('../../data/question-bank.js');
const { enrichQuestionTypeFields } = require('../../utils/question-type-meta.js');

/**
 * 根据测评结果生成本地「学习计划」要点（不调用后端，便于离线可用）
 * @param {{ total: number, correct: number, rate: number, bySubject: Record<string, { correct: number, total: number }> }}
 */
function buildLearningPlan({ total, correct, rate, bySubject }) {
  const items = [];
  const rows = Object.keys(bySubject || {}).map((subject) => {
    const { correct: c, total: t } = bySubject[subject];
    const r = t > 0 ? Math.round((c / t) * 100) : 0;
    return { subject, correct: c, total: t, rate: r };
  });
  rows.sort((a, b) => a.rate - b.rate);

  if (rate < 50) {
    items.push({
      label: '整体建议',
      text: '本次正确率偏低，建议以教材基础概念 + 分模块刷题为主，先保证理解正确率，再逐步提高做题速度。',
    });
  } else if (rate < 75) {
    items.push({
      label: '整体建议',
      text: '已有一定基础，建议整理错题对应的知识点，并对错误率高的模块增加专项练习频次。',
    });
  } else {
    items.push({
      label: '整体建议',
      text: '整体掌握较好，建议保持每日限时训练，并穿插难题与全真模拟，注意审题与时间分配。',
    });
  }

  const weak = rows.filter((x) => x.total > 0 && x.rate < 70);
  weak.slice(0, 4).forEach((row) => {
    items.push({
      label: `薄弱 · ${row.subject}`,
      text: `该模块正确率约 ${row.rate}%（答对 ${row.correct}/${row.total} 题），建议作为近期优先突破方向，可连续数日每天安排专项练习与错题回顾。`,
    });
  });

  const strong = rows.filter((x) => x.total > 0 && x.rate >= 85);
  if (strong.length) {
    items.push({
      label: '优势巩固',
      text: `「${strong.map((s) => s.subject).join('、')}」表现稳定，每周穿插少量题目保持手感即可，把主要时间留给薄弱模块。`,
    });
  }

  const dailyMin = rate < 60 ? 40 : rate < 80 ? 30 : 25;
  items.push({
    label: '本周节奏',
    text: `建议每天坚持约 ${dailyMin} 分钟刷题与错题复盘；周末可安排 1 次小题量综合练习，巩固本周薄弱点。`,
  });

  if (total > 0 && correct === total) {
    items.push({
      label: '提示',
      text: '本次全部答对，可适当提高难度或缩短答题时间，挑战更高强度训练。',
    });
  }

  return items;
}

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
    learningPlanItems: [],
  },

  onLoad(options) {
    this._answers = {};
    const count = parseInt(options.count, 10) || 20;
    const difficulty = options.difficulty || 'medium';
    this._difficulty = difficulty;
    this._questionCount = count;

    const meta = wx.getStorageSync('currentAssessment') || {};
    const rawList = pickAssessmentQuestions(count, difficulty);
    const questions = rawList.map((q) => enrichQuestionTypeFields(q));

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
      progressDots: questions.map((_, i) => i),
      answered: false,
      selectedAnswer: '',
      hasNext: questions.length > 1,
      correctCount: 0,
      finished: false,
    });
  },

  selectOption(e) {
    if (this.data.answered) return;
    let key = e.currentTarget.dataset.key;
    if (!key) {
      const idx = Number(e.currentTarget.dataset.index);
      const list = (this.data.currentQuestion && this.data.currentQuestion.options) || [];
      key = list[idx] && list[idx].key ? list[idx].key : '';
    }
    if (!key) return;
    this.setData({ selectedAnswer: key });
  },

  /** 合并主按钮事件，避免 WXML 中动态 bindtap 方法名在部分基础库上异常 */
  onMainQuizAction() {
    if (this.data.answered) {
      this.nextQuestion();
    } else {
      this.submitAnswer();
    }
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

      const learningPlanItems = buildLearningPlan({ total, correct, rate, bySubject });

      wx.setStorageSync('assessment_report', {
        meta: this.data.meta,
        total,
        correct,
        rate,
        bySubject,
        difficulty: this._difficulty,
        requestedCount: this._questionCount,
        finishedAt: Date.now(),
        learningPlan: learningPlanItems,
      });

      this.setData({
        finished: true,
        currentQuestion: null,
        sessionStats: { total, correct, rate },
        learningPlanItems,
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
