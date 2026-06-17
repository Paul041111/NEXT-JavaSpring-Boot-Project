import { apiPost } from "../lib/api";

// SIGN UP
export function signup(data) {
  return apiPost("/register", data);
}

// SIGN IN
export function login(data) {
  return apiPost("/login", data);
}