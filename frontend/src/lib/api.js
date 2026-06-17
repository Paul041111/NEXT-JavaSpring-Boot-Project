const BASE_URL = "http://127.0.0.1:8080";

export async function apiGet(url) {
  const res = await fetch(BASE_URL + url);
  if (!res.ok) throw new Error("API Error");
  return res.json();
}

export async function apiPost(url, data) {
  const res = await fetch(BASE_URL + url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("API Error");
  return res.json();
}