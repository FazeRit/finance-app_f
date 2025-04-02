import { RegisterOptions } from "react-hook-form";

export interface UploadBankStatementSchemaProps {
  file: File | null;
}

export const uploadBankStatementValidationRules: Record<
  keyof UploadBankStatementSchemaProps,
  RegisterOptions<UploadBankStatementSchemaProps>
> = {
  file: {
    required: "File is required",
    validate: {
      fileType: (value) => {
        if (!value) return "File is required";
        const hasPdfExtension =
          value.name && value.name.trim().toLowerCase().endsWith(".pdf");
        return hasPdfExtension || "Only PDFs allowed";
      },
      fileSize: (value) =>
        !value || value.size <= 5 * 1024 * 1024 || "File must be less than 5MB",
    },
  },
};

export const fields: Array<{
  name: keyof UploadBankStatementSchemaProps;
  label: string;
}> = [{ name: "file", label: "File*" }];
