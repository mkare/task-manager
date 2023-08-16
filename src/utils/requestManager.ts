import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  updateDoc,
} from "firebase/firestore";
import { Task } from "types";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase";

// Firebase uygulamanızı başlatın
const app = initializeApp(firebaseConfig);

// Firestore veritabanı nesnesini alın
const db = getFirestore(app);

// Firestore collection reference for "pages"
const tasksRef = collection(db, "pages");

const fakeDelay = 1500;

// Add delay to response time
const addDelay = (response: any) => {
  return new Promise((resolve) =>
    setTimeout(() => resolve(response), fakeDelay)
  );
};

// Fetch all tasks
export const fetchTasks = async (): Promise<Array<Task>> => {
  const snapshot = await getDocs(tasksRef);

  const data: Array<Task> = [];

  snapshot.forEach((doc) => {
    const task = doc.data();
    task.id = doc.id;
    data.push(task as Task);
  });

  // console.log("fetch tasks data :", data);

  return (await addDelay(data as Array<Task>)) as Promise<Array<Task>>;
};

// Add a new task
export const addTask = async (task: Task): Promise<Task | string> => {
  try {
    // Add the new task to the collection with a generated ID
    const docRef = await addDoc(tasksRef, {
      title: task.title,
      description: task.description || "",
      createdAt: task.createdAt || new Date().toISOString(),
      dueDate: task.dueDate || null,
      priority: task.priority || "low",
      completed: false,
      subTasks: [],
      tags: task.tags || [],
    });

    // Return an object representing the new task with its generated ID
    return {
      ...task,
      id: docRef.id,
      createdAt: new Date().toISOString(),
      isCompleted: false,
      subTasks: [],
      tags: task.tags || [],
    };
  } catch (error) {
    // If an error occurs, reject the promise with an error message
    return rejectWithValue("Unable to add task");
  }
};

// Fetch a task by ID
export const fetchTaskById = async (id: string): Promise<Task | null> => {
  const taskRef = doc(tasksRef, id);
  const docSnapshot = await getDoc(taskRef);

  if (docSnapshot.exists()) {
    const task = docSnapshot.data() as Task;
    task.id = id;
    return task;
  } else {
    return null;
  }
};

// Update a task by ID
export const updateTaskById = async (task: Task): Promise<Task | null> => {
  const taskRef = doc(tasksRef, task.id);

  try {
    // First, fetch the existing task to check if it exists
    const docSnapshot = await getDoc(taskRef);

    if (!docSnapshot.exists()) {
      // console.log("task with task", task.id, "does not exist");
      return null;
    }

    // Update the task with the new data
    await updateDoc(taskRef, {
      title: task.title,
      description: task.description || "",
      dueDate: task.dueDate || null,
      priority: task.priority || "low",
      completed: task.isCompleted || false,
      subTasks: task.subTasks || [],
      tags: task.tags || [],
    });

    // Fetch the updated task and return it
    const updatedDocSnapshot = await getDoc(taskRef);
    const updatedTask = updatedDocSnapshot.data() as Task;
    updatedTask.id = task.id;
    return updatedTask;
  } catch (error) {
    // console.log("Error updating task with ID", task.id, ":", error);
    return null;
  }
};

function rejectWithValue(
  _arg0: string
): string | Task | PromiseLike<string | Task> {
  throw new Error("Function not implemented.");
}
