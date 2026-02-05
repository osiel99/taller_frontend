import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/", // Slash final recomendado
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor de errores global
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error);

    // Si el backend responde con error conocido
    if (error.response) {
      const msg = error.response.data?.detail || "Error en la solicitud";
      alert(msg);
    } else {
      alert("No se pudo conectar con el servidor");
    }

    return Promise.reject(error);
  }
);

export default api;
