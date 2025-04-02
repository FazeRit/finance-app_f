import { useMutation } from "@tanstack/react-query";
import { homePageService } from "../api/homepage.api";
import { AxiosError } from "axios";
import { notify } from "../../../shared/utils/toast";
import { getErrorMessage } from "../../../shared/utils/getErrorMessage";

export const useCreateCategory = () => {
  return useMutation<void, AxiosError<{ message: string | string[] }>, string>({
    mutationFn: async (name: string) => {
      await homePageService.createCategory(name);
    },
    onSuccess: () => {
      notify("Category created successfully", "success");
    },
    onError: (error) => {
      const errorMessage = getErrorMessage(error);
      notify(errorMessage, "error");
    },
  });
};