// 共享模拟题库（刷题 / 测评 / 首页统计共用）

const QUESTION_BANK = {
  lx: [
    {
      id: 'lx001',
      subject: '逻辑推理',
      difficulty: '中等',
      question: '某公司有员工甲、乙、丙、丁四人，分别担任经理、主管、专员、助理四个职位。已知：(1)甲不是经理；(2)乙不是主管也不是助理；(3)丙不是经理也不是专员；(4)丁是助理。请问甲的职位是？',
      options: [
        { key: 'A', text: '经理' },
        { key: 'B', text: '主管' },
        { key: 'C', text: '专员' },
        { key: 'D', text: '助理' },
      ],
      answer: 'C',
      explanation: '由条件(4)知丁是助理。由条件(2)知乙是经理或专员。由条件(3)知丙是主管或助理，但丁已是助理，所以丙是主管。由条件(2)知乙是经理或专员；由条件(1)知甲不是经理，则甲是主管或专员，但丙已是主管，所以甲是专员。因此乙是经理，甲是专员。答案选C。',
    },
    {
      id: 'lx002',
      subject: '逻辑推理',
      difficulty: '简单',
      question: '所有哺乳动物都是恒温动物，蝙蝠是哺乳动物，由此可以推出：',
      options: [
        { key: 'A', text: '所有恒温动物都是哺乳动物' },
        { key: 'B', text: '蝙蝠是恒温动物' },
        { key: 'C', text: '蝙蝠不是恒温动物' },
        { key: 'D', text: '有些哺乳动物不是恒温动物' },
      ],
      answer: 'B',
      explanation: '这是一道直言三段论题目。大前提：所有哺乳动物是恒温动物；小前提：蝙蝠是哺乳动物；结论：蝙蝠是恒温动物。A选项逻辑反向错误，C选项与结论矛盾，D选项与大前提矛盾。答案选B。',
    },
    {
      id: 'lx003',
      subject: '逻辑推理',
      difficulty: '困难',
      question: '某次国际会议中，甲、乙、丙、丁、戊五人来自五个国家且各一人。已知：甲与乙来自相邻国家；丙与丁来自不相邻国家；戊与甲来自同一洲且与乙不同洲。若乙来自A国，则下列哪项一定为假？',
      options: [
        { key: 'A', text: '丙来自与A国相邻的国家' },
        { key: 'B', text: '丁与戊来自同一洲' },
        { key: 'C', text: '甲与丁来自相邻国家' },
        { key: 'D', text: '戊来自与A国不相邻的国家' },
      ],
      answer: 'B',
      explanation: '本题为高难度综合推理（示意）。根据「戊与甲同洲且与乙不同洲」及乙在A国，可推出戊不可能与乙同洲；若丁与戊同洲且丙丁不相邻，会与「各一人」及相邻约束产生矛盾，故「丁与戊来自同一洲」一定为假（示意解析，实际考试需完整推演）。',
    },
  ],
  yc: [
    {
      id: 'yc001',
      subject: '言语理解',
      difficulty: '中等',
      question: '下列句子中，语义最准确、表达最规范的是：',
      options: [
        { key: 'A', text: '这个问题他回答的很好，让人刮目相看。' },
        { key: 'B', text: '他的回答不仅准确，而且思路清晰，令人印象深刻。' },
        { key: 'C', text: '他回答这个问题时，表现的相当出色，让大家都觉得很好。' },
        { key: 'D', text: '这道题他答对了，回答的很完整。' },
      ],
      answer: 'B',
      explanation: 'B选项用词准确，逻辑清晰，语言规范，没有语法错误。A选项"的"应为"得"；C选项"表现的"应为"表现得"；D选项"回答的"应为"回答得"。同时B选项在表达上更为流畅自然。',
    },
  ],
  sl: [
    {
      id: 'sl001',
      subject: '数量关系',
      difficulty: '中等',
      question: '一个两位数，十位上的数比个位上的数大3，若将这两位数的十位和个位交换，所得新两位数与原两位数之和为121，则原两位数为：',
      options: [
        { key: 'A', text: '74' },
        { key: 'B', text: '85' },
        { key: 'C', text: '63' },
        { key: 'D', text: '52' },
      ],
      answer: 'A',
      explanation: '设个位数字为x，则十位数字为x+3。原两位数=10(x+3)+x=11x+30。交换后=10x+(x+3)=11x+3。两数之和：(11x+30)+(11x+3)=22x+33=121，解得x=4。所以原两位数十位为7，个位为4，即74。答案选A。',
    },
  ],
  cg: [
    {
      id: 'cg001',
      subject: '常识判断',
      difficulty: '简单',
      question: '下列关于我国行政区划的说法，正确的是：',
      options: [
        { key: 'A', text: '我国目前有23个省' },
        { key: 'B', text: '直辖市直接受国务院领导' },
        { key: 'C', text: '自治区与省的行政级别不同' },
        { key: 'D', text: '香港和澳门的政府首长称为市长' },
      ],
      answer: 'B',
      explanation: '我国共有34个省级行政区，包括23个省、5个自治区、4个直辖市、2个特别行政区。直辖市直接受国务院领导，这是正确的。自治区与省的行政级别相同（均为省级）；香港和澳门的政府首长称为行政长官，不称市长。答案选B。',
    },
  ],
  cz: [
    {
      id: 'cz001',
      subject: '资料分析',
      difficulty: '中等',
      question: '某市2024年GDP为1200亿元，同比增长8%；2023年GDP约为多少亿元？（保留整数）',
      options: [
        { key: 'A', text: '1102' },
        { key: 'B', text: '1111' },
        { key: 'C', text: '1120' },
        { key: 'D', text: '1130' },
      ],
      answer: 'B',
      explanation: '设2023年为x，则 x×(1+8%)=1200，x=1200/1.08≈1111.11，取整约1111亿元。答案选B。',
    },
    {
      id: 'cz002',
      subject: '资料分析',
      difficulty: '简单',
      question: '某表格显示：一季度销量12万件，二季度比一季度多25%，则二季度销量为多少万件？',
      options: [
        { key: 'A', text: '13' },
        { key: 'B', text: '14' },
        { key: 'C', text: '15' },
        { key: 'D', text: '16' },
      ],
      answer: 'C',
      explanation: '12×(1+25%)=12×1.25=15万件。答案选C。',
    },
  ],
  sl2: [
    {
      id: 'sl2001',
      subject: '申论小题',
      difficulty: '中等',
      question: '根据材料主旨，下列概括最恰当的一项是：材料强调基层治理要「减负增效」，避免形式主义。',
      options: [
        { key: 'A', text: '基层应减少会议文件数量' },
        { key: 'B', text: '基层治理需在减轻负担的同时提升实效' },
        { key: 'C', text: '形式主义只存在于文件层面' },
        { key: 'D', text: '减负与增效二者不可兼得' },
      ],
      answer: 'B',
      explanation: '材料核心是「减负」与「增效」并重，B项最全面；A片面，C、D与材料相悖。',
    },
    {
      id: 'sl2002',
      subject: '申论小题',
      difficulty: '简单',
      question: '下列句子中，没有语病的一项是：',
      options: [
        { key: 'A', text: '通过这次活动，使大家认识到团队协作的重要性。' },
        { key: 'B', text: '我们要采取有效措施，防止类似问题不再发生。' },
        { key: 'C', text: '推进数字政府建设，有助于提升公共服务水平。' },
        { key: 'D', text: '他的成绩不断提高，多次陆续获得表彰。' },
      ],
      answer: 'C',
      explanation: 'A项缺主语（「通过…使…」）；B项否定不当（「防止…不再」）；D项「多次」与「陆续」重复。C无语病。',
    },
  ],
};

const CATEGORY_KEYS = ['lx', 'yc', 'sl', 'cg', 'cz', 'sl2'];

function getAllQuestions() {
  const all = [];
  CATEGORY_KEYS.forEach((key) => {
    (QUESTION_BANK[key] || []).forEach((q) => all.push(q));
  });
  return all;
}

/** @param {'easy'|'medium'|'hard'} level */
function difficultyMatches(level, questionDifficulty) {
  const map = {
    easy: ['简单'],
    medium: ['简单', '中等'],
    hard: ['简单', '中等', '困难'],
  };
  return (map[level] || map.medium).includes(questionDifficulty);
}

/**
 * 为测评等场景抽题
 * @param {number} count 目标题量
 * @param {'easy'|'medium'|'hard'|'normal'} difficulty normal 与小程序测评页「正常」一致，等同 medium
 */
function pickAssessmentQuestions(count, difficulty) {
  const level = difficulty === 'normal' ? 'medium' : difficulty;
  let pool = getAllQuestions().filter((q) => difficultyMatches(level, q.difficulty));
  if (pool.length === 0) pool = getAllQuestions();
  pool = pool.slice().sort(() => Math.random() - 0.5);
  const n = Math.min(Math.max(1, count), pool.length);
  return pool.slice(0, n);
}

function getCategoryCounts() {
  const counts = {};
  CATEGORY_KEYS.forEach((k) => {
    counts[k] = (QUESTION_BANK[k] || []).length;
  });
  counts.all = getAllQuestions().length;
  return counts;
}

module.exports = {
  QUESTION_BANK,
  CATEGORY_KEYS,
  getAllQuestions,
  pickAssessmentQuestions,
  getCategoryCounts,
};
