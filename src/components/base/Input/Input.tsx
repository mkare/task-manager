import React from "react";
import {
  InputStyled,
  InputErrorStyled,
  InputLabelStyled,
} from "./Input.styles";

export type InputProps = {
  id?: string;
  name: string;
  type?: string;
  value: string;
  label?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  disabled?: boolean;
  readonly?: boolean;
  validationMessage?: string;
};

const Input: React.FC<InputProps> = ({
  id,
  name,
  value,
  label,
  onChange,
  placeholder,
  type = "text",
  disabled = false,
  readonly = false,
  validationMessage,
}) => {
  return (
    <>
      {label && <InputLabelStyled htmlFor={id}>{label}</InputLabelStyled>}
      <InputStyled
        id={id}
        className={`input` + (validationMessage ? " has-error" : "")}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readonly}
      />
      {validationMessage && (
        <InputErrorStyled>{validationMessage}</InputErrorStyled>
      )}
    </>
  );
};

export default Input;
