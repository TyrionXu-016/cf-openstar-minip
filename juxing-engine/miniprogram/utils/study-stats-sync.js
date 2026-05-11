const { request } = require('./http.js');

function getStudentPhone() {
  const history = wx.getStorageSync('student_history') || [];
  const fromHistory = history[0] && history[0].phone ? String(history[0].phone) : '';
  return fromHistory || wx.getStorageSync('favorite_student_phone') || '';
}

function todayIsoDate() {
  return new Date().toISOString().slice(0, 10);
}

function readLocalPayload() {
  const todayDate = todayIsoDate();
  const todayKey = `study_${todayDate}`;
  const todayData = wx.getStorageSync(todayKey) || { questions: 0 };
  const total = wx.getStorageSync('study_total') || { total: 0, correct: 0, days: 0, essay: 0 };
  return {
    total: Number(total.total) || 0,
    correct: Number(total.correct) || 0,
    days: Number(total.days) || 0,
    essay: Number(total.essay) || 0,
    todayDate,
    todayQuestions: Number(todayData.questions) || 0,
  };
}

function mergeRemoteIntoStorage(remote) {
  if (!remote || typeof remote !== 'object') return;
  const local = wx.getStorageSync('study_total') || { total: 0, correct: 0, days: 0, essay: 0 };
  const merged = {
    total: Math.max(Number(local.total) || 0, Number(remote.total) || 0),
    correct: Math.max(Number(local.correct) || 0, Number(remote.correct) || 0),
    days: Math.max(Number(local.days) || 0, Number(remote.days) || 0),
    essay: Math.max(Number(local.essay) || 0, Number(remote.essay) || 0),
  };
  if (merged.correct > merged.total) merged.correct = merged.total;
  wx.setStorageSync('study_total', merged);

  const clientToday = todayIsoDate();
  const rdate = String(remote.todayDate || '').slice(0, 10);
  if (rdate && rdate === clientToday) {
    const todayKey = `study_${clientToday}`;
    const td = wx.getStorageSync(todayKey) || { questions: 0 };
    const rq = Number(remote.todayQuestions) || 0;
    td.questions = Math.max(Number(td.questions) || 0, rq);
    wx.setStorageSync(todayKey, td);
  }
}

function pullStudyStats(done) {
  const phone = getStudentPhone();
  const app = getApp();
  const baseUrl = app && app.globalData ? app.globalData.backendBaseUrl : '';
  if (!phone || !baseUrl) {
    if (typeof done === 'function') done(false);
    return;
  }
  request({
    url: `${baseUrl}/api/v1/mini/study-stats`,
    method: 'GET',
    data: { student_phone: phone },
    timeout: 20000,
  })
    .then((res) => {
      const payload = res.data;
      if (payload && payload.success && payload.data) {
        mergeRemoteIntoStorage(payload.data);
      }
      if (typeof done === 'function') done(true);
    })
    .catch(() => {
      if (typeof done === 'function') done(false);
    });
}

function pushStudyStats(done) {
  const phone = getStudentPhone();
  const app = getApp();
  const baseUrl = app && app.globalData ? app.globalData.backendBaseUrl : '';
  if (!phone || !baseUrl) {
    if (typeof done === 'function') done(false);
    return;
  }
  const body = readLocalPayload();
  request({
    url: `${baseUrl}/api/v1/mini/study-stats`,
    method: 'POST',
    header: { 'Content-Type': 'application/json' },
    data: {
      studentPhone: phone,
      total: body.total,
      correct: body.correct,
      days: body.days,
      essay: body.essay,
      todayDate: body.todayDate,
      todayQuestions: body.todayQuestions,
    },
    timeout: 20000,
  })
    .then((res) => {
      const payload = res.data;
      if (payload && payload.success && payload.data) {
        mergeRemoteIntoStorage(payload.data);
      }
      if (typeof done === 'function') done(true);
    })
    .catch(() => {
      if (typeof done === 'function') done(false);
    });
}

module.exports = {
  getStudentPhone,
  pullStudyStats,
  pushStudyStats,
  mergeRemoteIntoStorage,
  readLocalPayload,
};
