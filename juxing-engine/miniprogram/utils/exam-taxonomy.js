/** 行测 / 申论 / 公基：题型与知识点分层（AI 出题与首页「题库分类」共用） */

const OBJECTIVE_TYPES = [
  { id: 'single', name: '单选题' },
  { id: 'multi', name: '多选题' },
  { id: 'judge', name: '判断题' },
];
const SHENLUN_TYPES = [{ id: 'essay', name: '申论题' }];

/** 行测·单选：五大块 + 全模块小题型（覆盖最广） */
const XINGCE_SINGLE = [
  { label: '言语理解与表达', value: '言语理解与表达' },
  { label: '数量关系', value: '数量关系' },
  { label: '判断推理', value: '判断推理' },
  { label: '资料分析', value: '资料分析' },
  { label: '常识判断', value: '常识判断' },
  { label: '逻辑填空', value: '逻辑填空' },
  { label: '片段阅读', value: '片段阅读' },
  { label: '语句表达', value: '语句表达' },
  { label: '文章阅读', value: '文章阅读' },
  { label: '图形推理', value: '图形推理' },
  { label: '定义判断', value: '定义判断' },
  { label: '类比推理', value: '类比推理' },
  { label: '逻辑判断', value: '逻辑判断' },
  { label: '数学运算', value: '数学运算' },
  { label: '行程问题', value: '行程问题' },
  { label: '工程问题', value: '工程问题' },
  { label: '排列组合', value: '排列组合' },
  { label: '概率问题', value: '概率问题' },
  { label: '几何问题', value: '几何问题' },
  { label: '经济利润', value: '经济利润' },
  { label: '增长率', value: '资料分析-增长率' },
  { label: '增长量', value: '资料分析-增长量' },
  { label: '比重', value: '资料分析-比重' },
  { label: '平均数', value: '资料分析-平均数' },
  { label: '倍数', value: '资料分析-倍数' },
  { label: '资料综合', value: '资料分析-综合分析' },
  { label: '政治常识', value: '常识判断-政治' },
  { label: '法律常识', value: '常识判断-法律' },
  { label: '人文历史', value: '常识判断-人文历史' },
  { label: '科技生活', value: '常识判断-科技与生活' },
];

/** 行测·多选：真题侧重「多项符合/多项正确」——常识、政治法律、言语、逻辑与资料综合类更常见 */
const XINGCE_MULTI = [
  { label: '常识判断', value: '常识判断' },
  { label: '政治常识', value: '常识判断-政治' },
  { label: '法律常识', value: '常识判断-法律' },
  { label: '人文历史', value: '常识判断-人文历史' },
  { label: '科技生活', value: '常识判断-科技与生活' },
  { label: '言语理解与表达', value: '言语理解与表达' },
  { label: '逻辑填空', value: '逻辑填空' },
  { label: '片段阅读', value: '片段阅读' },
  { label: '语句表达', value: '语句表达' },
  { label: '判断推理', value: '判断推理' },
  { label: '定义判断', value: '定义判断' },
  { label: '逻辑判断', value: '逻辑判断' },
  { label: '类比推理', value: '类比推理' },
  { label: '图形推理', value: '图形推理' },
  { label: '资料分析', value: '资料分析' },
  { label: '资料综合', value: '资料分析-综合分析' },
  { label: '增长率', value: '资料分析-增长率' },
  { label: '增长量', value: '资料分析-增长量' },
  { label: '比重', value: '资料分析-比重' },
  { label: '平均数', value: '资料分析-平均数' },
  { label: '倍数', value: '资料分析-倍数' },
  { label: '数量关系', value: '数量关系' },
  { label: '数学运算', value: '数学运算' },
  { label: '排列组合', value: '排列组合' },
  { label: '概率问题', value: '概率问题' },
];

/** 行测·判断：陈述真伪类——常识、政法、言语逻辑、定义类比图形、资料表述与数量概念 */
const XINGCE_JUDGE = [
  { label: '常识判断', value: '常识判断' },
  { label: '政治常识', value: '常识判断-政治' },
  { label: '法律常识', value: '常识判断-法律' },
  { label: '人文历史', value: '常识判断-人文历史' },
  { label: '科技生活', value: '常识判断-科技与生活' },
  { label: '言语理解与表达', value: '言语理解与表达' },
  { label: '逻辑填空', value: '逻辑填空' },
  { label: '片段阅读', value: '片段阅读' },
  { label: '判断推理', value: '判断推理' },
  { label: '定义判断', value: '定义判断' },
  { label: '类比推理', value: '类比推理' },
  { label: '图形推理', value: '图形推理' },
  { label: '逻辑判断', value: '逻辑判断' },
  { label: '资料分析', value: '资料分析' },
  { label: '资料陈述判断', value: '资料分析-综合判断' },
  { label: '数量关系', value: '数量关系' },
  { label: '数学运算', value: '数学运算' },
];

/** 申论：五大题型 + 各题型下常见小考点（与行测「模块—小考点」结构一致；不设全模块随机以免跨题型） */
function buildShenlunMajors() {
  return [
    {
      key: 'guina',
      label: '归纳概括',
      value: '归纳概括',
      subs: [
        { label: '问题与表现', value: '归纳概括-问题与表现' },
        { label: '原因', value: '归纳概括-原因' },
        { label: '做法与经验', value: '归纳概括-做法与经验' },
        { label: '变化与特点', value: '归纳概括-变化与特点' },
        { label: '填空式概括', value: '归纳概括-填空式' },
      ],
    },
    {
      key: 'zonghe',
      label: '综合分析',
      value: '综合分析',
      subs: [
        { label: '词句理解', value: '综合分析-词句理解' },
        { label: '评论分析', value: '综合分析-评论型' },
        { label: '比较分析', value: '综合分析-比较型' },
        { label: '启示分析', value: '综合分析-启示型' },
        { label: '评价观点', value: '综合分析-评价观点' },
      ],
    },
    {
      key: 'duice',
      label: '提出对策',
      value: '提出对策',
      subs: [
        { label: '单一类对策', value: '提出对策-单一类' },
        { label: '综合类对策', value: '提出对策-综合类' },
        { label: '启示型对策', value: '提出对策-启示型' },
        { label: '方案要点', value: '提出对策-方案要点' },
      ],
    },
    {
      key: 'gongwen',
      label: '公文写作',
      value: '公文写作',
      subs: [
        { label: '通知/通报', value: '公文写作-通知通报' },
        { label: '倡议书', value: '公文写作-倡议书' },
        { label: '讲话/发言稿', value: '公文写作-讲话稿' },
        { label: '调研/汇报', value: '公文写作-调研汇报' },
        { label: '宣传稿/短评', value: '公文写作-宣传短评' },
        { label: '书信类', value: '公文写作-书信类' },
      ],
    },
    {
      key: 'zuowen',
      label: '大作文',
      value: '大作文',
      subs: [
        { label: '策论文', value: '大作文-策论文' },
        { label: '政论文', value: '大作文-政论文' },
        { label: '评论文', value: '大作文-评论文' },
        { label: '关系型', value: '大作文-关系型' },
      ],
    },
  ];
}

function getShenlunMajorValues() {
  return buildShenlunMajors().map((m) => m.value);
}

function getShenlunFlatQuickTags() {
  const flat = [];
  for (const m of buildShenlunMajors()) {
    flat.push({ label: m.label, value: m.value });
    for (const s of m.subs || []) flat.push({ label: s.label, value: s.value });
  }
  return flat;
}

function getShenlunMajorFromPart(part, majorValues) {
  if (!part) return null;
  const majors = majorValues || getShenlunMajorValues();
  if (majors.includes(part)) return part;
  for (const m of majors) {
    if (part.startsWith(`${m}-`)) return m;
  }
  return null;
}

/** 公基·单选：模块最全 */
const GONGJI_SINGLE = [
  { label: '法律', value: '法律' },
  { label: '政治', value: '政治' },
  { label: '马克思主义', value: '马克思主义理论' },
  { label: '党史党建', value: '党史党建' },
  { label: '经济', value: '经济' },
  { label: '人文与历史', value: '人文与历史' },
  { label: '科技与生活', value: '科技与生活' },
  { label: '公文', value: '公文' },
];

/** 公基·多选：易出「多项符合」的模块 */
const GONGJI_MULTI = [
  { label: '法律', value: '法律' },
  { label: '宪法与法理', value: '宪法' },
  { label: '民法', value: '民法' },
  { label: '刑法', value: '刑法' },
  { label: '行政法', value: '行政法' },
  { label: '政治', value: '政治' },
  { label: '马克思主义', value: '马克思主义理论' },
  { label: '党史党建', value: '党史党建' },
  { label: '时政', value: '时政热点' },
  { label: '经济', value: '经济' },
  { label: '人文与历史', value: '人文与历史' },
  { label: '科技与生活', value: '科技与生活' },
  { label: '公文', value: '公文' },
];

/** 公基·判断：法条/表述/概念对错 */
const GONGJI_JUDGE = [
  { label: '法律判断', value: '法律' },
  { label: '宪法', value: '宪法' },
  { label: '民法', value: '民法' },
  { label: '刑法', value: '刑法' },
  { label: '行政法', value: '行政法' },
  { label: '政治表述', value: '政治' },
  { label: '马克思主义', value: '马克思主义理论' },
  { label: '党史党建', value: '党史党建' },
  { label: '时政', value: '时政热点' },
  { label: '经济概念', value: '经济' },
  { label: '人文历史', value: '人文与历史' },
  { label: '科技生活', value: '科技与生活' },
  { label: '公文规范', value: '公文' },
];

/** 按科目 + 题型解析快捷考点（申论为五大题型及下属小考点） */
function resolveKnowledgeQuickTags(subjectId, questionTypeId) {
  const sid = subjectId || 'xingce';
  const qid = (questionTypeId || 'single').toString();
  if (sid === 'shenlun') return getShenlunFlatQuickTags();
  if (sid === 'xingce') {
    if (qid === 'multi') return XINGCE_MULTI;
    if (qid === 'judge') return XINGCE_JUDGE;
    return XINGCE_SINGLE;
  }
  if (sid === 'gongjiti') {
    if (qid === 'multi') return GONGJI_MULTI;
    if (qid === 'judge') return GONGJI_JUDGE;
    return GONGJI_SINGLE;
  }
  return XINGCE_SINGLE;
}

function filterTagListByAllowed(subs, allowedFlatList) {
  const allowed = new Set((allowedFlatList || []).map((t) => t.value));
  return (subs || []).filter((t) => allowed.has(t.value));
}

function dedupeTagsByValue(tags) {
  const seen = new Set();
  return (tags || []).filter((t) => {
    if (!t || !t.value || seen.has(t.value)) return false;
    seen.add(t.value);
    return true;
  });
}

/** 行测：五大块 + 每块下小考点；全模块汇总所有小考点 */
function buildXingceMajorsWithFilter(flat) {
  const base = [
    {
      key: 'yanyu',
      label: '言语理解',
      value: '言语理解与表达',
      subs: [
        { label: '逻辑填空', value: '逻辑填空' },
        { label: '片段阅读', value: '片段阅读' },
        { label: '语句表达', value: '语句表达' },
        { label: '文章阅读', value: '文章阅读' },
      ],
    },
    {
      key: 'shuliang',
      label: '数量关系',
      value: '数量关系',
      subs: [
        { label: '数学运算', value: '数学运算' },
        { label: '行程问题', value: '行程问题' },
        { label: '工程问题', value: '工程问题' },
        { label: '排列组合', value: '排列组合' },
        { label: '概率问题', value: '概率问题' },
        { label: '几何问题', value: '几何问题' },
        { label: '经济利润', value: '经济利润' },
      ],
    },
    {
      key: 'panduan',
      label: '判断推理',
      value: '判断推理',
      subs: [
        { label: '图形推理', value: '图形推理' },
        { label: '定义判断', value: '定义判断' },
        { label: '类比推理', value: '类比推理' },
        { label: '逻辑判断', value: '逻辑判断' },
      ],
    },
    {
      key: 'ziliao',
      label: '资料分析',
      value: '资料分析',
      subs: [
        { label: '资料分析', value: '资料分析' },
        { label: '增长率', value: '资料分析-增长率' },
        { label: '增长量', value: '资料分析-增长量' },
        { label: '比重', value: '资料分析-比重' },
        { label: '平均数', value: '资料分析-平均数' },
        { label: '倍数', value: '资料分析-倍数' },
        { label: '资料综合', value: '资料分析-综合分析' },
      ],
    },
    {
      key: 'changshi',
      label: '常识判断',
      value: '常识判断',
      subs: [
        { label: '政治常识', value: '常识判断-政治' },
        { label: '法律常识', value: '常识判断-法律' },
        { label: '人文历史', value: '常识判断-人文历史' },
        { label: '科技生活', value: '常识判断-科技与生活' },
      ],
    },
  ];
  const filtered = base.map((m) => ({
    ...m,
    subs: filterTagListByAllowed(m.subs, flat),
  }));
  const allLeaves = dedupeTagsByValue(filtered.flatMap((m) => m.subs));
  filtered.push({ key: 'quan', label: '全模块', value: '__QUAN__', subs: allLeaves });
  return filtered;
}

/** 公基：按模块 + 全模块 */
function buildGongjiMajorsWithFilter(flat) {
  const base = [
    {
      key: 'falv',
      label: '法律',
      value: '法律',
      subs: [
        { label: '宪法', value: '宪法' },
        { label: '民法', value: '民法' },
        { label: '刑法', value: '刑法' },
        { label: '行政法', value: '行政法' },
      ],
    },
    {
      key: 'zhengzhi',
      label: '政治',
      value: '政治',
      subs: [
        { label: '马克思主义', value: '马克思主义理论' },
        { label: '党史党建', value: '党史党建' },
        { label: '时政', value: '时政热点' },
      ],
    },
    { key: 'jingji', label: '经济', value: '经济', subs: [{ label: '经济', value: '经济' }] },
    {
      key: 'renwen',
      label: '人文与历史',
      value: '人文与历史',
      subs: [{ label: '人文与历史', value: '人文与历史' }],
    },
    {
      key: 'keji',
      label: '科技与生活',
      value: '科技与生活',
      subs: [{ label: '科技与生活', value: '科技与生活' }],
    },
    { key: 'gongwen', label: '公文', value: '公文', subs: [{ label: '公文', value: '公文' }] },
  ];
  const filtered = base.map((m) => ({
    ...m,
    subs: filterTagListByAllowed(m.subs, flat),
  }));
  const allLeaves = dedupeTagsByValue(filtered.flatMap((m) => m.subs));
  filtered.push({ key: 'quan', label: '全模块', value: '__QUAN__', subs: allLeaves });
  return filtered;
}

function buildKnowledgeTierState(subjectId, questionTypeId, selectedMajorKey) {
  const ph =
    subjectId === 'shenlun'
      ? '手填，如：乡村振兴、基层治理…'
      : subjectId === 'gongjiti'
        ? '手填，如：宪法、时政…'
        : '手填，如：类比推理、资料分析-比重…';
  if (subjectId === 'shenlun') {
    const majors = buildShenlunMajors();
    let subs = [];
    if (selectedMajorKey) {
      const m = majors.find((x) => x.key === selectedMajorKey);
      if (m) subs = m.subs || [];
    }
    return {
      knowledgeBlockTags: majors,
      knowledgeQuanMajor: null,
      knowledgeSubTags: subs,
      knowledgeQuickTags: [],
      selectedMajorKey: selectedMajorKey || '',
      knowledgeInputPlaceholder: ph,
    };
  }
  const flat = resolveKnowledgeQuickTags(subjectId, questionTypeId);
  const majors =
    subjectId === 'gongjiti'
      ? buildGongjiMajorsWithFilter(flat)
      : buildXingceMajorsWithFilter(flat);
  const quan = majors.find((x) => x.key === 'quan') || null;
  const blockTags = majors.filter((x) => x.key !== 'quan');
  let subs = [];
  if (selectedMajorKey) {
    const m = majors.find((x) => x.key === selectedMajorKey);
    if (m) subs = m.subs || [];
  }
  return {
    knowledgeBlockTags: blockTags,
    knowledgeQuanMajor: quan,
    knowledgeSubTags: subs,
    knowledgeQuickTags: [],
    selectedMajorKey: selectedMajorKey || '',
    knowledgeInputPlaceholder: ph,
  };
}

/** 行测/公基：当前题型下知识块（不含「全模块」），供首页展示 */
function objectiveMajorRows(subjectId, questionTypeId) {
  const flat = resolveKnowledgeQuickTags(subjectId, questionTypeId);
  const majors =
    subjectId === 'gongjiti'
      ? buildGongjiMajorsWithFilter(flat)
      : buildXingceMajorsWithFilter(flat);
  return majors.filter((x) => x.key !== 'quan');
}

function findMajorKeyContainingSub(subjectId, questionTypeId, kpValue) {
  if (!kpValue) return '';
  const rows = objectiveMajorRows(subjectId, questionTypeId);
  for (const m of rows) {
    if ((m.subs || []).some((s) => s && s.value === kpValue)) return m.key;
  }
  return '';
}

function findShenlunMajorKeyForSub(kpValue) {
  if (!kpValue) return '';
  for (const m of buildShenlunMajors()) {
    if ((m.subs || []).some((s) => s && s.value === kpValue)) return m.key;
  }
  return '';
}

function questionTypesForSubject(subjectId) {
  return subjectId === 'shenlun' ? SHENLUN_TYPES : OBJECTIVE_TYPES;
}

/** 首页「知识模块」题库 id → 行测/公基大模块 key（与 quiz-bank-filters 一致） */
const XINGCE_BANK_TO_MAJOR_FOR_HOME = {
  lx: 'panduan',
  yc: 'yanyu',
  sl: 'shuliang',
  cz: 'ziliao',
  cg: 'changshi',
};
const GONGJI_BANK_TO_MAJOR_FOR_HOME = {
  gj_law: 'falv',
  gj_pol: 'zhengzhi',
  gj_marx: 'zhengzhi',
  gj_party: 'zhengzhi',
  gj_econ: 'jingji',
  gj_human: 'renwen',
  gj_tech: 'keji',
  gj_doc: 'gongwen',
};

/** 申论分库 id → buildShenlunMajors 的题型 key */
const SHENLUN_BANK_TO_MAJOR_FOR_HOME = {
  sl_guina: 'guina',
  sl_zonghe: 'zonghe',
  sl_duice: 'duice',
  sl_gongwen: 'gongwen',
  sl_zuowen: 'zuowen',
};

/**
 * 首页题库卡片 → 小知识点列表（弹层用）；null 表示无子考点、直接进刷题
 * @param {string} bankId 如 lx、gj_law、sl_guina
 */
function getKnowledgeSubTagsForBankCategory(bankId) {
  if (!bankId || bankId === 'all') return null;

  const slMajor = SHENLUN_BANK_TO_MAJOR_FOR_HOME[bankId];
  if (slMajor) {
    const m = buildShenlunMajors().find((x) => x.key === slMajor);
    const subs = (m && m.subs ? m.subs : []).map((s) => ({ label: s.label, value: s.value }));
    return subs.length ? { subs } : null;
  }

  if (XINGCE_BANK_TO_MAJOR_FOR_HOME[bankId]) {
    const majors = objectiveMajorRows('xingce', 'single');
    const m = majors.find((x) => x.key === XINGCE_BANK_TO_MAJOR_FOR_HOME[bankId]);
    const subs = (m && m.subs ? m.subs : []).map((s) => ({ label: s.label, value: s.value }));
    return subs.length ? { subs } : null;
  }

  if (GONGJI_BANK_TO_MAJOR_FOR_HOME[bankId]) {
    const majors = objectiveMajorRows('gongjiti', 'single');
    const m = majors.find((x) => x.key === GONGJI_BANK_TO_MAJOR_FOR_HOME[bankId]);
    const subs = (m && m.subs ? m.subs : []).map((s) => ({ label: s.label, value: s.value }));
    return subs.length ? { subs } : null;
  }

  return null;
}

module.exports = {
  OBJECTIVE_TYPES,
  SHENLUN_TYPES,
  buildShenlunMajors,
  getShenlunMajorValues,
  getShenlunFlatQuickTags,
  getShenlunMajorFromPart,
  resolveKnowledgeQuickTags,
  buildKnowledgeTierState,
  questionTypesForSubject,
  objectiveMajorRows,
  findMajorKeyContainingSub,
  findShenlunMajorKeyForSub,
  getKnowledgeSubTagsForBankCategory,
};
