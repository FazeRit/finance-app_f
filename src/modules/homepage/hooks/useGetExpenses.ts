import { useQuery } from "@tanstack/react-query";
import { Expense, homePageService } from "../api/homepage.api";

interface GetExpensesParams {
  take?: number;
}

export const useGetExpenses = ({ take }: Partial<GetExpensesParams> = {}) => {
  return useQuery<Expense[]>({
    queryKey: ["getExpenses", take],
    queryFn: async () => {
      const response = await homePageService.getExpenses(take);
      return response;
    },
  });
};
