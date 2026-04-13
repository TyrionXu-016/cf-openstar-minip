// cloudfunctions/ocrRecognize/index.js
// OCR 文字识别云函数

const cloud = require('wx-server-sdk');
cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV });

const tencentcloud = require('tencentcloud-sdk-nodejs');
const { SecretId, SecretKey } = cloud.getVC3Configuration();

async function callHunyuan(prompt) {
  const Hunyuan = tencentcloud.hunyuan.v20230901.Client;
  const client = new Hunyuan({ credential: { secretId: SecretId, secretKey: SecretKey }, region: 'ap-beijing' });
  const response = await client.ChatCompletions({
    Model: 'hunyuan-turbos-latest',
    Messages: [{ Role: 'system', Content: '你负责将OCR识别的原始文字整理为结构化题目格式。' }, { Role: 'user', Content: prompt }],
    Temperature: 0.3,
    MaxTokens: 1500,
  });
  return response.Choices[0].Message.Content;
}

function extractJSON(text) {
  try { return JSON.parse(text); } catch {
    const match = text.match(/(\{[\s\S]*\}|\[[\s\S]*\])/);
    if (match) { try { return JSON.parse(match[1].trim()); } catch { return null; } }
    return null;
  }
}

exports.main = async (event, context) => {
  const { imageUrl } = event;

  if (!imageUrl) {
    return { success: false, error: '缺少图片参数' };
  }

  try {
    // Step 1: 下载图片并调用腾讯云 OCR
    const OCR = tencentcloud.ocr.v20181119.Client;
    const ocrClient = new OCR({ credential: { secretId: SecretId, secretKey: SecretKey }, region: 'ap-guangzhou' });

    const downloadRes = await cloud.downloadFile({ fileID: imageUrl });
    const buffer = downloadRes.fileContent;

    // 调用通用文字识别
    const ocrResult = await ocrClient.GeneralAccurateOCR({ ImageBase64: buffer.toString('base64') });
    const rawText = ocrResult.TextDetections.map(t => t.DetectedText).join('\n');

    // Step 2: LLM 结构化解析
    const parsePrompt = `以下是OCR识别的文字，请整理为标准题目格式并判断题型：
    
${rawText}

输出JSON格式：
{
  "question": "题目正文",
  "options": ["A. 选项", "B. 选项", "C. 选项", "D. 选项"],
  "answer": "A",
  "subject": "行测/申论/公基",
  "difficulty": "简单/中等/困难",
  "knowledgePoint": "知识点分类",
  "explanation": "简要解析（可选）",
  "ocrConfidence": 0.95
}`;

    const parseText = await callHunyuan(parsePrompt);
    const parsed = extractJSON(parseText) || {};

    return {
      success: true,
      rawText,
      parsed: {
        question: parsed.question || rawText,
        options: parsed.options || [],
        answer: parsed.answer || '',
        subject: parsed.subject || '行测',
        difficulty: parsed.difficulty || '中等',
        knowledgePoint: parsed.knowledgePoint || '',
        explanation: parsed.explanation || '',
        ocrConfidence: parsed.ocrConfidence || 0.9,
      },
    };
  } catch (err) {
    console.error('OCR识别失败:', err);
    return { success: false, error: err.message };
  }
};
