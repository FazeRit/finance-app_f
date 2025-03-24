export interface ApiTokenResponse {
  accessToken: string;
}

export interface AuthDto {
  email: string;
  password: string;
}

export interface AuthState {
  isAuth: boolean;
  token: string;
  setToken: (token: string) => void;
  clearToken: () => void;
  login: ({ email, password }: AuthDto) => Promise<ApiTokenResponse>;
  register: ({ email, password }: AuthDto) => Promise<ApiTokenResponse>;
  logout: () => void;
  googleLogin: () => void;
  refresh: () => void;
}