import { useQuery } from "@tanstack/react-query";
import {
  homePageService,
  ApiStatisticsResponse,
  ApiStatisticsDto,
} from "../api/homepage.api";
import { getLastMonth } from "../../../shared/utils/getDate";

export const useCategoryByMonth = ({
  year,
  month,
}: Partial<ApiStatisticsDto> = {}) => {
  const { year: lastMonthYear, month: lastMonthMonth } = getLastMonth();
  const queryYear = year ?? lastMonthYear;
  const queryMonth = month ?? lastMonthMonth;

  return useQuery<ApiStatisticsResponse>({
    queryKey: ["categoryByMonth", queryYear, queryMonth],
    queryFn: async () => {
      const data = await homePageService.getCategoryExpenses({
        year: queryYear,
        month: queryMonth,
      });
      return data;
    },
  });
};