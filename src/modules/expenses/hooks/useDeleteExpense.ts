import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { notify } from "../../../shared/utils/toast";
import { getErrorMessage } from "../../../shared/utils/getErrorMessage";
import { expensesService } from "../api/expenses.api";
import { useExpenseStore } from "../store/expenses.store";

export const useDeleteExpense = () => {
  const removeExpense = useExpenseStore((state) => state.removeExpense);

  return useMutation<
    void,
    AxiosError<{ message: string | string[] }>,
    number
  >({
    mutationFn: async (id) => {
      await expensesService.deleteExpense(id);
    },
    onSuccess: (_, id) => {
      removeExpense(id);
      notify("Deleted successfully", "success");
    },
    onError: (error) => {
      const errorMessage = getErrorMessage(error);
      notify(errorMessage, "error");
    },
  });
};
