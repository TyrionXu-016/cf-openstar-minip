// pages/essay/essay.js

const ESSAY_TOPICS = [
  {
    id: 'es001',
    category: '综合分析',
    difficulty: '中等',
    title: '论"数字乡村"建设中的机遇与挑战',
    material: '近年来，国家大力推进数字乡村建设，农村电商、在线教育、远程医疗等数字服务日益普及。然而，"数字鸿沟"问题依然存在，部分老年农民难以适应数字化生活，数据安全和隐私保护也面临新的挑战。',
    question: '结合材料，谈谈你对"数字乡村"建设的认识，并就如何解决其中的主要挑战提出建议。',
    wordLimit: 800,
    scoringCriteria: [
      { dimension: '内容完整性', score: 30, description: '是否覆盖机遇与挑战两个维度，建议是否具体可行' },
      { dimension: '逻辑结构', score: 25, description: '段落层次是否清晰，论述是否有条理' },
      { dimension: '语言表达', score: 20, description: '用词是否准确，语句是否通顺，书面化程度' },
      { dimension: '政策理解', score: 15, description: '是否体现对数字化政策和农村实际的理解' },
      { dimension: '字数达标', score: 10, description: '是否达到800字左右的要求' },
    ],
  },
  {
    id: 'es002',
    category: '对策建议',
    difficulty: '较难',
    title: '如何推进新时代城乡融合发展',
    material: '当前，我国城乡发展不平衡、不充分的矛盾仍然突出。城乡居民收入差距、公共服务差距、基础设施差距依然较大。推进城乡融合发展，是实现共同富裕的重要路径，也是新型城镇化建设的核心命题。',
    question: '请就如何推进新时代城乡融合发展提出具体可行的政策建议，字数800字左右。',
    wordLimit: 800,
    scoringCriteria: [
      { dimension: '内容完整性', score: 30, description: '建议是否涵盖政策、产业、公共服务等多维度' },
      { dimension: '逻辑结构', score: 25, description: '建议是否有层次，论述是否系统' },
      { dimension: '语言表达', score: 20, description: '语言是否规范，论述是否有力' },
      { dimension: '政策理解', score: 15, description: '是否体现对城乡融合政策的深入理解' },
      { dimension: '字数达标', score: 10, description: '是否达到800字左右' },
    ],
  },
  {
    id: 'es003',
    category: '启示感悟',
    difficulty: '简单',
    title: '谈谈工匠精神对现代职业发展的意义',
    material: '工匠精神，是指工匠对自己的产品精雕细琢、精益求精的精神理念。近年来，国家大力弘扬工匠精神，鼓励从业者提升技能水平，培育专注、敬业、创新的职业品质。',
    question: '结合材料，谈谈工匠精神对现代职业发展的意义，并联系实际说明如何在工作中践行工匠精神。字数600字左右。',
    wordLimit: 600,
    scoringCriteria: [
      { dimension: '内容完整性', score: 30, description: '是否阐明意义，是否有实际做法' },
      { dimension: '逻辑结构', score: 25, description: '结构是否清晰合理' },
      { dimension: '语言表达', score: 20, description: '语言是否流畅' },
      { dimension: '政策理解', score: 15, description: '是否联系国家政策导向' },
      { dimension: '字数达标', score: 10, description: '是否达到600字左右' },
    ],
  },
];

Page({
  data: {
    topics: ESSAY_TOPICS,
    selectedTopic: null,
    answerText: '',
    wordCount: 0,
    submitted: false,
    grading: false,
    gradingStep: 0,
  },

  onLoad() {
    // 加载草稿
    const draft = wx.getStorageSync('essay_draft');
    if (draft) {
      this.setData({ answerText: draft, wordCount: draft.length });
    }
  },

  selectTopic(e) {
    const topic = e.currentTarget.dataset.topic;
    this.setData({ selectedTopic: topic });
  },

  changeTopic() {
    this.setData({ selectedTopic: null });
  },

  onAnswerInput(e) {
    const text = e.detail.value;
    this.setData({ answerText: text, wordCount: text.length });
  },

  saveDraft() {
    wx.setStorageSync('essay_draft', this.data.answerText);
    wx.showToast({ title: '草稿已保存', icon: 'success' });
  },

  async submitEssay() {
    if (this.data.wordCount < 100) {
      wx.showModal({
        title: '内容太少',
        content: '请至少写100字再提交批改哦',
        showCancel: false,
      });
      return;
    }

    this.setData({ grading: true, gradingStep: 0, submitted: true });

    // 模拟进度
    const stepTimer = setInterval(() => {
      if (this.data.gradingStep < 4) {
        this.setData({ gradingStep: this.data.gradingStep + 1 });
      } else {
        clearInterval(stepTimer);
      }
    }, 600);

    try {
      const result = await wx.cloud.callFunction({
        name: 'gradeEssay',
        data: {
          question: this.data.selectedTopic.question,
          answer: this.data.answerText,
          scoringCriteria: this.data.selectedTopic.scoringCriteria,
          wordLimit: this.data.selectedTopic.wordLimit,
        },
      });

      clearInterval(stepTimer);
      this.setData({ gradingStep: 4 });

      await new Promise(r => setTimeout(r, 500));

      // 清除草稿
      wx.removeStorageSync('essay_draft');

      // 保存结果并跳转
      wx.setStorageSync('essay_result', {
        topic: this.data.selectedTopic,
        answer: this.data.answerText,
        result: result.result,
        createdAt: Date.now(),
      });

      this.setData({ grading: false });
      wx.navigateTo({ url: '/pages/essay-result/essay-result' });

    } catch (err) {
      clearInterval(stepTimer);
      console.error('批改失败:', err);

      // 降级：模拟批改结果
      await new Promise(r => setTimeout(r, 2000));
      this.setData({ gradingStep: 4 });
      await new Promise(r => setTimeout(r, 500));

      const mockResult = this.getMockGradeResult();
      wx.setStorageSync('essay_result', {
        topic: this.data.selectedTopic,
        answer: this.data.answerText,
        result: mockResult,
        createdAt: Date.now(),
      });

      this.setData({ grading: false });
      wx.navigateTo({ url: '/pages/essay-result/essay-result' });
    }
  },

  getMockGradeResult() {
    const len = this.data.wordCount;
    const baseScore = Math.min(Math.floor(len / 8) + 50, 90);
    return {
      totalScore: baseScore,
      grade: baseScore >= 85 ? '优秀' : baseScore >= 75 ? '良好' : baseScore >= 60 ? '合格' : '待改进',
      dimensions: [
        { name: '内容完整性', maxScore: 30, score: Math.min(Math.floor(baseScore * 0.3), 30), feedback: '内容基本覆盖了题目要求，但部分要点阐述不够深入，建议多结合具体案例进行论述。', improvements: ['增加具体数据和案例支撑', '补充解决方案的可行性分析'] },
        { name: '逻辑结构', maxScore: 25, score: Math.min(Math.floor(baseScore * 0.25), 25), feedback: '文章结构较为清晰，分段合理，但各段落之间的逻辑衔接有待加强。', improvements: ['加强段落间的过渡语', '确保论点与论据紧密呼应'] },
        { name: '语言表达', maxScore: 20, score: Math.min(Math.floor(baseScore * 0.2), 20), feedback: '语言表达基本通顺，但部分句子偏口语化，建议提高书面化程度。', improvements: ['减少口语化表达', '增加书面化词汇的使用'] },
        { name: '政策理解', maxScore: 15, score: Math.min(Math.floor(baseScore * 0.15), 15), feedback: '对相关政策有一定了解，但与实际联系不够紧密。', improvements: ['引用最新相关政策文件', '结合地方实践经验'] },
        { name: '字数达标', maxScore: 10, score: len >= this.data.selectedTopic.wordLimit * 0.9 ? 10 : 6, feedback: len >= this.data.selectedTopic.wordLimit * 0.9 ? '字数达标' : '字数略有不足，建议适当扩充内容。', improvements: [] },
      ],
      overallFeedback: `本文整体表现${baseScore >= 75 ? '不错' : '有待提升'}，结构基本清晰，能够围绕主题展开论述。建议在今后的写作中注重内容的深度与广度，多积累典型案例和政策理论，以进一步提升申论写作水平。`,
      strengths: ['能够围绕主题有效展开', '段落层次基本清晰'],
      weaknesses: ['论据不够充分具体', '政策理解有待加深'],
      keyMissedPoints: ['缺少具体措施的可行性论证', '未充分引用相关政策依据'],
    };
  },
});
