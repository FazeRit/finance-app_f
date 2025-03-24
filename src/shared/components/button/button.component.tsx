/** @jsxImportSource @emotion/react */
import { SerializedStyles } from "@emotion/react";
import { styles } from "./button.styles";

type ButtonProps = {
  label: string;
  action?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  bgColor?: string;
  cssStyles?: SerializedStyles;
  iconLeft?: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({
  label,
  action,
  type = "button",
  disabled = false,
  bgColor,
  cssStyles,
  iconLeft,
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled && action) {
      e.preventDefault();
      action();
    }
  };

  return (
    <button
      type={type}
      onClick={type === "button" ? handleClick : undefined}
      disabled={disabled}
      css={[styles.button(bgColor), cssStyles]}
    >
      {iconLeft && <span css={styles.icon}>{iconLeft}</span>}
      <span>{label}</span>
    </button>
  );
};

export default Button;