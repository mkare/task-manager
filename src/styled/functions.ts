import { css } from "styled-components";
import { fontSizes, spacer } from "@styled/variables";
import { themeColors as colors } from "@styled/theme";

export const validationMessage = css`
  display: block;
  color: ${colors.danger};
  font-size: ${fontSizes.sm};
  margin: ${spacer.xs} 0;
`;

export const dangerBorder = css`
  border-color: ${colors.danger};
  &:focus {
    border-color: ${colors.danger};
  }
`;
