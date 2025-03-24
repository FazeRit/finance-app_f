import { useMutation } from "@tanstack/react-query";
import { useAuthStore } from "../store/auth.store";
import { AxiosError } from "axios";
import { notify } from "../../../shared/utils/toast";
import { getErrorMessage } from "../../../shared/utils/getErrorMessage";

export const useGoogle = () => {
  const googleLogin = useAuthStore.getState().googleLogin;

  return useMutation<
    void,
    AxiosError<{ message: string | string[] }>,
    void
  >({
    mutationFn: async () => {
      return await googleLogin();
    },
    onError: (error) => {
      const errorMessage = getErrorMessage(error);
      notify(errorMessage, "error");
    },
  });
};
