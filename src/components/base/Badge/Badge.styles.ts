import styled from "styled-components";
import { borderRadius, fontSizes, spacer } from "@styled/variables";
import { themeColors as colors } from "@styled/theme";
import { BadgeProps, BadgeColor } from "./Badge";

export const BadgeStyled = styled.span<BadgeProps>`
  display: inline-block;
  padding: ${spacer.xs} ${spacer.sm};
  font-size: ${fontSizes.xs};
  font-weight: bold;
  text-align: center;
  border-radius: ${borderRadius};
  margin: 0 2px;
  color: ${colors.white};
  background: ${({ variant }) => colors[variant as BadgeColor]};
  color: ${({ variant }) => (variant === "light" ? colors.dark : colors.white)};

  &:hover {
    opacity: 0.8;
  }
`;
