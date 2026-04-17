"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { PropsWithChildren, useEffect, useState } from "react";
import clsx from "clsx";
import { apiClient } from "@/lib/api/client";

const navItems = [
  { href: "/dashboard", label: "仪表盘" },
  { href: "/users", label: "管理员" },
  { href: "/roles", label: "角色权限" },
  { href: "/students", label: "学员数据" },
  { href: "/positions", label: "岗位管理" },
  { href: "/question-bank", label: "题库管理" },
  { href: "/profile", label: "个人中心" },
];

export function AdminShell({ children }: PropsWithChildren) {
  const pathname = usePathname();
  const router = useRouter();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("admin_access_token");
    if (!token) {
      router.replace("/");
      return;
    }

    setReady(false);
    // token 是否可用，以 /auth/me 作为最终判定；失败则清理并回到登录页。
    apiClient
      .get("/auth/me")
      .then(() => setReady(true))
      .catch(() => {
        localStorage.removeItem("admin_access_token");
        localStorage.removeItem("admin_refresh_token");
        router.replace("/");
      });
  }, [router]);

  if (!ready) {
    return (
      <div className="min-h-screen p-6 md:p-10">
        <div className="flex min-h-[70vh] items-center justify-center rounded-2xl glass-panel">
          <p className="text-sm text-slate-300">正在验证登录状态…</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6 md:p-10">
      <div className="mx-auto flex max-w-7xl gap-6">
        <aside className="glass-panel hidden w-60 p-5 md:block">
          <h2 className="display-font mb-8 text-2xl text-white">OpenStar</h2>
          <nav className="space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  "block rounded-xl px-4 py-3 text-sm transition",
                  pathname === item.href
                    ? "bg-blue-500/25 text-blue-100"
                    : "text-slate-300 hover:bg-slate-100/10 hover:text-white",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <button
            className="mt-8 w-full rounded-xl border border-blue-300/30 px-4 py-2 text-sm text-slate-200 hover:bg-blue-500/20"
            onClick={() => {
              localStorage.removeItem("admin_access_token");
              localStorage.removeItem("admin_refresh_token");
              router.replace("/");
            }}
          >
            退出登录
          </button>
        </aside>
        <main className="glass-panel min-h-[80vh] flex-1 p-6 md:p-8">{children}</main>
      </div>
    </div>
  );
}
