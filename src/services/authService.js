import { apiPost } from "./api";

export async function loginRequest(username, password) {
  return apiPost("/login", {
    username,
    password,
  });
}
