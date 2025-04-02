/** @jsxImportSource @emotion/react */
import { ComponentPropsWithoutRef, useRef } from "react";
import {
  Controller,
  ControllerProps,
  FieldPath,
  FieldValues,
} from "react-hook-form";
import { styles } from "./input.styles";

type TextInputProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = Pick<ControllerProps<TFieldValues, TName>, "name" | "control" | "rules"> &
  ComponentPropsWithoutRef<"input"> & {
    label: string;
  };

export function TextInput<
  T extends FieldValues = FieldValues,
  U extends FieldPath<T> = FieldPath<T>
>({
  name,
  control,
  rules,
  onChange,
  onBlur,
  label,
  type,
  ...rest
}: TextInputProps<T, U>) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Controller
      name={name}
      rules={rules}
      control={control}
      render={({ field, fieldState }) => {
        return (
          <div css={styles.container}>
            <label htmlFor={name} css={styles.label}>
              {label}
            </label>
            <input
              {...rest}
              css={styles.input}
              ref={(e) => {
                field.ref(e);
                inputRef.current = e;
              }}
              id={name}
              type={type}
              onBlur={(e) => {
                field.onBlur();
                onBlur?.(e);
              }}
              onChange={(e) => {
                if (type === "file") {
                  const file = e.target.files?.[0] || null;
                  field.onChange(file);
                  onChange?.(e);
                } else {
                  field.onChange(e);
                  onChange?.(e);
                }
              }}
              onFocus={(e) => {
                rest.onFocus?.(e);
              }}
            />
            {fieldState.error && fieldState.error.message && (
              <p css={styles.error}>{fieldState.error.message}</p>
            )}
          </div>
        );
      }}
    />
  );
}
