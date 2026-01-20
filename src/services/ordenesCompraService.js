import api from "./api";

const BASE = "/ordenes_compra/";

export default {
  getAll: async () => {
    const res = await api.get(BASE);
    return res.data;
  },

  create: async (data) => {
    const res = await api.post(BASE, data);
    return res.data;
  },

  getById: async (id) => {
    const res = await api.get(`/ui/oc/${id}`);
    return res.data;
  },


};
