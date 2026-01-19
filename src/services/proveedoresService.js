import api from "./api";

const proveedoresService = {
  getAll: async () => {
    const res = await api.get("/proveedores/");
    return res.data;
  },

  create: async (data) => {
    const res = await api.post("/proveedores/", data);
    return res.data;
  },

  update: async (id, data) => {
    const res = await api.put(`/proveedores/${id}/`, data);
    return res.data;
  },

  remove: async (id) => {
    const res = await api.delete(`/proveedores/${id}/`);
    return res.data;
  },
};

export default proveedoresService;
