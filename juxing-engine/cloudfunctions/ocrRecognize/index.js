// cloudfunctions/ocrRecognize/index.js
// OCR 文字识别云函数

const cloud = require('wx-server-sdk');
cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV });

const tencentcloud = require('tencentcloud-sdk-nodejs');
const HUNYUAN_TIMEOUT_MS = Math.max(8000, Number(process.env.HUNYUAN_TIMEOUT_MS || 25000));
const OCR_TIMEOUT_MS = Math.max(8000, Number(process.env.OCR_TIMEOUT_MS || 20000));
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

async function callHunyuan(prompt) {
  const credential = getCredentials();
  const Hunyuan = tencentcloud.hunyuan.v20230901.Client;
  const client = new Hunyuan({ credential, region: 'ap-beijing' });
  const response = await Promise.race([
    client.ChatCompletions({
      Model: 'hunyuan-turbos-latest',
      Messages: [{ Role: 'system', Content: '你负责将OCR识别的原始文字整理为结构化题目格式。' }, { Role: 'user', Content: prompt }],
      Temperature: 0.3,
    }),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error(`混元请求超时(${Math.round(HUNYUAN_TIMEOUT_MS / 1000)}s)`)), HUNYUAN_TIMEOUT_MS)
    ),
  ]);
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
    const credential = getCredentials();
    // Step 1: 下载图片并调用腾讯云 OCR
    const OCR = tencentcloud.ocr.v20181119.Client;
    const ocrClient = new OCR({ credential, region: 'ap-guangzhou' });

    const downloadRes = await cloud.downloadFile({ fileID: imageUrl });
    const buffer = downloadRes.fileContent;

    // 调用通用文字识别
    const ocrResult = await Promise.race([
      ocrClient.GeneralAccurateOCR({ ImageBase64: buffer.toString('base64') }),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error(`OCR请求超时(${Math.round(OCR_TIMEOUT_MS / 1000)}s)`)), OCR_TIMEOUT_MS)
      ),
    ]);
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
