import styled, { keyframes } from "styled-components";
import { spacer, borderRadius } from "@styled/variables";
import { themeColors } from "@styled/theme";
import { lighten, rgba } from "polished";

const placeholderBefore = keyframes`
  0% {
    background-color: ${rgba(themeColors.info, 0.2)};
    width: 0;
    scale: 1;
  }
  50% {
    background-color: ${rgba(themeColors.info, 0.65)};
    width: 100%;
    scale: 1.25;
  }
  100% {
    background-color: ${rgba(themeColors.info, 0.2)};
    width: 0;
    scale: 1;
  }
`;

const placeholderAfter = keyframes`
  0% {
    background-color: ${rgba(themeColors.light, 0.65)};
    width: 100%;
    scale: 1.25;
  }
  50% {
    background-color: ${rgba(themeColors.light, 0.2)};
    width: 0;
    scale: 1;
  }
  100% {
    background-color: ${rgba(themeColors.light, 0.65)};
    width: 100%;
    scale: 1.25;
  }
`;

export const TaskListStyled = styled.ul`
  border: 2px solid ${lighten(0.6, themeColors.primary)};
  border-radius: ${borderRadius};
  margin: ${spacer.md} auto;
  padding: 0;
  overflow: hidden;
`;

export const LoadingListItem = styled.li`
  border-bottom: 2px solid ${lighten(0.6, themeColors.primary)};
  padding: 0;

  &:last-child {
    border-bottom: none;
  }

  h3 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    padding: 0;
    margin: 0;

    &:before,
    &:after {
      content: "";
      display: inline-block;
      width: 100%;
      height: 2.35em;
      opacity: 0.5;
    }

    &:before {
      animation: ${placeholderBefore} 1.5s infinite;
      transform-origin: left;
    }

    &:after {
      animation: ${placeholderAfter} 1.5s infinite;
      transform-origin: right;
    }

    &:hover {
      color: inherit;
      cursor: default;
    }
  }
`;

export const CompletedListItem = styled.li`
  border-bottom: 2px solid ${lighten(0.6, themeColors.primary)};
  padding: 0;

  &:last-child {
    border-bottom: none;
  }

  h3 {
    color: ${lighten(0.6, themeColors.primary)};
    text-decoration: line-through;
  }
`;

export const TaskListItem = styled.li`
  border-bottom: 2px solid ${lighten(0.6, themeColors.primary)};
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    margin-right: ${spacer.sm};
  }

  &:last-child {
    border-bottom: none;
  }

  a {
    display: block;
    padding: ${spacer.sm} ${spacer.md};
    text-decoration: none;
    color: ${themeColors.primary};
    cursor: pointer;
    margin: 0;

    &:hover {
      background-color: ${rgba(themeColors.primary, 0.05)};
    }
  }
}`;
