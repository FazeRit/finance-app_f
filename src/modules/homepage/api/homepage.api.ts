import { mainAxios } from "../../../shared/services/mainAxios";

export const baseUrl = process.env.PUBLIC_API_URL || "http://localhost:3000";

export interface ApiStatisticsDto {
  year: number;
  month: number;
}

export interface ApiStatisticsResponse {
  dataPoints: DataPoint[];
}

export interface DataPoint {
  y: number;
  label: string;
}

export class HomePageService {
  async getCategoryExpenses({
    year,
    month,
  }: ApiStatisticsDto): Promise<ApiStatisticsResponse> {
    try {
     const response = await mainAxios.get(
       `${baseUrl}/statistics/category-expenses-by-month`,
       {
         params: {
              year,
              month,
            },
       }
     );

      return response.data;
    } catch (error) {
      console.error("Error during get category statistics:", error);
      throw error;
    }
  }

  async getTotalExpensesByYear({ year }: { year: number}): Promise<ApiStatisticsResponse> {
    try {
      const response = await mainAxios.get(
        `${baseUrl}/statistics/total-expenses-by-year`,
        {
          params: {
            year,
          },
        }
      );

      return response.data;
    } catch (error) {
      console.error("Error during get total expenses by year:", error);
      throw error;
    }
  }

  async getTotalExpensesByMonth({ year, month }: ApiStatisticsDto): Promise<ApiStatisticsResponse> {
    try {
      const response = await mainAxios.get(
        `${baseUrl}/statistics/total-expenses-by-month`,
        {
          params: {
            year,
            month,
          },
        }
      );

      return response.data;
    } catch (error) {
      console.error("Error during get total expenses by month:", error);
      throw error;
    }
  }
}

export const homePageService = new HomePageService();
