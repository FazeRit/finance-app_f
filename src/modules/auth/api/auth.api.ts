import { mainAxios } from "../../../shared/services/mainAxios";
import { ApiTokenResponse, AuthDto } from "../store/auth-types";


export const baseUrl = process.env.PUBLIC_API_URL || "http://localhost:3000";

export const navigateToHome = () => {
  window.location.href = "http://localhost:3030/";
};

export class AuthService {

  async login({ email, password }: AuthDto): Promise<ApiTokenResponse> {
    try {
      const response = await mainAxios.post<ApiTokenResponse>(
        `${baseUrl}/auth/login`,
        { email, password }
      );

      return response.data;
    } catch (error) {
      console.error("Error during login:", error);
      throw error;
    }
  }

  async register({ email, password }: AuthDto): Promise<ApiTokenResponse> {
    try {
      const response = await mainAxios.post<ApiTokenResponse>(
        `${baseUrl}/auth/register`,
        { email, password }
      );

      return response.data;
    } catch (error) {
      console.error("Error during register:", error);
      throw error;
    }
  }

  async logout(): Promise<void> {
    try {
      await mainAxios.post(`${baseUrl}/auth/logout`);
    } catch (error) {
      console.error("Error during logout:", error);
      throw error;
    }
  }

  googleLogin(): void {
    window.location.href = `${baseUrl}/auth/google`;
  }

  async refresh(): Promise<ApiTokenResponse> {
    try {
      const response = await mainAxios.post<ApiTokenResponse>(
        `${baseUrl}/auth/refresh`
      );

      return response.data;
    } catch (error) {
      console.error("Error during refresh:", error);
      throw error;
    }
  }
}

export const authService = new AuthService();
