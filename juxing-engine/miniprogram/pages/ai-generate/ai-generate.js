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
    genCurrent: 0,
    genTotal: 0,
    genProgressPercent: 0,
    genProgressText: '',
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
    this.setData({
      generating: true,
      genStep: 0,
      genCurrent: 0,
      genTotal: 0,
      genProgressPercent: 0,
      genProgressText: '',
      generatedQuestions: [],
    });

    // 模拟进度步骤
    const stepTimer = setInterval(() => {
      if (this.data.genStep < 3) {
        this.setData({ genStep: this.data.genStep + 1 });
      } else {
        clearInterval(stepTimer);
      }
    }, 800);

    try {
      const targetCount = this.data.selectedType === 'essay' ? 1 : this.data.generateCount;
      const payload = {
        subject: this.data.selectedSubject,
        difficulty: this.data.selectedDifficulty,
        questionType: this.data.selectedType,
        knowledgePoint: this.data.knowledgePoint || '综合',
        count: 1,
      };
      const questions = await this.generateQuestionsSerial(payload, targetCount);

      clearInterval(stepTimer);
      this.setData({ genStep: 3, genProgressPercent: 100, genProgressText: '题目生成完成' });

      await new Promise(resolve => setTimeout(resolve, 500));

      if (!questions.length) {
        throw new Error('云端返回题目为空');
      }

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
        generatedQuestions: this.getMockQuestions().slice(0, this.data.selectedType === 'essay' ? 1 : this.data.generateCount),
      });

      if (!wx.getStorageSync('settings_quiet_cloud_fallback')) {
        wx.showToast({ title: '已使用本地示例题目', icon: 'none' });
      }
    }
  },

  async callGenerateFunction(data) {
    const candidates = ['generateQuestionV2', 'generateQuestion'];
    let lastErr = null;
    for (const name of candidates) {
      try {
        const res = await wx.cloud.callFunction({ name, data });
        return res;
      } catch (err) {
        lastErr = err;
      }
    }
    throw lastErr || new Error('调用云函数失败');
  },

  async generateQuestionsSerial(basePayload, targetCount) {
    this.setData({
      genTotal: targetCount,
      genCurrent: 1,
      genProgressPercent: 0,
      genProgressText: `正在生成第 1/${targetCount} 题`,
    });
    const collected = [];
    for (let i = 0; i < targetCount; i++) {
      const current = i + 1;
      this.setData({
        genCurrent: current,
        genProgressPercent: Math.round((i / targetCount) * 100),
        genProgressText: `正在生成第 ${current}/${targetCount} 题`,
      });

      let lastErr = null;
      for (let attempt = 0; attempt < 2; attempt++) {
        try {
          const result = await this.callGenerateFunction({ ...basePayload, count: 1 });
          const cloudResult = result && result.result ? result.result : {};
          if (cloudResult.success === false) {
            throw new Error(cloudResult.error || '云端生题失败');
          }
          const normalized = this.normalizeQuestions(cloudResult);
          if (!normalized.length) {
            throw new Error('云端返回题目为空');
          }
          const question = { ...normalized[0], id: `${Date.now()}_${i}_${attempt}` };
          collected.push(question);
          this.setData({
            genProgressPercent: Math.round((collected.length / targetCount) * 100),
            genProgressText:
              collected.length >= targetCount
                ? '题目生成完成'
                : `已完成 ${collected.length}/${targetCount} 题，继续生成中`,
          });
          break;
        } catch (err) {
          lastErr = err;
          if (attempt === 1) {
            throw lastErr;
          }
        }
      }
    }
    return collected;
  },

  normalizeQuestions(cloudResult) {
    const list = cloudResult.questions || cloudResult.data || [];
    const rawList = Array.isArray(list) ? list : [list];
    return rawList
      .map((q) => {
        if (!q || typeof q !== 'object') return null;
        const question = q.question || q.title || q.content || '';
        if (!question) return null;

        let options = q.options || [];
        if (Array.isArray(options)) {
          options = options.map((opt, idx) => {
            if (typeof opt === 'string') {
              const cleaned = opt.replace(/^[A-D]\.\s*/i, '').trim();
              const key = String.fromCharCode(65 + idx);
              return { key, text: cleaned || opt };
            }
            return opt;
          });
        } else {
          options = [];
        }

        return {
          ...q,
          question,
          options,
          answer: q.answer || '',
          explanation: q.explanation || q.analysis || '暂无解析',
          difficulty: q.difficulty || '中等',
        };
      })
      .filter(Boolean);
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
    this.setData({
      generatedQuestions: [],
      genStep: 0,
      genCurrent: 0,
      genTotal: 0,
      genProgressPercent: 0,
      genProgressText: '',
    });
  },

  startPractice() {
    // 将生成的题目存入本地，跳转刷题页
    const list = this.data.generatedQuestions || [];
    if (!list.length) {
      wx.showToast({ title: '暂无可练习题目', icon: 'none' });
      return;
    }
    wx.setStorageSync('ai_generated_questions', list);
    wx.setStorageSync('quiz_source', 'ai');
    const app = getApp();
    if (app && app.globalData) {
      app.globalData.pendingQuizSource = 'ai';
    }
    wx.switchTab({ url: '/pages/quiz/quiz' });
  },
});
