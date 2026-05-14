// pages/quiz-focus/quiz-focus.js
// 首页行测 / 公基 / 申论分库：选考点后进独立练题页，不进入底部「刷题」Tab

const { QUESTION_BANK } = require('../../data/question-bank.js');
const { enrichQuestionTypeFields } = require('../../utils/question-type-meta.js');
const { pushStudyStats } = require('../../utils/study-stats-sync.js');

function normalizeAnswerLetters(s) {
  const m = String(s || '')
    .toUpperCase()
    .match(/[A-Z]/g);
  if (!m || !m.length) return '';
  return [...new Set(m)].sort().join('');
}

function isMultiQuestion(q) {
  if (!q) return false;
  if (q.questionType === 'multi' || q.type === 'multi') return true;
  return normalizeAnswerLetters(q.answer).length >= 2;
}

function isJudgeQuestion(q) {
  if (!q) return false;
  return q.questionType === 'judge' || q.type === 'judge';
}

function normalizeJudgeAnswer(ans) {
  const raw = String(ans == null ? '' : ans).trim();
  if (!raw) return '';
  const up = raw.toUpperCase();
  if (up === 'A' || up === 'B') return up.charAt(0);
  const compact = raw.replace(/\s/g, '');
  if (/^(正确|对|√|T|TRUE)$/i.test(compact)) return 'A';
  if (/^(错误|错|×|F|FALSE)$/i.test(compact)) return 'B';
  if (/^[AB]$/i.test(up)) return up.charAt(0);
  return 'A';
}

function prepareJudgeQuestion(q) {
  if (!q || !isJudgeQuestion(q)) return q;
  const out = { ...q, questionType: 'judge' };
  out.answer = normalizeJudgeAnswer(out.answer) || 'A';
  out.options = [
    { key: 'A', text: '正确' },
    { key: 'B', text: '错误' },
  ];
  return out;
}

function isEssayQuestion(q) {
  if (!q) return false;
  return q.questionType === 'essay' || q.type === 'essay';
}

function prepareQuestionsList(list) {
  if (!Array.isArray(list)) return [];
  return list
    .filter((q) => !isEssayQuestion(q))
    .map((q) => enrichQuestionTypeFields(prepareJudgeQuestion(q)));
}

const BANK_LABELS = {
  lx: '逻辑推理',
  yc: '言语理解',
  sl: '数量关系',
  cz: '资料分析',
  cg: '常识判断',
  gj_law: '公基·法律',
  gj_pol: '公基·政治',
  gj_marx: '公基·马原',
  gj_party: '公基·党史',
  gj_econ: '公基·经济',
  gj_human: '公基·人文',
  gj_tech: '公基·科技',
  gj_doc: '公基·公文',
  sl_guina: '归纳概括',
  sl_zonghe: '综合分析',
  sl_duice: '提出对策',
  sl_gongwen: '公文写作',
  sl_zuowen: '大作文',
};

function bankDisplayName(bankId) {
  return BANK_LABELS[bankId] || bankId || '模块练题';
}

Page({
  data: {
    bankLabel: '练题',
    subTitle: '',
    loading: true,
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
    correctCount: 0,
    sessionStats: { total: 0, correct: 0, rate: 0 },
  },

  _bankId: '',
  _filterKp: '',

  initRoundSnapshots(questions) {
    const n = (questions && questions.length) || 0;
    this._roundSnapshots = n ? new Array(n).fill(null) : [];
  },

  cloneQuestionForSnapshot(q) {
    if (!q) return null;
    try {
      return JSON.parse(JSON.stringify(q));
    } catch (e) {
      return { ...q };
    }
  },

  recalcCorrectCountFromSnapshots() {
    const snaps = this._roundSnapshots || [];
    let c = 0;
    for (let i = 0; i < snaps.length; i++) {
      const s = snaps[i];
      if (s && s.answered && s.isCorrect) c += 1;
    }
    return c;
  },

  persistCurrentRoundSnapshot() {
    const questions = this.data.questions || [];
    const n = questions.length;
    const i = this.data.currentIndex;
    if (!this._roundSnapshots || this._roundSnapshots.length !== n || i < 0 || i >= n) return;
    const cq = this.data.currentQuestion;
    this._roundSnapshots[i] = {
      answered: !!this.data.answered,
      selectedAnswer: this.data.selectedAnswer,
      isCorrect: !!this.data.isCorrect,
      qState: this.cloneQuestionForSnapshot(cq),
    };
    const correctCount = this.recalcCorrectCountFromSnapshots();
    if (correctCount !== this.data.correctCount) {
      this.setData({ correctCount });
    }
  },

  summarizeRoundForFinish() {
    this.persistCurrentRoundSnapshot();
    const questions = this.data.questions || [];
    const n = questions.length;
    const snaps = this._roundSnapshots || [];
    let submitted = 0;
    let correct = 0;
    for (let j = 0; j < n; j++) {
      const s = snaps[j];
      if (s && s.answered) {
        submitted += 1;
        if (s.isCorrect) correct += 1;
      }
    }
    return {
      pool: n,
      submitted,
      correct,
      rate: submitted > 0 ? Math.round((correct / submitted) * 100) : 0,
    };
  },

  finishQuizRound() {
    const summary = this.summarizeRoundForFinish();
    const totalData = wx.getStorageSync('study_total') || { total: 0, correct: 0, days: 0, essay: 0 };
    totalData.total += summary.submitted;
    totalData.correct += summary.correct;
    totalData.days = totalData.days || 0;
    wx.setStorageSync('study_total', totalData);
    pushStudyStats();
    this.setData({
      finished: true,
      currentQuestion: null,
      sessionStats: {
        total: summary.submitted,
        correct: summary.correct,
        rate: summary.rate,
      },
    });
  },

  applyRoundSnapshot(idx) {
    const questions = this.data.questions || [];
    const n = questions.length;
    if (!n || idx < 0 || idx >= n) return;
    if (!this._roundSnapshots || this._roundSnapshots.length !== n) {
      this.initRoundSnapshots(questions);
    }
    const snap = this._roundSnapshots[idx];
    const base = questions[idx];
    const patch = {
      currentIndex: idx,
      currentQuestion: base,
      answered: false,
      selectedAnswer: '',
      isCorrect: false,
      hasNext: idx < n - 1,
      correctCount: this.recalcCorrectCountFromSnapshots(),
    };
    if (snap) {
      patch.currentQuestion = snap.qState || base;
      patch.answered = !!snap.answered;
      patch.selectedAnswer = snap.selectedAnswer != null ? snap.selectedAnswer : '';
      patch.isCorrect = !!snap.isCorrect;
    }
    this.setData(patch);
  },

  prevQuestion() {
    if (this.data.currentIndex <= 0) return;
    this.persistCurrentRoundSnapshot();
    this.applyRoundSnapshot(this.data.currentIndex - 1);
  },

  jumpNextQuestion() {
    const n = (this.data.questions || []).length;
    const i = this.data.currentIndex;
    if (i >= n - 1) {
      if (this.data.answered) this.finishQuizRound();
      else wx.showToast({ title: '最后一题，请先提交答案', icon: 'none' });
      return;
    }
    this.persistCurrentRoundSnapshot();
    this.applyRoundSnapshot(i + 1);
  },

  onLoad(options) {
    const bank =
      options && options.bank != null ? decodeURIComponent(String(options.bank)).trim() : '';
    if (!bank || !QUESTION_BANK[bank]) {
      this.setData({ loading: false });
      wx.showToast({ title: '题库参数无效', icon: 'none' });
      setTimeout(() => wx.navigateBack(), 400);
      return;
    }
    this._bankId = bank;
    const label = bankDisplayName(bank);
    const kp =
      options && options.kp != null ? decodeURIComponent(String(options.kp)).trim() : '';
    this._filterKp = String(kp).trim();
    const sub = this._filterKp ? `当前：${label} · ${this._filterKp}` : `当前：${label} · 本模块全部`;
    this.setData({ bankLabel: label, subTitle: sub });
    wx.setNavigationBarTitle({
      title: this._filterKp ? `${label} · 小考点` : label,
    });
    this.bootstrapQuestions();
  },

  bootstrapQuestions() {
    const bankId = this._bankId;
    let list = (QUESTION_BANK[bankId] || []).slice();
    list = list.sort(() => Math.random() - 0.5);
    const kp = this._filterKp;
    if (kp) {
      list = list.filter((q) => {
        const qk = String(q.knowledgeTag || q.knowledgePoint || '').trim();
        return qk === kp;
      });
    }
    const questions = prepareQuestionsList(list);
    if (!questions.length) {
      this.setData({
        loading: false,
        finished: false,
        questions: [],
        totalQuestions: 0,
        currentQuestion: null,
        progressDots: [],
      });
      this.initRoundSnapshots([]);
      return;
    }
    this.setData({
      loading: false,
      finished: false,
      questions,
      totalQuestions: questions.length,
      currentIndex: 0,
      currentQuestion: questions[0],
      progressDots: questions.map((_, i) => i),
      answered: false,
      selectedAnswer: '',
      isCorrect: false,
      hasNext: questions.length > 1,
      correctCount: 0,
    });
    this.initRoundSnapshots(questions);
  },

  selectOption(e) {
    if (this.data.answered) return;
    let key = e.currentTarget.dataset.key;
    if (!key) {
      const idx = Number(e.currentTarget.dataset.index);
      const opts = (this.data.currentQuestion && this.data.currentQuestion.options) || [];
      key = opts[idx] && opts[idx].key ? opts[idx].key : '';
    }
    if (!key) return;
    const q = this.data.currentQuestion;
    if (!isMultiQuestion(q)) {
      this.setData({ selectedAnswer: key });
      return;
    }
    const cur = normalizeAnswerLetters(this.data.selectedAnswer);
    const set = new Set(cur.match(/[A-Z]/g) || []);
    const k = String(key).toUpperCase().charAt(0);
    if (set.has(k)) set.delete(k);
    else set.add(k);
    const next = [...set].sort().join('');
    this.setData({ selectedAnswer: next });
  },

  submitAnswer() {
    const q = this.data.currentQuestion;
    let picked = '';
    let expected = '';
    if (isJudgeQuestion(q)) {
      picked = normalizeJudgeAnswer(this.data.selectedAnswer);
      expected = normalizeJudgeAnswer(q && q.answer);
      if (!picked) {
        wx.showToast({ title: '请先选择答案', icon: 'none' });
        return;
      }
    } else {
      picked = normalizeAnswerLetters(this.data.selectedAnswer);
      if (!picked) {
        wx.showToast({ title: '请先选择答案', icon: 'none' });
        return;
      }
      if (isMultiQuestion(q) && picked.length < 2) {
        wx.showToast({ title: '多选题请至少选择 2 个选项', icon: 'none' });
        return;
      }
      expected = normalizeAnswerLetters(q && q.answer);
    }
    const isCorrect = picked === expected;

    const todayKey = `study_${new Date().toISOString().slice(0, 10)}`;
    const todayData = wx.getStorageSync(todayKey) || { questions: 0 };
    todayData.questions += 1;
    wx.setStorageSync(todayKey, todayData);

    this.setData(
      {
        answered: true,
        isCorrect,
      },
      () => {
        this.persistCurrentRoundSnapshot();
      }
    );
    if (!isCorrect) this.addToWrongList(q);
    if (isCorrect) wx.vibrateShort({ type: 'light' });
  },

  nextQuestion() {
    if (!this.data.answered) return;
    const n = (this.data.questions || []).length;
    const i = this.data.currentIndex;
    if (i >= n - 1) {
      this.finishQuizRound();
      return;
    }
    this.persistCurrentRoundSnapshot();
    this.applyRoundSnapshot(i + 1);
  },

  addToWrongList(question) {
    if (!question) return;
    const merged = { ...question, markedAt: Date.now() };
    const wrongList = wx.getStorageSync('wrong_list') || [];
    const keyOf = (x) => (x && x.id ? String(x.id) : String((x && x.question) || ''));
    const k = keyOf(merged);
    const next = wrongList.filter((w) => keyOf(w) !== k);
    next.push(merged);
    wx.setStorageSync('wrong_list', next.slice(-200));
  },

  markWrong() {
    this.addToWrongList(this.data.currentQuestion);
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

  restartRound() {
    this.setData({ finished: false, correctCount: 0 });
    this.bootstrapQuestions();
  },

  goQuizTab() {
    wx.switchTab({ url: '/pages/quiz/quiz' });
  },

  goBack() {
    wx.navigateBack({ delta: 1 });
  },
});
