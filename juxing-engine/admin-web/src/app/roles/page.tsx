"use client";

import { FormEvent, useEffect, useState } from "react";
import { AdminShell } from "@/components/admin-shell";
import { apiClient } from "@/lib/api/client";

type Permission = { id: number; name: string; code: string };
type Role = { id: number; name: string; code: string; permissions: Permission[] };

export default function RolesPage() {
  const [roles, setRoles] = useState<Role[]>([]);
  const [permissions, setPermissions] = useState<Permission[]>([]);

  async function fetchData() {
    const [roleRows, permissionRows] = await Promise.all([
      apiClient.get<Role[]>("/admin/roles"),
      apiClient.get<Permission[]>("/admin/permissions"),
    ]);
    setRoles(roleRows);
    setPermissions(permissionRows);
  }

  async function createRole(formData: FormData) {
    const checkedIds = permissions
      .filter((p) => formData.get(`perm_${p.id}`) === "on")
      .map((p) => p.id);
    await apiClient.post("/admin/roles", {
      code: String(formData.get("code") ?? ""),
      name: String(formData.get("name") ?? ""),
      description: String(formData.get("description") ?? ""),
      permission_ids: checkedIds,
    });
    await fetchData();
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AdminShell>
      <h1 className="display-font text-3xl text-white">角色与权限</h1>
      <p className="mt-2 text-sm text-slate-300">基于 RBAC 管理菜单与接口访问能力</p>

      <form
        className="mt-6 rounded-2xl border border-blue-200/20 bg-slate-900/40 p-4"
        onSubmit={async (event: FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          await createRole(new FormData(event.currentTarget));
          event.currentTarget.reset();
        }}
      >
        <div className="grid gap-3 md:grid-cols-3">
          <input name="code" required placeholder="角色编码" className="rounded-xl border border-slate-400/30 bg-slate-700/20 px-3 py-2 text-sm" />
          <input name="name" required placeholder="角色名称" className="rounded-xl border border-slate-400/30 bg-slate-700/20 px-3 py-2 text-sm" />
          <input name="description" placeholder="角色描述" className="rounded-xl border border-slate-400/30 bg-slate-700/20 px-3 py-2 text-sm" />
        </div>
        <div className="mt-4 grid gap-2 md:grid-cols-2">
          {permissions.map((perm) => (
            <label key={perm.id} className="flex items-center gap-2 text-sm text-slate-200">
              <input type="checkbox" name={`perm_${perm.id}`} />
              <span>{perm.name}</span>
              <span className="text-slate-400">({perm.code})</span>
            </label>
          ))}
        </div>
        <button className="mt-4 rounded-xl bg-blue-400 px-4 py-2 text-sm font-semibold text-slate-900">
          新增角色
        </button>
      </form>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {roles.map((role) => (
          <article key={role.id} className="rounded-2xl border border-blue-200/20 bg-slate-900/40 p-4">
            <h3 className="text-lg font-semibold text-white">{role.name}</h3>
            <p className="mt-1 text-xs uppercase tracking-wider text-blue-300">{role.code}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {role.permissions.map((perm) => (
                <span key={perm.id} className="rounded-full bg-blue-500/20 px-3 py-1 text-xs text-blue-100">
                  {perm.code}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </AdminShell>
  );
}
