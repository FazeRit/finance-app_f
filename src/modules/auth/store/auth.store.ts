import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { AuthState, AuthDto, ApiTokenResponse } from "./auth-types";
import { authService } from "../api/auth.api";

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      isAuth: false,
      token: "",
      setToken: (token: string) => set({ token, isAuth: !!token }),
      clearToken: () => set({ token: "", isAuth: false }),
      login: async ({
        email,
        password,
      }: AuthDto): Promise<ApiTokenResponse> => {
        try {
          const data = await authService.login({ email, password });
          set({ token: data.accessToken, isAuth: true });
          return data;
        } catch (error) {
          console.error("Login failed:", error);
          throw error;
        }
      },
      register: async ({
        email,
        password,
      }: AuthDto): Promise<ApiTokenResponse> => {
        try {
          const data = await authService.register({ email, password });
          set({ token: data.accessToken, isAuth: true });
          return data;
        } catch (error) {
          console.error("Registration failed:", error);
          throw error;
        }
      },
      logout: async (): Promise<void> => {
        try {
          await authService.logout();
          get().clearToken();
        } catch (error) {
          console.error("Logout failed:", error);
          throw error;
        }
      },
      googleLogin: async (): Promise<void> => {
        try {
          await authService.googleLogin();
        } catch (error) {
          console.error("Google login failed:", error);
          throw error;
        }
      },
      refresh: async (): Promise<ApiTokenResponse> => {
        try {
          const data = await authService.refresh();
          set({ token: data.accessToken, isAuth: true });
          return data;
        } catch (error) {
          console.error("Refresh failed:", error);
          throw error;
        }
      },
    }),
    {
      name: "authStore",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
