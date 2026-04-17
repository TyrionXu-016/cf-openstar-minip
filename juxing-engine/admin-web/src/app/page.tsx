"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { apiClient, LoginResponse } from "@/lib/api/client";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");
    const form = new FormData(event.currentTarget);
    const username = String(form.get("username") ?? "");
    const password = String(form.get("password") ?? "");

    try {
      const res = await apiClient.post<LoginResponse>("/auth/login", { username, password });
      localStorage.setItem("admin_access_token", res.access_token);
      localStorage.setItem("admin_refresh_token", res.refresh_token);
      router.push("/dashboard");
    } catch (err) {
      setError(err instanceof Error ? err.message : "登录失败");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center p-6">
      <section className="glass-panel w-full max-w-md p-8">
        <p className="text-sm uppercase tracking-[0.35em] text-slate-300">OpenStar Admin</p>
        <h1 className="display-font mt-2 text-4xl text-white">运营管理登录</h1>
        <p className="mt-2 text-sm text-slate-300">默认账号：admin / Admin@123456</p>

        <form className="mt-8 space-y-4" onSubmit={onSubmit}>
          <input
            name="username"
            defaultValue="admin"
            className="w-full rounded-xl border border-slate-400/30 bg-slate-800/30 px-4 py-3 text-sm outline-none placeholder:text-slate-400 focus:border-blue-300/60"
            placeholder="用户名"
          />
          <input
            name="password"
            type="password"
            defaultValue="Admin@123456"
            className="w-full rounded-xl border border-slate-400/30 bg-slate-800/30 px-4 py-3 text-sm outline-none placeholder:text-slate-400 focus:border-blue-300/60"
            placeholder="密码"
          />
          {error ? <p className="text-sm text-rose-300">{error}</p> : null}
          <button
            disabled={loading}
            className="w-full rounded-xl bg-[linear-gradient(120deg,#5a8eff,#84b6ff)] px-4 py-3 text-sm font-semibold text-slate-900 transition hover:brightness-110 disabled:opacity-70"
          >
            {loading ? "登录中..." : "进入管理台"}
          </button>
        </form>
      </section>
    </div>
  );
}
