import axios from "axios";

// Change this depending on environment
const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

const api = axios.create({
  baseURL: BASE_URL,
});

export default api;
