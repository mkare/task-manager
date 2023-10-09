import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch, RootState } from "@store/index";
import { fetchTasksAsync, deleteTaskAsync } from "@store/tasksSlice";
import { NavLink } from "react-router-dom";
import { Button } from "@components/base";
import type { Task } from "types";
import {
  TaskListStyled,
  TaskListItem,
  LoadingListItem,
  CompletedListItem,
} from "./TaskList.styles";

export type TaskListProps = {
  tasks?: Task[];
  onClick?: (task: Task) => void;
};

const TaskList: React.FC<TaskListProps> = () => {
  const dispatch = useAppDispatch();

  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const status = useSelector((state: RootState) => state.tasks.status);

  useEffect(() => {
    dispatch(fetchTasksAsync());
  }, [dispatch]);

  const handleDeleteTask = (taskId: string) => {
    const shouldDelete = window.confirm(
      "Are you sure you want to delete this task?"
    );
    if (shouldDelete) {
      dispatch(deleteTaskAsync(taskId));
    }
    dispatch(deleteTaskAsync(taskId));
  };

  if (status === "loading") {
    return <TaskItemPlaceholder />;
  }

  if (status === "failed") {
    return <div>Failed to fetch todos</div>;
  }

  return (
    <TaskListStyled>
      {tasks
        .slice() // create a shallow copy of the todos array
        .sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        )
        .map((task: Task) => (
          <TaskListItem key={task.id}>
            <NavLink
              to={`/view/${task.id}`}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              {task.title}
            </NavLink>
            <Button
              variant="danger"
              size="sm"
              onClick={() => handleDeleteTask(task.id)}
            >
              delete
            </Button>
            {task.isCompleted && <CompletedListItem />}
          </TaskListItem>
        ))}
    </TaskListStyled>
  );
};

function TaskItemPlaceholder() {
  return (
    <TaskListStyled>
      {Array.from({ length: 1 }).map((_, index) => (
        <LoadingListItem key={index}>
          <h3></h3>
        </LoadingListItem>
      ))}
    </TaskListStyled>
  );
}

export default TaskList;
