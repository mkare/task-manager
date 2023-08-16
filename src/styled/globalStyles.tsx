import { normalize } from "styled-normalize";
import { createGlobalStyle } from "styled-components";
import { themeColors as colors } from "./theme";
import { fontFamilies, fontSizeBase, lineHeights } from "./variables";

export const GlobalStyles = createGlobalStyle`
  ${normalize}

  body {
    background-color: ${colors.light};
    font-family: ${fontFamilies.primary};
    font-size: ${fontSizeBase};
    line-height: ${lineHeights.sm};
  }

  main {
    margin: 0 auto;
  }

  a {
    text-decoration: none;
    color: ${colors.info};
  }
`;
