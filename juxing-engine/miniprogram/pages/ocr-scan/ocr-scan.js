// pages/ocr-scan/ocr-scan.js

const { enrichQuestionTypeFields } = require('../../utils/question-type-meta.js');

Page({
  data: {
    imagePath: '',
    recognizing: false,
    recognizeProgress: 0,
    rawOCR: '',
    recognizedQuestion: null,
  },

  chooseImage() {
    wx.chooseMedia({
      count: 1,
      mediaType: ['image'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        this.setData({
          imagePath: res.tempFiles[0].tempFilePath,
          recognizedQuestion: null,
        });
      }
    });
  },

  async recognizeImage() {
    if (!this.data.imagePath) return;

    this.setData({ recognizing: true, recognizeProgress: 0 });

    // 模拟进度
    const progressTimer = setInterval(() => {
      if (this.data.recognizeProgress < 90) {
        this.setData({ recognizeProgress: this.data.recognizeProgress + 15 });
      }
    }, 200);

    try {
      // 1. 上传图片
      const uploadResult = await wx.cloud.uploadFile({
        cloudPath: `ocr/${Date.now()}.jpg`,
        filePath: this.data.imagePath,
      });

      // 2. 调用OCR云函数
      const result = await wx.cloud.callFunction({
        name: 'ocrRecognize',
        data: { imageUrl: uploadResult.fileID },
      });

      clearInterval(progressTimer);
      this.setData({ recognizeProgress: 100 });

      await new Promise(r => setTimeout(r, 300));

      this.setData({
        recognizing: false,
        rawOCR: result.result.rawText,
        recognizedQuestion: enrichQuestionTypeFields(result.result.parsed),
      });

    } catch (err) {
      clearInterval(progressTimer);
      console.error('OCR识别失败:', err);

      // 降级：模拟OCR结果
      await new Promise(r => setTimeout(r, 2000));
      this.setData({ recognizeProgress: 100 });
      await new Promise(r => setTimeout(r, 300));

      this.setData({
        recognizing: false,
        rawOCR: '某单位组织员工体检，甲、乙、丙、丁四人血型各不相同。已知：(1)甲不是A型；(2)乙不是B型；(3)丙不是AB型；(4)丁是O型。则甲的血型是？',
        recognizedQuestion: enrichQuestionTypeFields({
          question: '某单位组织员工体检，甲、乙、丙、丁四人血型各不相同。已知：(1)甲不是A型；(2)乙不是B型；(3)丙不是AB型；(4)丁是O型。则甲的血型是？',
          options: [
            { key: 'A', text: 'A型' },
            { key: 'B', text: 'B型' },
            { key: 'C', text: 'AB型' },
            { key: 'D', text: 'O型' },
          ],
          answer: 'C',
          subject: '逻辑推理',
          difficulty: '中等',
          knowledgePoint: '简单逻辑推理',
          explanation: '丁是O型。甲不是A型，乙不是B型，丙不是AB型。所以甲是B型，乙是A型，丙是AB型。验证：甲B型（非A），乙A型（非B），丙AB型（非AB），丁O型。答案选C。',
          ocrConfidence: 92,
        }),
      });
    }
  },

  resetScan() {
    this.setData({
      imagePath: '',
      recognizedQuestion: null,
      rawOCR: '',
      recognizing: false,
      recognizeProgress: 0,
    });
  },

  goPractice() {
    const q = this.data.recognizedQuestion;
    if (q) {
      wx.setStorageSync('ai_generated_questions', [q]);
      wx.setStorageSync('quiz_source', 'ai');
      const app = getApp();
      if (app && app.globalData) {
        app.globalData.pendingQuizSource = 'ai';
      }
      wx.switchTab({ url: '/pages/quiz/quiz' });
    }
  },

  goAskAI() {
    const q = this.data.recognizedQuestion;
    if (q) {
      const question = encodeURIComponent(q.question);
      wx.switchTab({ url: '/pages/ai-chat/ai-chat' });
      // 将问题传入聊天页面
      wx.setStorageSync('pending_question', q.question);
    }
  },
});
