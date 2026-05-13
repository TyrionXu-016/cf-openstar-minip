"use client";

import { FormEvent, useCallback, useEffect, useState } from "react";
import { AdminShell } from "@/components/admin-shell";
import { apiClient } from "@/lib/api/client";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:8080/api/v1";

type Meta = { filename: string; updatedAt: string; sizeBytes: number };
type PhoneMeta = { phone: string; updatedAt: string };

export default function SupportWechatPage() {
  const [hasQr, setHasQr] = useState(false);
  const [meta, setMeta] = useState<Meta | null>(null);
  const [hasPhone, setHasPhone] = useState(false);
  const [phone, setPhone] = useState("");
  const [phoneDraft, setPhoneDraft] = useState("");
  const [phoneMeta, setPhoneMeta] = useState<PhoneMeta | null>(null);
  const [message, setMessage] = useState("");
  const [uploading, setUploading] = useState(false);
  const [savingPhone, setSavingPhone] = useState(false);
  const [previewBust, setPreviewBust] = useState(0);

  const load = useCallback(async () => {
    setMessage("");
    try {
      const res = await apiClient.get<{
        hasQr: boolean;
        meta: Meta | null;
        hasPhone: boolean;
        phone: string | null;
        phoneMeta: PhoneMeta | null;
      }>("/admin/support-wechat");
      setHasQr(res.hasQr);
      setMeta(res.meta);
      setHasPhone(res.hasPhone);
      const p = res.phone || "";
      setPhone(p);
      setPhoneDraft(p);
      setPhoneMeta(res.phoneMeta);
    } catch (e) {
      setMessage(e instanceof Error ? e.message : "加载失败");
    }
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  async function onUpload(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const file = form.get("file");
    if (!(file instanceof File) || file.size === 0) {
      setMessage("请选择图片文件");
      return;
    }
    try {
      setUploading(true);
      setMessage("");
      const fd = new FormData();
      fd.append("file", file);
      await apiClient.post<{ ok: boolean; message: string }>("/admin/support-wechat/qr", fd);
      setMessage("已保存，小程序「联系客服」页将展示最新图片。");
      (e.currentTarget as HTMLFormElement).reset();
      setPreviewBust(Date.now());
      await load();
    } catch (err) {
      setMessage(err instanceof Error ? err.message : "上传失败");
    } finally {
      setUploading(false);
    }
  }

  async function onSavePhone(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      setSavingPhone(true);
      setMessage("");
      await apiClient.patch<{ ok: boolean; message: string }>("/admin/support-wechat/phone", {
        phone: phoneDraft.trim(),
      });
      setMessage("客服电话已保存。");
      await load();
    } catch (err) {
      setMessage(err instanceof Error ? err.message : "保存失败");
    } finally {
      setSavingPhone(false);
    }
  }

  const publicQrSrc = hasQr ? `${API_BASE}/mini/support-wechat/qr?v=${previewBust}` : "";

  return (
    <AdminShell>
      <h1 className="display-font text-3xl text-white">联系客服</h1>
      <p className="mt-2 text-sm text-slate-300">
        可配置<strong className="text-slate-200">客服电话</strong>与<strong className="text-slate-200">二维码图片</strong>（可只配其一或两者都配）。小程序「我的 → 联系客服」将同步展示；图片支持 PNG / JPEG / WebP，最大 2MB。
      </p>

      {message ? <p className="mt-4 rounded-lg bg-blue-400/10 px-3 py-2 text-sm text-blue-100">{message}</p> : null}

      <section className="mt-6 rounded-2xl border border-blue-200/20 bg-slate-900/40 p-5">
        <h2 className="text-sm font-medium text-white">当前状态</h2>
        <ul className="mt-2 list-inside list-disc text-sm text-slate-300">
          <li>客服电话：{hasPhone ? <span className="text-white">{phone}</span> : <span className="text-amber-200/90">未配置</span>}</li>
          {phoneMeta ? (
            <li className="list-none pl-4 text-xs text-slate-400">电话最近更新：{phoneMeta.updatedAt.replace("T", " ").slice(0, 19)}Z</li>
          ) : null}
          <li className="mt-1">
            二维码图片：
            {hasQr && meta ? (
              <span className="text-white">
                已上传（{meta.filename}，{meta.updatedAt.replace("T", " ").slice(0, 19)}Z）
              </span>
            ) : (
              <span className="text-amber-200/90">未上传</span>
            )}
          </li>
        </ul>
        {!hasPhone && !hasQr ? (
          <p className="mt-2 text-sm text-amber-200/90">至少配置电话或图片之一，小程序「联系客服」页才有内容。</p>
        ) : null}
        <button
          type="button"
          onClick={() => void load()}
          className="mt-3 rounded-lg border border-slate-500/40 px-3 py-1.5 text-xs text-slate-200 hover:bg-white/5"
        >
          刷新状态
        </button>
      </section>

      <section className="mt-6 rounded-2xl border border-emerald-200/20 bg-slate-900/40 p-5">
        <h2 className="text-sm font-medium text-white">客服电话</h2>
        <p className="mt-1 text-xs text-slate-400">11 位中国大陆手机号；留空并保存可清除。</p>
        <form onSubmit={onSavePhone} className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-end">
          <input
            value={phoneDraft}
            onChange={(e) => setPhoneDraft(e.target.value)}
            placeholder="如 13800138000"
            maxLength={11}
            className="w-full max-w-sm rounded-xl border border-slate-400/30 bg-slate-700/20 px-3 py-2 text-sm text-white placeholder:text-slate-500"
          />
          <button
            type="submit"
            disabled={savingPhone}
            className="rounded-lg bg-emerald-500/30 px-4 py-2 text-sm text-emerald-50 hover:bg-emerald-500/40 disabled:opacity-50"
          >
            {savingPhone ? "保存中…" : "保存电话"}
          </button>
        </form>
      </section>

      {hasQr ? (
        <section className="mt-6 rounded-2xl border border-slate-600/30 bg-slate-900/30 p-5">
          <h2 className="text-sm font-medium text-white">预览（与小程序一致）</h2>
          <div className="mt-4 flex justify-center rounded-xl bg-white p-4">
            <img src={publicQrSrc} alt="联系客服" className="max-h-[320px] max-w-full object-contain" />
          </div>
        </section>
      ) : null}

      <section className="mt-6 rounded-2xl border border-cyan-200/20 bg-slate-900/40 p-5">
        <h2 className="text-sm font-medium text-white">上传或更新</h2>
        <form onSubmit={onUpload} className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-end">
          <input name="file" type="file" accept="image/png,image/jpeg,image/webp,.png,.jpg,.jpeg,.webp" className="text-sm text-slate-200" />
          <button
            type="submit"
            disabled={uploading}
            className="rounded-lg bg-cyan-500/30 px-4 py-2 text-sm text-cyan-50 hover:bg-cyan-500/40 disabled:opacity-50"
          >
            {uploading ? "上传中…" : "上传并替换"}
          </button>
        </form>
      </section>
    </AdminShell>
  );
}
