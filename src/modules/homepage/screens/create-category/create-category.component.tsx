/** @jsxImportSource @emotion/react */
import React from "react";
import Modal from "react-responsive-modal";
import {
  CreateCategorySchemaProps,
  createCategoryValidationRules,
  fields,
} from "./create-category.schema";
import { useForm } from "react-hook-form";
import { TextInput } from "../../../../shared/components/input/input.component";
import Button from "../../../../shared/components/button/button.component";
import { useCreateCategory } from "../../hooks/useCreateCategory";
import { styles } from "./create-category.styles";

export type CreateCategoryProps = {
  isOpen: boolean;
  onClose: () => void;
};

const CreateCategory: React.FC<CreateCategoryProps> = ({ isOpen, onClose }) => {
  const { mutate, isPending } = useCreateCategory();

  const { control, handleSubmit } = useForm<CreateCategorySchemaProps>({
    defaultValues: {
      name: "",
    },
  });

const onSubmit = (data: CreateCategorySchemaProps) => {
    mutate(data.name);
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
      <h2 css={styles.title}>Create Category</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {fields.map(({ name, label }) => (
          <TextInput
            key={name}
            name={name}
            control={control}
            label={label}
            placeholder={`Enter your ${name}`}
            rules={createCategoryValidationRules[name]}
          />
        ))}
        <Button
          disabled={isPending}
          action={() => onSubmit}
          type="submit"
          label="Create category"
        />
      </form>
    </Modal>
  );
};

export default CreateCategory;
