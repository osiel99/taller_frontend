import api from "./api";

const vehiculosService = {
  getAll: async () => {
    const res = await api.get("/vehiculos");
    return res.data;
  },

  create: async (data) => {
    const res = await api.post("/vehiculos", data);
    return res.data;
  },

  update: async (id, data) => {
    const res = await api.put(`/vehiculos/${id}`, data);
    return res.data;
  },

  remove: async (id) => {
    const res = await api.delete(`/vehiculos/${id}`);
    return res.data;
  },
};

export default vehiculosService;
