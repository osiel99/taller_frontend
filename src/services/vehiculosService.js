import api from "./api";

const vehiculosService = {
  // Obtener todos los vehículos
  getAll: async () => {
    const res = await api.get("/vehiculos/");
    return res.data;
  },

  // Crear un vehículo
  create: async (data) => {
    const res = await api.post("/vehiculos/", data);
    return res.data;
  },

  // Actualizar un vehículo
  update: async (id, data) => {
    const res = await api.put(`/vehiculos/${id}/`, data);
    return res.data;
  },

  // Eliminar un vehículo
  remove: async (id) => {
    const res = await api.delete(`/vehiculos/${id}/`);
    return res.data;
  },
};

export default vehiculosService;
