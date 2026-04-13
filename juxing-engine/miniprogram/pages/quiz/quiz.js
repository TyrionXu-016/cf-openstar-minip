// pages/quiz/quiz.js

// 模拟题库（实际项目中从云数据库读取）
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
};

Page({
  data: {
    subjects: [
      { id: 'all', name: '全部' },
      { id: 'lx', name: '逻辑推理' },
      { id: 'yc', name: '言语理解' },
      { id: 'sl', name: '数量关系' },
      { id: 'cg', name: '常识' },
    ],
    activeSubject: 'all',
    loading: false,
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
  },

  onLoad(options) {
    const category = options.category || 'all';
    this.setData({ activeSubject: category });
    this.loadQuestions(category);
  },

  loadQuestions(subject) {
    this.setData({ loading: true });
    setTimeout(() => {
      let questions = [];
      if (subject === 'all') {
        Object.values(QUESTION_BANK).forEach(list => {
          questions = questions.concat(list);
        });
      } else {
        questions = QUESTION_BANK[subject] || [];
      }

      // 随机打乱
      questions = questions.sort(() => Math.random() - 0.5);

      this.setData({
        loading: false,
        finished: false,
        questions,
        totalQuestions: questions.length,
        currentIndex: 0,
        correctCount: 0,
        progressDots: questions.map(() => ({})),
        currentQuestion: questions[0] || null,
        answered: false,
        selectedAnswer: '',
        hasNext: questions.length > 1,
      });
    }, 300);
  },

  switchSubject(e) {
    const id = e.currentTarget.dataset.id;
    this.setData({ activeSubject: id });
    this.loadQuestions(id);
  },

  getOptionClass(key) {
    if (!this.data.answered) {
      return this.data.selectedAnswer === key ? 'selected' : '';
    }
    if (key === this.data.currentQuestion.answer) return 'correct';
    if (key === this.data.selectedAnswer) return 'wrong';
    return '';
  },

  selectOption(e) {
    if (this.data.answered) return;
    const key = e.currentTarget.dataset.key;
    this.setData({ selectedAnswer: key });
  },

  submitAnswer() {
    if (!this.data.selectedAnswer) {
      wx.showToast({ title: '请先选择答案', icon: 'none' });
      return;
    }

    const isCorrect = this.data.selectedAnswer === this.data.currentQuestion.answer;
    const newCount = this.data.correctCount + (isCorrect ? 1 : 0);

    // 记录答题数据
    const todayKey = `study_${new Date().toISOString().slice(0, 10)}`;
    const todayData = wx.getStorageSync(todayKey) || { questions: 0 };
    todayData.questions += 1;
    wx.setStorageSync(todayKey, todayData);

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
      // 完成
      const total = this.data.questions.length;
      const correct = this.data.correctCount;
      this.setData({
        finished: true,
        currentQuestion: null,
        sessionStats: {
          total,
          correct,
          rate: Math.round(correct / total * 100),
        }
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

  markWrong() {
    // 标记错题到本地存储
    const wrongList = wx.getStorageSync('wrong_list') || [];
    const q = this.data.currentQuestion;
    if (!wrongList.find(w => w.id === q.id)) {
      wrongList.push({ ...q, markedAt: Date.now() });
      wx.setStorageSync('wrong_list', wrongList);
    }
    wx.showToast({ title: '已标记为错题', icon: 'success' });
  },

  restartQuiz() {
    this.loadQuestions(this.data.activeSubject);
  },

  goHome() {
    wx.switchTab({ url: '/pages/index/index' });
  },
});
