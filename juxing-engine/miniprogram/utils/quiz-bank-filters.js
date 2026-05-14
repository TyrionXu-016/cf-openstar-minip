/**
 * 刷题页「题型 + 小知识点」与 exam-taxonomy 对齐（仅本地题库）
 * 「全部」：不展示细分筛选，合并全库随机刷题；细分仅在选中某一模块时可用。
 */
const {
  OBJECTIVE_TYPES,
  objectiveMajorRows,
  buildShenlunMajors,
} = require('./exam-taxonomy.js');

/** 行测题库 id → 行测 taxonomy 大模块 key */
const XINGCE_BANK_TO_MAJOR = {
  lx: 'panduan',
  yc: 'yanyu',
  sl: 'shuliang',
  cz: 'ziliao',
  cg: 'changshi',
};

/** 公基题库 id → 公基 taxonomy 大模块 key */
const GONGJI_BANK_TO_MAJOR = {
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
const SHENLUN_BANK_TO_MAJOR = {
  sl_guina: 'guina',
  sl_zonghe: 'zonghe',
  sl_duice: 'duice',
  sl_gongwen: 'gongwen',
  sl_zuowen: 'zuowen',
};

function buildShenlunKnowledgeChips() {
  const chips = [{ label: '不限', value: '' }];
  buildShenlunMajors().forEach((maj) => {
    (maj.subs || []).forEach((s) => {
      chips.push({ label: `${maj.label}·${s.label}`, value: s.value });
    });
  });
  return chips;
}

/**
 * @returns {{ kind: 'none' } | { kind: 'xingce'|'gongjiti', majorKey: string } | { kind: 'shenlun', majorKey: string }}
 */
function getBankFilterContext(activeSubject) {
  if (!activeSubject || activeSubject === 'all') return { kind: 'none' };
  const slMajor = SHENLUN_BANK_TO_MAJOR[activeSubject];
  if (slMajor) return { kind: 'shenlun', majorKey: slMajor };
  if (XINGCE_BANK_TO_MAJOR[activeSubject]) {
    return { kind: 'xingce', majorKey: XINGCE_BANK_TO_MAJOR[activeSubject] };
  }
  if (GONGJI_BANK_TO_MAJOR[activeSubject]) {
    return { kind: 'gongjiti', majorKey: GONGJI_BANK_TO_MAJOR[activeSubject] };
  }
  return { kind: 'none' };
}

/**
 * @param {string} activeSubject 题库分类 id（all 时不展示筛选条）
 * @param {string} questionTypeId single|multi|judge|essay
 */
function buildQuizFilterBar(activeSubject, questionTypeId) {
  if (activeSubject === 'all') {
    return {
      visible: false,
      typeModes: [],
      knowledgeChips: [{ label: '不限', value: '' }],
    };
  }

  const ctx = getBankFilterContext(activeSubject);
  if (ctx.kind === 'none') {
    return {
      visible: false,
      typeModes: [],
      knowledgeChips: [{ label: '不限', value: '' }],
    };
  }
  if (ctx.kind === 'shenlun') {
    let knowledgeChips = [{ label: '不限', value: '' }];
    if (ctx.majorKey) {
      const m = buildShenlunMajors().find((x) => x.key === ctx.majorKey);
      const subs = (m && m.subs) || [];
      knowledgeChips = [{ label: '不限', value: '' }].concat(
        subs.map((s) => ({ label: s.label, value: s.value })),
      );
    } else {
      knowledgeChips = buildShenlunKnowledgeChips();
    }
    return {
      visible: true,
      typeModes: [{ id: 'single', name: '客观小题' }],
      knowledgeChips,
    };
  }
  const qid = (questionTypeId || 'single').toString();
  const majors = objectiveMajorRows(ctx.kind, qid);
  const m = majors.find((x) => x.key === ctx.majorKey);
  const subs = (m && m.subs) || [];
  const chips = [{ label: '不限', value: '' }].concat(
    subs.map((s) => ({ label: s.label, value: s.value })),
  );
  return {
    visible: true,
    typeModes: OBJECTIVE_TYPES,
    knowledgeChips: chips,
  };
}

module.exports = {
  getBankFilterContext,
  buildQuizFilterBar,
  SHENLUN_BANK_TO_MAJOR,
};
