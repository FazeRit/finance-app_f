import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { notify } from "../../../shared/utils/toast";
import { getErrorMessage } from "../../../shared/utils/getErrorMessage";
import {
  expensesService,
  CreateExpensesDto,
} from "../../expenses/api/expenses.api";

export const useCreateExpense = () => {
  return useMutation<
    void,
    AxiosError<{ message: string | string[] }>,
    CreateExpensesDto
  >({
    mutationFn: async (expense: CreateExpensesDto) => {
      await expensesService.createExpenses(expense);
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
