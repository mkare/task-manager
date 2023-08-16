import styled from "styled-components";
import { spacer } from "@styled/variables";
import { themeColors } from "@styled/theme";
import { lighten } from "polished";

export const TaskDetailStyled = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
}`;

export const TaskDetailPlaceholder = styled.section`
  border: 2px solid ${lighten(0.6, themeColors.primary)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${spacer.md};
  margin: ${spacer.lg} auto;
  max-width: 30rem;
  overflow: hidden;
  padding: ${spacer.xl};
  position: relative;

  img {
    margin: ${spacer.sm} 0;
    max-width: ${spacer.xxl};
  }

  p {
    margin: ${spacer.sm} 0;
    text-align: center;
  }
}`;
