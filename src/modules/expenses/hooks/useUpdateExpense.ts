import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { notify } from "../../../shared/utils/toast";
import { getErrorMessage } from "../../../shared/utils/getErrorMessage";
import {
  expensesService,
  CreateExpensesDto,
  Expense,
} from "../api/expenses.api";
import { useExpenseStore } from "../store/expenses.store";

export const useUpdateExpense = () => {
  const updateExpenseInStore = useExpenseStore((state) => state.updateExpense);

  return useMutation<
    Expense,
    AxiosError<{ message: string | string[] }>,
    { id: number; data: Partial<CreateExpensesDto> }
  >({
    mutationFn: async ({ id, data }) => {
      const response = await expensesService.updateExpense(id, data);
      return response;
    },
    onSuccess: (updatedExpense) => {
      updateExpenseInStore(updatedExpense.id, updatedExpense);
      notify("Updated successfully", "success");
    },
    onError: (error) => {
      const errorMessage = getErrorMessage(error);
      notify(errorMessage, "error");
    },
  });
};
