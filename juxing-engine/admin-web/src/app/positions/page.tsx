"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { AdminShell } from "@/components/admin-shell";
import { apiClient } from "@/lib/api/client";

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

export default function PositionsPage() {
  const [items, setItems] = useState<PositionItem[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [filters, setFilters] = useState({ category: "", keyword: "" });

  const query = useMemo(() => {
    const p = new URLSearchParams();
    p.set("page", "1");
    p.set("page_size", "100");
    if (filters.category) p.set("category", filters.category);
    if (filters.keyword) p.set("keyword", filters.keyword);
    return p.toString();
  }, [filters]);

  async function loadList() {
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
  }

  useEffect(() => {
    loadList();
  }, [query]);

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
    const res = await apiClient.post<{ total: number; created: number; updated: number; skipped: number; errors: string[] }>(
      "/admin/positions/import/json",
      { items: parsed, on_conflict: "upsert" },
    );
    setMessage(`JSON 导入完成: 总${res.total}，新建${res.created}，更新${res.updated}，跳过${res.skipped}`);
    loadList();
  }

  async function importFile(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const file = form.get("file");
    if (!(file instanceof File)) return;
    const fd = new FormData();
    fd.append("file", file);
    const res = await apiClient.post<{ total: number; created: number; updated: number; skipped: number; errors: string[] }>(
      "/admin/positions/import/file?on_conflict=upsert",
      fd,
    );
    setMessage(`文件导入完成: 总${res.total}，新建${res.created}，更新${res.updated}，跳过${res.skipped}`);
    loadList();
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
            onChange={(e) => setFilters((v) => ({ ...v, category: e.target.value }))}
          />
          <input
            placeholder="关键词（名称/子类/描述）"
            className="rounded-xl border border-slate-400/30 bg-slate-700/20 px-3 py-2 text-sm"
            onChange={(e) => setFilters((v) => ({ ...v, keyword: e.target.value }))}
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
          <input name="file" type="file" accept=".csv,.xlsx,.xlsm" className="mt-4 text-sm" />
          <button className="mt-4 rounded-xl bg-blue-400 px-4 py-2 text-sm font-semibold text-slate-900">上传并导入</button>
        </form>
      </section>

      <section className="mt-6 rounded-2xl border border-blue-200/20 bg-slate-900/40 p-4">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-white">岗位列表</h3>
          <span className="text-xs text-slate-300">共 {total} 条</span>
        </div>
        <div className="max-h-[480px] overflow-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="text-slate-300">
              <tr>
                <th className="px-2 py-2">ID</th>
                <th className="px-2 py-2">名称</th>
                <th className="px-2 py-2">类别</th>
                <th className="px-2 py-2">子类</th>
                <th className="px-2 py-2">三不限</th>
                <th className="px-2 py-2">描述</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td className="px-2 py-4 text-slate-300" colSpan={6}>
                    加载中...
                  </td>
                </tr>
              ) : (
                items.map((it) => (
                  <tr key={it.id} className="border-t border-slate-600/30">
                    <td className="px-2 py-2">{it.id}</td>
                    <td className="px-2 py-2">{it.name}</td>
                    <td className="px-2 py-2">{it.category}</td>
                    <td className="px-2 py-2">{it.subCategory || "-"}</td>
                    <td className="px-2 py-2">{it.isThreeFree ? "是" : "否"}</td>
                    <td className="px-2 py-2 line-clamp-1">{it.description || "-"}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>
    </AdminShell>
  );
}

