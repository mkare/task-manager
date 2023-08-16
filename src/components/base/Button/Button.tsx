import React from "react";
import { ButtonStyled } from "./Button.styles";

export type ButtonColor =
  | "primary"
  | "secondary"
  | "danger"
  | "dark"
  | "light"
  | "link";

export type ButtonProps = {
  variant?: ButtonColor;
  size?: "sm" | "md" | "lg";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
};

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  onClick,
  children,
  icon,
  className,
  disabled,
  type = "button",
}) => {
  return (
    <ButtonStyled
      variant={variant}
      className={className}
      onClick={onClick}
      disabled={disabled}
      type={type}
      size={size}
    >
      {icon && icon}
      {children && <span>{children}</span>}
    </ButtonStyled>
  );
};

export default Button;
