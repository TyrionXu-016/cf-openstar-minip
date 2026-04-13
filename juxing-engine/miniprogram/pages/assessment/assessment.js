// pages/assessment/assessment.js
Page({
  data: {
    studentName: '',
    phone: '',
    questionCount: 40,
    difficulty: 'easy'
  },

  onLoad: function(options) {
    // 页面加载
  },

  onNameInput: function(e) {
    this.setData({
      studentName: e.detail.value
    });
  },

  onPhoneInput: function(e) {
    this.setData({
      phone: e.detail.value
    });
  },

  selectCount: function(e) {
    const count = e.currentTarget.dataset.count;
    this.setData({
      questionCount: count
    });
  },

  selectDifficulty: function(e) {
    const difficulty = e.currentTarget.dataset.difficulty;
    this.setData({
      difficulty: difficulty
    });
  },

  startAssessment: function() {
    const { studentName, phone, questionCount, difficulty } = this.data;

    if (!studentName) {
      wx.showToast({
        title: '请输入学员姓名',
        icon: 'none'
      });
      return;
    }

    if (!phone) {
      wx.showToast({
        title: '请输入联系电话',
        icon: 'none'
      });
      return;
    }

    // 显示加载中
    wx.showLoading({
      title: '正在生成题目...',
      mask: true
    });

    // 模拟生成题目
    setTimeout(() => {
      wx.hideLoading();
      
      // 根据选择的数量和难度生成测评
      const assessmentData = {
        studentName: studentName,
        phone: phone,
        questionCount: questionCount,
        difficulty: difficulty,
        createTime: new Date().getTime()
      };

      // 存储测评数据到本地
      wx.setStorageSync('currentAssessment', assessmentData);

      // 跳转到测评页面
      wx.navigateTo({
        url: `/pages/assessment-test/assessment-test?count=${questionCount}&difficulty=${difficulty}`
      });
    }, 1500);
  },

  goBack: function() {
    wx.navigateBack();
  }
});
