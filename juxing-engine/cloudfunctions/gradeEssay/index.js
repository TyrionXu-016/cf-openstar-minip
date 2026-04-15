// cloudfunctions/gradeEssay/index.js
// 申论 AI 批改云函数

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

/**
 * 从文本中提取JSON
 */
function extractJSON(text) {
  try { return JSON.parse(text); } catch {
    const match = text.match(/```(?:json)?\s*([\s\S]*?)```/) ||
                  text.match(/(\{[\s\S]*\}|\[[\s\S]*\])/);
    if (match) {
      try { return JSON.parse(match[1].trim()); } catch { return null; }
    }
    return null;
  }
}

/**
 * 调用混元 Pro 模型进行批改
 */
async function callHunyuanPro(prompt) {
  const credential = getCredentials();
  const Hunyuan = tencentcloud.hunyuan.v20230901.Client;
  const client = new Hunyuan({
    credential,
    region: 'ap-beijing',
  });

  const response = await client.ChatCompletions({
    Model: 'hunyuan-pro',
    Messages: [
      {
        Role: 'system',
        Content: `你是专业的公务员考试申论阅卷专家，有15年评卷经验。
评分原则：
1. 客观公正，严格按照评分标准打分
2. 反馈要具体、有建设性
3. 优点要明确肯定，不足要指出改进方向
4. 始终输出标准JSON格式`
      },
      {
        Role: 'user',
        Content: prompt
      }
    ],
    Temperature: 0.3,  // 评分用低温度保证稳定性
    TopP: 0.85,
  });

  return response.Choices[0].Message.Content;
}

exports.main = async (event, context) => {
  const { question, answer, scoringCriteria, wordLimit = 800 } = event;

  // 字数检测
  const actualWords = answer.length;

  const prompt = `【题目】
${question}

【考生答案】
${answer}

【字数要求】${wordLimit}字
【实际字数】${actualWords}字

请从以下5个维度进行评分：
${scoringCriteria.map(s => `- ${s.dimension}（满分${s.score}分）：${s.description}`).join('\n')}

输出格式（严格JSON）：
{
  "totalScore": 85,
  "grade": "良好",
  "dimensions": [
    {
      "name": "内容完整性",
      "maxScore": 30,
      "score": 25,
      "feedback": "具体评语（30-60字）",
      "improvements": ["改进建议1", "改进建议2"]
    }
  ],
  "overallFeedback": "总体评语（80-120字）",
  "strengths": ["优点1", "优点2"],
  "weaknesses": ["不足1", "不足2"],
  "keyMissedPoints": ["遗漏要点1", "遗漏要点2"]
}`;

  try {
    const rawResponse = await callHunyuanPro(prompt);
    const result = extractJSON(rawResponse);

    if (!result) {
      throw new Error('无法解析AI批改结果');
    }

    return {
      success: true,
      ...result,
      model: 'hunyuan-pro',
      wordCheck: {
        required: wordLimit,
        actual: actualWords,
        pass: actualWords >= wordLimit * 0.9 && actualWords <= wordLimit * 1.2,
      },
    };
  } catch (err) {
    console.error('批改失败:', err);
    return {
      success: false,
      error: err.message,
      fallback: true,
    };
  }
};
