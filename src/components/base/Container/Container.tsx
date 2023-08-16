import React from "react";
import { ContainerStyled } from "./Container.styles";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  function renderClassName() {
    if (className) {
      return "container " + className;
    }
    return "container";
  }
  return (
    <ContainerStyled className={renderClassName()}>{children}</ContainerStyled>
  );
};

export default Container;
