import { useQuery } from "@tanstack/react-query";
import {
  homePageService,
  ApiStatisticsResponse,
  ApiStatisticsDto,
} from "../api/homepage.api";
import { getLastMonth } from "../../../shared/utils/getDate";

export const useTotalExpenseByLastYear = ({
  year,
  month,
}: Partial<ApiStatisticsDto> = {}) => {
  const { year: currentYear } = getLastMonth();
  const queryYear = year ?? currentYear;

  return useQuery<ApiStatisticsResponse>({
    queryKey: ["total-expense-by-month", currentYear],
    queryFn: async () => {
      const data = await homePageService.getTotalExpensesByYear({
        year: queryYear,
      });
      console.log("data", data);
      return data;
    },
  });
};
