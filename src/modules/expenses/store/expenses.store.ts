import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { Expense } from "../api/expenses.api";
import { ExpenseStore } from "./expenses-types";

export const useExpenseStore = create<ExpenseStore>()(
  persist(
    (set) => ({
      expenses: [] as Expense[],
      page: 1,
      limit: 10,
      total: 0,
      totalPages: 1,
      sort: "asc",
      setPage: (page: number) => set({ page }),
      setLimit: (limit: number) => set({ limit }),
      setSort: (sort: "asc" | "desc") => set({ sort }),
      setTotal: (total: number) => set({ total }),
      setTotalPages: (totalPages: number) => set({ totalPages }),
      setExpenses: (expenses: Expense[]) => set({ expenses }),
      clearExpenses: () => set({ expenses: [], total: 0, totalPages: 1 }),
      addExpense: (expense: Expense) =>
        set((state) => ({ expenses: [...state.expenses, expense] })),
      removeExpense: (id: number) =>
        set((state) => ({
          expenses: state.expenses.filter((expense) => expense.id !== id),
        })),
      updateExpense: (id: number, updatedExpense: Partial<Expense>) =>
        set((state) => ({
          expenses: state.expenses.map((expense) =>
            expense.id === id ? { ...expense, ...updatedExpense } : expense
          ),
        })),
    }),
    {
      name: "expenseStore",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
