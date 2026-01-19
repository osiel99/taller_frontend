import api from "./api";

const comprasService = {
  getAll: async () => {
    const res = await api.get("/compras/");
    return res.data;
  },

  create: async (data) => {
    const res = await api.post("/compras/", data);
    return res.data;
  },

  update: async (id, data) => {
    const res = await api.put(`/compras/${id}/`, data);
    return res.data;
  },

  remove: async (id) => {
    const res = await api.delete(`/compras/${id}/`);
    return res.data;
  },
};

export default comprasService;
