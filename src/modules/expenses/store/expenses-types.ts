import { Expense } from "../api/expenses.api";

export interface ExpenseStore {
  expenses: Expense[];
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  sort: "asc" | "desc";
  addExpense: (expense: Expense) => void;
  removeExpense: (id: number) => void;
  updateExpense: (id: number, updatedExpense: Partial<Expense>) => void;
  setPage: (page: number) => void;
  setLimit: (limit: number) => void;
  setSort: (sort: "asc" | "desc") => void;
  setTotal: (total: number) => void;
  setTotalPages: (totalPages: number) => void;
  setExpenses: (expenses: Expense[]) => void;
  clearExpenses: () => void;
}