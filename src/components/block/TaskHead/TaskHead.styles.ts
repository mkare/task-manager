import styled from "styled-components";
import { darken } from "polished";
import { spacer, borderRadius, fontSizes } from "@styled/variables";
import { themeColors as colors } from "@styled/theme";

export const TaskHeadStyled = styled.div`
  border: 1px solid ${darken(0.075, colors.light)};
  border-radius: ${borderRadius};
  padding: ${spacer.lg} ${spacer.md};
  margin: ${spacer.lg} 0 0 0;
  position: relative;

  div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: ${spacer.sm} auto;

    & > p {
      &:first-of-type {
        color: ${colors.dark};
        font-size: ${fontSizes.sm};
        width: 35%;
      }
    }

    & > div {
      &:first-of-type {
        margin-left: 0;
      }
    }
  }
`;

export const TaskTitle = styled.h1`
  font-size: ${fontSizes.xl};
  display: flex;
  justify-content: flex-start;
  margin-bottom: 0;
  margin-top: 0;
  color: ${colors.dark};
`;

export const EditButton = styled.div`
  position: absolute;
  top: ${spacer.xs};
  right: ${spacer.md};
`;
