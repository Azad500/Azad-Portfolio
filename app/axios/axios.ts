import axios from "axios";

const api = axios.create({
  baseURL: "https://66a53e265dc27a3c190b0696.mockapi.io/adminPanel/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
