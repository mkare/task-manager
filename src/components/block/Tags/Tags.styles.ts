import styled from "styled-components";
import { spacer, borderRadius } from "@styled/variables";
import { themeColors } from "@styled/theme";
import { media } from "@styled/breakpoints";

export const TagsStyled = styled.div`
  display: grid;
  position: relative;
  padding: 0.05rem 0;
  width: calc(100% - ${spacer.xxl});
  margin-left: -${spacer.xxl};
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: ${spacer.sm};
  margin-bottom: ${spacer.sm};

  ${media.tablet} {
    grid-template-columns: 1fr 1fr 1fr;
  }

  ${media.laptop} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  > div {
    padding: ${spacer.xs} 0;
  }

  > p {
    color: ${themeColors.primary};
    font-size: 0.8rem;
    font-weight: 600;
    margin-bottom: ${spacer.xs};
    padding: 0 ${spacer.sm};
  }

  > button {
    position: absolute;
    top: calc(${spacer.xs} + 0.05rem);
    right: -${spacer.xxl};
  }
`;

export const TagStyled = styled.div`
  position: relative;

  input {
    width: 100%;
  }

  button {
    color: ${themeColors.dark};
    background-color: transparent;
    border-radius: 0 ${borderRadius} ${borderRadius} 0;
    position: absolute;
    font-weight: 600;
    top: ${spacer.xs};
    right: 0;
  }
`;
