import { RegisterOptions } from "react-hook-form";

export interface CreateCategorySchemaProps {
  name: string;
}

export const createCategoryValidationRules: Record<
  keyof CreateCategorySchemaProps,
  RegisterOptions<CreateCategorySchemaProps>
> = {
  name: {
    required: "Name is required",
  },
};

export const fields: Array<{ name: keyof CreateCategorySchemaProps; label: string }> =
  [
    { name: "name", label: "Name" },
  ];
