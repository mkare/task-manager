import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  addTask,
  fetchTasks,
  fetchTaskById,
  updateTaskById,
  removeTaskById,
} from "@utils/requestManager";
import { Task } from "types";

export interface TasksState {
  tasks: Array<Task>;
  currentTask: Task | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: TasksState = {
  tasks: [],
  currentTask: null,
  status: "idle",
  error: null,
};

export const fetchTasksAsync = createAsyncThunk(
  "tasks/fetchTasks",
  async () => {
    const response = await fetchTasks();
    return response as Task[];
  }
);

export const addTaskAsync = createAsyncThunk(
  "tasks/addTaskAsync",
  async (task: Task) => {
    const response = await addTask(task);
    return response;
  }
);

export const fetchTaskByIdAsync = createAsyncThunk(
  "tasks/fetchTaskByIdAsync",
  async (id: string) => {
    const response = await fetchTaskById(id);
    return response as Task;
  }
);

export const updateTaskAsync = createAsyncThunk(
  "tasks/updateTaskAsync",
  async (task: Task) => {
    const response = await updateTaskById(task);
    return response;
  }
);

export const deleteTaskAsync = createAsyncThunk(
  "tasks/deleteTaskAsync",
  async (id: string) => {
    const response = await removeTaskById(id);
    return response;
  }
);

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasksAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTasksAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.tasks = action.payload;
      })
      .addCase(fetchTasksAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Something went wrong";
      })
      .addCase(addTaskAsync.fulfilled, (state, action) => {
        const tasks = Array.isArray(action.payload)
          ? action.payload
          : [action.payload];
        state.tasks = [...state.tasks, ...tasks];
      })
      .addCase(fetchTaskByIdAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTaskByIdAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        if (action.payload) {
          state.currentTask = action.payload;
          const index = state.tasks.findIndex(
            (task) => task.id === action.payload.id
          );
          if (index >= 0) {
            state.tasks[index] = action.payload;
          } else {
            state.tasks.push(action.payload);
          }
        }
      })
      .addCase(fetchTaskByIdAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Something went wrong";
      })
      .addCase(deleteTaskAsync.fulfilled, (state, action) => {
        const removedTaskId = action.payload;
        if (removedTaskId) {
          state.tasks = state.tasks.filter((task) => task.id !== removedTaskId);
        } else {
          console.log("Task with ID not found or already removed.");
        }
      })
      .addCase(deleteTaskAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Something went wrong";
      });
  },
});

export const selectTasks = (state: { tasks: TasksState }) => state.tasks.tasks;
export default tasksSlice.reducer;
