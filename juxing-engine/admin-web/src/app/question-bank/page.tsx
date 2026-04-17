"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { AdminShell } from "@/components/admin-shell";
import { apiClient } from "@/lib/api/client";

type Option = { key: string; text: string };
type QuestionItem = {
  id: string;
  category: string;
  subject: string;
  difficulty: string;
  question: string;
  options: Option[];
  answer: string;
  explanation: string;
  source: string;
  updated_at?: string;
};

type ListResponse = {
  data: QuestionItem[];
  total: number;
  page: number;
  pageSize: number;
};

export default function QuestionBankPage() {
  const [items, setItems] = useState<QuestionItem[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [detail, setDetail] = useState<QuestionItem | null>(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [jsonText, setJsonText] = useState("");
  const [recognizeText, setRecognizeText] = useState("");
  const [recognizeMeta, setRecognizeMeta] = useState({ category: "lx", subject: "智能识别", difficulty: "中等" });
  const [message, setMessage] = useState("");
  const [filters, setFilters] = useState({ category: "", subject: "", difficulty: "", keyword: "" });

  const query = useMemo(() => {
    const p = new URLSearchParams();
    p.set("page", "1");
    p.set("page_size", "50");
    if (filters.category) p.set("category", filters.category);
    if (filters.subject) p.set("subject", filters.subject);
    if (filters.difficulty) p.set("difficulty", filters.difficulty);
    if (filters.keyword) p.set("keyword", filters.keyword);
    return p.toString();
  }, [filters]);

  async function loadList() {
    setLoading(true);
    try {
      const res = await apiClient.get<ListResponse>(`/admin/questions?${query}`);
      setItems(res.data);
      setTotal(res.total);
      if (res.data.length === 0) {
        setDetail(null);
      }
    } catch (e) {
      setMessage(e instanceof Error ? e.message : "加载失败");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadList();
  }, [query]);

  async function createOne(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const payload = {
      id: String(form.get("id") || ""),
      category: String(form.get("category") || ""),
      subject: String(form.get("subject") || ""),
      difficulty: String(form.get("difficulty") || ""),
      question: String(form.get("question") || ""),
      options: [
        { key: "A", text: String(form.get("optionA") || "") },
        { key: "B", text: String(form.get("optionB") || "") },
        { key: "C", text: String(form.get("optionC") || "") },
        { key: "D", text: String(form.get("optionD") || "") },
      ].filter((it) => it.text),
      answer: String(form.get("answer") || ""),
      explanation: String(form.get("explanation") || ""),
    };
    try {
      setSubmitting(true);
      await apiClient.post("/admin/questions", payload);
      setMessage("单题保存成功");
      event.currentTarget.reset();
      setShowCreateModal(false);
      loadList();
    } catch (e) {
      setMessage(e instanceof Error ? e.message : "单题保存失败");
    } finally {
      setSubmitting(false);
    }
  }

  async function importJson(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      setSubmitting(true);
      const parsed = JSON.parse(jsonText || "[]");
      const res = await apiClient.post<{ total: number; created: number; updated: number; skipped: number; errors: string[] }>(
        "/admin/questions/import/json",
        { items: parsed, on_conflict: "upsert" },
      );
      setMessage(`JSON 导入完成: 总${res.total}，新建${res.created}，更新${res.updated}，跳过${res.skipped}`);
      loadList();
    } catch (e) {
      setMessage(e instanceof Error ? e.message : "JSON 导入失败");
    } finally {
      setSubmitting(false);
    }
  }

  async function recognizeToJson() {
    if (!recognizeText.trim()) {
      setMessage("请先输入待识别题目文本");
      return;
    }
    try {
      setSubmitting(true);
      const res = await apiClient.post<{ items: QuestionItem[]; raw_json: string }>(
        "/admin/questions/recognize",
        {
          raw_text: recognizeText,
          category: recognizeMeta.category,
          subject: recognizeMeta.subject,
          difficulty: recognizeMeta.difficulty,
        },
      );
      setJsonText(res.raw_json);
      setMessage(`智能识别完成：生成 ${res.items.length} 条题目，已填入 JSON 导入框`);
    } catch (e) {
      setMessage(e instanceof Error ? e.message : "智能识别失败");
    } finally {
      setSubmitting(false);
    }
  }

  async function importFile(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const file = form.get("file");
    if (!(file instanceof File)) return;
    try {
      setSubmitting(true);
      const fd = new FormData();
      fd.append("file", file);
      const res = await apiClient.post<{ total: number; created: number; updated: number; skipped: number; errors: string[] }>(
        "/admin/questions/import/file?on_conflict=upsert",
        fd,
      );
      setMessage(`文件导入完成: 总${res.total}，新建${res.created}，更新${res.updated}，跳过${res.skipped}`);
      loadList();
    } catch (e) {
      setMessage(e instanceof Error ? e.message : "文件导入失败");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <AdminShell>
      <div className="rounded-3xl border border-blue-300/20 bg-gradient-to-br from-blue-500/10 via-slate-900/70 to-cyan-400/5 p-6 shadow-[0_20px_60px_rgba(6,16,39,0.45)]">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="display-font text-3xl text-white">题库管理</h1>
            <p className="mt-2 text-sm text-slate-300">可检索、可批量导入，单题录入改为弹窗操作，页面更专注于列表管理。</p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => setShowCreateModal(true)}
              className="rounded-xl bg-blue-400 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-blue-300"
            >
              + 新增单题
            </button>
            <button
              onClick={loadList}
              className="rounded-xl border border-slate-300/20 px-4 py-2 text-sm text-slate-200 hover:bg-white/5"
            >
              刷新列表
            </button>
          </div>
        </div>
        {message ? <p className="mt-4 rounded-lg bg-blue-400/10 px-3 py-2 text-sm text-blue-100">{message}</p> : null}
      </div>

      <section className="mt-5 rounded-2xl border border-blue-200/20 bg-slate-900/40 p-4">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-lg text-white">筛选条件</h2>
          <span className="text-xs text-slate-400">输入后自动检索</span>
        </div>
        <div className="grid gap-2 md:grid-cols-4">
          <input
            placeholder="类别（如 lx）"
            className="rounded-xl border border-slate-400/30 bg-slate-700/20 px-3 py-2 text-sm"
            onChange={(e) => setFilters((v) => ({ ...v, category: e.target.value }))}
          />
          <input
            placeholder="学科（如 逻辑推理）"
            className="rounded-xl border border-slate-400/30 bg-slate-700/20 px-3 py-2 text-sm"
            onChange={(e) => setFilters((v) => ({ ...v, subject: e.target.value }))}
          />
          <input
            placeholder="难度（简单/中等/困难）"
            className="rounded-xl border border-slate-400/30 bg-slate-700/20 px-3 py-2 text-sm"
            onChange={(e) => setFilters((v) => ({ ...v, difficulty: e.target.value }))}
          />
          <input
            placeholder="关键词（题干/解析）"
            className="rounded-xl border border-slate-400/30 bg-slate-700/20 px-3 py-2 text-sm"
            onChange={(e) => setFilters((v) => ({ ...v, keyword: e.target.value }))}
          />
        </div>
      </section>

      <section className="mt-5 grid gap-4 lg:grid-cols-3">
        <form onSubmit={importJson} className="rounded-2xl border border-blue-200/20 bg-slate-900/40 p-4">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-white">JSON 导入</h3>
            <span className="text-xs text-slate-400">适合开发批量更新</span>
          </div>
          <textarea
            name="jsonText"
            value={jsonText}
            onChange={(e) => setJsonText(e.target.value)}
            className="h-64 w-full rounded-xl border border-slate-400/30 bg-slate-700/20 px-3 py-2 text-xs"
            placeholder='[{"id":"lx999","category":"lx","subject":"逻辑推理","difficulty":"中等","question":"...","options":[{"key":"A","text":"..."}],"answer":"A","explanation":"..."}]'
          />
          <button
            disabled={submitting}
            className="mt-3 rounded-xl bg-blue-400 px-4 py-2 text-sm font-semibold text-slate-900 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {submitting ? "处理中..." : "导入 JSON"}
          </button>
        </form>

        <form onSubmit={importFile} className="rounded-2xl border border-blue-200/20 bg-slate-900/40 p-4">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-white">Excel / CSV 导入</h3>
            <span className="text-xs text-slate-400">适合运营同学批量导入</span>
          </div>
          <div className="space-y-1 text-xs text-slate-300">
            <p>必填列：</p>
            <p className="break-all text-slate-400">
              id, category, subject, difficulty, question, optionA, optionB, answer, explanation
            </p>
          </div>
          <input name="file" type="file" accept=".csv,.xlsx,.xlsm" className="mt-4 text-sm text-slate-200" />
          <button
            disabled={submitting}
            className="mt-4 rounded-xl bg-blue-400 px-4 py-2 text-sm font-semibold text-slate-900 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {submitting ? "处理中..." : "上传并导入"}
          </button>
        </form>

        <div className="rounded-2xl border border-cyan-200/20 bg-slate-900/40 p-4">
          <h3 className="text-white">智能识别</h3>
          <p className="mt-2 text-xs text-slate-300">粘贴原始题目文本，调用大模型自动识别并填入左侧 JSON 导入框。</p>
          <div className="mt-3 grid gap-2 text-sm md:grid-cols-3">
            <input
              value={recognizeMeta.category}
              onChange={(e) => setRecognizeMeta((v) => ({ ...v, category: e.target.value }))}
              placeholder="category"
              className="rounded-xl border border-slate-400/30 bg-slate-700/20 px-3 py-2"
            />
            <input
              value={recognizeMeta.subject}
              onChange={(e) => setRecognizeMeta((v) => ({ ...v, subject: e.target.value }))}
              placeholder="subject"
              className="rounded-xl border border-slate-400/30 bg-slate-700/20 px-3 py-2"
            />
            <input
              value={recognizeMeta.difficulty}
              onChange={(e) => setRecognizeMeta((v) => ({ ...v, difficulty: e.target.value }))}
              placeholder="difficulty"
              className="rounded-xl border border-slate-400/30 bg-slate-700/20 px-3 py-2"
            />
          </div>
          <textarea
            value={recognizeText}
            onChange={(e) => setRecognizeText(e.target.value)}
            className="mt-3 h-36 w-full rounded-xl border border-slate-400/30 bg-slate-700/20 px-3 py-2 text-xs"
            placeholder="粘贴 OCR 结果、Word 文本或截图转写结果..."
          />
          <button
            type="button"
            disabled={submitting}
            onClick={recognizeToJson}
            className="mt-3 rounded-xl bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-900 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {submitting ? "识别中..." : "智能识别并填充 JSON"}
          </button>
        </div>
      </section>

      <section className="mt-6 rounded-2xl border border-blue-200/20 bg-slate-900/40 p-4">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-white">题目列表</h3>
          <span className="text-xs text-slate-300">共 {total} 条</span>
        </div>
        <div className="max-h-[440px] overflow-auto rounded-xl border border-slate-600/20">
          <table className="min-w-full text-left text-sm">
            <thead className="sticky top-0 bg-slate-950/90 text-slate-300 backdrop-blur">
              <tr>
                <th className="px-3 py-3">ID</th>
                <th className="px-3 py-3">类别</th>
                <th className="px-3 py-3">学科</th>
                <th className="px-3 py-3">难度</th>
                <th className="px-3 py-3">题干</th>
                <th className="px-3 py-3">操作</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td className="px-3 py-5 text-slate-300" colSpan={6}>
                    加载中...
                  </td>
                </tr>
              ) : (
                items.map((it) => (
                  <tr key={it.id} className="border-t border-slate-600/30 hover:bg-blue-500/5">
                    <td className="px-3 py-3">{it.id}</td>
                    <td className="px-3 py-3">{it.category}</td>
                    <td className="px-3 py-3">{it.subject}</td>
                    <td className="px-3 py-3">{it.difficulty}</td>
                    <td className="max-w-[440px] truncate px-3 py-3">{it.question}</td>
                    <td className="px-3 py-3">
                      <button
                        className="rounded-lg bg-blue-500/20 px-3 py-1 text-xs text-blue-100 hover:bg-blue-500/30"
                        onClick={() => setDetail(it)}
                      >
                        预览
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>

      {detail ? (
        <section className="mt-5 rounded-2xl border border-blue-200/20 bg-slate-900/40 p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-white">题目详情：{detail.id}</h3>
            <button className="rounded bg-slate-700 px-2 py-1 text-xs" onClick={() => setDetail(null)}>关闭</button>
          </div>
          <p className="mt-2 text-sm text-slate-200">{detail.question}</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-300">
            {detail.options.map((op) => (
              <li key={op.key}>
                {op.key}. {op.text}
              </li>
            ))}
          </ul>
          <p className="mt-2 text-sm text-blue-200">答案：{detail.answer}</p>
          <p className="mt-2 text-sm text-slate-300">解析：{detail.explanation}</p>
        </section>
      ) : null}

      {showCreateModal ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm">
          <div className="w-full max-w-2xl rounded-2xl border border-blue-300/20 bg-slate-900 p-5 shadow-2xl">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg text-white">新增单题</h3>
              <button
                onClick={() => setShowCreateModal(false)}
                className="rounded-lg border border-slate-500/40 px-3 py-1 text-xs text-slate-300 hover:bg-slate-800"
              >
                关闭
              </button>
            </div>
            <form onSubmit={createOne}>
              <div className="grid gap-2 text-sm md:grid-cols-2">
                <input name="id" placeholder="id" required className="rounded-xl border border-slate-400/30 bg-slate-700/20 px-3 py-2" />
                <input name="category" placeholder="category" required className="rounded-xl border border-slate-400/30 bg-slate-700/20 px-3 py-2" />
                <input name="subject" placeholder="subject" required className="rounded-xl border border-slate-400/30 bg-slate-700/20 px-3 py-2" />
                <input name="difficulty" placeholder="difficulty" required className="rounded-xl border border-slate-400/30 bg-slate-700/20 px-3 py-2" />
              </div>
              <textarea name="question" placeholder="question" required className="mt-2 w-full rounded-xl border border-slate-400/30 bg-slate-700/20 px-3 py-2 text-sm" />
              <div className="mt-2 grid gap-2 text-sm md:grid-cols-2">
                <input name="optionA" placeholder="optionA" required className="rounded-xl border border-slate-400/30 bg-slate-700/20 px-3 py-2" />
                <input name="optionB" placeholder="optionB" required className="rounded-xl border border-slate-400/30 bg-slate-700/20 px-3 py-2" />
                <input name="optionC" placeholder="optionC" className="rounded-xl border border-slate-400/30 bg-slate-700/20 px-3 py-2" />
                <input name="optionD" placeholder="optionD" className="rounded-xl border border-slate-400/30 bg-slate-700/20 px-3 py-2" />
                <input name="answer" placeholder="answer (A/B/C...)" required className="rounded-xl border border-slate-400/30 bg-slate-700/20 px-3 py-2" />
              </div>
              <textarea
                name="explanation"
                placeholder="explanation"
                required
                className="mt-2 w-full rounded-xl border border-slate-400/30 bg-slate-700/20 px-3 py-2 text-sm"
              />
              <button
                disabled={submitting}
                className="mt-3 rounded-xl bg-blue-400 px-4 py-2 text-sm font-semibold text-slate-900 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitting ? "保存中..." : "保存单题"}
              </button>
            </form>
          </div>
        </div>
      ) : null}
    </AdminShell>
  );
}

