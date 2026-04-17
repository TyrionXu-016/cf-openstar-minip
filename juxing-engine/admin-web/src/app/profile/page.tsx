"use client";

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

  return (
    <AdminShell>
      <h1 className="display-font text-3xl text-white">个人中心</h1>
      {!me ? (
        <p className="mt-4 text-slate-300">加载中...</p>
      ) : (
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
      )}
    </AdminShell>
  );
}
