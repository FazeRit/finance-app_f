import { useMutation } from "@tanstack/react-query";
import { useAuthStore } from "../store/auth.store";
import { ApiTokenResponse, AuthDto } from "../store/auth-types";
import { AxiosError } from "axios";
import { notify } from "../../../shared/utils/toast";
import { getErrorMessage } from "../../../shared/utils/getErrorMessage";
import { navigateToHome } from "../api/auth.api";

export const useSignUp = () => {
  const register = useAuthStore.getState().login;

  return useMutation<
    ApiTokenResponse,
    AxiosError<{ message: string | string[] }>,
    AuthDto
  >({
    mutationFn: ({ email, password }: AuthDto) => {
      return register({ email, password });
    },
    onSuccess: () => {
      notify("Sign up successful", "success");
      navigateToHome();
    },
    onError: (error) => {
      const errorMessage = getErrorMessage(error);
      notify(errorMessage, "error");
    },
  });
};
