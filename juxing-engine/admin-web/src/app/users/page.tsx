"use client";

import { FormEvent, useEffect, useState } from "react";
import { AdminShell } from "@/components/admin-shell";
import { apiClient } from "@/lib/api/client";

type UserItem = {
  id: number;
  username: string;
  display_name: string;
  is_active: boolean;
  roles: { id: number; name: string; code: string }[];
};

type RoleItem = { id: number; name: string; code: string };

export default function UsersPage() {
  const [users, setUsers] = useState<UserItem[]>([]);
  const [roles, setRoles] = useState<RoleItem[]>([]);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    setLoading(true);
    try {
      const [u, r] = await Promise.all([
        apiClient.get<UserItem[]>("/admin/users"),
        apiClient.get<RoleItem[]>("/admin/roles"),
      ]);
      setUsers(u);
      setRoles(r);
    } finally {
      setLoading(false);
    }
  }

  async function createUser(formData: FormData) {
    const username = String(formData.get("username") ?? "");
    const displayName = String(formData.get("displayName") ?? "");
    const password = String(formData.get("password") ?? "");
    const roleId = Number(formData.get("roleId") ?? "0");
    await apiClient.post("/admin/users", {
      username,
      display_name: displayName,
      password,
      role_ids: roleId ? [roleId] : [],
    });
    await fetchData();
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AdminShell>
      <h1 className="display-font text-3xl text-white">管理员管理</h1>
      <p className="mt-2 text-sm text-slate-300">支持新增管理员并分配角色</p>

      <form
        className="mt-6 grid gap-3 rounded-2xl border border-blue-200/20 bg-slate-900/40 p-4 md:grid-cols-4"
        onSubmit={async (event: FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          await createUser(new FormData(event.currentTarget));
          event.currentTarget.reset();
        }}
      >
        <input name="username" required placeholder="用户名" className="rounded-xl border border-slate-400/30 bg-slate-700/20 px-3 py-2 text-sm" />
        <input name="displayName" required placeholder="显示名" className="rounded-xl border border-slate-400/30 bg-slate-700/20 px-3 py-2 text-sm" />
        <input name="password" required placeholder="初始密码" className="rounded-xl border border-slate-400/30 bg-slate-700/20 px-3 py-2 text-sm" />
        <select name="roleId" className="rounded-xl border border-slate-400/30 bg-slate-700/20 px-3 py-2 text-sm">
          <option value="">选择角色</option>
          {roles.map((role) => (
            <option key={role.id} value={role.id}>
              {role.name}
            </option>
          ))}
        </select>
        <button className="rounded-xl bg-blue-400 px-4 py-2 text-sm font-semibold text-slate-900 md:col-span-4 md:justify-self-start">
          新增管理员
        </button>
      </form>

      <div className="mt-6 overflow-hidden rounded-2xl border border-blue-200/20">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-slate-900/70 text-slate-300">
            <tr>
              <th className="px-4 py-3">用户名</th>
              <th className="px-4 py-3">显示名</th>
              <th className="px-4 py-3">角色</th>
              <th className="px-4 py-3">状态</th>
            </tr>
          </thead>
          <tbody className="bg-slate-800/20">
            {loading ? (
              <tr>
                <td colSpan={4} className="px-4 py-8 text-center text-slate-300">
                  加载中...
                </td>
              </tr>
            ) : (
              users.map((user) => (
                <tr key={user.id} className="border-t border-slate-600/30">
                  <td className="px-4 py-3">{user.username}</td>
                  <td className="px-4 py-3">{user.display_name}</td>
                  <td className="px-4 py-3">{user.roles.map((role) => role.name).join(" / ")}</td>
                  <td className="px-4 py-3">{user.is_active ? "启用" : "禁用"}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </AdminShell>
  );
}
