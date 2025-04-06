import { useQuery } from "@tanstack/react-query";
import {
  expensesService,
  ExpenseResponse,
} from "../../expenses/api/expenses.api";

interface GetExpensesParams {
  take?: number;
  sort?: "asc" | "desc";
  page?: number;
  limit?: number;
}

export const useGetExpenses = ({
  take,
  sort,
  page,
  limit,
}: Partial<GetExpensesParams> = {}) => {
  return useQuery<ExpenseResponse>({
    queryKey: ["getExpenses", { take, sort, page, limit }],
    queryFn: async () => {
      const response = await expensesService.getExpenses(
        take,
        sort,
        page,
        limit
      );
      return response;
    },
    retry: 2,
  });
};
