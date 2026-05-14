/** 题型 id -> 展示名（与出题页 questionType 一致） */
const LABELS = {
  single: '单选题',
  multi: '多选题',
  judge: '判断题',
  essay: '申论题',
};

function questionTypeLabel(id) {
  const k = String(id || '').toLowerCase().trim();
  return LABELS[k] || '';
}

/** 补全 questionType / questionTypeName，供刷题、测评、OCR 等入口复用 */
function enrichQuestionTypeFields(q) {
  if (!q || typeof q !== 'object') return q;
  const tid = (q.questionType || q.type || 'single').toString().toLowerCase().trim();
  const name = q.questionTypeName || questionTypeLabel(tid);
  return {
    ...q,
    questionType: tid,
    questionTypeName: name || questionTypeLabel('single'),
  };
}

module.exports = {
  questionTypeLabel,
  enrichQuestionTypeFields,
};
