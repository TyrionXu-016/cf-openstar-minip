"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AdminShell } from "@/components/admin-shell";
import { apiClient } from "@/lib/api/client";

type Me = {
  id: number;
  username: string;
  display_name: string;
  roles: string[];
  permissions: string[];
};

export default function ProfilePage() {
  const [me, setMe] = useState<Me | null>(null);

  useEffect(() => {
    apiClient.get<Me>("/auth/me").then(setMe).catch(() => setMe(null));
  }, []);

  const canManageSupport =
    me?.permissions?.includes("role:read") || me?.permissions?.includes("role:write");

  return (
    <AdminShell>
      <h1 className="display-font text-3xl text-white">个人中心</h1>
      {!me ? (
        <p className="mt-4 text-slate-300">加载中...</p>
      ) : (
        <>
          <div className="mt-6 space-y-4 rounded-2xl border border-blue-200/20 bg-slate-900/40 p-6">
            <p>
              <span className="text-slate-300">账号：</span>
              <span className="text-white">{me.username}</span>
            </p>
            <p>
              <span className="text-slate-300">昵称：</span>
              <span className="text-white">{me.display_name}</span>
            </p>
            <p>
              <span className="text-slate-300">角色：</span>
              <span className="text-white">{me.roles.join(", ")}</span>
            </p>
            <div>
              <p className="text-slate-300">权限：</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {me.permissions.map((permission) => (
                  <span key={permission} className="rounded-full bg-blue-500/20 px-3 py-1 text-xs text-blue-100">
                    {permission}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {canManageSupport ? (
            <div className="mt-6 rounded-2xl border border-cyan-200/20 bg-slate-900/40 p-6">
              <h2 className="text-lg font-medium text-white">联系客服</h2>
              <p className="mt-2 text-sm text-slate-300">
                配置小程序「我的 → 联系客服」中的<strong className="text-slate-200">客服电话</strong>与<strong className="text-slate-200">微信二维码图</strong>（可只配其一）。
              </p>
              <Link
                href="/support-wechat"
                className="mt-4 inline-flex rounded-xl bg-cyan-500/25 px-4 py-2 text-sm font-medium text-cyan-100 hover:bg-cyan-500/35"
              >
                进入「联系客服」配置
              </Link>
            </div>
          ) : null}
        </>
      )}
    </AdminShell>
  );
}
