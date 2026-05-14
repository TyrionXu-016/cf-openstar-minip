// pages/ai-generate/ai-generate.js

const { questionTypeLabel } = require('../../utils/question-type-meta.js');

const {
  OBJECTIVE_TYPES,
  SHENLUN_TYPES,
  buildKnowledgeTierState,
  questionTypesForSubject,
  getShenlunMajorValues,
  getShenlunMajorFromPart,
  findMajorKeyContainingSub,
  findShenlunMajorKeyForSub,
  buildShenlunMajors,
} = require('../../utils/exam-taxonomy.js');


/** 申论手填里若出现跨多个题型，只保留先出现的那一题型相关片段 */
function normalizeShenlunKnowledgePoint(raw) {
  const t = (raw || '').trim();
  if (!t) return { text: '', hadMultipleQuick: false, changed: false };
  const majorValues = getShenlunMajorValues();
  const parts = splitKnowledgeHighlightParts(t);
  const majorOf = (p) => getShenlunMajorFromPart(p, majorValues);
  const majorSeen = [];
  for (const p of parts) {
    const mj = majorOf(p);
    if (mj && majorSeen.indexOf(mj) === -1) majorSeen.push(mj);
  }
  if (majorSeen.length <= 1) {
    return { text: t, hadMultipleQuick: false, changed: false };
  }
  const keep = majorSeen[0];
  const nextParts = parts.filter((p) => {
    const mj = majorOf(p);
    return mj == null || mj === keep;
  });
  const text = nextParts.join('、');
  return { text, hadMultipleQuick: true, changed: text !== t };
}

/** 输入框展示文案 → 云端「考查知识点」完整说明（含知识模块/全模块随机） */
function deriveCloudKnowledgePoint(d) {
  const raw = (d.knowledgePoint || '').trim();
  if (d.selectedSubject === 'shenlun') {
    if (d.knowledgeRandomInMajor && (d.knowledgeMajorValue || '').trim()) {
      const major = String(d.knowledgeMajorValue).trim();
      return `${major}（请在本题型内随机选取一具体小考点命题，勿命制其他题型内容）`;
    }
    if (!raw) return '综合';
    const { text } = normalizeShenlunKnowledgePoint(raw);
    return text || '综合';
  }
  if (d.knowledgeRandomAllModules) {
    if (d.selectedSubject === 'xingce') {
      return '行测客观题（请在常识、言语、数量、判断、资料五大知识模块内随机选一具体小考点或子题型命题，勿超出行测范畴）';
    }
    if (d.selectedSubject === 'gongjiti') {
      return '公共基础知识（请在法律、政治、经济、人文历史、科技生活、公文各知识模块内随机选一具体考点命题）';
    }
  }
  if (d.knowledgeRandomInMajor && (d.knowledgeMajorValue || '').trim()) {
    const major = String(d.knowledgeMajorValue).trim();
    return `${major}（请在本知识模块内随机选取一具体小题型或子考点命题，勿命制其他知识模块内容）`;
  }
  return raw || '综合';
}

/** 将知识点拆成多条（支持顿号、中英文逗号） */
function splitKnowledgePoints(raw) {
  const t = (raw || '').trim();
  if (!t) return ['综合'];
  const arr = t.split(/[,，、]/g).map((x) => x.trim()).filter(Boolean);
  return arr.length ? arr : ['综合'];
}

/** 输入框考点拆成片段（空为 []），用于快捷标签高亮；与顿号/逗号组合规则一致 */
function splitKnowledgeHighlightParts(raw) {
  const t = (raw || '').trim();
  if (!t) return [];
  return t.split(/[,，、]/g).map((x) => x.trim()).filter(Boolean);
}

/** 单次生成上限；勿用 this.xxx，部分环境下 Page 自定义字段未挂到实例会导致 Math.min(n, undefined) → NaN */
const MAX_GENERATE_COUNT = 20;
const CLOUD_BATCH_SIZE = 3;

Page({
  data: {
    subjects: [
      { id: 'xingce', name: '行测' },
      { id: 'shenlun', name: '申论' },
      { id: 'gongjiti', name: '公基' },
    ],
    questionTypes: OBJECTIVE_TYPES,
    difficulties: [
      { id: 'easy', name: '简单', icon: '🟢' },
      { id: 'medium', name: '中等', icon: '🟡' },
      { id: 'hard', name: '困难', icon: '🔴' },
    ],
    selectedSubject: 'xingce',
    selectedSubjectName: '行测',
    selectedType: 'single',
    selectedDifficulty: 'medium',
    knowledgePoint: '',
    knowledgeSelectedParts: [],
    knowledgeBlockTags: [],
    knowledgeQuanMajor: null,
    knowledgeSubTags: [],
    selectedMajorKey: '',
    knowledgeMajorValue: '',
    knowledgeRandomInMajor: false,
    knowledgeRandomAllModules: false,
    knowledgeQuickTags: [],
    knowledgeInputPlaceholder: '',
    generateCount: 3,
    generating: false,
    genStep: 0,
    genCurrent: 0,
    genTotal: 0,
    genProgressPercent: 0,
    genProgressText: '',
    generatedQuestions: [],
  },

  onLoad(options) {
    const o = options || {};
    const subRaw = o.subject != null ? String(o.subject).trim() : '';
    const kpRaw = o.kp != null ? String(o.kp).trim() : '';
    const majorRaw = o.major != null ? String(o.major).trim() : '';
    const typeRaw = o.type != null ? String(o.type).trim() : '';
    const hasDeepLink = !!(subRaw || kpRaw || majorRaw || typeRaw);

    if (!hasDeepLink) {
      const t = buildKnowledgeTierState(this.data.selectedSubject, this.data.selectedType, '');
      this.setData(t);
      return;
    }

    let subject = subRaw;
    if (!['xingce', 'shenlun', 'gongjiti'].includes(subject)) subject = 'xingce';

    const types = questionTypesForSubject(subject);
    let selectedType = typeRaw;
    if (!selectedType) selectedType = subject === 'shenlun' ? 'essay' : 'single';
    if (!types.some((t) => t.id === selectedType)) selectedType = types[0].id;

    let kp = '';
    try {
      kp = o.kp ? decodeURIComponent(String(o.kp)) : '';
    } catch (e) {
      kp = String(o.kp || '');
    }
    kp = String(kp).trim();

    let majorKey = majorRaw;
    if (subject === 'shenlun') {
      if (majorKey && !buildShenlunMajors().some((m) => m.key === majorKey)) majorKey = '';
      if (kp && !majorKey) majorKey = findShenlunMajorKeyForSub(kp);
    } else if (kp && !majorKey) {
      majorKey = findMajorKeyContainingSub(subject, selectedType, kp);
    }

    const subjectRow = this.data.subjects.find((s) => s.id === subject);
    const tier = buildKnowledgeTierState(subject, selectedType, majorKey);

    let nextCount = Math.floor(Number(this.data.generateCount));
    if (!Number.isFinite(nextCount) || nextCount < 1) nextCount = 3;
    if (selectedType === 'essay') nextCount = 1;
    else nextCount = Math.max(3, Math.min(nextCount, MAX_GENERATE_COUNT));

    this.setData({
      selectedSubject: subject,
      selectedSubjectName: subjectRow ? subjectRow.name : '行测',
      questionTypes: types,
      selectedType,
      generateCount: nextCount,
      ...tier,
      knowledgePoint: kp,
      knowledgeSelectedParts: splitKnowledgeHighlightParts(kp),
      knowledgeRandomInMajor: false,
      knowledgeRandomAllModules: false,
      knowledgeMajorValue: '',
    });
  },

  selectSubject(e) {
    const id = e.currentTarget.dataset.id;
    const subject = this.data.subjects.find(s => s.id === id);
    const types = questionTypesForSubject(id);
    let nextType = this.data.selectedType;
    if (!types.some((t) => t.id === nextType)) {
      nextType = types[0].id;
    }
    let nextCount = Math.floor(Number(this.data.generateCount));
    if (!Number.isFinite(nextCount) || nextCount < 1) nextCount = 3;
    if (nextType === 'essay') {
      nextCount = 1;
    } else if (this.data.selectedType === 'essay') {
      nextCount = Math.max(3, Math.min(nextCount, MAX_GENERATE_COUNT));
    }
    const kp = this.data.knowledgePoint || '';
    const tier = buildKnowledgeTierState(id, nextType, '');
    this.setData({
      selectedSubject: id,
      selectedSubjectName: subject.name,
      questionTypes: types,
      selectedType: nextType,
      generateCount: nextCount,
      ...tier,
      knowledgeRandomInMajor: false,
      knowledgeRandomAllModules: false,
      knowledgeMajorValue: '',
      knowledgeSelectedParts: splitKnowledgeHighlightParts(kp),
    });
  },

  selectType(e) {
    const id = e.currentTarget.dataset.id;
    const kp = this.data.knowledgePoint || '';
    const tier = buildKnowledgeTierState(this.data.selectedSubject, id, '');
    this.setData({
      selectedType: id,
      ...tier,
      knowledgeRandomInMajor: false,
      knowledgeRandomAllModules: false,
      knowledgeMajorValue: '',
      knowledgeSelectedParts: splitKnowledgeHighlightParts(kp),
    });
  },

  selectDifficulty(e) {
    this.setData({ selectedDifficulty: e.currentTarget.dataset.id });
  },

  onKnowledgeInput(e) {
    const v = e.detail.value || '';
    this.setData({
      knowledgePoint: v,
      knowledgeSelectedParts: splitKnowledgeHighlightParts(v),
      knowledgeRandomInMajor: false,
      knowledgeRandomAllModules: false,
      knowledgeMajorValue: '',
    });
  },

  onTapKnowledgeMajor(e) {
    const key = e.currentTarget.dataset.key;
    const majors = []
      .concat(this.data.knowledgeBlockTags || [])
      .concat(this.data.knowledgeQuanMajor ? [this.data.knowledgeQuanMajor] : []);
    const m = majors.find((x) => x.key === key);
    if (!m) return;
    if (this.data.selectedMajorKey === key) {
      let nextKp = this.data.knowledgePoint || '';
      let nextParts = splitKnowledgeHighlightParts(nextKp);
      if (this.data.knowledgeRandomAllModules && nextKp.indexOf('全模块') !== -1) {
        nextKp = '';
        nextParts = [];
      } else if (this.data.knowledgeRandomInMajor && nextKp.indexOf('模块内随机') !== -1) {
        nextKp = '';
        nextParts = [];
      }
      this.setData({
        selectedMajorKey: '',
        knowledgeSubTags: [],
        knowledgeRandomInMajor: false,
        knowledgeRandomAllModules: false,
        knowledgeMajorValue: '',
        knowledgePoint: nextKp,
        knowledgeSelectedParts: nextParts,
      });
      return;
    }
    const subs = m.subs || [];
    if (key === 'quan') {
      this.setData({
        selectedMajorKey: 'quan',
        knowledgeSubTags: subs,
        knowledgeRandomAllModules: true,
        knowledgeRandomInMajor: false,
        knowledgeMajorValue: '',
        knowledgePoint: '全模块（随机）',
        knowledgeSelectedParts: splitKnowledgeHighlightParts('全模块（随机）'),
      });
      return;
    }
    this.setData({
      selectedMajorKey: key,
      knowledgeSubTags: subs,
      knowledgeRandomAllModules: false,
      knowledgeRandomInMajor: true,
      knowledgeMajorValue: m.value,
      knowledgePoint: `${m.value}（模块内随机）`,
      knowledgeSelectedParts: splitKnowledgeHighlightParts(`${m.value}（模块内随机）`),
    });
  },

  onTapQuickKnowledge(e) {
    const value = e.currentTarget.dataset.value;
    const fromSub = !!e.currentTarget.dataset.fromsub;
    if (!value) return;

    if (fromSub && (this.data.knowledgeRandomInMajor || this.data.knowledgeRandomAllModules)) {
      this.setData({
        knowledgeRandomInMajor: false,
        knowledgeRandomAllModules: false,
        knowledgeMajorValue: '',
        knowledgePoint: value,
        knowledgeSelectedParts: splitKnowledgeHighlightParts(value),
      });
      return;
    }

    /** 申论：当前题型下小考点单选，再点同一标签取消 */
    if (this.data.selectedSubject === 'shenlun' && fromSub) {
      const subs = this.data.knowledgeSubTags || [];
      const subValSet = new Set(subs.map((t) => t && t.value).filter(Boolean));
      if (subValSet.size) {
        const parts = splitKnowledgeHighlightParts(this.data.knowledgePoint || '');
        const withoutSubs = parts.filter((p) => !subValSet.has(p));
        const hadThis = parts.indexOf(value) !== -1;
        if (hadThis) {
          const newKp = withoutSubs.join('、');
          this.setData({
            knowledgePoint: newKp,
            knowledgeSelectedParts: splitKnowledgeHighlightParts(newKp),
          });
          return;
        }
        const newKp = withoutSubs.concat([value]).join('、');
        this.setData({
          knowledgePoint: newKp,
          knowledgeSelectedParts: splitKnowledgeHighlightParts(newKp),
        });
        return;
      }
    }

    const parts = splitKnowledgeHighlightParts(this.data.knowledgePoint || '');
    const idx = parts.indexOf(value);
    if (idx === -1) {
      const cur = (this.data.knowledgePoint || '').trim();
      const newKp = cur ? `${cur}、${value}` : value;
      this.setData({
        knowledgePoint: newKp,
        knowledgeSelectedParts: splitKnowledgeHighlightParts(newKp),
      });
      return;
    }
    parts.splice(idx, 1);
    const newKp = parts.join('、');
    this.setData({
      knowledgePoint: newKp,
      knowledgeSelectedParts: parts.slice(),
    });
  },

  increaseCount() {
    if (this.data.selectedType === 'essay') return;
    let n = Math.floor(Number(this.data.generateCount));
    if (!Number.isFinite(n) || n < 1) n = 3;
    if (n < MAX_GENERATE_COUNT) {
      this.setData({ generateCount: n + 1 });
    }
  },

  decreaseCount() {
    if (this.data.selectedType === 'essay') return;
    let n = Math.floor(Number(this.data.generateCount));
    if (!Number.isFinite(n) || n < 1) n = 3;
    if (n > 1) {
      this.setData({ generateCount: n - 1 });
    }
  },

  async startGenerate() {
    let stepTimer = null;

    this.setData({
      generating: true,
      genStep: 0,
      genCurrent: 0,
      genTotal: 0,
      genProgressPercent: 0,
      genProgressText: '',
      generatedQuestions: [],
    });

    stepTimer = setInterval(() => {
      if (this.data.genStep < 3) {
        this.setData({ genStep: this.data.genStep + 1 });
      } else if (stepTimer) {
        clearInterval(stepTimer);
        stepTimer = null;
      }
    }, 800);

    const isEssay = this.data.selectedType === 'essay';
    let targetCount = isEssay ? 1 : Math.floor(Number(this.data.generateCount));
    if (!Number.isFinite(targetCount) || targetCount < 1) targetCount = 3;
    targetCount = Math.min(targetCount, MAX_GENERATE_COUNT);
    this._generateTargetCount = targetCount;

    try {
      let kpForCloud = this.data.knowledgePoint || '';
      if (this.data.selectedSubject === 'shenlun') {
        const { text, changed } = normalizeShenlunKnowledgePoint(kpForCloud.trim());
        if (changed) {
          kpForCloud = text;
          this.setData({
            knowledgePoint: text,
            knowledgeSelectedParts: splitKnowledgeHighlightParts(text),
          });
        }
      }
      const cloudKp = deriveCloudKnowledgePoint({ ...this.data, knowledgePoint: kpForCloud });
      const parts = splitKnowledgePoints(cloudKp);
      const sub = this.data.selectedSubject;
      const objective = sub === 'xingce' || sub === 'gongjiti';

      let knowledgePoint = cloudKp;
      if (
        objective &&
        this.data.selectedType !== 'essay' &&
        targetCount === 1 &&
        parts.length > 1
      ) {
        knowledgePoint = parts[0];
        if (!wx.getStorageSync('settings_quiet_cloud_fallback')) {
          wx.showToast({
            title: `单题仅主考点：${knowledgePoint}`,
            icon: 'none',
            duration: 2200,
          });
        }
      }

      const payload = {
        subject: sub,
        difficulty: this.data.selectedDifficulty,
        questionType: this.data.selectedType,
        knowledgePoint,
        count: 1,
      };
      const questions = await this.generateQuestionsSerial(payload, targetCount);

      if (stepTimer) {
        clearInterval(stepTimer);
        stepTimer = null;
      }
      this.setData({ genStep: 3, genProgressPercent: 100, genProgressText: '题目生成完成' });

      await new Promise((resolve) => setTimeout(resolve, 500));

      if (!questions.length) {
        throw new Error('云端返回题目为空');
      }

      this.setData({
        generating: false,
        generatedQuestions: questions,
      });
    } catch (err) {
      if (stepTimer) {
        clearInterval(stepTimer);
        stepTimer = null;
      }
      console.error('AI生题失败:', err);

      await new Promise((resolve) => setTimeout(resolve, 2000));
      this.setData({
        genStep: 3,
      });
      await new Promise((resolve) => setTimeout(resolve, 500));

      const fallbackN = Math.min(
        MAX_GENERATE_COUNT,
        Math.max(1, Math.floor(Number(this._generateTargetCount)) || 3),
      );
      this.setData({
        generating: false,
        generatedQuestions: this.getMockQuestions().slice(
          0,
          this.data.selectedType === 'essay' ? 1 : fallbackN,
        ),
      });

      if (!wx.getStorageSync('settings_quiet_cloud_fallback')) {
        wx.showToast({ title: '已使用本地示例题目', icon: 'none' });
      }
    }
  },

  async callGenerateFunction(data) {
    const candidates = ['generateQuestionV2', 'generateQuestion'];
    let lastErr = null;
    for (const name of candidates) {
      try {
        const res = await wx.cloud.callFunction({ name, data });
        return res;
      } catch (err) {
        lastErr = err;
      }
    }
    throw lastErr || new Error('调用云函数失败');
  },

  async generateQuestionsSerial(basePayload, targetCount) {
    let safeTotal = Math.floor(Number(targetCount));
    if (!Number.isFinite(safeTotal) || safeTotal < 1) safeTotal = 1;
    safeTotal = Math.min(safeTotal, MAX_GENERATE_COUNT);
    targetCount = safeTotal;

    const parts = splitKnowledgePoints(basePayload.knowledgePoint);
    const useRotate = parts.length > 1 && targetCount > 1;
    const defaultKp =
      basePayload.knowledgePoint && String(basePayload.knowledgePoint).trim()
        ? String(basePayload.knowledgePoint).trim()
        : '综合';

    this.setData({
      genTotal: targetCount,
      genCurrent: 0,
      genProgressPercent: 0,
      genProgressText: `准备生成共 ${targetCount} 题`,
    });
    const collected = [];
    let round = 0;
    while (collected.length < targetCount) {
      const remaining = targetCount - collected.length;
      const batch = Math.max(
        1,
        useRotate ? Math.min(1, remaining) : Math.min(remaining, CLOUD_BATCH_SIZE),
      );
      const knowledgePoint = useRotate ? parts[collected.length % parts.length] : defaultKp;
      round += 1;
      this.setData({
        genCurrent: collected.length + 1,
        genProgressPercent: Math.round((collected.length / targetCount) * 100),
        genProgressText: useRotate
          ? `第 ${round} 轮：考点「${knowledgePoint}」（${collected.length + 1}/${targetCount}）`
          : `第 ${round} 轮：请求 ${batch} 题（已完成 ${collected.length}/${targetCount}）`,
      });

      let lastErr = null;
      for (let attempt = 0; attempt < 2; attempt++) {
        try {
          const result = await this.callGenerateFunction({
            ...basePayload,
            count: batch,
            knowledgePoint,
          });
          const cloudResult = result && result.result ? result.result : {};
          if (cloudResult.success === false) {
            throw new Error(cloudResult.error || '云端生题失败');
          }
          const normalized = this.normalizeQuestions(
            cloudResult,
            basePayload.questionType,
            basePayload.subject === 'shenlun' ? knowledgePoint : '',
          );
          if (!normalized.length) {
            throw new Error('云端返回题目为空');
          }
          for (let j = 0; j < normalized.length && collected.length < targetCount; j++) {
            const q = normalized[j];
            collected.push({ ...q, id: `${Date.now()}_${collected.length}_${round}_${attempt}` });
          }
          this.setData({
            genProgressPercent: Math.round((collected.length / targetCount) * 100),
            genProgressText:
              collected.length >= targetCount
                ? '题目生成完成'
                : `已完成 ${collected.length}/${targetCount} 题，继续生成中`,
          });
          break;
        } catch (err) {
          lastErr = err;
          if (attempt === 1) {
            throw lastErr;
          }
        }
      }
    }
    return collected;
  },

  normalizeQuestions(cloudResult, questionTypeHint, knowledgePointHint) {
    const list = cloudResult.questions || cloudResult.data || [];
    const rawList = Array.isArray(list) ? list : [list];
    const kpHint =
      knowledgePointHint != null && knowledgePointHint !== undefined
        ? String(knowledgePointHint).trim()
        : '';
    return rawList
      .map((q) => {
        if (!q || typeof q !== 'object') return null;
        const question = q.question || q.title || q.content || '';
        if (!question) return null;

        let qType = (q.questionType || questionTypeHint || 'single').toString().toLowerCase().trim();
        if (!['single', 'multi', 'judge', 'essay'].includes(qType)) {
          qType = (questionTypeHint || 'single').toString().toLowerCase().trim();
        }

        let options = q.options || [];
        if (Array.isArray(options)) {
          options = options.map((opt, idx) => {
            if (typeof opt === 'string') {
              const cleaned = opt.replace(/^[A-D]\.\s*/i, '').trim();
              const key = String.fromCharCode(65 + idx);
              return { key, text: cleaned || opt };
            }
            return opt;
          });
        } else {
          options = [];
        }

        if (qType === 'judge') {
          options = [
            { key: 'A', text: '正确' },
            { key: 'B', text: '错误' },
          ];
        } else if (qType === 'essay') {
          options = [];
        }

        let answer = (q.answer != null ? String(q.answer) : '').trim();
        if (qType === 'judge') {
          const up = answer.toUpperCase();
          if (up === 'A' || up === 'B') {
            answer = up.charAt(0);
          } else {
            const compact = answer.replace(/\s/g, '');
            if (/^(正确|对|√|T|TRUE)$/i.test(compact)) answer = 'A';
            else if (/^(错误|错|×|F|FALSE)$/i.test(compact)) answer = 'B';
            else if (/^[AB]$/i.test(answer)) answer = answer.toUpperCase().charAt(0);
            else answer = 'A';
          }
        } else if (qType === 'multi') {
          const letters = answer.toUpperCase().match(/[A-Z]/g) || [];
          answer = [...new Set(letters)].sort().join('');
        }

        return {
          ...q,
          questionType: qType,
          questionTypeName: questionTypeLabel(qType) || questionTypeLabel(questionTypeHint) || '单选题',
          question,
          options,
          answer,
          explanation: q.explanation || q.analysis || '暂无解析',
          difficulty: q.difficulty || '中等',
          knowledgePoint:
            qType === 'essay'
              ? (kpHint || (q.knowledgePoint != null ? String(q.knowledgePoint).trim() : '') || '')
              : q.knowledgePoint != null
                ? String(q.knowledgePoint)
                : undefined,
        };
      })
      .filter(Boolean);
  },

  getMockQuestions() {
    return [
      {
        questionType: 'single',
        questionTypeName: '单选题',
        question: `在一次考试中，甲的成绩比乙高10分，乙的成绩比丙高5分，丁的成绩是甲成绩的90%。如果丙的成绩是70分，那么丁的成绩是？`,
        options: [
          { key: 'A', text: '76.5分' },
          { key: 'B', text: '77分' },
          { key: 'C', text: '76分' },
          { key: 'D', text: '75.5分' },
        ],
        answer: 'A',
        difficulty: '中等',
        explanation: '丙=70分，乙=70+5=75分，甲=75+10=85分，丁=85×90%=76.5分。',
      },
      {
        questionType: 'single',
        questionTypeName: '单选题',
        question: `某镇有居民2000户，其中农业户占60%，非农业户中有50%是工人。则该镇非农业户中工人有多少户？`,
        options: [
          { key: 'A', text: '300户' },
          { key: 'B', text: '400户' },
          { key: 'C', text: '500户' },
          { key: 'D', text: '600户' },
        ],
        answer: 'B',
        difficulty: '简单',
        explanation: '非农业户=2000×(1-60%)=800户，工人=800×50%=400户。',
      },
      {
        questionType: 'single',
        questionTypeName: '单选题',
        question: `将下列词语依次填入横线处，最恰当的一组是：工匠精神的核心是_____，是一种对产品精益求精、_____的态度。`,
        options: [
          { key: 'A', text: '专注 / 持之以恒' },
          { key: 'B', text: '坚守 / 追求卓越' },
          { key: 'C', text: '执着 / 精雕细琢' },
          { key: 'D', text: '敬业 / 一丝不苟' },
        ],
        answer: 'C',
        difficulty: '中等',
        explanation: '"执着"强调坚持不懈的精神状态，"精雕细琢"与"对产品精益求精"语义呼应，最为贴切。',
      },
    ];
  },

  resetGenerate() {
    this.setData({
      generatedQuestions: [],
      genStep: 0,
      genCurrent: 0,
      genTotal: 0,
      genProgressPercent: 0,
      genProgressText: '',
    });
  },

  startPractice() {
    const list = this.data.generatedQuestions || [];
    if (!list.length) {
      wx.showToast({ title: '暂无可练习题目', icon: 'none' });
      return;
    }
    wx.setStorageSync('ai_generated_questions', list);
    try {
      wx.setStorageSync('quiz_session_ai_countdown', '1');
    } catch (e) {
      /* ignore */
    }
    wx.navigateTo({ url: '/pages/ai-quiz/ai-quiz' });
  },
});
