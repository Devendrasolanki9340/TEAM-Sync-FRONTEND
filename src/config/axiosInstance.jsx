
import axios from "axios";

const baseURL =
  import.meta.env.VITE_API_BASE_URL || "https://api.team-sync.space/api";

export const axiosInstance = axios.create({
  baseURL,
  withCredentials: true,
  timeout: 15000,
});
