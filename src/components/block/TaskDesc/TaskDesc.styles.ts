import styled from "styled-components";
import { lighten, darken } from "polished";
import { fontSizes, spacer } from "@styled/variables";
import { themeColors as colors } from "@styled/theme";

export const TaskDescStyled = styled.div`
  margin: ${spacer.lg} 0 0 0;

  h1 {
    font-size: ${fontSizes.md};
    font-weight: 600;
    color: ${lighten(0.05, colors.dark)};
    display: flex;
    align-items: center;
    margin: 0;
    padding: ${spacer.sm} 0;
    border-bottom: 1px solid ${darken(0.05, colors.light)};

    img {
      width: ${spacer.md};
      height: ${spacer.md};
      margin-right: ${spacer.xs};
    }

    span {
      &:last-child {
        margin-left: auto;
      }
    }
  }

  p {
    background-color: ${colors.light};
    padding: ${spacer.lg} ${spacer.md};
    margin: 0;
  }
}`;
