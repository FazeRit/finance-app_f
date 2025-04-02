import { useMutation } from "@tanstack/react-query";
import { CreateCategoryDto, homePageService } from "../api/homepage.api";
import { AxiosError } from "axios";
import { notify } from "../../../shared/utils/toast";
import { getErrorMessage } from "../../../shared/utils/getErrorMessage";

export const useCreateExpense = () => {
  return useMutation<void, AxiosError<{ message: string | string[] }>, CreateCategoryDto>({
    mutationFn: async (expense: CreateCategoryDto) => {
      await homePageService.createExpenses(expense);
    },
    onSuccess: () => {
      notify("Expense created successfully", "success");
    },
    onError: (error) => {
      const errorMessage = getErrorMessage(error);
      notify(errorMessage, "error");
    },
  });
};
