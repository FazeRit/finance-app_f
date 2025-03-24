/** @jsxImportSource @emotion/react */
import { TextInput } from "../../../../shared/components/input/input.component";
import { useForm } from "react-hook-form";
import {
  fields,
  signUpValidationRules,
  SignUpFormProps,
} from "../sing-up/sign-up.form.schema";
import { styles } from "../sing-up/sign-up-form.styles";
import Button from "../../../../shared/components/button/button.component";
import { useLogin } from "../../hooks/useLogin";

const LoginForm = () => {
  const { mutate } = useLogin();

  const { control, handleSubmit } = useForm<SignUpFormProps>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: SignUpFormProps) => {
    mutate(data);
  };

  return (
    <section css={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {fields.map(({ name, label }) => (
          <TextInput
            key={name}
            name={name}
            control={control}
            label={label}
            type={name === "email" ? "email" : "password"}
            placeholder={`Enter your ${name}`}
            rules={signUpValidationRules[name]}
          />
        ))}

        <Button label="Login" action={() => onSubmit} type="submit" />
      </form>
    </section>
  );
};

export default LoginForm;
