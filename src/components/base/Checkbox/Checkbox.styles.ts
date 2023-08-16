import styled from "styled-components";
import { Icon } from "@components/base";
import { spacer } from "@styled/variables";
import { themeColors as colors } from "@styled/theme";
import { darken } from "polished";

export const CheckboxLabel = styled.label<{ valid?: string | undefined }>`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: ${spacer.xs} 0;
  user-select: none;
  ${({ valid }) => valid && `color: ${darken(0.05, colors.success)};`}

  span {
    margin-left: ${spacer.xs};
    font-weight: 600;
  }
`;

export const CheckboxIcon = styled(Icon)`
  opacity: 0.75;
  transition: opacity 0.2s ease-in-out;

  &.checked {
    opacity: 0.65;
  }
`;

export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  visibility: hidden;
`;
