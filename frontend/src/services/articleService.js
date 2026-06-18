import { apiGet, apiPost } from "../lib/api";

export function getArticles() {
  return apiGet(`/articles`);
}

export function editArticle(id) {
  return apiGet(`/articles/${id}`);
}

export function createArticle(data) {
  return apiPost(`/articles`, data);
}

export function deleteArticle(id) {
  return apiDelete(`/articles/${id}`);
}