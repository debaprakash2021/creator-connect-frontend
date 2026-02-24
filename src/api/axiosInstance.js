import axios from "axios";
import { errorToast } from "../utils/toast";

const axiosInstance = axios.create({
  baseURL: "https://creator-connect-backend.onrender.com/api",
  withCredentials: true
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      errorToast("Session expired. Please log in again.");
      console.log("Unauthorized request");
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;