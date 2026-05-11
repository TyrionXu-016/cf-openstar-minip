const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:8080/api/v1";

type HttpMethod = "GET" | "POST";

async function request<T>(path: string, method: HttpMethod, body?: unknown): Promise<T> {
  const token = typeof window !== "undefined" ? localStorage.getItem("admin_access_token") : "";
  const isFormData = typeof FormData !== "undefined" && body instanceof FormData;
  const resp = await fetch(`${API_BASE_URL}${path}`, {
    method,
    headers: {
      ...(isFormData ? {} : { "Content-Type": "application/json" }),
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: body ? (isFormData ? body : JSON.stringify(body)) : undefined,
  });

  if (!resp.ok) {
    const errText = await resp.text();
    let message = errText || `请求失败: ${resp.status}`;
    try {
      const body = JSON.parse(errText) as { detail?: unknown };
      if (body.detail !== undefined) {
        message =
          typeof body.detail === "string"
            ? body.detail
            : JSON.stringify(body.detail);
      }
    } catch {
      /* 非 JSON 时沿用原文 */
    }
    if (resp.status === 404 && message === "Not Found") {
      message =
        "接口不存在（404）。若刚加了岗位详情接口，请重启后端服务后再试。";
    }
    throw new Error(message);
  }

  return resp.json() as Promise<T>;
}

export const apiClient = {
  get: <T>(path: string) => request<T>(path, "GET"),
  post: <T>(path: string, body?: unknown) => request<T>(path, "POST", body),
};

export type LoginResponse = {
  access_token: string;
  refresh_token: string;
  token_type: string;
};
