import styled from "styled-components";
import { darken, lighten } from "polished";
import { borderRadius, fontSizes, spacer } from "@styled/variables";
import { themeColors as colors } from "@styled/theme";
import { ButtonProps, ButtonColor } from "./Button";

const buttonColors: { [key in ButtonColor]: string } = {
  primary: colors.primary,
  secondary: colors.secondary,
  danger: colors.danger,
  dark: colors.dark,
  light: colors.light,
  link: "transparent",
};

export const ButtonStyled = styled.button<ButtonProps>`
  appearance: none;
  border: none;
  border-radius: ${borderRadius};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  background-color: ${(props) =>
    props.variant === "light"
      ? darken(0.05, colors.light)
      : props.variant === "link"
      ? "transparent"
      : buttonColors[props.variant || "primary"]};
  color: ${(props) =>
    props.variant === "light" || props.variant === "link"
      ? colors.primary
      : colors.white};
  font-size: ${(props) =>
    props.size === "sm"
      ? fontSizes.sm
      : props.size === "lg"
      ? fontSizes.lg
      : fontSizes.md};
  opacity: ${(props) => (props.disabled ? "0.5" : "1")};
  padding: ${(props) =>
    props.size === "sm"
      ? `${spacer.xs} ${spacer.sm}`
      : props.size === "lg"
      ? `${spacer.sm} ${spacer.lg}`
      : `${spacer.sm} ${spacer.md}`};

  border: 2px solid transparent;

  &:hover {
    background-color: ${(props) =>
      props.disabled
        ? props.variant === "link"
          ? "transparent"
          : buttonColors[props.variant || "primary"]
        : "transparent"};
    color: ${(props) =>
      props.disabled && props.variant === "link"
        ? colors.primary
        : props.variant === "link"
        ? colors.secondary
        : props.variant === "light"
        ? colors.dark
        : buttonColors[props.variant || "primary"]};
    border-color: ${(props) =>
      props.disabled
        ? buttonColors[props.variant || "primary"]
        : buttonColors[props.variant || "primary"]};
  }

  ${(props) =>
    props.disabled &&
    `
    &:hover {
      background-color: ${
        props.variant === "light"
          ? lighten(0.1, colors.light)
          : buttonColors[props.variant || "primary"]
      };
      color: ${props.variant === "link" ? colors.primary : colors.white};
      border-color: ${buttonColors[props.variant || "primary"]};
    }
  `}
`;
