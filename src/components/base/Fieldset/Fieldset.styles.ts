import styled from "styled-components";
import { borderRadius, fontSizeBase, spacer } from "@styled/variables";
import { lighten } from "polished";
import { themeColors as colors } from "@styled/theme";
import { FieldsetProps } from "./Fieldset";

type FieldsetStyledProps = {
  arranger?: FieldsetProps["arranger"];
};

export const FieldsetStyled = styled.fieldset<FieldsetStyledProps>`
  border: 2px solid ${lighten(0.6, colors.dark)};
  border-radius: ${borderRadius};
  font-size: ${fontSizeBase};
  padding-bottom: ${spacer.md};

  ${(props) =>
    props.arranger === "horizontal" &&
    `
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  `}

  ${(props) =>
    props.arranger === "vertical" &&
    `
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  `}
  }

  legend {
    background-color: ${lighten(0.9, colors.dark)};
    font-style: italic;
    margin: ${spacer.xs} auto;
    opacity: 0.4;
    padding: 0 ${spacer.sm};
  }

  &:last-child {
    margin-bottom: 0;
  }
`;
