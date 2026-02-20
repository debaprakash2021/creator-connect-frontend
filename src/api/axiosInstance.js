import axios from "axios";
import { errorToast } from "../utils/toast";
import { loginUser } from "./authApi";
const axiosInstance = axios.create({
  baseURL: "https://creator-connect-backend.onrender.com/api",
  withCredentials: true
});


axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      errorToast("Unauthorized request")
      loginUser();
      console.log("Unauthorized request");
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;