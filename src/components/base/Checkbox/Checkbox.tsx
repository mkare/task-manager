import React from "react";
import { Check, Square } from "@icons/index";
import { CheckboxLabel, CheckboxIcon, HiddenCheckbox } from "./Checkbox.styles";

const Checkbox = ({
  checked,
  onChange,
  name,
  valid,
  children,
}: {
  checked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  name?: string;
  valid?: boolean | undefined;
  children?: React.ReactNode;
}) => {
  return (
    <CheckboxLabel valid={valid ? "true" : undefined}>
      <CheckboxIcon
        icon={checked ? Check : Square}
        className={checked ? "checked" : "unchecked"}
        name={name}
      />
      <span>{children}</span>
      <HiddenCheckbox checked={checked} onChange={onChange} />
    </CheckboxLabel>
  );
};

export default Checkbox;
