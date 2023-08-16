import React from "react";
import { Square, Star } from "@icons/index";
import { RadioLabel, RadioIcon, HiddenRadio } from "./Radio.styles";

type RadioProps = {
  name: string;
  value: string;
  checked?: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  label?: string;
};

const Radio: React.FC<RadioProps> = ({
  name,
  value,
  checked,
  onChange,
  label,
}) => {
  return (
    <RadioLabel>
      <RadioIcon
        icon={checked ? Star : Square}
        className={`radio-icon ${checked ? "checked" : "unchecked"}`}
      />
      {label && <span className="radio-label-text">{label}</span>}
      <HiddenRadio
        type="radio"
        className="radio-input"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
    </RadioLabel>
  );
};

export default Radio;
