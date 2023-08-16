export interface Task {
  id: string;
  title: string;
  isCompleted: boolean;
  description: string;
  createdAt: string;
  dueDate: string;
  priority: Priority;
  subTasks: Array<SubTask>;
  tags: Array<string>;
}

export type SubTask = {
  id: string;
  text: string;
  completed: boolean;
};

export type Priority = "low" | "medium" | "high";
