import React from "react";
import descSvg from "@icons/svg/description.svg";
import { Badge } from "@components/base";
import { TaskDescStyled } from "./TaskDesc.styles";

type TaskDescriptionProps = {
  content: string;
  isCompleted: boolean;
};

const TaskDescription: React.FC<TaskDescriptionProps> = ({
  content,
  isCompleted,
}) => {
  return (
    <TaskDescStyled>
      <h1>
        <img src={descSvg} alt="description" />
        <span>Description</span>
        <Badge variant={isCompleted ? "success" : "info"}>
          {isCompleted ? "Completed" : "In progress"}
        </Badge>
      </h1>
      <p>{isCompleted ? <s>{content}</s> : content}</p>
    </TaskDescStyled>
  );
};

export default TaskDescription;
