/** @jsxImportSource @emotion/react */
import { useForm } from "react-hook-form";
import { TextInput } from "../../../../shared/components/input/input.component";
import Button from "../../../../shared/components/button/button.component";
import { useCreateExpense } from "../../../homepage/hooks/useCreateExpenses";
import { CreateExpenseSchemaProps, createExpenseValidationRules, fields } from "../../../homepage/screens/create-expenses/create-expense.schema";
import { styles } from "./add-expenses.styles";

const AddExpense= () => {
  const { mutate, isPending } = useCreateExpense();

  const { control, handleSubmit } = useForm<CreateExpenseSchemaProps>({
    defaultValues: {
      date: undefined,
      amount: 0,
      description: undefined,
      categoryName: undefined,
    },
  });

  const onSubmit = (data: CreateExpenseSchemaProps) => {
    mutate({
      amount: Number(data.amount),
      date: data.date || "",
      description: data.description || "",
      categoryName: data.categoryName ? String(data.categoryName) : undefined,
    });
  };

  return (
    <div css={styles.container}>
      <h2 css={styles.title}>Add New Expense</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {fields.map(({ name, label }) => (
          <TextInput
            key={name}
            name={name}
            type={name === "date" ? "date" : "text"}
            control={control}
            label={label}
            placeholder={`Enter ${label.toLowerCase()}`}
            rules={createExpenseValidationRules[name]}
          />
        ))}
        <Button disabled={isPending} type="submit" label={"Create expense"} />
      </form>
    </div>
  );
};

export default AddExpense;
