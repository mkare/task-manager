import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { TaskDetail } from "@components/feature";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "@store/index";
import { fetchTaskByIdAsync } from "@store/tasksSlice";

const FullView: React.FC = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();
  const taskState = useSelector((state: RootState) => state.tasks);
  const task = taskState.currentTask;
  const status = taskState.status;

  useEffect(() => {
    if (typeof id === "string" && task?.id !== id) {
      dispatch(fetchTaskByIdAsync(id));
      // dispatch(fetchTaskByIdAsync(id)).then((result) => {
      //   console.log("result__", result);
      // });
    }

    console.log("task__", task);
  }, [task]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return <TaskDetail task={task} />;
};

export default FullView;
