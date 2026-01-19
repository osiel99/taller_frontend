import api from "./api";

const BASE = "/refacciones/";

export default {
  getAll: async () => {
    const res = await api.get(BASE);
    return res.data;
  },
};
