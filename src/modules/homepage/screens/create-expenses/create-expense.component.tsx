/** @jsxImportSource @emotion/react */
import React from "react";
import Modal from "react-responsive-modal";
import {
  CreateExpenseSchemaProps,
  createExpenseValidationRules,
  fields,
} from "./create-expense.schema";
import { useForm } from "react-hook-form";
import { TextInput } from "../../../../shared/components/input/input.component";
import Button from "../../../../shared/components/button/button.component";
import { useCreateExpense } from "../../hooks/useCreateExpenses";
import { styles } from "./create-expense.styles";

export type CreateExpenseProps = {
  isOpen: boolean;
  onClose: () => void;
};

const CreateExpense: React.FC<CreateExpenseProps> = ({ isOpen, onClose }) => {
  const { mutate, isPending } = useCreateExpense();

  const { control, handleSubmit } = useForm<CreateExpenseSchemaProps>({
    defaultValues: {
      date: undefined,
      amount: 0,
      description: undefined,
      categoryId: undefined,
    },
  });

  const onSubmit = (data: CreateExpenseSchemaProps) => {
    mutate({
      ...data,
      date: data.date || "",
      description: data.description || "",
    });
    onClose();
  };

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      center
      showCloseIcon={true}
      styles={{
        modal: styles.modal,
        overlay: styles.overlay,
        closeButton: styles.closeButton,
      }}
    >
      <h2 css={styles.title}>Create Expense</h2>
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
        <Button
          disabled={isPending}
          type="submit"
          label={"Create expense"}
        />
      </form>
    </Modal>
  );
};

export default CreateExpense;
