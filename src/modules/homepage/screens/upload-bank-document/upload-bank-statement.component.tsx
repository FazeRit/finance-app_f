/** @jsxImportSource @emotion/react */
import React from "react";
import Modal from "react-responsive-modal";
import {
  uploadBankStatementValidationRules,
  UploadBankStatementSchemaProps,
  fields,
} from "./upload-bank-statement.schema";
import { useForm } from "react-hook-form";
import { TextInput } from "../../../../shared/components/input/input.component";
import Button from "../../../../shared/components/button/button.component";
import { styles } from "./upload-bank-statement.styles";
import { useUploadBankDocument } from "../../hooks/useUploadBankDocument";

export type UploadBankStatementProps = {
  isOpen: boolean;
  onClose: () => void;
};

const UploadBankStatement: React.FC<UploadBankStatementProps> = ({
  isOpen,
  onClose,
}) => {
  const { mutate, isPending } = useUploadBankDocument();

  const { control, handleSubmit, reset } =
    useForm<UploadBankStatementSchemaProps>({
      defaultValues: {
        file: null,
      },
    });

  const onSubmit = (data: UploadBankStatementSchemaProps) => {
    if (data.file) {
      mutate(data.file, {
        onSuccess: () => {
          reset();
          onClose();
        },
      });
    }
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
      <h2 css={styles.title}>Upload Bank Statement</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {fields.map(({ name, label }) => (
          <TextInput
            key={name}
            name={name}
            type="file"
            control={control}
            label={label}
            accept=".pdf"
            rules={uploadBankStatementValidationRules[name]}
          />
        ))}
        <Button
          disabled={isPending}
          type="submit"
          label="Upload Bank Statement"
        />
      </form>
    </Modal>
  );
};

export default UploadBankStatement;
