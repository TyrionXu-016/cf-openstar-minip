// pages/ai-chat/ai-chat.js

const QUICK_QUESTIONS = [
  '行测逻辑推理有什么技巧？',
  '申论写作框架怎么搭建？',
  '如何制定公考备考计划？',
  '数量关系解题有捷径吗？',
  '言语理解怎么提高正确率？',
  '公基哪些知识点最重要？',
];

const KNOWLEDGE_BASE = {
  '行测': `行测备考技巧：

**1. 言语理解**
• 关键词法：关注转折词（但是、然而）、因果词（因此、所以）
• 语境分析法：根据上下文推断词语含义
• 平时多积累高频成语和实词

**2. 数量关系**
• 代入排除法：选项代入验证
• 方程法：设未知数找等量关系
• 数字特性法：奇偶性、整除特性
• 建议每天做20道数量题

**3. 判断推理**
• 图形推理：位置→样式→属性→数量
• 定义判断：抓住定义关键词
• 类比推理：找逻辑关系（种属、组成、功能等）
• 逻辑判断：加强/削弱论证

**4. 资料分析**
• 熟记公式：增长量、增长率、比重等
• 学会估算：减少计算量
• 找准数据：注意时间范围和单位`,

  '申论': `申论写作技巧：

**三段式结构：**

📌 **开头（150字）**
背景引入 → 问题陈述 → 亮明观点

📌 **正文（500字）**
• 分论点1 + 论据 + 对策
• 分论点2 + 论据 + 对策
• 分论点3 + 论据 + 对策

📌 **结尾（100字）**
总结回扣 → 升华展望

**高分技巧：**
• 开头简洁有力，直击主题
• 对策要具体可操作，避免空话
• 多用政策语言和数据支撑
• 字迹工整，卷面整洁`,

  '备考': `科学备考计划（6个月）：

🔵 **第1-2月：基础阶段**
• 行测：每天3小时，学完5大模块
• 申论：了解题型和基本答题思路
• 公基：每天背诵30分钟

🟡 **第3-4月：强化阶段**
• 专项突破薄弱模块
• 申论每周写2篇
• 开始积累时政素材

🔴 **第5-6月：冲刺阶段**
• 每天1套真题
• 严格计时训练
• 错题复盘总结

**每日安排：**
• 行测：100道题
• 申论：1篇/2天
• 复盘：30分钟`,

  '面试': `结构化面试技巧：

**1. 综合分析类**
• 表明观点（赞同/反对/辩证）
• 分析原因/影响
• 提出对策

**2. 计划组织类**
• 明确目的
• 计划准备
• 组织实施
• 总结汇报

**3. 人际沟通类**
• 表明态度
• 沟通解决
• 总结提升

**4. 应急应变类**
• 分析情况
• 确定任务
• 解决问题
• 总结避免

**高分要点：**
• 语言流畅、逻辑清晰
• 结合岗位实际
• 展现为民服务意识`,

  'default': `这是个好问题！关于公考备考，建议你从以下几个方面入手：

1. **了解考情**：先做一套真题，了解考试内容和自己的基础

2. **系统学习**：按模块逐一突破，行测5大模块 + 申论

3. **专项训练**：针对薄弱模块重点突破

4. **真题实战**：多做历年真题，熟悉出题规律

5. **错题复盘**：整理错题，分析错误原因

具体想了解哪个模块？可以告诉我：
• 行测备考技巧
• 申论写作方法
• 备考计划制定
• 面试技巧等

我会给你详细的解答！💪`
};

Page({
  data: {
    messages: [],
    inputText: '',
    typing: false,
    scrollToId: '',
    quickQuestions: QUICK_QUESTIONS,
    msgIdCounter: 0,
    chatHistory: [],
  },

  onLoad() {
    // 添加欢迎消息
    if (!wx.getStorageSync('chat_welcomed')) {
      const welcomeMsg = {
        id: 0,
        role: 'assistant',
        content: '👋 你好！我是聚星引擎AI学习助手。\n\n我可以帮你解答：\n• 行测各模块的解题技巧\n• 申论写作方法和技巧\n• 公考备考计划制定\n• 面试技巧指导\n• 任何公考相关问题\n\n有什么想问的，直接说！'
      };
      this.setData({ messages: [welcomeMsg] });
      wx.setStorageSync('chat_welcomed', true);
    } else {
      const savedMessages = wx.getStorageSync('chat_messages') || [];
      this.setData({ messages: savedMessages });
    }
    this.scrollToBottom();
  },

  onInput(e) {
    this.setData({ inputText: e.detail.value });
  },

  sendQuickQuestion(e) {
    const q = e.currentTarget.dataset.q;
    this.setData({ inputText: q });
    this.sendMessage();
  },

  async sendMessage() {
    const text = this.data.inputText.trim();
    if (!text || this.data.typing) return;

    const msgId = ++this.data.msgIdCounter;
    const userMsg = { id: msgId, role: 'user', content: text };

    this.setData({
      messages: [...this.data.messages, userMsg],
      inputText: '',
      typing: true,
    });

    this.scrollToBottom();

    // 模拟AI思考延迟
    setTimeout(() => {
      const answer = this.getLocalAnswer(text);
      this.addAIMessage(answer);
    }, 800);
  },

  addAIMessage(content) {
    const msgId = ++this.data.msgIdCounter;
    const aiMsg = { id: msgId, role: 'assistant', content };

    this.setData({
      messages: [...this.data.messages, aiMsg],
      typing: false,
    });

    wx.setStorageSync('chat_messages', this.data.messages);
    this.scrollToBottom();
  },

  getLocalAnswer(question) {
    const q = question.toLowerCase();
    
    if (q.includes('行测') || q.includes('逻辑') || q.includes('言语') || q.includes('数量') || q.includes('资料')) {
      return KNOWLEDGE_BASE['行测'];
    }
    
    if (q.includes('申论') || q.includes('写作') || q.includes('大作文')) {
      return KNOWLEDGE_BASE['申论'];
    }
    
    if (q.includes('备考') || q.includes('计划') || q.includes('复习') || q.includes('准备')) {
      return KNOWLEDGE_BASE['备考'];
    }
    
    if (q.includes('面试')) {
      return KNOWLEDGE_BASE['面试'];
    }
    
    return KNOWLEDGE_BASE['default'];
  },

  scrollToBottom() {
    setTimeout(() => {
      this.setData({ scrollToId: 'chat-bottom' });
    }, 100);
  },

  clearChat() {
    wx.showModal({
      title: '清空对话',
      content: '确定要清空所有对话记录吗？',
      success: (res) => {
        if (res.confirm) {
          this.setData({ messages: [], chatHistory: [] });
          wx.removeStorageSync('chat_messages');
          
          // 添加欢迎消息
          const welcomeMsg = {
            id: 0,
            role: 'assistant',
            content: '👋 对话已清空！\n\n有什么公考问题，继续问我吧！'
          };
          this.setData({ messages: [welcomeMsg] });
        }
      }
    });
  },
});
