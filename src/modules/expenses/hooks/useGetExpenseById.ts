import { useQuery } from "@tanstack/react-query";
import { Expense, expensesService } from "../api/expenses.api";
import { notify } from "../../../shared/utils/toast";
import { getErrorMessage } from "../../../shared/utils/getErrorMessage";

interface UseExpenseByIdProps {
  id: number;
}

export const useExpenseById = ({ id }: UseExpenseByIdProps) => {
  return useQuery<Expense, Error>({
    queryKey: ["expense-by-id", id],
    queryFn: async () => {
      try {
        const response = await expensesService.getExpenseById(id);
        if (!response) {
          notify(`No expense found with ID ${id}`);
        }
        return response;
      } catch (error: any) {
        const errorMessage = getErrorMessage(error);
        notify(errorMessage, "error");
        throw error;
      }
    },
    enabled: !!id && id > 0,
    retry: 2
     ,
  });
};
