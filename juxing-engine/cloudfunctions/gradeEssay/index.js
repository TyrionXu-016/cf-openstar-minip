// cloudfunctions/gradeEssay/index.js
// 申论 AI 批改云函数

const cloud = require('wx-server-sdk');
cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV });

const tencentcloud = require('tencentcloud-sdk-nodejs');
const HUNYUAN_TIMEOUT_MS = Math.max(8000, Number(process.env.HUNYUAN_TIMEOUT_MS || 25000));
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

  const response = await Promise.race([
    client.ChatCompletions({
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
    }),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error(`混元请求超时(${Math.round(HUNYUAN_TIMEOUT_MS / 1000)}s)`)), HUNYUAN_TIMEOUT_MS)
    ),
  ]);

  return response.Choices[0].Message.Content;
}

exports.main = async (event, context) => {
  const { question = '', answer = '', scoringCriteria = [], wordLimit = 800 } = event;
  if (!String(question).trim() || !String(answer).trim()) {
    return { success: false, error: '缺少题目或作答内容', fallback: true };
  }

  // 字数检测
  const actualWords = answer.length;

  const criteriaList = Array.isArray(scoringCriteria) ? scoringCriteria : [];
  const sumMax =
    criteriaList.reduce((s, x) => s + (Number(x && x.score) || 0), 0) || 100;
  const maxScoreHint =
    sumMax > 0
      ? `【重要】本题各维度满分之和为 **${sumMax} 分**。totalScore 必须为 **0～${sumMax}** 的整数；dimensions 中每项 score 不得超过该项 maxScore，各维度 score 之和应与 totalScore 基本一致（允许±2 分误差）。`
      : '';

  const prompt = `【题目】
${question}

【考生答案】
${answer}

【字数要求】${wordLimit}字
【实际字数】${actualWords}字

请从以下维度进行评分（各维度满分见后）：
${criteriaList.map((s) => `- ${s.dimension}（满分${s.score}分）：${s.description}`).join('\n')}

${maxScoreHint}

请**必须**输出可操作的改进信息：weaknesses 至少 2 条（指出具体不足）；keyMissedPoints 至少 1 条（若确实无遗漏可写「题干要点基本覆盖」）；每个 dimension 的 improvements 至少 1 条。

输出格式（严格JSON）：
{
  "totalScore": <0到${sumMax}之间的整数>,
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
