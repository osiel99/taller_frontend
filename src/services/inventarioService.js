import api from "./api";

const inventarioService = {
  getAll: async () => {
    const res = await api.get("/inventario/");
    return res.data;
  },

  create: async (data) => {
    const res = await api.post("/inventario/", data);
    return res.data;
  },

  update: async (id, data) => {
    const res = await api.put(`/inventario/${id}/`, data);
    return res.data;
  },

  remove: async (id) => {
    const res = await api.delete(`/inventario/${id}/`);
    return res.data;
  },
};

export default inventarioService;
