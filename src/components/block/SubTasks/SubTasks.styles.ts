import styled from "styled-components";
import { darken } from "polished";
import { spacer, fontSizes } from "@styled/variables";
import { themeColors as colors } from "@styled/theme";

export const SubTasks = styled.ul`
  background-color: ${colors.light};
  list-style: none;
  padding: ${spacer} ${spacer.lg};
  border-top: 1px solid ${darken(0.05, colors.light)};
  margin: 0;
`;

export const SubTasksTitle = styled.h1`
  font-size: ${fontSizes.md};
  font-weight: 600;
  color: ${colors.dark};
  padding-bottom: ${spacer.sm};
  margin-bottom: ${spacer.sm};
  margin-top: 0;
  border-bottom: 1px solid ${darken(0.075, colors.light)};
`;

export const SubTaskItem = styled.li`
  padding: ${spacer.sm} 0;
  display: flex;
  align-items: center;
  cursor: pointer;

  span {
    &:first-of-type {
      color: ${colors.dark};
      font-style: italic;
    }

    &:last-child {
      color: ${colors.primary};
      font-weight: 600;
      font-size: ${fontSizes.xs};
      margin-left: auto;
    }
  }
}`;
