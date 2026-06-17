import { apiGet, apiPost } from "../lib/api";

export function getArticles() {
  return apiGet("/articles/");
}

export function getArticle(id) {
  return apiGet(`/articles/${id}/`);
}

export function createArticle(data) {
  return apiPost("/articles/", data);
}