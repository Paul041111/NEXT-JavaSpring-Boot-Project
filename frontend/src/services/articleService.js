import { apiGet, apiPost } from "../lib/api";

export function getArticles() {
  return apiGet("/api/articles");
}

export function getArticle(id) {
  return apiGet(`/articles/${id}`);
}

export function createArticle(data) {
  return apiPost("/api/articles", data);
}