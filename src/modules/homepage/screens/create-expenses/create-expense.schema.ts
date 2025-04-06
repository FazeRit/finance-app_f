import { RegisterOptions } from "react-hook-form";

export interface CreateExpenseSchemaProps {
  date?: string;
  amount: number;
  description?: string;
  categoryName?: number;
}

export const createExpenseValidationRules: Record<
  keyof CreateExpenseSchemaProps,
  RegisterOptions<CreateExpenseSchemaProps>
> = {
  date: {
    required: "Date is required",
  },
  amount: {
    required: "Amount is required",
    valueAsNumber: true,
  },
  description: {
    required: "Description is required",
  },
  categoryName: {}
};

export const fields: Array<{
  name: keyof CreateExpenseSchemaProps;
  label: string;
}> = [
  { name: "date", label: "Date*" },
  { name: "amount", label: "Amount*" },
  { name: "description", label: "Description*" },
  { name: "categoryName", label: "Category Name" },
];
