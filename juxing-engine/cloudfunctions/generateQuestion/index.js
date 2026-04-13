// cloudfunctions/generateQuestion/index.js
// AI 智能出题云函数

const cloud = require('wx-server-sdk');
cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV });

const TcbRouter = require('tcb-router');
const tencentcloud = require('tencentcloud-sdk-nodejs');

// 腾讯云认证配置
const { SecretId, SecretKey } = cloud.getVC3Configuration();

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
    "knowledgePoint": "${knowledgePoint}"
  }
]`;
}

/**
 * 从文本中提取JSON
 */
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
  const Hunyuan = tencentcloud.hunyuan.v20230901.Client;
  const client = new Hunyuan({
    credential: { secretId: SecretId, secretKey: SecretKey },
    region: 'ap-beijing',
  });

  const response = await client.ChatCompletions({
    Model: 'hunyuan-turbos-latest',
    Messages: [
      {
        Role: 'system',
        Content: '你是一位专业的公务员考试出题专家，擅长行测和申论命题。请严格按照要求的JSON格式输出题目。'
      },
      {
        Role: 'user',
        Content: prompt
      }
    ],
    Temperature: 0.7,
    TopP: 0.9,
    MaxTokens: 2000,
  });

  return response.Choices[0].Message.Content;
}

exports.main = async (event, context) => {
  const { subject = 'xingce', difficulty = 'medium', questionType = 'single', knowledgePoint = '综合', count = 3 } = event;

  try {
    const prompt = buildQuestionPrompt(subject, difficulty, questionType, knowledgePoint, count);
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
