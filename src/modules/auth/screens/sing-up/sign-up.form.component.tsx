/** @jsxImportSource @emotion/react */
import { TextInput } from "../../../../shared/components/input/input.component";
import { useForm } from "react-hook-form";
import {
  fields,
  signUpValidationRules,
  SignUpFormProps,
} from "./sign-up.form.schema";
import { styles } from "./sign-up-form.styles";
import Button from "../../../../shared/components/button/button.component";
import { COLORS } from "../../../../shared/styles/colors";
import IconComponent from "../../../../shared/components/icon/icon.component";
import { FaGoogle } from "react-icons/fa";
import { useSignUp } from "../../hooks/useSignUp";
import { useGoogle } from "../../hooks/useGoogle";

const SignUpForm = () => {
  const { mutate, isPending } = useSignUp();
  const googleMutation = useGoogle();

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

        <Button label="Sign Up" action={() => onSubmit} type="submit" disabled={isPending}/>
      </form>

      <footer>
        <p css={styles.continueText}>Or continue with </p>
        <Button
          label="Continue with Google"
          bgColor={COLORS.white}
          iconLeft={<IconComponent icon={FaGoogle} />}
          action={() => googleMutation.mutate()}
        />
        <p css={styles.footerText}>By signing up, you agree to our Terms of Service</p>
      </footer>
    </section>
  );
};

export default SignUpForm;
