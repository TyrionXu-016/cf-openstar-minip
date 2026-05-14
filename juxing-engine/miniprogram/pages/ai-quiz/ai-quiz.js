// pages/ai-quiz/ai-quiz.js — AI 生成题独立练题（不经过底部「刷题」Tab）

const { enrichQuestionTypeFields } = require('../../utils/question-type-meta.js');
const { pushStudyStats } = require('../../utils/study-stats-sync.js');
const { getEssayScoringProfileForQuestion, getEssaySubmitMinChars, getEssayFullTextForParsing, getEssayAnswerCountdownSeconds } = require('../../utils/shenlun-essay-score.js');

/** 仅「AI 智能出题」跳转刷题时写入；错题本/拍题等专项仍用 quiz_source=ai 但无倒计时 */
const STORAGE_QUIZ_SESSION_AI_COUNTDOWN = 'quiz_session_ai_countdown';

/** 客观题（单选/多选/判断）：本场总倒计时 = 题数 × 每题秒数（上限见 MAX） */
const OBJECTIVE_SECONDS_PER_QUESTION = 90;
const MAX_OBJECTIVE_SESSION_SECONDS = 7200;

function formatQuizCountdown(sec) {
  const s = Math.max(0, Math.floor(Number(sec) || 0));
  const m = Math.floor(s / 60);
  const r = s % 60;
  const pad = (n) => (n < 10 ? `0${n}` : `${n}`);
  return `${pad(m)}:${pad(r)}`;
}

/** 多选题答案归一：如 "A,C" / "AC" -> "AC" */
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

function isEssayQuestion(q) {
  if (!q) return false;
  return q.questionType === 'essay' || q.type === 'essay';
}

/** 判断题标答归一为 A/B；无选择时返回空串 */
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

function normalizeEssayTextList(x) {
  if (x == null) return [];
  if (Array.isArray(x)) return x.map((s) => String(s).trim()).filter(Boolean);
  const s = String(x).trim();
  return s ? [s] : [];
}

/** 汇总 AI 返回的不足、遗漏与各维度改进建议，供解析区展示 */
function buildEssayWeakAnalysisItems(grade) {
  if (!grade || typeof grade !== 'object') return [];
  const out = [];
  normalizeEssayTextList(grade.weaknesses).forEach((t) => out.push({ tag: '不足', text: t }));
  normalizeEssayTextList(grade.keyMissedPoints).forEach((t) => out.push({ tag: '遗漏要点', text: t }));
  const dims = Array.isArray(grade.dimensions) ? grade.dimensions : [];
  dims.forEach((d) => {
    const name = (d && d.name) || '维度';
    normalizeEssayTextList(d.improvements).forEach((t) => out.push({ tag: name, text: t }));
  });
  if (!out.length) {
    dims.forEach((d) => {
      const ms = Number(d.maxScore) || 0;
      const sc = Number(d.score) || 0;
      const fb = d && d.feedback ? String(d.feedback).trim() : '';
      if (ms > 0 && sc < ms && fb) {
        out.push({ tag: d.name || '维度', text: `得分 ${sc}/${ms}：${fb}` });
      }
    });
  }
  return out;
}

/** 判断题：展示固定为「正确 / 错误」两项，与公考判断题一致 */
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

function prepareQuestionsList(list) {
  if (!Array.isArray(list)) return [];
  return list.map((q) => enrichQuestionTypeFields(prepareJudgeQuestion(q)));
}

Page({
  data: {
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
    sessionStats: { total: 0, correct: 0, rate: 0 },
    correctCount: 0,
    aiSource: true,
    essayGrading: false,
    essayGradeResult: null,
    essayScoreGate: null,
    essayMinChars: 40,
    essayCharCount: 0,
    quizTimerVisible: false,
    quizRemainSec: null,
    quizTimerLabel: '',
    quizTimerFmt: '',
    quizTimerUrgent: false,
    aiObjectiveBatchMode: false,
    aiBatchAllFilled: false,
    aiBatchReviewMode: false,
  },

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
      if (s && s.answered && !s.essayGrading && s.isCorrect) c += 1;
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
      essayGrading: !!this.data.essayGrading,
      essayGradeResult: this.data.essayGradeResult,
      essayCharCount: Number(this.data.essayCharCount) || 0,
      qState: this.cloneQuestionForSnapshot(cq),
    };
    const correctCount = this.recalcCorrectCountFromSnapshots();
    if (correctCount !== this.data.correctCount) {
      this.setData({ correctCount });
    }
    this.touchAiBatchAllFilled();
  },

  touchAiBatchAllFilled() {
    if (!this.data.aiObjectiveBatchMode) return;
    const f = this.computeAiBatchAllFilled();
    if (f !== this.data.aiBatchAllFilled) {
      this.setData({ aiBatchAllFilled: f });
    }
  },

  computeAiBatchAllFilled() {
    const questions = this.data.questions || [];
    const n = questions.length;
    const snaps = this._roundSnapshots || [];
    const cur = this.data.currentIndex;
    for (let i = 0; i < n; i++) {
      const q = questions[i];
      if (isEssayQuestion(q)) return false;
      let raw = '';
      if (i === cur) {
        const live = this.data.selectedAnswer;
        raw =
          live != null && String(live).trim() !== ''
            ? live
            : snaps[i] && snaps[i].selectedAnswer != null
              ? snaps[i].selectedAnswer
              : '';
      } else {
        raw = snaps[i] && snaps[i].selectedAnswer != null ? snaps[i].selectedAnswer : '';
      }
      if (isJudgeQuestion(q)) {
        if (!normalizeJudgeAnswer(raw)) return false;
      } else {
        const p = normalizeAnswerLetters(raw);
        if (!p) return false;
        if (isMultiQuestion(q) && p.length < 2) return false;
      }
    }
    return n > 0;
  },

  validateObjectivePick(q, rawSel) {
    if (!q || isEssayQuestion(q)) return { ok: false, msg: '题型不支持' };
    let picked = '';
    let expected = '';
    if (isJudgeQuestion(q)) {
      picked = normalizeJudgeAnswer(rawSel);
      expected = normalizeJudgeAnswer(q.answer);
      if (!picked) return { ok: false, msg: '判断题需选择「正确」或「错误」' };
    } else {
      picked = normalizeAnswerLetters(rawSel);
      if (!picked) return { ok: false, msg: '请选择答案' };
      if (isMultiQuestion(q) && picked.length < 2) {
        return { ok: false, msg: '多选题请至少选择 2 个选项' };
      }
      expected = normalizeAnswerLetters(q.answer);
    }
    const isCorrect = picked === expected;
    return { ok: true, picked, expected, isCorrect };
  },

  submitAiBatchAll() {
    if (!this.data.aiObjectiveBatchMode || this.data.essayGrading) return;
    this.persistCurrentRoundSnapshot();
    const questions = this.data.questions || [];
    const n = questions.length;
    const snaps = this._roundSnapshots || [];
    if (!this._roundSnapshots || this._roundSnapshots.length !== n) {
      wx.showToast({ title: '题目状态异常', icon: 'none' });
      return;
    }
    for (let i = 0; i < n; i++) {
      const q = questions[i];
      const raw = snaps[i] && snaps[i].selectedAnswer != null ? snaps[i].selectedAnswer : '';
      const v = this.validateObjectivePick(q, raw);
      if (!v.ok) {
        wx.showToast({ title: `第 ${i + 1} 题：${v.msg}`, icon: 'none', duration: 2600 });
        return;
      }
    }

    const todayKey = `study_${new Date().toISOString().slice(0, 10)}`;
    const todayData = wx.getStorageSync(todayKey) || { questions: 0 };

    for (let i = 0; i < n; i++) {
      const q = questions[i];
      const raw = snaps[i] && snaps[i].selectedAnswer != null ? snaps[i].selectedAnswer : '';
      const v = this.validateObjectivePick(q, raw);
      todayData.questions += 1;
      if (!v.isCorrect) {
        this.addToWrongList(q);
      }
      this._roundSnapshots[i] = {
        answered: true,
        selectedAnswer: v.picked,
        isCorrect: v.isCorrect,
        essayGrading: false,
        essayGradeResult: null,
        essayCharCount: 0,
        qState: this.cloneQuestionForSnapshot(q),
      };
    }
    wx.setStorageSync(todayKey, todayData);

    const correctCount = this.recalcCorrectCountFromSnapshots();
    if (correctCount > 0) {
      wx.vibrateShort({ type: 'light' });
    }
    this.setData(
      {
        correctCount,
        aiBatchAllFilled: true,
        aiObjectiveBatchMode: false,
        aiBatchReviewMode: true,
      },
      () => {
        this.applyRoundSnapshot(0);
      }
    );
  },

  summarizeRoundForFinish(options = {}) {
    if (!options.skipPersist) {
      this.persistCurrentRoundSnapshot();
    }
    const questions = this.data.questions || [];
    const n = questions.length;
    const snaps = this._roundSnapshots || [];
    let submitted = 0;
    let correct = 0;
    for (let j = 0; j < n; j++) {
      const s = snaps[j];
      if (s && s.answered && !s.essayGrading) {
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

  finishQuizRound(options = {}) {
    const summary = this.summarizeRoundForFinish({ skipPersist: !!options.skipPersist });
    const totalData = wx.getStorageSync('study_total') || { total: 0, correct: 0, days: 0, essay: 0 };
    totalData.total += summary.submitted;
    totalData.correct += summary.correct;
    totalData.days = totalData.days || 0;
    wx.setStorageSync('study_total', totalData);
    pushStudyStats();

    this.clearQuizAnswerTimer();
    this.setData({
      finished: true,
      currentQuestion: null,
      essayScoreGate: null,
      essayMinChars: 0,
      essayCharCount: 0,
      quizTimerVisible: false,
      quizRemainSec: null,
      quizTimerLabel: '',
      quizTimerFmt: '',
      quizTimerUrgent: false,
      aiObjectiveBatchMode: false,
      aiBatchAllFilled: false,
      aiBatchReviewMode: false,
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
      essayGrading: false,
      essayGradeResult: null,
      essayCharCount: 0,
      hasNext: idx < n - 1,
      correctCount: this.recalcCorrectCountFromSnapshots(),
    };
    if (snap) {
      patch.currentQuestion = snap.qState || base;
      patch.answered = !!snap.answered;
      patch.selectedAnswer = snap.selectedAnswer != null ? snap.selectedAnswer : '';
      patch.isCorrect = !!snap.isCorrect;
      patch.essayGrading = !!snap.essayGrading;
      patch.essayGradeResult = snap.essayGradeResult;
      patch.essayCharCount =
        snap.essayCharCount != null
          ? snap.essayCharCount
          : String(patch.selectedAnswer || '').trim().length;
    }
    this.setData(patch, () => {
      this.updateEssayScoreGate();
      this.setupQuizAnswerCountdown();
      this.touchAiBatchAllFilled();
    });
  },

  prevQuestion() {
    if (this.data.essayGrading) {
      wx.showToast({ title: '评分进行中，请稍候', icon: 'none' });
      return;
    }
    if (this.data.currentIndex <= 0) return;
    this.persistCurrentRoundSnapshot();
    this.applyRoundSnapshot(this.data.currentIndex - 1);
  },

  jumpNextQuestion() {
    if (this.data.essayGrading) {
      wx.showToast({ title: '评分进行中，请稍候', icon: 'none' });
      return;
    }
    const n = (this.data.questions || []).length;
    const i = this.data.currentIndex;
    if (i >= n - 1) {
      if (this.data.answered) this.finishQuizRound();
      else if (this.data.aiObjectiveBatchMode) {
        wx.showToast({ title: '请使用「提交全部答案」交卷', icon: 'none' });
      } else wx.showToast({ title: '最后一题，请先提交答案', icon: 'none' });
      return;
    }
    this.persistCurrentRoundSnapshot();
    this.applyRoundSnapshot(i + 1);
  },

  onUnload() {
    this.clearQuizAnswerTimer();
  },

  onLoad() {
    this.bootstrapFromAiStorage();
  },

  bootstrapFromAiStorage() {
    const list = wx.getStorageSync('ai_generated_questions') || [];
    if (!list.length) {
      this.setData({ loading: false });
      wx.showToast({ title: '暂无题目，请返回生成', icon: 'none' });
      setTimeout(() => wx.navigateBack(), 1600);
      return;
    }

    let enableAnswerCountdown = false;
    try {
      enableAnswerCountdown = wx.getStorageSync(STORAGE_QUIZ_SESSION_AI_COUNTDOWN) === '1';
      wx.removeStorageSync(STORAGE_QUIZ_SESSION_AI_COUNTDOWN);
    } catch (e) {}
    this._quizEnableAnswerCountdown = enableAnswerCountdown;

    this.clearQuizAnswerTimer();
    this._quizObjectiveRemain = null;
    const questions = prepareQuestionsList(list.slice());
    const aiObjectiveBatchMode =
      questions.length > 0 && questions.every((qq) => !isEssayQuestion(qq));
    this.setData(
      {
        loading: false,
        finished: false,
        questions,
        totalQuestions: questions.length,
        currentIndex: 0,
        correctCount: 0,
        progressDots: questions.map((_, i) => i),
        currentQuestion: questions[0] || null,
        answered: false,
        selectedAnswer: '',
        hasNext: questions.length > 1,
        essayGrading: false,
        essayGradeResult: null,
        aiSource: true,
        aiObjectiveBatchMode,
        aiBatchAllFilled: false,
        aiBatchReviewMode: false,
      },
      () => {
        this.initRoundSnapshots(questions);
        this.updateEssayScoreGate();
        this.setupQuizAnswerCountdown();
        this.touchAiBatchAllFilled();
      }
    );
  },

  onEssayAnswerInput(e) {
    if (this.data.answered || this.data.essayGrading) return;
    const v = e.detail.value || '';
    this.setData({
      selectedAnswer: v,
      essayCharCount: String(v).trim().length,
    });
  },

  updateEssayScoreGate() {
    const q = this.data.currentQuestion;
    if (!isEssayQuestion(q)) {
      this.setData({ essayScoreGate: null, essayMinChars: 0, essayCharCount: 0 });
      return;
    }
    const p = getEssayScoringProfileForQuestion(q);
    const minChars = getEssaySubmitMinChars(p);
    const essayCharCount = String(this.data.selectedAnswer || '').trim().length;
    this.setData({
      essayScoreGate: {
        major: p.major,
        maxTotal: p.maxTotal,
        passScore: p.passScore,
        stemOverridesProfile:
          p.stemDeclaredPoints != null && p.stemDeclaredPoints !== p.profileDefaultTotal,
        stemDeclaredPoints: p.stemDeclaredPoints,
        majorResolvedFromStem:
          !!(p.majorFromStem && p.majorFromKnowledge && p.majorFromStem !== p.majorFromKnowledge),
      },
      essayMinChars: minChars,
      essayCharCount,
    });
  },

  clearQuizAnswerTimer() {
    if (this._quizTickTimer) {
      clearInterval(this._quizTickTimer);
      this._quizTickTimer = null;
    }
  },

  setupQuizAnswerCountdown() {
    this.clearQuizAnswerTimer();
    const questions = this.data.questions || [];
    if (!questions.length || this.data.loading || this.data.finished || !this.data.currentQuestion) {
      this.setData({
        quizTimerVisible: false,
        quizRemainSec: null,
        quizTimerLabel: '',
        quizTimerFmt: '',
        quizTimerUrgent: false,
      });
      return;
    }

    // 仅「AI 智能出题」进入本场时启用倒计时；本地题库、错题单练、拍题等不限时
    if (!this.data.aiSource || !this._quizEnableAnswerCountdown) {
      this._quizObjectiveRemain = null;
      this.setData({
        quizTimerVisible: false,
        quizRemainSec: null,
        quizTimerLabel: '',
        quizTimerFmt: '',
        quizTimerUrgent: false,
      });
      return;
    }

    const pureObj = questions.every((q) => !isEssayQuestion(q));
    this._quizSessionPureObjective = pureObj;

    let remain;
    let label;
    if (pureObj) {
      if (this._quizObjectiveRemain == null) {
        const raw = questions.length * OBJECTIVE_SECONDS_PER_QUESTION;
        this._quizObjectiveRemain = Math.min(
          MAX_OBJECTIVE_SESSION_SECONDS,
          Math.max(OBJECTIVE_SECONDS_PER_QUESTION, raw),
        );
      }
      remain = this._quizObjectiveRemain;
      label = `本场客观题 · ${questions.length} 题`;
    } else {
      const q = this.data.currentQuestion;
      if (isEssayQuestion(q)) {
        remain = getEssayAnswerCountdownSeconds(q);
        const p = getEssayScoringProfileForQuestion(q);
        label = `${p.major} · 建议作答`;
      } else {
        remain = OBJECTIVE_SECONDS_PER_QUESTION;
        label = '本题客观题';
      }
    }

    this._quizZeroToastShown = false;
    this.setData({
      quizTimerVisible: true,
      quizRemainSec: remain,
      quizTimerLabel: label,
      quizTimerFmt: formatQuizCountdown(remain),
      quizTimerUrgent: remain <= 30 && remain > 0,
    });

    this._quizTickTimer = setInterval(() => {
      if (this.data.finished || !this.data.currentQuestion) {
        this.clearQuizAnswerTimer();
        return;
      }
      if (this.data.answered || this.data.essayGrading) return;

      let sec = this.data.quizRemainSec;
      if (sec == null || sec <= 0) return;

      sec -= 1;
      this.setData({
        quizRemainSec: sec,
        quizTimerFmt: formatQuizCountdown(sec),
        quizTimerUrgent: sec <= 30 && sec > 0,
      });
      if (this._quizSessionPureObjective) {
        this._quizObjectiveRemain = sec;
      }
      if (sec === 0 && !this._quizZeroToastShown) {
        this._quizZeroToastShown = true;
        wx.showToast({ title: '答题时间到', icon: 'none', duration: 2000 });
      }
    }, 1000);
  },

  selectOption(e) {
    if (this.data.answered || this.data.essayGrading) return;
    if (isEssayQuestion(this.data.currentQuestion)) return;
    let key = e.currentTarget.dataset.key;
    if (!key) {
      const idx = Number(e.currentTarget.dataset.index);
      const list = (this.data.currentQuestion && this.data.currentQuestion.options) || [];
      key = list[idx] && list[idx].key ? list[idx].key : '';
    }
    if (!key) return;
    const q = this.data.currentQuestion;
    if (!isMultiQuestion(q)) {
      this.setData({ selectedAnswer: key }, () => this.touchAiBatchAllFilled());
      return;
    }
    const cur = normalizeAnswerLetters(this.data.selectedAnswer);
    const set = new Set(cur.match(/[A-Z]/g) || []);
    const k = String(key).toUpperCase().charAt(0);
    if (set.has(k)) {
      set.delete(k);
    } else {
      set.add(k);
    }
    const next = [...set].sort().join('');
    this.setData({ selectedAnswer: next }, () => this.touchAiBatchAllFilled());
  },

  getMockEssayGradeResult(answerText, profile) {
    const criteria = profile.scoringCriteria || [];
    const maxTotal = profile.maxTotal;
    const sumMax =
      criteria.reduce((s, x) => s + (Number(x && x.score) || 0), 0) || maxTotal;
    const len = String(answerText || '').length;
    const pseudo100 = Math.min(Math.floor(len / 12) + 48, 88);
    const totalScore = Math.min(maxTotal, Math.max(0, Math.round((pseudo100 / 100) * maxTotal)));

    let acc = 0;
    const dimensions = criteria.map((c, i) => {
      const dimMax = Number(c.score) || 0;
      let sc;
      if (i === criteria.length - 1) {
        sc = Math.min(dimMax, Math.max(0, totalScore - acc));
      } else {
        sc = Math.min(dimMax, Math.round((totalScore * dimMax) / Math.max(1, sumMax)));
      }
      acc += sc;
      return {
        name: c.dimension,
        maxScore: dimMax,
        score: sc,
        feedback: '要点与材料结合情况需结合题干具体判断。',
        improvements: ['联网后使用云函数批改可获得更贴近标准的得分'],
      };
    });

    const passLine = profile.passScore;
    const hi = Math.min(maxTotal, Math.round(maxTotal * 0.85));
    let grade = '待改进';
    if (totalScore >= hi) grade = '优秀';
    else if (totalScore >= passLine) grade = '良好';
    else if (totalScore >= Math.max(0, Math.floor(maxTotal * 0.45))) grade = '合格';

    return {
      totalScore,
      grade,
      overallFeedback:
        '（离线示例评分）建议联网使用云函数批改以获得更准确的多维度得分与评语。',
      dimensions: dimensions.length
        ? dimensions
        : [
            {
              name: '得分',
              maxScore: maxTotal,
              score: totalScore,
              feedback: '离线模式下仅作占位展示。',
              improvements: [],
            },
          ],
      strengths: ['作答结构可见'],
      weaknesses: ['论据与政策联系可加强', '对材料要点的展开可更充分'],
      keyMissedPoints: ['建议对照题干逐条自检是否答全各子问题'],
    };
  },

  normalizeEssayGradeFromCloud(raw, maxTotal) {
    if (!raw || typeof raw !== 'object') return null;
    if (raw.success === false) return null;
    const ts = Number(raw.totalScore);
    if (!Number.isFinite(ts)) return null;
    const cap = Number.isFinite(maxTotal) && maxTotal > 0 ? maxTotal : 100;
    const totalScore = Math.min(cap, Math.max(0, ts));
    const dimensions = Array.isArray(raw.dimensions)
      ? raw.dimensions.map((d) => {
          const ms = Number(d.maxScore);
          const sc = Number(d.score);
          const dimCap = Number.isFinite(ms) && ms > 0 ? ms : cap;
          return {
            ...d,
            name: d.name || d.dimension || '',
            maxScore: dimCap,
            score: Number.isFinite(sc) ? Math.min(dimCap, Math.max(0, sc)) : 0,
            improvements: normalizeEssayTextList(d.improvements),
          };
        })
      : [];
    return {
      totalScore,
      grade: raw.grade || '',
      overallFeedback: raw.overallFeedback || '',
      dimensions,
      strengths: normalizeEssayTextList(raw.strengths),
      weaknesses: normalizeEssayTextList(raw.weaknesses),
      keyMissedPoints: normalizeEssayTextList(raw.keyMissedPoints),
    };
  },

  finalizeEssayGradeForUi(grade) {
    if (!grade || typeof grade !== 'object') return null;
    const dimensions = Array.isArray(grade.dimensions)
      ? grade.dimensions.map((d) => ({
          ...d,
          improvements: normalizeEssayTextList(d.improvements),
        }))
      : [];
    const g = {
      ...grade,
      dimensions,
      strengths: normalizeEssayTextList(grade.strengths),
      weaknesses: normalizeEssayTextList(grade.weaknesses),
      keyMissedPoints: normalizeEssayTextList(grade.keyMissedPoints),
    };
    g.weakAnalysisItems = buildEssayWeakAnalysisItems(g);
    return g;
  },

  async submitEssayWithAI(q, answerText) {
    const profile = getEssayScoringProfileForQuestion(q);
    this.setData({ essayGrading: true });
    let grade = null;
    try {
      if (wx.cloud && typeof wx.cloud.callFunction === 'function') {
        const res = await wx.cloud.callFunction({
          name: 'gradeEssay',
          data: {
            question: getEssayFullTextForParsing(q) || (q && q.question) || '',
            answer: answerText,
            scoringCriteria: profile.scoringCriteria,
            wordLimit: profile.wordLimit,
          },
        });
        const r = res && res.result ? res.result : {};
        grade =
          this.normalizeEssayGradeFromCloud(r, profile.maxTotal) ||
          this.getMockEssayGradeResult(answerText, profile);
      } else {
        grade = this.getMockEssayGradeResult(answerText, profile);
      }
    } catch (err) {
      console.error('申论 AI 评分失败:', err);
      grade = this.getMockEssayGradeResult(answerText, profile);
    }

    const score = grade.totalScore;
    const pass = score >= profile.passScore;

    const todayKey = `study_${new Date().toISOString().slice(0, 10)}`;
    const todayData = wx.getStorageSync(todayKey) || { questions: 0 };
    todayData.questions += 1;
    wx.setStorageSync(todayKey, todayData);

    const gradeForUi = this.finalizeEssayGradeForUi(grade);

    const extra = {
      userAnswer: answerText,
      essayGrade: gradeForUi,
      essayScore: score,
      quizEssayAuto: true,
    };

    if (!pass) {
      this.addToWrongList(q, extra);
      this.addToFavoriteAutoFromLowEssayScore(q, extra);
    }

    this.setData(
      {
        essayGrading: false,
        answered: true,
        isCorrect: pass,
        essayGradeResult: gradeForUi,
        currentQuestion: { ...q, ...extra },
      },
      () => {
        this.persistCurrentRoundSnapshot();
        setTimeout(() => {
          wx.pageScrollTo({ selector: '#essay-grade-anchor', duration: 280 });
        }, 80);
      }
    );

    if (pass) {
      wx.vibrateShort({ type: 'light' });
    } else if (!wx.getStorageSync('settings_quiet_cloud_fallback')) {
      wx.showToast({
        title: `得分${score}/${profile.maxTotal}，未达${profile.passScore}分，已加入错题与收藏`,
        icon: 'none',
        duration: 2200,
      });
    }
  },

  submitAnswer() {
    const q = this.data.currentQuestion;
    if (this.data.aiObjectiveBatchMode) {
      wx.showToast({ title: '请使用「提交全部答案」统一交卷', icon: 'none' });
      return;
    }
    let picked = '';
    let expected = '';

    if (isEssayQuestion(q)) {
      const profile = getEssayScoringProfileForQuestion(q);
      const minChars = getEssaySubmitMinChars(profile);
      const text = String(this.data.selectedAnswer || '').trim();
      const len = text.length;
      if (len < minChars) {
        wx.showToast({
          title: `字数不足：已写${len}字，至少${minChars}字后可提交`,
          icon: 'none',
          duration: 3200,
        });
        return;
      }
      if (this.data.essayGrading) return;
      this.submitEssayWithAI(q, text);
      return;
    }

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

    // 答错自动进入错题本
    if (!isCorrect) {
      this.addToWrongList(this.data.currentQuestion);
    }

    if (isCorrect) {
      wx.vibrateShort({ type: 'light' });
    }
  },

  nextQuestion() {
    if (this.data.essayGrading) return;
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

  markWrong() {
    this.addToWrongList(this.data.currentQuestion);
    wx.showToast({ title: '已标记为错题', icon: 'success' });
  },

  addToWrongList(question, extra = {}) {
    if (!question) return;
    const merged = { ...question, ...extra, markedAt: Date.now() };
    const wrongList = wx.getStorageSync('wrong_list') || [];
    const keyOf = (x) => (x && x.id ? String(x.id) : String((x && x.question) || ''));
    const k = keyOf(merged);
    const next = wrongList.filter((w) => keyOf(w) !== k);
    next.push(merged);
    wx.setStorageSync('wrong_list', next.slice(-200));
  },

  /** 申论得分偏低时自动收藏（无二次弹窗；同题仅保留一条自动收藏） */
  addToFavoriteAutoFromLowEssayScore(question, extra = {}) {
    if (!question) return;
    const merged = {
      ...question,
      ...extra,
      favoritedAt: Date.now(),
      autoFavoriteByLowEssayScore: true,
    };
    const list = wx.getStorageSync('favorite_list') || [];
    const sameKey = (a, b) => {
      if (a.id != null && b.id != null) return a.id === b.id;
      return String(a.question || '') === String(b.question || '');
    };
    const filtered = list.filter((f) => !(f.autoFavoriteByLowEssayScore && sameKey(f, merged)));
    filtered.unshift(merged);
    wx.setStorageSync('favorite_list', filtered.slice(0, 200));
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
    const list = wx.getStorageSync('ai_generated_questions') || [];
    if (!list.length) {
      wx.showToast({ title: '暂无题目，请返回出题页重新生成', icon: 'none' });
      return;
    }
    let enableAnswerCountdown = false;
    try {
      enableAnswerCountdown = wx.getStorageSync(STORAGE_QUIZ_SESSION_AI_COUNTDOWN) === '1';
      wx.removeStorageSync(STORAGE_QUIZ_SESSION_AI_COUNTDOWN);
    } catch (e) {
      /* ignore */
    }
    this._quizEnableAnswerCountdown = enableAnswerCountdown;

    const questions = prepareQuestionsList(list.slice().sort(() => Math.random() - 0.5));
    const aiObjectiveBatchMode =
      questions.length > 0 && questions.every((qq) => !isEssayQuestion(qq));
    this.clearQuizAnswerTimer();
    this._quizObjectiveRemain = null;
    this.setData(
      {
        finished: false,
        questions,
        totalQuestions: questions.length,
        currentIndex: 0,
        correctCount: 0,
        progressDots: questions.map((_, i) => i),
        currentQuestion: questions[0] || null,
        answered: false,
        selectedAnswer: '',
        hasNext: questions.length > 1,
        essayGrading: false,
        essayGradeResult: null,
        aiSource: true,
        aiObjectiveBatchMode,
        aiBatchAllFilled: false,
        aiBatchReviewMode: false,
      },
      () => {
        this.initRoundSnapshots(questions);
        this.updateEssayScoreGate();
        this.setupQuizAnswerCountdown();
        this.touchAiBatchAllFilled();
      }
    );
  },

  goHome() {
    wx.navigateBack({ delta: 1 });
  },

  goQuizTab() {
    wx.switchTab({ url: '/pages/quiz/quiz' });
  },
});
