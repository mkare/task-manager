import React from "react";
import { Button, Badge, Container } from "@components/base";
import { TaskHead, TaskDescription, SubTasks } from "@components/block";
import { Task } from "types";
import emptyFile from "@icons/svg/file-empty.svg";
import { TaskDetailStyled, TaskDetailPlaceholder } from "./TaskDetail.styles";
type TaskDetailProps = {
  task?: Task | null;
};

const TaskDetail: React.FC<TaskDetailProps> = ({ task }) => {
  function isOutOfDate(date: string) {
    const today = new Date();
    const dueDate = new Date(date);
    return today > dueDate;
  }

  function remainingTime(date: string) {
    const today = new Date();
    const dueDate = new Date(date);
    const diff = dueDate.getTime() - today.getTime();
    const days = Math.floor(diff / (1000 * 3600 * 24));
    const hours = Math.floor((diff % (1000 * 3600 * 24)) / (1000 * 3600));
    // const minutes = Math.floor((diff % (1000 * 3600)) / (1000 * 60));

    const time = `${days} ${days > 1 ? "days" : "day"} ${hours} hours`;

    return time;
  }

  return (
    <>
      {task && (
        <Container>
          <TaskDetailStyled id={task.id}>
            <TaskHead
              title={task.title}
              id={task.id}
              dueDate={task.dueDate}
              remainingTime={remainingTime(task.dueDate)}
              priority={task.priority}
              isOutOfDate={isOutOfDate(task.dueDate)}
              tags={task.tags}
            />
            <TaskDescription
              content={task.description}
              isCompleted={task.isCompleted}
            />

            {task.subTasks && <SubTasks subTasks={task.subTasks} />}
          </TaskDetailStyled>
        </Container>
      )}

      {!task && (
        <TaskDetailPlaceholder>
          <img src={emptyFile} alt="Empty file" />
          <p>
            <i>There is nothing here. </i>
            <br />
            You can pin any task to here.
          </p>
          <Button variant="secondary">Pin a task</Button>
          <p className="button-group">
            <Button variant="primary">Add a new task</Button>

            <Badge variant="light">
              <i>or</i>
            </Badge>

            <Button variant="primary">import</Button>
          </p>
        </TaskDetailPlaceholder>
      )}
    </>
  );
};

export default TaskDetail;
