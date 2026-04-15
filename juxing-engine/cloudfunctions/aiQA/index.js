// cloudfunctions/aiQA/index.js
// AI 智能答疑云函数

const cloud = require('wx-server-sdk');
cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV });

const tencentcloud = require('tencentcloud-sdk-nodejs');
const HUNYUAN_TIMEOUT_MS = Math.max(5000, Number(process.env.HUNYUAN_TIMEOUT_MS || 20000));

function getCredentials() {
  if (typeof cloud.getVC3Configuration === 'function') {
    const cfg = cloud.getVC3Configuration() || {};
    if (cfg.SecretId && cfg.SecretKey) {
      return { secretId: cfg.SecretId, secretKey: cfg.SecretKey };
    }
  }
  const secretId = process.env.TC_SECRET_ID || process.env.SecretId || '';
  const secretKey = process.env.TC_SECRET_KEY || process.env.SecretKey || '';
  if (!secretId || !secretKey) {
    throw new Error('缺少腾讯云凭证，请配置 TC_SECRET_ID/TC_SECRET_KEY');
  }
  return { secretId, secretKey };
}

const KNOWLEDGE_BASE = [
  { category: '行测', title: '类比推理', content: '类比推理解题方法：找逻辑关系（功能、因果、比喻、词性），逐一比对选项。常见关系：工具-功能、职业-工具、作品-作者等。' },
  { category: '行测', title: '图形推理', content: '图形推理解题规律：1.数量类（点、线、角、面）2.位置类（平移、旋转、翻转）3.样式类（叠加、求同、去异）4.属性类（对称性、曲直性）。' },
  { category: '申论', title: '申论写作框架', content: '申论写作三段式：开头150字（背景+表态），正文500字（3-4个分论点），结尾100字（总结+升华）。对策要具体，避免"加强管理"等空话。' },
  { category: '备考', title: '备考计划', content: '6个月备考规划：1-2月打基础，3-4月强化，5-6月冲刺。每日：行测100题，申论1篇/2天，公基背诵30分钟。' },
  { category: '行测', title: '言语理解', content: '言语理解技巧：主旨题找关键词转折词，意图题注意作者立场，排序题找逻辑起点和衔接词。培养语感，多刷真题。' },
  { category: '公基', title: '法律基础', content: '宪法重点：国体为人民民主专政，政体为人民代表大会制度。民法重点：合同成立三要素（要约、承诺、对价）。' },
];

async function callHunyuanChat(messages) {
  const Hunyuan = tencentcloud.hunyuan.v20230901.Client;
  const client = new Hunyuan({ credential: getCredentials(), region: 'ap-beijing' });
  const response = await Promise.race([
    client.ChatCompletions({
      Model: 'hunyuan-turbos-latest',
      Messages: messages,
      Temperature: 0.5,
      TopP: 0.9,
    }),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error(`混元请求超时(${Math.round(HUNYUAN_TIMEOUT_MS / 1000)}s)`)), HUNYUAN_TIMEOUT_MS)
    ),
  ]);
  return response.Choices[0].Message.Content;
}

// 简单关键词匹配
function searchKnowledge(question) {
  const q = question.toLowerCase();
  const results = [];
  for (const item of KNOWLEDGE_BASE) {
    let score = 0;
    const keys = [item.title, item.category, ...item.content.split(/[，。、]/).slice(0, 5)];
    for (const key of keys) {
      if (q.includes(key.toLowerCase())) score++;
    }
    if (score > 0) results.push({ ...item, score });
  }
  return results.sort((a, b) => b.score - a.score).slice(0, 3);
}

exports.main = async (event, context) => {
  const { question = '', chatHistory = [] } = event;
  const ask = String(question).trim();
  if (!ask) {
    return { success: false, answer: '请输入要咨询的问题。', sources: [] };
  }

  // 检索相关知识
  const relevantDocs = searchKnowledge(ask);
  const contextText = relevantDocs.map(d => `[${d.category}] ${d.title}：${d.content}`).join('\n\n');

  const systemPrompt = `你是公考学习助手"聚星AI"，专注帮助备考学生。
${contextText ? '【参考知识】\n' + contextText + '\n\n' : ''}
回答要求：
- 只回答公考相关问题
- 语言简洁清晰，适合学生理解
- 如涉及解题技巧，给出具体示例
- 如知识库无相关内容，基于已有知识回答`;

  const messages = [
    { Role: 'system', Content: systemPrompt },
    ...chatHistory.slice(-6),
    { Role: 'user', Content: ask },
  ];

  try {
    const answer = await callHunyuanChat(messages);
    return { success: true, answer, sources: relevantDocs.map(d => ({ title: d.title, category: d.category })) };
  } catch (err) {
    console.error('AI问答失败:', err);
    // 降级：直接用知识库回答
    if (relevantDocs.length > 0) {
      return { success: true, answer: `根据知识库，这道题的相关内容如下：\n\n${relevantDocs[0].content}`, sources: [] };
    }
    return { success: false, answer: '抱歉，AI暂时无法回答这个问题，请稍后再试。' };
  }
};
