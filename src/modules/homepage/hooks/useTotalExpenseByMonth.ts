import { useQuery } from "@tanstack/react-query";
import {
  homePageService,
  ApiStatisticsResponse,
  ApiStatisticsDto,
} from "../api/homepage.api";
import { getLastMonth } from "../../../shared/utils/getDate";

export const useTotalExpenseByLastMonth= ({
  year,
  month,
}: Partial<ApiStatisticsDto> = {}) => {
  const { year: currentYear, month: currentMonth } = getLastMonth();

  const queryYear = year ?? currentYear;
  const queryMonth = month ?? currentMonth;

  return useQuery<ApiStatisticsResponse>({
    queryKey: ["total-expense-by-month", currentYear, currentMonth],
    queryFn: async () => {
      const data = await homePageService.getTotalExpensesByMonth({
        year: queryYear,
        month: queryMonth,
      });
      console.log("data", data);
      return data;
    },
  });
};
