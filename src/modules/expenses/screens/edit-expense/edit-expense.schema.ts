import { RegisterOptions } from "react-hook-form";

export interface UpdateExpenseSchemaProps {
  date?: string;
  amount?: number;
  description?: string;
  categoryName?: string;
}

export const updateExpenseValidationRules: Record<
  keyof UpdateExpenseSchemaProps,
  RegisterOptions<UpdateExpenseSchemaProps>
> = {
  date: {},
  amount: {
    valueAsNumber: true,
  },
  description: {},
  categoryName: {},
};

export const fields: Array<{
  name: keyof UpdateExpenseSchemaProps;
  label: string;
}> = [
  { name: "date", label: "Date" },
  { name: "amount", label: "Amount" },
  { name: "description", label: "Description" },
  { name: "categoryName", label: "Category Name" },
];
