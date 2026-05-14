/**
 * 申论刷题/批改：按题型对齐常见「单题满分」（国考/联考常见量级，满分制小题 + 大作文合计 100 的常见拆法）。
 * 及格线：该题型满分的 60% 向上取整（与常见「及格」习惯一致）。
 */

const SHENLUN_MAJORS = ['归纳概括', '综合分析', '提出对策', '公文写作', '大作文'];

/** 各题型：满分、及格线、建议字数上限、维度分值（之和 = 满分） */
const PROFILE_BY_MAJOR = {
  归纳概括: {
    maxTotal: 10,
    wordLimit: 350,
    criteria: [
      { dimension: '要点准确全面', score: 5, description: '是否扣住设问，材料要点是否找全、表述准确' },
      { dimension: '归纳条理与逻辑', score: 3, description: '分类合并是否清楚，有无重复堆砌' },
      { dimension: '语言与字数', score: 2, description: '用语是否简洁规范，是否符合字数习惯' },
    ],
  },
  综合分析: {
    maxTotal: 15,
    wordLimit: 400,
    criteria: [
      { dimension: '观点与分析深度', score: 6, description: '观点是否明确，分析是否到位、有层次' },
      { dimension: '结合材料与论证', score: 5, description: '是否紧扣材料，理由是否充分' },
      { dimension: '结构与语言', score: 4, description: '段落逻辑与书面表达' },
    ],
  },
  提出对策: {
    maxTotal: 20,
    wordLimit: 400,
    criteria: [
      { dimension: '对策针对性可行性', score: 8, description: '是否对应问题，是否具体可落地' },
      { dimension: '条理与主体边界', score: 6, description: '分条是否清楚，权责是否恰当' },
      { dimension: '语言与篇幅', score: 6, description: '表述规范性与篇幅控制' },
    ],
  },
  公文写作: {
    maxTotal: 20,
    wordLimit: 500,
    criteria: [
      { dimension: '文种格式与结构', score: 6, description: '是否文种正确、格式要素齐全' },
      { dimension: '内容要点与对象', score: 8, description: '是否完成任务，身份与对象是否得体' },
      { dimension: '语言与卷面感', score: 6, description: '语体是否得当、表述是否清楚' },
    ],
  },
  大作文: {
    maxTotal: 35,
    wordLimit: 1000,
    criteria: [
      { dimension: '立意与观点', score: 10, description: '立意是否准确深刻，中心是否突出' },
      { dimension: '论证与结构', score: 10, description: '分论点与论证是否充实，结构是否完整' },
      { dimension: '语言与素材', score: 8, description: '语言规范性及案例、理论运用' },
      { dimension: '篇幅与标题', score: 7, description: '字数是否达标、标题与首尾是否得体' },
    ],
  },
};

function sumCriteriaScores(criteria) {
  return (criteria || []).reduce((s, x) => s + (Number(x && x.score) || 0), 0);
}

/** 题干中常见的「本题分值」写法，与题型默认满分可能不一致时以题干为准 */
const STEM_POINTS_MAX = 60;
const STEM_POINTS_MIN = 5;

/** 全角数字 → 半角，便于解析「（２０分）」等 */
function normalizeAsciiDigits(str) {
  const s = String(str || '');
  if (!s) return '';
  return s.replace(/[０-９]/g, (ch) => String.fromCharCode(ch.charCodeAt(0) - 0xff10 + 0x30));
}

/**
 * 合并可能分散在多字段里的申论正文（云函数/题库有时把分值写在 content/material 里）
 */
function getEssayFullTextForParsing(q) {
  if (!q || typeof q !== 'object') return '';
  const parts = [q.question, q.content, q.title, q.material, q.stem, q.body]
    .filter((x) => x != null && String(x).trim())
    .map((x) => String(x));
  return normalizeAsciiDigits(parts.join('\n'));
}

/**
 * 从题干末尾附近提取明确分值，如「……。(20分)」「……（15分）」
 */
function extractDeclaredPointsFromQuestion(text) {
  const t = normalizeAsciiDigits(String(text || ''));
  const re = /[（(]\s*(\d{1,2})\s*分\s*[)）]/g;
  let m;
  let lastParen = null;
  while ((m = re.exec(t)) !== null) {
    lastParen = parseInt(m[1], 10);
  }
  if (lastParen != null && lastParen >= STEM_POINTS_MIN && lastParen <= STEM_POINTS_MAX) {
    return lastParen;
  }
  const tail = t.slice(-120);
  const mEnd = tail.match(/(\d{1,2})\s*分\s*[。…]*\s*$/);
  if (mEnd) {
    const v = parseInt(mEnd[1], 10);
    if (v >= STEM_POINTS_MIN && v <= STEM_POINTS_MAX) return v;
  }
  return null;
}

/**
 * 按题型维度权重，把各维度满分整数配平到 targetTotal（与 extract 或默认满分一致）
 */
function buildScoringCriteriaForTotal(baseCriteria, targetTotal) {
  const list = baseCriteria || [];
  if (!list.length || !Number.isFinite(targetTotal) || targetTotal < 1) return [];
  const baseSum = sumCriteriaScores(list);
  if (!baseSum) {
    const each = Math.max(1, Math.floor(targetTotal / list.length));
    let rest = targetTotal;
    return list.map((c, i) => {
      const s = i === list.length - 1 ? rest : each;
      rest -= s;
      return { ...c, score: s };
    });
  }
  const weights = list.map((c) => Number(c.score) || 0);
  const wsum = weights.reduce((a, b) => a + b, 0) || 1;
  const exact = weights.map((w) => (w * targetTotal) / wsum);
  const ints = exact.map((x) => Math.floor(x));
  let rem = targetTotal - ints.reduce((a, b) => a + b, 0);
  const order = exact
    .map((x, i) => ({ i, frac: x - ints[i] }))
    .sort((a, b) => b.frac - a.frac);
  const out = ints.slice();
  for (let k = 0; k < rem; k += 1) {
    out[order[k % order.length].i] += 1;
  }
  return list.map((c, i) => ({ ...c, score: out[i] }));
}

Object.keys(PROFILE_BY_MAJOR).forEach((k) => {
  const p = PROFILE_BY_MAJOR[k];
  const sum = sumCriteriaScores(p.criteria);
  if (sum !== p.maxTotal) {
    console.warn(`[shenlun-essay-score] ${k} 维度分值之和 ${sum} ≠ maxTotal ${p.maxTotal}`);
  }
  p.passScore = Math.min(p.maxTotal, Math.ceil(p.maxTotal * 0.6));
});

/**
 * 从出题时的「考查知识点」串中识别五大题型之一（含「归纳概括-xxx」类子标签）。
 */
function detectShenlunMajorFromKnowledge(raw) {
  const t = String(raw || '').trim();
  if (!t) return '归纳概括';
  const parts = t.split(/[,，、]/g).map((s) => s.trim()).filter(Boolean);
  for (const p of parts) {
    if (SHENLUN_MAJORS.includes(p)) return p;
    for (const m of SHENLUN_MAJORS) {
      if (p.startsWith(`${m}-`)) return m;
    }
  }
  for (const m of SHENLUN_MAJORS) {
    if (t.includes(m)) return m;
  }
  if (t.includes('综合') || t.includes('模块内随机') || t.includes('全模块')) return '归纳概括';
  return '归纳概括';
}

/**
 * 从题干用语推断五大题型（优先于「全模块/综合」类模糊考点），避免评析题被标成归纳概括。
 */
function inferShenlunMajorFromStem(rawText) {
  const t = String(rawText || '').replace(/\s+/g, '');
  if (!t) return null;
  if (
    /联系实际.{0,12}文章|自拟标题.{0,8}文章|议论文|策论文|写一篇文章|撰写一篇|大作文/.test(t) ||
    /不少于\s*\d{3}\s*字/.test(t)
  ) {
    return '大作文';
  }
  if (
    /公开信|倡议书|讲话稿|发言稿|主持词|调研报告|工作方案|活动方案|短评稿|时评|宣传稿|编者按|提纲|通知|函|建议书|汇报/.test(
      t
    )
  ) {
    return '公文写作';
  }
  if (/提出.{0,6}对策|对策建议|具体措施|如何解决|有何建议|工作思路/.test(t)) {
    return '提出对策';
  }
  if (
    /评析|评论|评价.{0,8}观点|谈谈.{0,8}认识|谈谈.{0,8}理解|谈谈.{0,8}看法|见解|启示|含义|合理性|反驳|支持哪一方|两种.{0,12}观点/.test(
      t
    )
  ) {
    return '综合分析';
  }
  if (/概括|归纳|列出.{0,6}要点|简述.{0,8}问题|有哪些.{0,8}表现|主要问题/.test(t)) {
    return '归纳概括';
  }
  return null;
}

function getEssayScoringProfileForQuestion(q) {
  const kp = (q && (q.knowledgePoint != null ? q.knowledgePoint : '')) || '';
  const fullText = getEssayFullTextForParsing(q);
  const stemMajor = inferShenlunMajorFromStem(fullText);
  const kpMajor = detectShenlunMajorFromKnowledge(kp);
  const major = stemMajor || kpMajor;
  const base = PROFILE_BY_MAJOR[major] || PROFILE_BY_MAJOR.归纳概括;
  const stemPts = extractDeclaredPointsFromQuestion(fullText);
  const maxTotal =
    stemPts != null && stemPts !== base.maxTotal ? stemPts : base.maxTotal;
  const scoringCriteria = buildScoringCriteriaForTotal(base.criteria, maxTotal);
  const passScore = Math.min(maxTotal, Math.ceil(maxTotal * 0.6));
  return {
    major,
    maxTotal,
    passScore,
    wordLimit: base.wordLimit,
    scoringCriteria,
    /** 若与题型默认不同，便于 UI 说明「以题干分值为准」 */
    stemDeclaredPoints: stemPts,
    profileDefaultTotal: base.maxTotal,
    /** 题干推断题型与考点串不一致时，前端可选用 */
    majorFromStem: stemMajor,
    majorFromKnowledge: kpMajor,
  };
}

/** 提交 AI 批改前的最低字数（约为建议字数上限的 15%，且夹在 40～200 之间） */
function getEssaySubmitMinChars(profile) {
  const wl =
    profile && Number.isFinite(Number(profile.wordLimit)) && Number(profile.wordLimit) > 0
      ? Number(profile.wordLimit)
      : 800;
  return Math.max(40, Math.min(200, Math.floor(wl * 0.15)));
}

/** 刷题页申论答题倒计时（秒）：按五大题型常见作答时长 */
const ESSAY_ANSWER_COUNTDOWN_SEC = {
  归纳概括: 25 * 60,
  综合分析: 30 * 60,
  提出对策: 30 * 60,
  公文写作: 35 * 60,
  大作文: 60 * 60,
};

function getEssayAnswerCountdownSeconds(q) {
  const p = getEssayScoringProfileForQuestion(q);
  const t = ESSAY_ANSWER_COUNTDOWN_SEC[p.major];
  return Number.isFinite(t) && t > 0 ? t : 30 * 60;
}

module.exports = {
  SHENLUN_MAJORS,
  PROFILE_BY_MAJOR,
  detectShenlunMajorFromKnowledge,
  inferShenlunMajorFromStem,
  extractDeclaredPointsFromQuestion,
  getEssayFullTextForParsing,
  getEssayScoringProfileForQuestion,
  getEssaySubmitMinChars,
  getEssayAnswerCountdownSeconds,
};
