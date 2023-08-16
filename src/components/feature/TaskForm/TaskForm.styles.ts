import styled from "styled-components";
import { spacer } from "@styled/variables";

export const TaskFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${spacer.md};
  margin-bottom: ${spacer.sm};
`;

export const TaskFormActionsStyled = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${spacer.sm};

  div {
    display: flex;
    gap: ${spacer.sm};
  }
`;

export const TaskFormAddTagButtonStyled = styled.button`
  appearance: none;
  border: none;
  background-color: transparent;
  color: inherit;
  cursor: pointer;
  font-size: inherit;
  padding: 0;
  text-align: left;
  width: 100%;
`;

export const TaskFormDateInputStyled = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${spacer.sm};

  label {
    font-style: italic;
    flex-shrink: 0;
    margin-right: ${spacer.sm};
    opacity: 0.4;
    min-width: 5.475rem;
  }

  input {
    max-width: 20rem;
  }

  span {
    margin-left: ${spacer.md};
  }
`;
