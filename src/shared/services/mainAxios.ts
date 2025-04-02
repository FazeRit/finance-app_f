import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";
import { useAuthStore } from "../../modules/auth/store/auth.store";
import { authService } from "../../modules/auth/api/auth.api";

interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
  _retry?: boolean;
}

export const mainAxios = axios.create({
  baseURL: process.env.PUBLIC_API_URL || "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

mainAxios.interceptors.request.use(
  (config: CustomAxiosRequestConfig) => {
    const token = useAuthStore.getState().token;
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

mainAxios.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as CustomAxiosRequestConfig;

    if (
      originalRequest &&
      error.response?.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        const { accessToken } = await authService.refresh();
        console.log("Access token refreshed");
        useAuthStore.getState().setToken(accessToken);

        originalRequest.headers["Authorization"] = `Bearer ${accessToken}`;
        return mainAxios(originalRequest);
      } catch (refreshError) {
        useAuthStore.getState().clearToken();
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);
