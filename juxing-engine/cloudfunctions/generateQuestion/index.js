// cloudfunctions/generateQuestion/index.js
// AI 智能出题云函数

const cloud = require('wx-server-sdk');
cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV });
const tencentcloud = require('tencentcloud-sdk-nodejs');

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

// 难度映射
const DIFFICULTY_MAP = { easy: '简单', medium: '中等', hard: '困难' };
const TYPE_MAP = { single: '单选题', multi: '多选题', judge: '判断题', essay: '申论题' };
const SUBJECT_MAP = { xingce: '行测', shenlun: '申论', gongjiti: '公基' };

/**
 * 构建出题 Prompt
 */
function buildQuestionPrompt(subject, difficulty, questionType, knowledgePoint, count) {
  const subjectName = SUBJECT_MAP[subject] || '行测';
  const diffName = DIFFICULTY_MAP[difficulty] || '中等';
  const typeName = TYPE_MAP[questionType] || '单选题';
  
  if (questionType === 'essay') {
    return `请生成1道公考${subjectName}申论题目，难度为${diffName}，考查知识点：「${knowledgePoint}」。

输出格式（严格JSON，不要包含其他内容）：
{
  "question": "完整的申论题目正文（含材料和问题）",
  "answer": "参考答案要点",
  "explanation": "解题思路和评分要点说明",
  "subject": "${subjectName}",
  "difficulty": "${diffName}"
}`;
  }

  if (questionType === 'judge') {
    return `请生成${count}道公考${subjectName}判断题，难度为${diffName}，考查知识点：「${knowledgePoint}」。

题型定义（必须严格遵守）：
- 「判断题」= 给出**一句陈述**（或一段很短的可判定文字），考生只判断该陈述**为真还是为假**。
- **禁止**出成单选题、多选题、计算四选一、选词填空等带四个无关选项的题型。
- 每道题**只能有 2 个选项**，且选项文案**必须且只能**为下面两行（顺序不可改）：
  "A. 正确"  （表示考生认为题干陈述为**真**）
  "B. 错误"  （表示考生认为题干陈述为**假**）
- "question" 字段**只写题干陈述**（可含简短背景），**不要**把「A. 正确」「B. 错误」或选项列表写进题干。
- answer 只能是单个字母 **A** 或 **B**：题干陈述为真则 **A**，为假则 **B**。
- 解析简要说明为何为真或为假（150 字内）。

输出格式（严格JSON数组，不要包含其他内容）：
[
  {
    "question": "仅题干陈述，一句或一小段可判定文字",
    "options": ["A. 正确", "B. 错误"],
    "answer": "A",
    "explanation": "解析",
    "subject": "${subjectName}",
    "difficulty": "${diffName}",
    "knowledgePoint": "${knowledgePoint}",
    "questionType": "judge"
  }
]`;
  }

  if (questionType === 'multi') {
    return `请生成${count}道公考${subjectName}多选题，难度为${diffName}，考查知识点：「${knowledgePoint}」。

要求（必须遵守）：
1. 每题有且仅有 4 个选项 A–D，可有 2 个或以上正确答案。
2. answer 字段只写字母，不要逗号或空格：例如正确答案为 A 与 C 时写 "AC"（字母按 A–D 顺序排列）。
3. 解析中说明每个选项为何对或错。

输出格式（严格JSON数组，不要包含其他内容）：
[
  {
    "question": "题目正文",
    "options": ["A. 选项1", "B. 选项2", "C. 选项3", "D. 选项4"],
    "answer": "AC",
    "explanation": "解析",
    "subject": "${subjectName}",
    "difficulty": "${diffName}",
    "knowledgePoint": "${knowledgePoint}",
    "questionType": "multi"
  }
]`;
  }

  return `请生成${count}道公考${subjectName}${typeName}，难度为${diffName}，考查知识点：「${knowledgePoint}」。

要求：
1. 题目原创、表述清晰、考点精准
2. 选项设计要有区分度
3. 解析详细、易于理解

输出格式（严格JSON数组，不要包含其他内容）：
[
  {
    "question": "题目正文",
    "options": ["A. 选项1", "B. 选项2", "C. 选项3", "D. 选项4"],
    "answer": "A",
    "explanation": "详细解析（200字内）",
    "subject": "${subjectName}",
    "difficulty": "${diffName}",
    "knowledgePoint": "${knowledgePoint}",
    "questionType": "single"
  }
]`;
}
function extractJSON(text) {
  try {
    // 尝试直接解析
    return JSON.parse(text);
  } catch {
    // 尝试提取JSON块
    const jsonMatch = text.match(/```(?:json)?\s*([\s\S]*?)```/) ||
                      text.match(/(\{[\s\S]*\}|\[[\s\S]*\])/);
    if (jsonMatch) {
      try {
        return JSON.parse(jsonMatch[1].trim());
      } catch {
        return null;
      }
    }
    return null;
  }
}

/**
 * 调用混元大模型
 */
async function callHunyuan(prompt) {
  const credential = getCredentials();
  const Hunyuan = tencentcloud.hunyuan.v20230901.Client;
  const client = new Hunyuan({
    credential,
    region: 'ap-beijing',
  });

  const response = await client.ChatCompletions({
    Model: 'hunyuan-turbos-latest',
    Messages: [
      {
        Role: 'system',
        Content: '你是一位专业的公务员考试出题专家，擅长行测和申论命题。请严格按照要求的JSON格式输出题目。',
      },
      {
        Role: 'user',
        Content: prompt,
      },
    ],
    Temperature: 0.7,
    TopP: 0.9,
  });

  return response.Choices[0].Message.Content;
}

/** 申论固定 1 题；客观题单次 1～5 题，减轻超时又比逐题少轮次 */
function resolveBatchCount(questionType, rawCount) {
  if (questionType === 'essay') return 1;
  const n = parseInt(rawCount, 10);
  if (Number.isNaN(n) || n < 1) return 1;
  return Math.min(n, 5);
}

/** event.count 为 null 时解构默认值不会生效（仅 undefined 才用默认），会拼出「请生成null道」 */
function normalizeIncomingCount(raw) {
  if (raw === undefined || raw === null || raw === '') return 1;
  const n = Number(raw);
  if (!Number.isFinite(n) || n < 1) return 1;
  return Math.floor(n);
}

exports.main = async (event, context) => {
  const { subject = 'xingce', difficulty = 'medium', questionType = 'single', knowledgePoint = '综合' } = event;
  const count = normalizeIncomingCount(event.count);

  try {
    const batch = resolveBatchCount(questionType, count);
    const prompt = buildQuestionPrompt(subject, difficulty, questionType, knowledgePoint, batch);
    const rawResponse = await callHunyuan(prompt);
    const parsed = extractJSON(rawResponse);

    if (!parsed) {
      throw new Error('无法解析AI响应');
    }

    // 统一返回格式
    let questions = Array.isArray(parsed) ? parsed : [parsed];
    
    return {
      success: true,
      questions,
      model: 'hunyuan-turbos-latest',
      usage: { /* token用量 */ },
    };
  } catch (err) {
    console.error('AI生题失败:', err);
    return {
      success: false,
      error: err.message,
      fallback: true,
      // 降级数据由前端提供
    };
  }
};
