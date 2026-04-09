import axios from "axios";

const API = axios.create({
  baseURL: "https://smart-pharmacy-inventory.onrender.com", // ✅ FIXED
});

/* ================= EXISTING APIS ================= */
export const getDashboardStats = () => API.get("/dashboard");
export const getExpiryAlerts = () => API.get("/expiry");
export const getForecast = () => API.get("/forecast");
export const getReorderSuggestions = () => API.get("/reorder");
export const askChatbot = (question) =>
  API.post("/chatbot", { question });

/* ================= ✅ REAL DASHBOARD ================= */
export const getRealDashboardStats = () =>
  API.get("/dashboard"); // ✅ FIXED

export default API;