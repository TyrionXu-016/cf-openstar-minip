// pages/index/index.js
const { getCategoryCounts, getAllQuestions, CATEGORY_KEYS } = require('../../data/question-bank.js');
const { pullStudyStats, pushStudyStats, getStudentPhone } = require('../../utils/study-stats-sync.js');
const { getKnowledgeSubTagsForBankCategory } = require('../../utils/exam-taxonomy.js');
const app = getApp();

/** 行测 / 公基 / 申论分库：选考点后进独立练题页，不跳底部「刷题」Tab */
const BANK_FOCUS_IDS = new Set(CATEGORY_KEYS);

function shouldUseBankFocusWindow(bankId) {
  return BANK_FOCUS_IDS.has(String(bankId || '').trim());
}

function navigateToBankFocus(bankId, kp) {
  const b = String(bankId || '').trim();
  if (!b) return;
  const k = kp != null ? String(kp).trim() : '';
  const qs = [`bank=${encodeURIComponent(b)}`];
  if (k) qs.push(`kp=${encodeURIComponent(k)}`);
  wx.navigateTo({ url: `/pages/quiz-focus/quiz-focus?${qs.join('&')}` });
}

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
    showGoalReminderBanner: false,
    goalReminderShortfall: 0,
    stats: [
      { key: 'total', icon: '📚', value: '0', label: '累计刷题' },
      { key: 'rate', icon: '🎯', value: '0%', label: '正确率' },
      { key: 'days', icon: '🔥', value: '0', label: '连续天数' },
      { key: 'essay', icon: '📝', value: '0', label: '申论篇数' },
    ],
    xingceBankCategories: [],
    gongjiBankCategories: [],
    shenlunBankCategories: [],
    recommendQuestion: null,
    kpModalVisible: false,
    kpModalTitle: '',
    kpModalCategoryId: '',
    kpModalSubs: [],
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
      xingceBankCategories: [
        { id: 'lx', icon: '🧩', name: '逻辑推理', count: counts.lx, bgColor: 'rgba(26,31,94,0.1)' },
        { id: 'sl', icon: '🔢', name: '数量关系', count: counts.sl, bgColor: 'rgba(245,166,35,0.1)' },
        { id: 'yc', icon: '📖', name: '言语理解', count: counts.yc, bgColor: 'rgba(7,193,96,0.1)' },
        { id: 'cz', icon: '📊', name: '资料分析', count: counts.cz, bgColor: 'rgba(100,100,255,0.1)' },
        { id: 'cg', icon: '⚖️', name: '常识判断', count: counts.cg, bgColor: 'rgba(238,10,36,0.1)' },
      ],
      gongjiBankCategories: [
        { id: 'gj_law', icon: '⚖️', name: '法律', count: counts.gj_law, bgColor: 'rgba(30,136,229,0.1)' },
        { id: 'gj_pol', icon: '🏛️', name: '政治', count: counts.gj_pol, bgColor: 'rgba(211,47,47,0.08)' },
        { id: 'gj_marx', icon: '📕', name: '马克思主义', count: counts.gj_marx, bgColor: 'rgba(123,31,162,0.08)' },
        { id: 'gj_party', icon: '⭐', name: '党史党建', count: counts.gj_party, bgColor: 'rgba(230,81,0,0.1)' },
        { id: 'gj_econ', icon: '💹', name: '经济', count: counts.gj_econ, bgColor: 'rgba(0,137,123,0.1)' },
        { id: 'gj_human', icon: '🏺', name: '人文与历史', count: counts.gj_human, bgColor: 'rgba(121,85,72,0.1)' },
        { id: 'gj_tech', icon: '🔬', name: '科技与生活', count: counts.gj_tech, bgColor: 'rgba(0,151,167,0.1)' },
        { id: 'gj_doc', icon: '📋', name: '公文', count: counts.gj_doc, bgColor: 'rgba(93,64,55,0.1)' },
      ],
      shenlunBankCategories: [
        { id: 'sl_guina', icon: '📝', name: '归纳概括', count: counts.sl_guina, bgColor: 'rgba(255,153,102,0.12)' },
        { id: 'sl_zonghe', icon: '🔍', name: '综合分析', count: counts.sl_zonghe, bgColor: 'rgba(129,212,250,0.15)' },
        { id: 'sl_duice', icon: '💡', name: '提出对策', count: counts.sl_duice, bgColor: 'rgba(165,214,167,0.2)' },
        { id: 'sl_gongwen', icon: '📋', name: '公文写作', count: counts.sl_gongwen, bgColor: 'rgba(206,147,216,0.15)' },
        { id: 'sl_zuowen', icon: '✍️', name: '大作文', count: counts.sl_zuowen, bgColor: 'rgba(255,183,77,0.15)' },
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
    const savedGoal = Number(wx.getStorageSync('settings_daily_goal_questions'));
    const dailyGoal = [10, 20, 30, 40, 50].includes(savedGoal) ? savedGoal : 30;

    const apply = () => {
      const todayData = wx.getStorageSync(`study_${todayKey}`) || { questions: 0 };
      const totalData = wx.getStorageSync('study_total') || {
        total: 0, correct: 0, days: 0, essay: 0
      };

      const correctRate = totalData.total > 0
        ? Math.round(totalData.correct / totalData.total * 100)
        : 0;

      const q = Number(todayData.questions) || 0;
      const progressWidth = Math.min(
        Math.round(q / dailyGoal * 100), 100
      );

      this.setData({
        todayQuestions: q,
        dailyGoal,
        progressWidth,
        stats: [
          { key: 'total', icon: '📚', value: totalData.total.toString(), label: '累计刷题' },
          { key: 'rate', icon: '🎯', value: correctRate + '%', label: '正确率' },
          { key: 'days', icon: '🔥', value: totalData.days.toString(), label: '连续天数' },
          { key: 'essay', icon: '📝', value: totalData.essay.toString(), label: '申论篇数' },
        ]
      }, () => {
        this.syncGoalReminderBanner(todayKey, q, dailyGoal);
      });
    };

    apply();
    if (getStudentPhone()) {
      pullStudyStats(() => {
        apply();
        pushStudyStats(() => apply());
      });
    }
  },

  syncGoalReminderBanner(todayKey, todayQuestions, dailyGoal) {
    const reminderOn = !!wx.getStorageSync('settings_daily_goal_reminder');
    const dismissed = wx.getStorageSync('goal_reminder_banner_dismissed_date') === todayKey;
    const goal = Number(dailyGoal) || 30;
    const q = Number(todayQuestions) || 0;
    const met = q >= goal;
    const show = reminderOn && !dismissed && !met;
    const goalReminderShortfall = met ? 0 : Math.max(goal - q, 0);
    this.setData({ showGoalReminderBanner: show, goalReminderShortfall });
  },

  dismissGoalReminderBanner() {
    const todayKey = new Date().toISOString().slice(0, 10);
    try {
      wx.setStorageSync('goal_reminder_banner_dismissed_date', todayKey);
    } catch (e) {
      /* ignore */
    }
    this.setData({ showGoalReminderBanner: false });
  },

  goQuiz() {
    wx.switchTab({ url: '/pages/quiz/quiz' });
  },

  openBankKnowledge(e) {
    const ds = e.currentTarget.dataset || {};
    const id = (ds.bankId != null ? ds.bankId : ds.id) || '';
    const name = String(ds.bankName != null ? ds.bankName : ds.name || '').trim();
    if (!id) return;
    const pack = getKnowledgeSubTagsForBankCategory(id);
    if (!pack || !pack.subs || !pack.subs.length) {
      this.goCategoryDirect(id);
      return;
    }
    this.setData({
      kpModalVisible: true,
      kpModalCategoryId: id,
      kpModalTitle: name ? `${name} · 小知识点` : '小知识点',
      kpModalSubs: pack.subs,
    });
  },

  closeKpModal() {
    this.setData({ kpModalVisible: false });
  },

  confirmKpModal(e) {
    const action = e.currentTarget.dataset.action;
    const id = this.data.kpModalCategoryId;
    if (!id) {
      this.closeKpModal();
      return;
    }
    let kp = '';
    if (action === 'kp') {
      const ds = e.currentTarget.dataset || {};
      const rawIx = ds.kpIndex != null ? ds.kpIndex : ds.kpindex != null ? ds.kpindex : ds.idx;
      const idx = rawIx === '' || rawIx == null ? NaN : Number(rawIx);
      const subs = this.data.kpModalSubs || [];
      const row = subs[Number.isFinite(idx) && idx >= 0 && idx < subs.length ? idx : -1];
      kp = row && row.value != null ? String(row.value).trim() : '';
    }
    this.setData({ kpModalVisible: false });

    if (shouldUseBankFocusWindow(id)) {
      navigateToBankFocus(id, kp);
      return;
    }

    try {
      wx.setStorageSync('quiz_entry_payload', JSON.stringify({ category: id, kp }));
      wx.removeStorageSync('quiz_pending_category');
      wx.removeStorageSync('quiz_pending_apply_kp');
      wx.removeStorageSync('quiz_pending_knowledge');
    } catch (err) {
      /* ignore */
    }
    wx.switchTab({ url: '/pages/quiz/quiz' });
  },

  goCategoryDirect(id) {
    if (!id) return;
    if (shouldUseBankFocusWindow(id)) {
      navigateToBankFocus(id, '');
      return;
    }
    try {
      wx.setStorageSync('quiz_entry_payload', JSON.stringify({ category: id, kp: '' }));
      wx.removeStorageSync('quiz_pending_category');
      wx.removeStorageSync('quiz_pending_apply_kp');
      wx.removeStorageSync('quiz_pending_knowledge');
    } catch (err) {
      /* ignore */
    }
    wx.switchTab({ url: '/pages/quiz/quiz' });
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

  noop() {},
});
