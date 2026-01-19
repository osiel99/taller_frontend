import api from "./api";

// === LOGIN ===
// Igual que antes, pero usando axios en lugar de apiPost
export async function loginRequest(username, password) {
  const res = await api.post("/auth/login", {
    username,
    password,
  });

  return res.data; // { access_token, token_type }
}

// === VALIDAR TOKEN ===
// Mantengo tu lógica EXACTA, solo la dejo más limpia
export function isTokenValid() {
  const token = localStorage.getItem("token");
  if (!token) return false;

  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    const now = Math.floor(Date.now() / 1000);
    return payload.exp > now;
  } catch {
    return false;
  }
}


