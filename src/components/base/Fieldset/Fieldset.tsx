import React from "react";
import { FieldsetStyled } from "./Fieldset.styles";

// display vertical or horizontal
export type FieldsetProps = {
  children: React.ReactNode;
  arranger?: "vertical" | "horizontal" | "grid";
  legend?: string;
};

const Fieldset: React.FC<FieldsetProps> = ({
  children,
  arranger = "horizontal",
  legend,
}) => {
  return (
    <FieldsetStyled arranger={arranger}>
      <legend>{legend}</legend>
      {children}
    </FieldsetStyled>
  );
};

export default Fieldset;
