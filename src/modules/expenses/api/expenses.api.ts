import { mainAxios } from "../../../shared/services/mainAxios";
import { baseUrl } from "../../auth/api/auth.api";

export interface Expense {
  id: number;
  amount: number;
  description: string;
  categoryId?: number;
  date: string;
  category: null | { name: string };
}

export interface CreateExpensesDto {
  amount: number;
  description: string;
  date: string;
  categoryName?: string;
}

export interface ExpenseResponse {
  data: Expense[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export class ExpensesService {
  async getExpenses(
    take?: number,
    sort?: 'asc' | 'desc',
    page?: number,
    limit?: number,
  ): Promise<ExpenseResponse> {
    try {
      const queryParams = new URLSearchParams();
      if (take !== undefined) queryParams.append('take', take.toString());
      if (sort) queryParams.append('sort', sort);
      if (page !== undefined) queryParams.append('page', page.toString());
      if (limit !== undefined) queryParams.append('limit', limit.toString());

      const response = await mainAxios.get(`/expense?${queryParams.toString()}`);

      return response.data;
    } catch (error) {
      console.error("Error during get expenses:", error);
      throw error;
    }
  }

  async createExpenses(expense: CreateExpensesDto): Promise<void> {
    try {
      await mainAxios.post(`${baseUrl}/expense`, expense);
    } catch (error) {
      console.error("Error during create expense:", error);
      throw error;
    }
  }

  async deleteExpense(id: number): Promise<void> {
    try {
      await mainAxios.delete(`${baseUrl}/expense/${id}`);
    } catch (error) {
      console.error("Error during delete expense:", error);
      throw error;
    }
  }

  async updateExpense(
    id: number,
    updatedExpense: Partial<CreateExpensesDto>
  ): Promise<Expense> {
    try {
      return await mainAxios.put(`${baseUrl}/expense/${id}`, updatedExpense);
    } catch (error) {
      console.error("Error during update expense:", error);
      throw error;
    }
  }

  async getExpenseById(id: number): Promise<Expense> {
    try {
      const response = await mainAxios.get(`${baseUrl}/expense/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error during get expense by id:", error);
      throw error;
    }
  }
}

export const expensesService = new ExpensesService();
