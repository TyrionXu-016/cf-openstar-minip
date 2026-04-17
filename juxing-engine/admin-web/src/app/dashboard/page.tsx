"use client";

import { useEffect, useState } from "react";
import { AdminShell } from "@/components/admin-shell";
import { StatsChart } from "@/components/stats-chart";
import { apiClient } from "@/lib/api/client";

type DashboardSummary = {
  admin_count: number;
  role_count: number;
  permission_count: number;
  position_count: number;
};

export default function DashboardPage() {
  const [summary, setSummary] = useState<DashboardSummary | null>(null);
  const [reindexing, setReindexing] = useState(false);
  const [reindexMsg, setReindexMsg] = useState<string>("");

  useEffect(() => {
    apiClient
      .get<DashboardSummary>("/admin/dashboard/summary")
      .then(setSummary)
      .catch(() => setSummary(null));
  }, []);

  async function handleReindex() {
    try {
      setReindexing(true);
      setReindexMsg("已开始重建语义索引，稍后在岗位推荐中生效…");
      await apiClient.post("/admin/semantic/reindex", {});
    } catch (e) {
      setReindexMsg(e instanceof Error ? e.message : "重建失败，请稍后重试");
    } finally {
      setReindexing(false);
      setTimeout(() => setReindexMsg(""), 5000);
    }
  }

  const stats = [
    { label: "管理员总数", value: summary ? String(summary.admin_count) : "--" },
    { label: "角色模板", value: summary ? String(summary.role_count) : "--" },
    { label: "权限节点", value: summary ? String(summary.permission_count) : "--" },
    { label: "岗位数据", value: summary ? String(summary.position_count) : "--" },
  ];

  return (
    <AdminShell>
      <header>
        <p className="text-sm text-slate-300">控制台总览</p>
        <h1 className="display-font mt-2 text-4xl text-white">运营数据中心</h1>
      </header>

      <section className="mt-8 grid gap-4 md:grid-cols-4">
        {stats.map((item) => (
          <article key={item.label} className="rounded-2xl border border-blue-200/20 bg-slate-800/30 p-4">
            <p className="text-sm text-slate-300">{item.label}</p>
            <p className="mt-2 text-3xl font-semibold text-white">{item.value}</p>
          </article>
        ))}
      </section>

      <section className="mt-4 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm text-slate-300">语义知识库需要在你更新岗位数据后手动重建一次。</p>
          {reindexMsg ? <p className="mt-2 text-sm text-blue-200">{reindexMsg}</p> : null}
        </div>
        <button
          disabled={reindexing}
          onClick={handleReindex}
          className="shrink-0 rounded-xl bg-[linear-gradient(120deg,#5a8eff,#84b6ff)] px-4 py-2 text-sm font-semibold text-slate-900 transition hover:brightness-110 disabled:opacity-70"
        >
          {reindexing ? "重建中…" : "重建语义索引"}
        </button>
      </section>

      <section className="mt-6 rounded-2xl border border-blue-200/20 bg-slate-900/40 p-4">
        <h2 className="text-lg font-semibold text-white">近 7 日管理活跃度</h2>
        <StatsChart />
      </section>
    </AdminShell>
  );
}
