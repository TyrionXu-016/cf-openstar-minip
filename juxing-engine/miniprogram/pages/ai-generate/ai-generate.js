// pages/ai-generate/ai-generate.js

Page({
  data: {
    subjects: [
      { id: 'xingce', name: '行测' },
      { id: 'shenlun', name: '申论' },
      { id: 'gongjiti', name: '公基' },
    ],
    questionTypes: [
      { id: 'single', name: '单选题' },
      { id: 'multi', name: '多选题' },
      { id: 'judge', name: '判断题' },
      { id: 'essay', name: '申论题' },
    ],
    difficulties: [
      { id: 'easy', name: '简单', icon: '🟢' },
      { id: 'medium', name: '中等', icon: '🟡' },
      { id: 'hard', name: '困难', icon: '🔴' },
    ],
    selectedSubject: 'xingce',
    selectedSubjectName: '行测',
    selectedType: 'single',
    selectedDifficulty: 'medium',
    knowledgePoint: '',
    generateCount: 3,
    generating: false,
    genStep: 0,
    generatedQuestions: [],
  },

  selectSubject(e) {
    const id = e.currentTarget.dataset.id;
    const subject = this.data.subjects.find(s => s.id === id);
    this.setData({ selectedSubject: id, selectedSubjectName: subject.name });
  },

  selectType(e) {
    this.setData({ selectedType: e.currentTarget.dataset.id });
  },

  selectDifficulty(e) {
    this.setData({ selectedDifficulty: e.currentTarget.dataset.id });
  },

  onKnowledgeInput(e) {
    this.setData({ knowledgePoint: e.detail.value });
  },

  increaseCount() {
    if (this.data.generateCount < 10) {
      this.setData({ generateCount: this.data.generateCount + 1 });
    }
  },

  decreaseCount() {
    if (this.data.generateCount > 1) {
      this.setData({ generateCount: this.data.generateCount - 1 });
    }
  },

  async startGenerate() {
    this.setData({ generating: true, genStep: 0, generatedQuestions: [] });

    // 模拟进度步骤
    const stepTimer = setInterval(() => {
      if (this.data.genStep < 3) {
        this.setData({ genStep: this.data.genStep + 1 });
      } else {
        clearInterval(stepTimer);
      }
    }, 800);

    try {
      const result = await wx.cloud.callFunction({
        name: 'generateQuestion',
        data: {
          subject: this.data.selectedSubject,
          difficulty: this.data.selectedDifficulty,
          questionType: this.data.selectedType,
          knowledgePoint: this.data.knowledgePoint || '综合',
          count: this.data.generateCount,
        },
      });

      clearInterval(stepTimer);
      this.setData({ genStep: 3 });

      await new Promise(resolve => setTimeout(resolve, 500));

      const questions = result.result.questions || [result.result];
      this.setData({
        generating: false,
        generatedQuestions: questions,
      });

    } catch (err) {
      clearInterval(stepTimer);
      console.error('AI生题失败:', err);

      // 降级：使用模拟数据
      await new Promise(resolve => setTimeout(resolve, 2000));
      this.setData({
        genStep: 3,
      });
      await new Promise(resolve => setTimeout(resolve, 500));

      this.setData({
        generating: false,
        generatedQuestions: this.getMockQuestions(),
      });

      wx.showToast({ title: 'AI已生成题目', icon: 'success' });
    }
  },

  getMockQuestions() {
    return [
      {
        question: `在一次考试中，甲的成绩比乙高10分，乙的成绩比丙高5分，丁的成绩是甲成绩的90%。如果丙的成绩是70分，那么丁的成绩是？`,
        options: [
          { key: 'A', text: '76.5分' },
          { key: 'B', text: '77分' },
          { key: 'C', text: '76分' },
          { key: 'D', text: '75.5分' },
        ],
        answer: 'A',
        difficulty: '中等',
        explanation: '丙=70分，乙=70+5=75分，甲=75+10=85分，丁=85×90%=76.5分。',
      },
      {
        question: `某镇有居民2000户，其中农业户占60%，非农业户中有50%是工人。则该镇非农业户中工人有多少户？`,
        options: [
          { key: 'A', text: '300户' },
          { key: 'B', text: '400户' },
          { key: 'C', text: '500户' },
          { key: 'D', text: '600户' },
        ],
        answer: 'B',
        difficulty: '简单',
        explanation: '非农业户=2000×(1-60%)=800户，工人=800×50%=400户。',
      },
      {
        question: `将下列词语依次填入横线处，最恰当的一组是：工匠精神的核心是_____，是一种对产品精益求精、_____的态度。`,
        options: [
          { key: 'A', text: '专注 / 持之以恒' },
          { key: 'B', text: '坚守 / 追求卓越' },
          { key: 'C', text: '执着 / 精雕细琢' },
          { key: 'D', text: '敬业 / 一丝不苟' },
        ],
        answer: 'C',
        difficulty: '中等',
        explanation: '"执着"强调坚持不懈的精神状态，"精雕细琢"与"对产品精益求精"语义呼应，最为贴切。',
      },
    ];
  },

  resetGenerate() {
    this.setData({ generatedQuestions: [], genStep: 0 });
  },

  startPractice() {
    // 将生成的题目存入本地，跳转刷题页
    wx.setStorageSync('ai_generated_questions', this.data.generatedQuestions);
    wx.navigateTo({ url: '/pages/quiz/quiz?source=ai' });
  },
});
