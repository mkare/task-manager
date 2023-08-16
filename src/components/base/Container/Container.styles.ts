import styled from "styled-components";
import { media } from "@styled/breakpoints";
import { spacer, containerMaxWidths } from "@styled/variables";

export const ContainerStyled = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0 ${spacer.md};
  width: 100%;

  ${media.tablet} {
    max-width: ${containerMaxWidths.tablet};
    padding: 0 ${spacer.lg};
  }

  ${media.laptop} {
    max-width: ${containerMaxWidths.laptop};
    padding: 0 ${spacer.xl};
  }

  ${media.desktop} {
    max-width: ${containerMaxWidths.desktop};
  }
`;
