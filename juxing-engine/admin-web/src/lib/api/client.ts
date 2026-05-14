const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:8080/api/v1";

type HttpMethod = "GET" | "POST" | "PATCH" | "DELETE";

async function request<T>(path: string, method: HttpMethod, body?: unknown): Promise<T> {
  const token = typeof window !== "undefined" ? localStorage.getItem("admin_access_token") : "";
  const isFormData = typeof FormData !== "undefined" && body instanceof FormData;
  const hasJsonBody = (method === "POST" || method === "PATCH") && body != null && !isFormData;

  const resp = await fetch(`${API_BASE_URL}${path}`, {
    method,
    headers: {
      ...(hasJsonBody ? { "Content-Type": "application/json" } : {}),
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: (method === "POST" || method === "PATCH") && body != null ? (isFormData ? body : JSON.stringify(body)) : undefined,
  });

  if (!resp.ok) {
    const errText = await resp.text();
    let message = errText || `请求失败: ${resp.status}`;
    try {
      const errBody = JSON.parse(errText) as { detail?: unknown };
      if (errBody.detail !== undefined) {
        message =
          typeof errBody.detail === "string"
            ? errBody.detail
            : JSON.stringify(errBody.detail);
      }
    } catch {
      /* 非 JSON 时沿用原文 */
    }
    if (resp.status === 404 && message === "Not Found") {
      message =
        "接口不存在（404）。请确认已连接的后端已包含当前管理端所需路由（如 DELETE /api/v1/admin/positions/{id}），拉取最新代码并重启后端；并检查 NEXT_PUBLIC_API_BASE_URL 是否指向该实例。";
    }
    throw new Error(message);
  }

  if (resp.status === 204) {
    return undefined as T;
  }

  const text = await resp.text();
  if (!text) {
    return undefined as T;
  }

  return JSON.parse(text) as T;
}

export const apiClient = {
  get: <T>(path: string) => request<T>(path, "GET"),
  post: <T>(path: string, body?: unknown) => request<T>(path, "POST", body),
  patch: <T>(path: string, body?: unknown) => request<T>(path, "PATCH", body),
  delete: <T>(path: string) => request<T>(path, "DELETE"),
};

export type LoginResponse = {
  access_token: string;
  refresh_token: string;
  token_type: string;
};
