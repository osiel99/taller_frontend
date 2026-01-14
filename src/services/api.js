const API_URL = "http://127.0.0.1:8000"; // tu backend FastAPI

export async function apiPost(endpoint, data) {
  const response = await fetch(`${API_URL}${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Error en la petición");
  }

  return response.json();
}
