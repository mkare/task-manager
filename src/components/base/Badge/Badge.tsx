import React from "react";
import { BadgeStyled } from "./Badge.styles";

export type BadgeColor =
  | "primary"
  | "secondary"
  | "danger"
  | "success"
  | "info"
  | "light";

export type BadgeProps = {
  variant: BadgeColor;
  children: React.ReactNode;
};

const Badge: React.FC<BadgeProps> = ({ variant = "light", children }) => {
  return <BadgeStyled variant={variant}>{children}</BadgeStyled>;
};

export default Badge;
