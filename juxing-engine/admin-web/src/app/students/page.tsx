"use client";

import { useEffect, useMemo, useState } from "react";
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

export default function StudentsPage() {
  const [keyword, setKeyword] = useState("");
  const [items, setItems] = useState<StudentItem[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const query = useMemo(() => {
    const p = new URLSearchParams();
    p.set("page", "1");
    p.set("page_size", "100");
    if (keyword.trim()) p.set("keyword", keyword.trim());
    return p.toString();
  }, [keyword]);

  useEffect(() => {
    async function load() {
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
    }
    load();
  }, [query]);

  return (
    <AdminShell>
      <h1 className="display-font text-3xl text-white">学员数据</h1>
      <p className="mt-2 text-sm text-slate-300">展示小程序提交的学员信息，支持按姓名/手机号/专业检索。</p>
      <div className="mt-4 rounded-2xl border border-blue-200/20 bg-slate-900/40 p-4">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <input
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="搜索姓名、手机号、学校或专业"
            className="w-full rounded-xl border border-slate-400/30 bg-slate-700/20 px-3 py-2 text-sm md:max-w-md"
          />
          <span className="text-xs text-slate-300">共 {total} 条</span>
        </div>
        {message ? <p className="mt-3 text-sm text-red-300">{message}</p> : null}
        <div className="mt-4 max-h-[520px] overflow-auto">
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
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td className="px-2 py-4 text-slate-300" colSpan={9}>
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
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </AdminShell>
  );
}

