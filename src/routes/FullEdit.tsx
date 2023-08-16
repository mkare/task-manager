import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { TaskForm } from "@components/feature";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "@store/index";
import { fetchTaskByIdAsync } from "@store/tasksSlice";

const FullEdit: React.FC = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();
  const task = useSelector((state: RootState) => state.tasks.currentTask);

  console.log("task__", task);
  console.log("id__", id);

  useEffect(() => {
    if (task === null && typeof id === "string") {
      dispatch(fetchTaskByIdAsync(id));
    }
  }, [task, id]);

  if (!task) {
    return <div>Loading...</div>;
  }

  return <TaskForm task={task} />;
};

export default FullEdit;
