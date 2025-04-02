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

export interface Expense {
  id: number;
  amount: number;
  description: string;
  categoryId?: number;
  date: string;
  category: null | { name: string };
}

export interface CreateCategoryDto {
  amount: number;
  description: string;
  date: string;
  categoryId?: number;
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

  async getTotalExpensesByYear({
    year,
  }: {
    year: number;
  }): Promise<ApiStatisticsResponse> {
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

  async getTotalExpensesByMonth({
    year,
    month,
  }: ApiStatisticsDto): Promise<ApiStatisticsResponse> {
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

  async getExpenses(take?: number): Promise<Expense[]> {
    try {
      const url =
        take !== undefined
          ? `${baseUrl}/expense?take=${take}`
          : `${baseUrl}/expense`;

      const response = await mainAxios.get(url);
      return response.data;
    } catch (error) {
      console.error("Error during get expenses:", error);
      throw error;
    }
  }

  async createCategory(name: string): Promise<void> {
    try {
      await mainAxios.post(`${baseUrl}/categories`, { name });
    } catch (error) {
      console.error("Error during create category:", error);
      throw error;
    }
  }

  async createExpenses(expense: CreateCategoryDto): Promise<void> {
    try {
      await mainAxios.post(`${baseUrl}/expense`, expense);
    } catch (error) {
      console.error("Error during create expense:", error);
      throw error;
    }
  }

  async uploadBankDocument(file: File): Promise<void> {
    try {
      const formData = new FormData();
      formData.append("file", file);

      await mainAxios.post(`${baseUrl}/document/bank-statement`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    } catch (error) {
      console.error("Error during upload document:", error);
      throw error;
    }
  }
}

export const homePageService = new HomePageService();
