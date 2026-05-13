"use client";

import { FormEvent, useCallback, useEffect, useMemo, useState } from "react";
import { AdminShell } from "@/components/admin-shell";
import { apiClient } from "@/lib/api/client";

type StudentItem = {
  id: number;
  name: string;
  phone: string;
  age: number;
  gender: string;
  education: string;
  school?: string;
  major: string;
  examType: string;
  source: string;
  createdAt?: string;
};

type ListResponse = {
  data: StudentItem[];
  total: number;
  page: number;
  pageSize: number;
};

const PAGE_SIZE = 50;

export default function StudentsPage() {
  const [keyword, setKeyword] = useState("");
  const [page, setPage] = useState(1);
  const [items, setItems] = useState<StudentItem[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const [edit, setEdit] = useState<StudentItem | null>(null);
  const [migrateOld, setMigrateOld] = useState("");
  const [migrateNew, setMigrateNew] = useState("");
  const [purgePhone, setPurgePhone] = useState("");

  const [statsPhone, setStatsPhone] = useState("");
  const [statsTotal, setStatsTotal] = useState(0);
  const [statsCorrect, setStatsCorrect] = useState(0);
  const [statsDays, setStatsDays] = useState(0);
  const [statsEssay, setStatsEssay] = useState(0);
  const [statsTodayDate, setStatsTodayDate] = useState("");
  const [statsTodayQ, setStatsTodayQ] = useState(0);

  const query = useMemo(() => {
    const p = new URLSearchParams();
    p.set("page", String(page));
    p.set("page_size", String(PAGE_SIZE));
    if (keyword.trim()) p.set("keyword", keyword.trim());
    return p.toString();
  }, [keyword, page]);

  const loadList = useCallback(async () => {
    setLoading(true);
    setMessage("");
    try {
      const res = await apiClient.get<ListResponse>(`/admin/students?${query}`);
      setItems(res.data);
      setTotal(res.total);
    } catch (e) {
      setMessage(e instanceof Error ? e.message : "加载学员数据失败");
    } finally {
      setLoading(false);
    }
  }, [query]);

  useEffect(() => {
    void loadList();
  }, [loadList]);

  useEffect(() => {
    const tp = Math.max(1, Math.ceil(total / PAGE_SIZE));
    setPage((p) => (p > tp ? tp : p));
  }, [total]);

  async function openEdit(it: StudentItem) {
    try {
      const res = await apiClient.get<{ data: StudentItem }>(`/admin/students/${it.id}`);
      setEdit(res.data);
    } catch (e) {
      setMessage(e instanceof Error ? e.message : "加载档案失败");
    }
  }

  async function saveEdit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!edit) return;
    const form = new FormData(e.currentTarget);
    try {
      await apiClient.patch<StudentItem>(`/admin/students/${edit.id}`, {
        name: String(form.get("name") || "").trim() || undefined,
        phone: String(form.get("phone") || "").trim() || undefined,
        age: form.get("age") ? Number(form.get("age")) : undefined,
        gender: String(form.get("gender") || "").trim() || undefined,
        education: String(form.get("education") || "").trim() || undefined,
        school: String(form.get("school") || "").trim() || undefined,
        major: String(form.get("major") || "").trim() || undefined,
        examType: String(form.get("examType") || "").trim() || undefined,
      });
      setMessage("已保存");
      setEdit(null);
      loadList();
    } catch (err) {
      setMessage(err instanceof Error ? err.message : "保存失败");
    }
  }

  async function deleteOne(id: number, name: string) {
    if (!window.confirm(`确定删除学员档案「${name}」#${id}？（不删除学习统计与收藏，仅删本条档案）`)) return;
    try {
      await apiClient.delete(`/admin/students/${id}`);
      setMessage("已删除");
      loadList();
    } catch (e) {
      setMessage(e instanceof Error ? e.message : "删除失败");
    }
  }

  async function dedupe() {
    if (!window.confirm("将合并「同一手机号」的多条档案，只保留最新一条，是否继续？")) return;
    try {
      const res = await apiClient.post<{ removed_profile_rows: number }>("/admin/students/dedupe-phones", {});
      setMessage(`已合并重复手机号，删除多余档案 ${res.removed_profile_rows} 条`);
      loadList();
    } catch (e) {
      setMessage(e instanceof Error ? e.message : "合并失败");
    }
  }

  async function migrate() {
    if (!migrateOld.trim() || !migrateNew.trim()) {
      setMessage("请填写旧号与新号");
      return;
    }
    if (!window.confirm(`将把 ${migrateOld.trim()} 的档案、学习统计、收藏全部迁到 ${migrateNew.trim()}，是否继续？`)) return;
    try {
      const res = await apiClient.post<{ ok: boolean; message: string }>("/admin/students/migrate-phone", {
        old_phone: migrateOld.trim(),
        new_phone: migrateNew.trim(),
      });
      setMessage(res.message || "迁移完成");
      setMigrateOld("");
      setMigrateNew("");
      loadList();
    } catch (e) {
      setMessage(e instanceof Error ? e.message : "迁移失败");
    }
  }

  async function purge() {
    const p = purgePhone.trim();
    if (!p) {
      setMessage("请填写要清空数据的手机号");
      return;
    }
    if (!window.confirm(`将删除手机号 ${p} 下的全部学员档案、学习统计与收藏岗位，不可恢复。确定？`)) return;
    try {
      const res = await apiClient.post<{
        ok: boolean;
        deleted_profiles: number;
        deleted_study_stats_rows: number;
        deleted_favorites: number;
      }>("/admin/students/purge-by-phone", { phone: p });
      setMessage(
        `已清空：档案 ${res.deleted_profiles} 条，学习统计 ${res.deleted_study_stats_rows} 条，收藏 ${res.deleted_favorites} 条`,
      );
      setPurgePhone("");
      loadList();
    } catch (e) {
      setMessage(e instanceof Error ? e.message : "清空失败");
    }
  }

  async function loadStats() {
    const p = statsPhone.trim();
    if (!p) {
      setMessage("请填写手机号再加载统计");
      return;
    }
    try {
      const res = await apiClient.get<{
        data: {
          total: number;
          correct: number;
          days: number;
          essay: number;
          todayDate: string;
          todayQuestions: number;
        };
      }>(`/admin/study-stats?student_phone=${encodeURIComponent(p)}`);
      const d = res.data;
      setStatsTotal(d.total);
      setStatsCorrect(d.correct);
      setStatsDays(d.days);
      setStatsEssay(d.essay);
      setStatsTodayDate(d.todayDate || "");
      setStatsTodayQ(d.todayQuestions);
      setMessage("已加载该号学习统计");
    } catch (e) {
      setMessage(e instanceof Error ? e.message : "加载统计失败");
    }
  }

  async function saveStats(e: FormEvent) {
    e.preventDefault();
    const p = statsPhone.trim();
    if (!p) {
      setMessage("请填写手机号");
      return;
    }
    try {
      await apiClient.patch("/admin/study-stats", {
        student_phone: p,
        total: statsTotal,
        correct: statsCorrect,
        days: statsDays,
        essay: statsEssay,
        today_date: statsTodayDate,
        today_questions: statsTodayQ,
      });
      setMessage("学习统计已覆盖保存");
    } catch (e) {
      setMessage(e instanceof Error ? e.message : "保存统计失败");
    }
  }

  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);

  return (
    <AdminShell>
      <h1 className="display-font text-3xl text-white">学员数据</h1>
      <p className="mt-2 text-sm text-slate-300">
        小程序提交档案时<strong className="text-slate-200">同手机号只保留一条</strong>（自动更新并删重复）。此处可编辑/删单条档案、合并历史重复号、换号迁移、清空某号全部数据，以及<strong
          className="text-slate-200"
        >
          覆盖校正学习统计
        </strong>
        。
      </p>

      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <section className="rounded-2xl border border-blue-200/20 bg-slate-900/40 p-4">
          <h2 className="text-sm font-medium text-white">换号迁移</h2>
          <p className="mt-1 text-xs text-slate-400">把旧手机号的档案、学习统计、收藏合并到新号（档案去重）。</p>
          <div className="mt-2 flex flex-wrap gap-2">
            <input
              value={migrateOld}
              onChange={(e) => setMigrateOld(e.target.value)}
              placeholder="旧手机号"
              className="rounded-lg border border-slate-500/40 bg-slate-800/50 px-2 py-1.5 text-sm"
            />
            <input
              value={migrateNew}
              onChange={(e) => setMigrateNew(e.target.value)}
              placeholder="新手机号"
              className="rounded-lg border border-slate-500/40 bg-slate-800/50 px-2 py-1.5 text-sm"
            />
            <button
              type="button"
              onClick={() => void migrate()}
              className="rounded-lg bg-amber-500/20 px-3 py-1.5 text-xs text-amber-100 hover:bg-amber-500/30"
            >
              执行迁移
            </button>
          </div>
        </section>
        <section className="rounded-2xl border border-red-400/20 bg-slate-900/40 p-4">
          <h2 className="text-sm font-medium text-white">按手机号清空（慎用）</h2>
          <p className="mt-1 text-xs text-slate-400">删除该号下全部档案、学习统计与收藏。</p>
          <div className="mt-2 flex flex-wrap gap-2">
            <input
              value={purgePhone}
              onChange={(e) => setPurgePhone(e.target.value)}
              placeholder="手机号"
              className="rounded-lg border border-slate-500/40 bg-slate-800/50 px-2 py-1.5 text-sm"
            />
            <button
              type="button"
              onClick={() => void purge()}
              className="rounded-lg border border-red-500/50 px-3 py-1.5 text-xs text-red-200 hover:bg-red-500/10"
            >
              清空该号数据
            </button>
          </div>
        </section>
      </div>

      <section className="mt-4 rounded-2xl border border-cyan-200/20 bg-slate-900/40 p-4">
        <h2 className="text-sm font-medium text-white">学习统计（覆盖校正）</h2>
        <p className="mt-1 text-xs text-slate-400">与小程序上报的「取 max」不同，此处直接写入你填的数值。</p>
        <div className="mt-3 flex flex-wrap items-end gap-2">
          <input
            value={statsPhone}
            onChange={(e) => setStatsPhone(e.target.value)}
            placeholder="手机号"
            className="rounded-lg border border-slate-500/40 bg-slate-800/50 px-2 py-1.5 text-sm"
          />
          <button
            type="button"
            onClick={() => void loadStats()}
            className="rounded-lg border border-slate-500/40 px-3 py-1.5 text-xs text-slate-200 hover:bg-white/5"
          >
            加载当前值
          </button>
        </div>
        <form onSubmit={saveStats} className="mt-3 grid gap-2 text-xs md:grid-cols-3 lg:grid-cols-6">
          <label className="text-slate-400">
            做题总数
            <input
              type="number"
              min={0}
              value={statsTotal}
              onChange={(e) => setStatsTotal(Number(e.target.value))}
              className="mt-0.5 w-full rounded border border-slate-600/50 bg-slate-800 px-2 py-1 text-slate-100"
            />
          </label>
          <label className="text-slate-400">
            正确数
            <input
              type="number"
              min={0}
              value={statsCorrect}
              onChange={(e) => setStatsCorrect(Number(e.target.value))}
              className="mt-0.5 w-full rounded border border-slate-600/50 bg-slate-800 px-2 py-1 text-slate-100"
            />
          </label>
          <label className="text-slate-400">
            学习天数
            <input
              type="number"
              min={0}
              value={statsDays}
              onChange={(e) => setStatsDays(Number(e.target.value))}
              className="mt-0.5 w-full rounded border border-slate-600/50 bg-slate-800 px-2 py-1 text-slate-100"
            />
          </label>
          <label className="text-slate-400">
            申论次数
            <input
              type="number"
              min={0}
              value={statsEssay}
              onChange={(e) => setStatsEssay(Number(e.target.value))}
              className="mt-0.5 w-full rounded border border-slate-600/50 bg-slate-800 px-2 py-1 text-slate-100"
            />
          </label>
          <label className="text-slate-400">
            今日日期
            <input
              value={statsTodayDate}
              onChange={(e) => setStatsTodayDate(e.target.value)}
              placeholder="YYYY-MM-DD"
              className="mt-0.5 w-full rounded border border-slate-600/50 bg-slate-800 px-2 py-1 text-slate-100"
            />
          </label>
          <label className="text-slate-400">
            今日做题
            <input
              type="number"
              min={0}
              value={statsTodayQ}
              onChange={(e) => setStatsTodayQ(Number(e.target.value))}
              className="mt-0.5 w-full rounded border border-slate-600/50 bg-slate-800 px-2 py-1 text-slate-100"
            />
          </label>
          <div className="md:col-span-3 lg:col-span-6">
            <button type="submit" className="rounded-lg bg-cyan-500/20 px-4 py-2 text-sm text-cyan-100 hover:bg-cyan-500/30">
              保存统计（覆盖）
            </button>
          </div>
        </form>
      </section>

      <div className="mt-4 rounded-2xl border border-blue-200/20 bg-slate-900/40 p-4">
        <div className="flex flex-col gap-3 md:flex-row md:flex-wrap md:items-center md:justify-between">
          <input
            value={keyword}
            onChange={(e) => {
              setKeyword(e.target.value);
              setPage(1);
            }}
            placeholder="搜索姓名、手机号、学校或专业"
            className="w-full rounded-xl border border-slate-400/30 bg-slate-700/20 px-3 py-2 text-sm md:max-w-md"
          />
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => void loadList()}
              className="rounded-lg border border-slate-500/40 px-3 py-1.5 text-xs text-slate-200 hover:bg-white/5"
            >
              刷新
            </button>
            <button
              type="button"
              onClick={() => void dedupe()}
              className="rounded-lg bg-blue-500/20 px-3 py-1.5 text-xs text-blue-100 hover:bg-blue-500/30"
            >
              合并重复手机号档案
            </button>
            <span className="text-xs text-slate-300">
              共 {total} 条 · 第 {safePage}/{totalPages} 页
            </span>
            <button
              type="button"
              disabled={page <= 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              className="rounded border border-slate-500/50 px-2 py-1 text-xs disabled:opacity-40"
            >
              上一页
            </button>
            <button
              type="button"
              disabled={page >= totalPages}
              onClick={() => setPage((p) => p + 1)}
              className="rounded border border-slate-500/50 px-2 py-1 text-xs disabled:opacity-40"
            >
              下一页
            </button>
          </div>
        </div>
        {message ? <p className="mt-3 text-sm text-blue-200">{message}</p> : null}
        <div className="mt-4 max-h-[480px] overflow-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="text-slate-300">
              <tr>
                <th className="px-2 py-2">姓名</th>
                <th className="px-2 py-2">手机号</th>
                <th className="px-2 py-2">年龄</th>
                <th className="px-2 py-2">性别</th>
                <th className="px-2 py-2">学历</th>
                <th className="px-2 py-2">学校</th>
                <th className="px-2 py-2">专业</th>
                <th className="px-2 py-2">考试类型</th>
                <th className="px-2 py-2">提交时间</th>
                <th className="px-2 py-2">操作</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td className="px-2 py-4 text-slate-300" colSpan={10}>
                    加载中...
                  </td>
                </tr>
              ) : (
                items.map((item) => (
                  <tr key={item.id} className="border-t border-slate-600/30">
                    <td className="px-2 py-2">{item.name}</td>
                    <td className="px-2 py-2">{item.phone}</td>
                    <td className="px-2 py-2">{item.age}</td>
                    <td className="px-2 py-2">{item.gender}</td>
                    <td className="px-2 py-2">{item.education}</td>
                    <td className="px-2 py-2">{item.school || "-"}</td>
                    <td className="px-2 py-2">{item.major}</td>
                    <td className="px-2 py-2">{item.examType}</td>
                    <td className="px-2 py-2">{item.createdAt ? item.createdAt.replace("T", " ").slice(0, 19) : "-"}</td>
                    <td className="whitespace-nowrap px-2 py-2">
                      <button
                        type="button"
                        className="mr-2 text-xs text-blue-300 hover:underline"
                        onClick={() => void openEdit(item)}
                      >
                        编辑
                      </button>
                      <button type="button" className="text-xs text-red-300 hover:underline" onClick={() => void deleteOne(item.id, item.name)}>
                        删除
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {edit ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm">
          <div className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-blue-300/20 bg-slate-900 p-5 shadow-2xl">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg text-white">编辑学员 #{edit.id}</h3>
              <button type="button" className="text-xs text-slate-400 hover:text-white" onClick={() => setEdit(null)}>
                关闭
              </button>
            </div>
            <form onSubmit={saveEdit} className="grid gap-2 text-sm">
              <input name="name" defaultValue={edit.name} className="rounded-lg border border-slate-600/50 bg-slate-800 px-2 py-2" />
              <input name="phone" defaultValue={edit.phone} className="rounded-lg border border-slate-600/50 bg-slate-800 px-2 py-2" />
              <input name="age" type="number" defaultValue={edit.age} className="rounded-lg border border-slate-600/50 bg-slate-800 px-2 py-2" />
              <input name="gender" defaultValue={edit.gender} className="rounded-lg border border-slate-600/50 bg-slate-800 px-2 py-2" />
              <input name="education" defaultValue={edit.education} className="rounded-lg border border-slate-600/50 bg-slate-800 px-2 py-2" />
              <input name="school" defaultValue={edit.school || ""} placeholder="学校" className="rounded-lg border border-slate-600/50 bg-slate-800 px-2 py-2" />
              <input name="major" defaultValue={edit.major} className="rounded-lg border border-slate-600/50 bg-slate-800 px-2 py-2" />
              <input name="examType" defaultValue={edit.examType} className="rounded-lg border border-slate-600/50 bg-slate-800 px-2 py-2" />
              <button type="submit" className="mt-2 rounded-lg bg-blue-400 px-4 py-2 font-medium text-slate-900">
                保存
              </button>
            </form>
          </div>
        </div>
      ) : null}
    </AdminShell>
  );
}
