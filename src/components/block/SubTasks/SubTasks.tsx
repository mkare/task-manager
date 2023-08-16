import React from "react";
import { Checkbox } from "@components/base";

type SubTasksProps = {
  subTasks: Array<SubTask>;
};

type SubTask = {
  id: string;
  text: string;
  completed: boolean;
};

const SubTasks: React.FC<SubTasksProps> = ({ subTasks }) => {
  if (!subTasks.length) return null;

  return (
    <ul className="sub-tasks">
      <h1>Subtasks</h1>
      {subTasks.map((subTask: SubTask) => (
        <li key={subTask.id}>
          <Checkbox
            checked={subTask.completed}
            onChange={(e) => console.log(e)}
          />
          <span>
            {subTask.completed ? <s>{subTask.text}</s> : subTask.text}
          </span>
          <span>{subTask.completed ? "completed" : "waiting"}</span>
        </li>
      ))}
    </ul>
  );
};

export default SubTasks;
