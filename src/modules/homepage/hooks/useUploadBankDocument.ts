import { useMutation } from "@tanstack/react-query";
import { homePageService } from "../api/homepage.api";
import { AxiosError } from "axios";
import { notify } from "../../../shared/utils/toast";
import { getErrorMessage } from "../../../shared/utils/getErrorMessage";

export const useUploadBankDocument = () => {
  return useMutation<void, AxiosError<{ message: string | string[] }>, File>({
    mutationFn: async (file: File) => {
      await homePageService.uploadBankDocument(file);
    },
    onSuccess: () => {
      notify("Bank statement uploaded successfully", "success");
    },
    onError: (error) => {
      const errorMessage = getErrorMessage(error);
      notify(errorMessage, "error");
    },
  });
};
