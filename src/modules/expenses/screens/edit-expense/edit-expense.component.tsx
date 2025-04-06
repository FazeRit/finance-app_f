/** @jsxImportSource @emotion/react */
import React, { useMemo } from "react";
import Modal from "react-responsive-modal";
import { useForm, SubmitHandler } from "react-hook-form";
import { TextInput } from "../../../../shared/components/input/input.component";
import Button from "../../../../shared/components/button/button.component";
import { useUpdateExpense } from "../../hooks/useUpdateExpense";
import {
  fields,
  UpdateExpenseSchemaProps,
  updateExpenseValidationRules,
} from "./edit-expense.schema";
import { styles } from "./edit-expense.styles";
import { useExpenseById } from "../../hooks/useGetExpenseById";
import Loading from "../../../../shared/components/loading/loading.component";
import NoDataFound from "../../../../shared/components/noDataFound/noDataFound.component";

export interface CreateExpenseProps {
  isOpen: boolean;
  onClose: () => void;
  id: number;
}

const UpdateExpense: React.FC<CreateExpenseProps> = ({
  isOpen,
  onClose,
  id,
}) => {
  const { mutate, isPending } = useUpdateExpense();
  const { isPending: isFetchingExpense, data } = useExpenseById({ id });
  const defaultValues = useMemo(
    () => ({
      date: data?.date,
      amount: data?.amount,
      description: data?.description,
      categoryName: data?.category?.name,
    }),
    [data]
  );

  const { control, handleSubmit, reset } = useForm<UpdateExpenseSchemaProps>({
    defaultValues,
  });

  React.useEffect(() => {
    if (data) {
      reset({
        date: data.date,
        amount: data.amount,
        description: data.description,
        categoryName: data.category?.name,
      });
    }
  }, [data, reset]);

  const onSubmit: SubmitHandler<UpdateExpenseSchemaProps> = (formData) => {
    const cleanedData = {
      amount: Number(formData.amount) || data?.amount,
      date: formData.date || data?.date,
      description: formData.description || data?.description,
      categoryName: formData.categoryName || data?.category?.name,
    };

    mutate({ id, data: cleanedData });
  };

  if (isFetchingExpense) {
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
        <Loading />
      </Modal>
    );
  }

  if (!data) {
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
        <NoDataFound />
      </Modal>
    );
  }

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
      <h2 css={styles.title}>Edit Expense</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {fields.map(({ name, label }) => (
          <TextInput
            key={name}
            name={name}
            type={
              name === "date" ? "date" : name === "amount" ? "number" : "text"
            }
            defaultValue={name === "categoryName" ? data.category?.name : data[name]}
            control={control}
            label={label}
            placeholder={`Enter ${label.toLowerCase()}`}
            rules={updateExpenseValidationRules[name]}
            disabled={isPending}
          />
        ))}
        <Button
          disabled={isPending}
          type="submit"
          label={isPending ? "Updating..." : "Edit expense"}
        />
      </form>
    </Modal>
  );
};

export default UpdateExpense;
