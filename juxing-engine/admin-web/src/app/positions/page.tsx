"use client";

import { FormEvent, useCallback, useEffect, useMemo, useState } from "react";
import { AdminShell } from "@/components/admin-shell";
import { apiClient } from "@/lib/api/client";
import { IMPORT_GUIDES } from "@/lib/import-guides";

type PositionItem = {
  id: number;
  name: string;
  category: string;
  subCategory?: string;
  description?: string;
  isThreeFree: boolean;
  payload: Record<string, unknown>;
};

type ListResponse = {
  data: PositionItem[];
  total: number;
  page: number;
  pageSize: number;
};

const PAGE_SIZE = 100;

type ImportSummary = {
  total: number;
  created: number;
  updated: number;
  skipped: number;
  errors?: string[];
  created_ids?: number[];
};

type UndoImportSummary = { deleted: number; missing: number; batch_size: number };

export default function PositionsPage() {
  const [items, setItems] = useState<PositionItem[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [filters, setFilters] = useState({ category: "", keyword: "" });
  const [page, setPage] = useState(1);
  const [detail, setDetail] = useState<PositionItem | null>(null);

  const query = useMemo(() => {
    const p = new URLSearchParams();
    p.set("page", String(page));
    p.set("page_size", String(PAGE_SIZE));
    if (filters.category) p.set("category", filters.category);
    if (filters.keyword) p.set("keyword", filters.keyword);
    return p.toString();
  }, [filters, page]);

  const loadList = useCallback(async () => {
    setLoading(true);
    try {
      const res = await apiClient.get<ListResponse>(`/admin/positions?${query}`);
      setItems(res.data);
      setTotal(res.total);
    } catch (e) {
      setMessage(e instanceof Error ? e.message : "岗位列表加载失败");
    } finally {
      setLoading(false);
    }
  }, [query]);

  useEffect(() => {
    loadList();
  }, [loadList]);

  useEffect(() => {
    if (!detail) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDetail(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [detail]);

  useEffect(() => {
    const tp = Math.max(1, Math.ceil(total / PAGE_SIZE));
    setPage((p) => (p > tp ? tp : p));
  }, [total]);

  async function deleteOne(id: number, name: string) {
    const ok = typeof window !== "undefined" ? window.confirm(`确定删除岗位「${name}」（#${id}）？`) : false;
    if (!ok) return;
    try {
      await apiClient.delete<{ ok: boolean }>(`/admin/positions/${id}`);
      setMessage(`已删除岗位 #${id}`);
      if (detail?.id === id) setDetail(null);
      loadList();
    } catch (e) {
      setMessage(e instanceof Error ? e.message : "删除失败");
    }
  }

  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);
  const rangeStart = total === 0 ? 0 : (safePage - 1) * PAGE_SIZE + 1;
  const rangeEnd = total === 0 ? 0 : Math.min(safePage * PAGE_SIZE, total);

  async function createOne(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const payloadText = String(form.get("payload") || "").trim();
    const payload = payloadText ? JSON.parse(payloadText) : undefined;
    await apiClient.post("/admin/positions", {
      id: Number(form.get("id")),
      name: String(form.get("name") || ""),
      category: String(form.get("category") || "国考"),
      subCategory: String(form.get("subCategory") || ""),
      description: String(form.get("description") || ""),
      isThreeFree: String(form.get("isThreeFree") || "") === "true",
      payload,
    });
    setMessage("岗位保存成功");
    event.currentTarget.reset();
    loadList();
  }

  async function importJson(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const text = String(form.get("jsonText") || "[]");
    const parsed = JSON.parse(text);
    const res = await apiClient.post<ImportSummary>("/admin/positions/import/json", {
      items: parsed,
      on_conflict: "upsert",
    });
    const undoHint = res.created > 0 ? " 本次新建已记入撤销栈，可在列表上方「撤销上次批量导入」按批次回退。" : "";
    setMessage(`JSON 导入完成: 总${res.total}，新建${res.created}，更新${res.updated}，跳过${res.skipped}${undoHint}`);
    loadList();
  }

  async function importFile(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const file = form.get("file");
    if (!(file instanceof File)) return;
    const fd = new FormData();
    fd.append("file", file);
    const res = await apiClient.post<ImportSummary>("/admin/positions/import/file?on_conflict=upsert", fd);
    const undoHint = res.created > 0 ? " 本次新建已记入撤销栈，可在列表上方「撤销上次批量导入」按批次回退。" : "";
    setMessage(`文件导入完成: 总${res.total}，新建${res.created}，更新${res.updated}，跳过${res.skipped}${undoHint}`);
    loadList();
  }

  async function undoLastBatchImport() {
    const ok =
      typeof window !== "undefined"
        ? window.confirm(
            "确定撤销「最近一次」批量导入中新建的记录？\n每次点击只回退一批；再点一次会回退再上一批。\n不会恢复当次导入里被「更新」覆盖的旧内容。",
          )
        : false;
    if (!ok) return;
    try {
      const res = await apiClient.post<UndoImportSummary>("/admin/positions/import/undo", {});
      setMessage(
        `已撤销上一批导入：删除 ${res.deleted} 条岗位（该批新建共 ${res.batch_size} 条，其中 ${res.missing} 条此前已不存在或已删）`,
      );
      loadList();
    } catch (e) {
      setMessage(e instanceof Error ? e.message : "撤销失败");
    }
  }

  return (
    <AdminShell>
      <h1 className="display-font text-3xl text-white">岗位管理</h1>
      <p className="mt-2 text-sm text-slate-300">支持单条新增、JSON 批量导入、Excel/CSV 批量导入。</p>
      {message ? <p className="mt-2 text-sm text-blue-200">{message}</p> : null}

      <section className="mt-5 rounded-2xl border border-blue-200/20 bg-slate-900/40 p-4">
        <h2 className="text-lg text-white">筛选</h2>
        <div className="mt-3 grid gap-2 md:grid-cols-2">
          <input
            placeholder="类别（如 国考）"
            className="rounded-xl border border-slate-400/30 bg-slate-700/20 px-3 py-2 text-sm"
            onChange={(e) => {
              setFilters((v) => ({ ...v, category: e.target.value }));
              setPage(1);
            }}
          />
          <input
            placeholder="关键词（名称/子类/描述）"
            className="rounded-xl border border-slate-400/30 bg-slate-700/20 px-3 py-2 text-sm"
            onChange={(e) => {
              setFilters((v) => ({ ...v, keyword: e.target.value }));
              setPage(1);
            }}
          />
        </div>
      </section>

      <section className="mt-5 grid gap-4 lg:grid-cols-3">
        <form onSubmit={createOne} className="rounded-2xl border border-blue-200/20 bg-slate-900/40 p-4">
          <h3 className="text-white">单条录入</h3>
          <div className="mt-3 space-y-2 text-sm">
            <input name="id" type="number" placeholder="id" required className="w-full rounded-xl border border-slate-400/30 bg-slate-700/20 px-3 py-2" />
            <input name="name" placeholder="name" required className="w-full rounded-xl border border-slate-400/30 bg-slate-700/20 px-3 py-2" />
            <input name="category" placeholder="category" defaultValue="国考" required className="w-full rounded-xl border border-slate-400/30 bg-slate-700/20 px-3 py-2" />
            <input name="subCategory" placeholder="subCategory" className="w-full rounded-xl border border-slate-400/30 bg-slate-700/20 px-3 py-2" />
            <textarea name="description" placeholder="description" className="w-full rounded-xl border border-slate-400/30 bg-slate-700/20 px-3 py-2" />
            <select name="isThreeFree" className="w-full rounded-xl border border-slate-400/30 bg-slate-700/20 px-3 py-2">
              <option value="false">非三不限</option>
              <option value="true">三不限</option>
            </select>
            <textarea
              name="payload"
              placeholder='可选：完整 payload JSON（如 {"tags":["应届"],"difficulty":"中"}）'
              className="h-24 w-full rounded-xl border border-slate-400/30 bg-slate-700/20 px-3 py-2"
            />
            <button className="rounded-xl bg-blue-400 px-4 py-2 text-sm font-semibold text-slate-900">保存岗位</button>
          </div>
        </form>

        <form onSubmit={importJson} className="rounded-2xl border border-blue-200/20 bg-slate-900/40 p-4">
          <h3 className="text-white">JSON 批量导入</h3>
          <textarea
            name="jsonText"
            className="mt-3 h-72 w-full rounded-xl border border-slate-400/30 bg-slate-700/20 px-3 py-2 text-xs"
            placeholder='[{"id":1001,"name":"综合管理岗","category":"国考","subCategory":"综合","description":"...","isThreeFree":false}]'
          />
          <button className="mt-3 rounded-xl bg-blue-400 px-4 py-2 text-sm font-semibold text-slate-900">导入 JSON</button>
        </form>

        <form onSubmit={importFile} className="rounded-2xl border border-blue-200/20 bg-slate-900/40 p-4">
          <h3 className="text-white">Excel/CSV 批量导入</h3>
          <p className="mt-2 text-xs text-slate-300">必填列：id, name；可选：category, subCategory, description, isThreeFree, payload</p>
          <a
            href={IMPORT_GUIDES.positionListTable.href}
            download={IMPORT_GUIDES.positionListTable.downloadFileName}
            className="mt-3 inline-flex w-full items-center justify-center rounded-xl border border-slate-400/40 px-3 py-2 text-center text-sm font-medium text-slate-200 hover:bg-white/5"
          >
            {IMPORT_GUIDES.positionListTable.buttonLabel}
          </a>
          <input name="file" type="file" accept=".csv,.xlsx,.xlsm" className="mt-4 text-sm" />
          <button className="mt-4 rounded-xl bg-blue-400 px-4 py-2 text-sm font-semibold text-slate-900">上传并导入</button>
        </form>
      </section>

      <section className="mt-6 rounded-2xl border border-blue-200/20 bg-slate-900/40 p-4">
        <div className="mb-2 flex flex-wrap items-center justify-between gap-3">
          <h3 className="text-white">岗位列表</h3>
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => void undoLastBatchImport()}
              className="rounded-lg border border-amber-400/50 bg-amber-500/10 px-3 py-1.5 text-xs font-medium text-amber-100 hover:bg-amber-500/20"
            >
              撤销上次批量导入
            </button>
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-300">
            <span>共 {total} 条</span>
            {total > 0 ? (
              <span>
                第 {safePage} / {totalPages} 页（{rangeStart}–{rangeEnd}）
              </span>
            ) : null}
            <div className="flex gap-2">
              <button
                type="button"
                disabled={page <= 1 || loading}
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                className="rounded-lg border border-slate-500/50 px-2 py-1 text-slate-200 disabled:opacity-40"
              >
                上一页
              </button>
              <button
                type="button"
                disabled={page >= totalPages || loading}
                onClick={() => setPage((p) => p + 1)}
                className="rounded-lg border border-slate-500/50 px-2 py-1 text-slate-200 disabled:opacity-40"
              >
                下一页
              </button>
            </div>
          </div>
          </div>
        </div>
        <div className="max-h-[480px] overflow-auto rounded-xl border border-slate-600/20">
          <table className="min-w-full border-collapse text-left text-sm">
            <thead className="border-b border-slate-600/30 text-slate-300">
              <tr>
                <th className="sticky top-0 z-10 bg-slate-950/95 px-2 py-2 backdrop-blur supports-[backdrop-filter]:bg-slate-950/85">
                  ID
                </th>
                <th className="sticky top-0 z-10 bg-slate-950/95 px-2 py-2 backdrop-blur supports-[backdrop-filter]:bg-slate-950/85">
                  名称
                </th>
                <th className="sticky top-0 z-10 bg-slate-950/95 px-2 py-2 backdrop-blur supports-[backdrop-filter]:bg-slate-950/85">类别</th>
                <th className="sticky top-0 z-10 bg-slate-950/95 px-2 py-2 backdrop-blur supports-[backdrop-filter]:bg-slate-950/85">子类</th>
                <th className="sticky top-0 z-10 bg-slate-950/95 px-2 py-2 backdrop-blur supports-[backdrop-filter]:bg-slate-950/85">三不限</th>
                <th className="sticky top-0 z-10 bg-slate-950/95 px-2 py-2 backdrop-blur supports-[backdrop-filter]:bg-slate-950/85">描述</th>
                <th className="sticky top-0 z-10 bg-slate-950/95 px-2 py-2 backdrop-blur supports-[backdrop-filter]:bg-slate-950/85">操作</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td className="px-2 py-4 text-slate-300" colSpan={7}>
                    加载中...
                  </td>
                </tr>
              ) : (
                items.map((it) => (
                  <tr key={it.id} className="border-t border-slate-600/30">
                    <td className="px-2 py-2">{it.id}</td>
                    <td className="max-w-[14rem] px-2 py-2">
                      <span className="line-clamp-2 break-all">{it.name}</span>
                    </td>
                    <td className="px-2 py-2">{it.category}</td>
                    <td className="px-2 py-2">{it.subCategory || "-"}</td>
                    <td className="px-2 py-2">{it.isThreeFree ? "是" : "否"}</td>
                    <td className="max-w-[min(20rem,36vw)] align-top px-2 py-2">
                      <div className="line-clamp-2 whitespace-pre-wrap break-words text-slate-300">{it.description || "-"}</div>
                    </td>
                    <td className="whitespace-nowrap px-2 py-2 align-top">
                      <div className="flex flex-wrap gap-1">
                        <button
                          type="button"
                          className="rounded-lg bg-blue-500/20 px-3 py-1 text-xs text-blue-100 hover:bg-blue-500/30"
                          onClick={() => setDetail(it)}
                        >
                          详情
                        </button>
                        <button
                          type="button"
                          className="rounded-lg border border-red-500/40 px-3 py-1 text-xs text-red-200 hover:bg-red-500/10"
                          onClick={() => void deleteOne(it.id, it.name)}
                        >
                          删除
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>

      {detail ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="position-detail-title"
          onClick={() => setDetail(null)}
        >
          <div
            className="max-h-[85vh] w-full max-w-4xl overflow-hidden rounded-2xl border border-blue-300/20 bg-slate-900 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-3 border-b border-slate-600/40 px-5 py-4">
              <h3 id="position-detail-title" className="text-lg font-medium text-white">
                岗位详情 <span className="text-slate-400">#{detail.id}</span>
              </h3>
              <div className="flex shrink-0 gap-2">
                <button
                  type="button"
                  className="rounded-lg border border-red-500/40 px-3 py-1 text-xs text-red-200 hover:bg-red-500/10"
                  onClick={() => void deleteOne(detail.id, detail.name)}
                >
                  删除
                </button>
                <button
                  type="button"
                  className="rounded-lg border border-slate-500/40 px-3 py-1 text-xs text-slate-300 hover:bg-slate-800"
                  onClick={() => setDetail(null)}
                >
                  关闭
                </button>
              </div>
            </div>
            <div className="max-h-[calc(85vh-5rem)] overflow-y-auto px-5 py-4 text-sm">
              <dl className="grid gap-3 text-slate-200">
                <div>
                  <dt className="text-xs text-slate-500">名称</dt>
                  <dd className="mt-0.5 break-words">{detail.name}</dd>
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="min-w-0">
                      <dt className="text-xs text-slate-500">类别</dt>
                      <dd className="mt-0.5 break-words">{detail.category}</dd>
                    </div>
                    <div className="min-w-0">
                      <dt className="text-xs text-slate-500">三不限</dt>
                      <dd className="mt-0.5">{detail.isThreeFree ? "是" : "否"}</dd>
                    </div>
                  </div>
                  <div className="min-w-0">
                    <dt className="text-xs text-slate-500">子类</dt>
                    <dd className="mt-0.5 break-words text-slate-200">{detail.subCategory || "—"}</dd>
                  </div>
                </div>
                <div>
                  <dt className="text-xs text-slate-500">描述</dt>
                  <dd className="mt-1 whitespace-pre-wrap break-words text-slate-300">{detail.description || "—"}</dd>
                </div>
                <div>
                  <dt className="text-xs text-slate-500">Payload（原始扩展字段）</dt>
                  <dd className="mt-1">
                    <pre className="max-h-48 overflow-auto rounded-lg border border-slate-600/30 bg-slate-950/80 p-3 text-xs text-slate-400">
                      {JSON.stringify(detail.payload ?? {}, null, 2)}
                    </pre>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      ) : null}
    </AdminShell>
  );
}

