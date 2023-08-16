import styled from "styled-components";
import { lighten } from "polished"; // polished, Sass fonksiyonlarını taklit eder
import { borderRadius, fontSizeBase, spacer } from "@styled/variables";
import { themeColors as colors } from "@styled/theme";
import { validationMessage, dangerBorder } from "@styled/functions";
import { InputProps } from "./Input";

export const InputStyled = styled.input<InputProps>`
  appearance: none;
  box-sizing: border-box;
  width: 100%;
  border-radius: ${borderRadius};
  border: 2px solid ${lighten(0.6, colors.dark)};
  color: ${colors.dark};
  font-weight: 400;
  font-size: ${fontSizeBase};
  padding: ${spacer.sm} ${spacer.md};
  transition: border-color 0.2s ease-in-out;

  &:hover {
    border-color: ${lighten(0.4, colors.dark)};
  }

  &:focus {
    outline: none;
    border-color: ${lighten(0.3, colors.primary)};
  }

  &::placeholder {
    color: ${lighten(0.5, colors.dark)};
    font-style: italic;
  }

  &:read-only {
    background-color: transparent;
    border-color: transparent;
    color: ${lighten(0.05, colors.primary)};
    appearance: none;
    user-select: none;
  }

  &:disabled {
    background-color: ${lighten(0.9, colors.dark)};
    color: ${lighten(0.05, colors.secondary)};
  }

  &.has-error {
    ${dangerBorder}
  }
`;

export const InputErrorStyled = styled.span`
  ${validationMessage}
`;

export const InputLabelStyled = styled.label`
  display: block;
  margin-bottom: ${spacer.xs};
  font-weight: 600;
  font-size: ${fontSizeBase};
`;
