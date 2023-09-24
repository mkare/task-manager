import styled from "styled-components";
import { fontSizeBase, spacer } from "@styled/variables";
import { themeColors as colors } from "@styled/theme";
import { darken } from "polished";

export const NavbarStyled = styled.nav`
  background-color: ${darken(0.05, colors.light)};
  padding: ${spacer.sm} 0;

  h1 {
    color: ${colors.dark};
    font-size: ${fontSizeBase};
    margin: 0;
    padding: ${spacer.sm} ${spacer.md};
    text-align: center;
  }

  ul {
    display: flex;
    justify-content: center;
    list-style: none;
    gap: ${spacer.xs} ${spacer.xs};
    margin: 0;
    padding: 0;

    li {
      a {
        color: ${colors.dark};
        display: block;
        font-size: ${fontSizeBase};
        padding: ${spacer.sm} ${spacer.md};
        text-decoration: none;
        transition: background-color 0.2s ease-in-out;

        &:hover {
          background-color: ${colors.primary};
          color: ${colors.light};
        }
      }
    }
  }
}`;
