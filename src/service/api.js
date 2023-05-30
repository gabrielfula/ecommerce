import axios from "axios";

const api = axios.create({
  baseURL: "https://api.mercadolibre.com/sites/MLB",
  timeout: 10000,
});

export default api;
