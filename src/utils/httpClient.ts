const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export function wait(delay: number) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}

type RequestMethod = "GET" | "POST" | "PATCH" | "DELETE";

function request<T>(
  url: string,
  method: RequestMethod = "GET",
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any = null
): Promise<T> {
  const options: RequestInit = { method };

  if (data) {
    options.body = JSON.stringify(data);
    options.headers = {
      "Content-Type": "application/json; charset=UTF-8",
    };
  }

  return wait(1000)
    .then(() => fetch(BASE_URL + url, options))
    .then((response) => {
      if (!response.ok) {
        throw new Error();
      }

      return response.json();
    });
}

export const client = {
  get: <T>(url: string) => request<T>(url),
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  post: <T>(url: string, data: any) => request<T>(url, "POST", data),
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  patch: <T>(url: string, data: any) => request<T>(url, "PATCH", data),
  delete: (url: string) => request(url, "DELETE"),
};
