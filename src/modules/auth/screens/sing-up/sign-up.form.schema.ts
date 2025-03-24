import { RegisterOptions } from "react-hook-form";
import { EMAIL_REGEX, PASSWORD_REGEX } from "../../../../shared/constants/regex";

export interface SignUpFormProps {
  email: string;
  password: string;
}

export const signUpValidationRules: Record<
  keyof SignUpFormProps,
  RegisterOptions<SignUpFormProps>
> = {
  email: {
    required: "Email is required",
    pattern: {
      value: EMAIL_REGEX,
      message: "Invalid email address",
    },
  },
  password: {
    required: "Password is required",
    minLength: {
      value: 8,
      message: "Password must be at least 8 characters long",
    },
    pattern: {
      value: PASSWORD_REGEX,
      message:
        "Password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character.",
    },
  },
};

export const fields: Array<{ name: keyof SignUpFormProps; label: string }> =
  [
    { name: "email", label: "Email" },
    { name: "password", label: "Password" },
  ];
