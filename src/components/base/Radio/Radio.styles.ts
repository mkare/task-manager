import styled from "styled-components";
import { Icon } from "@components/base";

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.65;
  }
`;

export const RadioIcon = styled(Icon)`
  opacity: 0.25;
  transition: opacity 0.2s ease-in-out;

  &.checked {
    opacity: 0.65;
  }
`;

export const HiddenRadio = styled.input.attrs({ type: "radio" })`
  visibility: hidden;
`;
