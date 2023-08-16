import styled from "styled-components";
import { borderRadius, fontSizeBase, spacer } from "@styled/variables";
import { themeColors as colors } from "@styled/theme";
import { lighten } from "polished";
import { validationMessage, dangerBorder } from "@styled/functions";
import { TextareaProps } from "./Textarea";

export const TextareaStyled = styled.textarea<TextareaProps>`
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
    background-color: ${lighten(0.9, colors.dark)};
    color: ${lighten(0.05, colors.secondary)};
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

export const TextareaErrorStyled = styled.span`
  ${validationMessage}
`;
