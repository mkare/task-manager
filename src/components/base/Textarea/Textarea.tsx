import React from "react";
import { TextareaStyled, TextareaErrorStyled } from "./Textarea.styles";

export type TextareaProps = {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  rows?: number;
  cols?: number;
  validationMessage?: string;
};

const Textarea: React.FC<TextareaProps> = ({
  name,
  value,
  onChange,
  placeholder,
  rows = 3,
  cols = 40,
  validationMessage,
}) => {
  return (
    <>
      <TextareaStyled
        className={`textarea` + (validationMessage ? " has-error" : "")}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        cols={cols}
      />
      {validationMessage && (
        <TextareaErrorStyled>{validationMessage}</TextareaErrorStyled>
      )}
    </>
  );
};

export default Textarea;
