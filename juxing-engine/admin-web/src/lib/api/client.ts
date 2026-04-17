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
    throw new Error(errText || `请求失败: ${resp.status}`);
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
