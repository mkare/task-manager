import { useState } from "react";
import {
  Input,
  Textarea,
  Checkbox,
  Radio,
  Fieldset,
  Button,
  Container,
} from "@components/base";
import { FormNav, Tags } from "@components/block";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Task } from "types";
import {
  TaskFormStyled,
  TaskFormActionsStyled,
  TaskFormDateInputStyled,
} from "./TaskForm.styles";
import { useAppDispatch } from "@store/index";
import { addTaskAsync, updateTaskAsync } from "@store/tasksSlice";

export default function TaskForm({ task }: { task?: Task | null }) {
  const title = task?.title || "";
  const description = task?.description || "";
  const dueDate = task?.dueDate || "";
  const createdAt = task?.createdAt || formatDate(new Date());
  const priority = task?.priority || "low";
  const tags = task?.tags || [];
  const isCompleted = task?.isCompleted || false;
  const id = task?.id || "";
  const subTasks = task?.subTasks || [];

  const [isTagVisible, setIsTagVisible] = useState(false);

  const dispatch = useAppDispatch();

  const initialValues: Task = {
    title,
    description,
    dueDate,
    createdAt,
    priority,
    tags,
    isCompleted,
    id,
    subTasks,
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    dueDate: Yup.string().required("Required"),
    createdAt: Yup.string().required("Required"),
    priority: Yup.string().required("Required"),
    tags: Yup.array().required("Required"),
    isCompleted: Yup.boolean().required("Required"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      // Create a new Task object
      const newTask: Task = {
        id: values.id,
        title: values.title,
        description: values.description,
        dueDate: values.dueDate,
        createdAt: values.createdAt.toString(),
        priority: values.priority,
        tags: values.tags,
        isCompleted: values.isCompleted,
        subTasks: [],
      };

      if (task) {
        formik.setFieldValue("createdAt", formatDate(new Date()));
      }

      console.log("newTask", newTask);

      // Dispatch action add or update Task
      const action = task
        ? await dispatch(updateTaskAsync(newTask))
        : await dispatch(addTaskAsync(newTask));

      // Check if the addTaskAsync action was successful
      if (addTaskAsync.fulfilled.match(action)) {
        console.log("New Task added:", action.payload);
      } else {
        console.log("Error adding Task:", action.payload);
      }

      // Check if the updateTaskAsync action was successful
      if (updateTaskAsync.fulfilled.match(action)) {
        console.log("Task updated:", action.payload);
      } else {
        console.log("Error updating Task:", action.payload);
      }
    },
    validateOnChange: false, // disable validation on change because it's too slow (performance)
  });

  const handleAddInput = () => {
    const tags = [...formik.values.tags, ""];
    formik.setFieldValue("tags", tags);
  };

  const handleRemoveInput = (index: number) => {
    const tags = [...formik.values.tags];
    tags.splice(index, 1);
    formik.setFieldValue("tags", tags);
  };

  const priorities = [
    { value: "low", label: "Low" },
    { value: "medium", label: "Medium" },
    { value: "high", label: "High" },
  ];

  function formatDate(date: Date) {
    const time = date.toTimeString().slice(0, 5);
    const dateStr = date.toISOString().slice(0, 10);
    return `${dateStr}T${time}`;
  }

  function renderFullDate(date: string) {
    const newDate = new Date(date);
    return newDate.toDateString();
  }

  // Render the form HTML
  return (
    <Container>
      <FormNav id={id} />
      <TaskFormStyled onSubmit={formik.handleSubmit}>
        <div>
          <Input
            name="title"
            value={formik.values.title}
            placeholder="New Task"
            onChange={formik.handleChange}
            validationMessage={formik.errors.title}
          />
        </div>

        <div>
          <Textarea
            name="description"
            value={formik.values.description}
            placeholder="Description"
            onChange={formik.handleChange}
            validationMessage={formik.errors.description}
          />
        </div>

        <TaskFormDateInputStyled>
          <label>Due Date</label>
          <Input
            name="dueDate"
            value={formik.values.dueDate}
            type="datetime-local"
            onChange={formik.handleChange}
            validationMessage={formik.errors.dueDate}
          />
        </TaskFormDateInputStyled>

        <TaskFormDateInputStyled>
          <label>Created At</label>
          <Input
            name="createdAt"
            value={renderFullDate(formik.values.createdAt)}
            onChange={formik.handleChange}
            validationMessage={formik.errors.createdAt}
            readonly
          />
        </TaskFormDateInputStyled>

        <Fieldset legend="Priority">
          {priorities.map((priority) => (
            <Radio
              key={priority.value}
              name="priority"
              value={priority.value}
              label={priority.label}
              onChange={() => formik.setFieldValue("priority", priority.value)}
              checked={formik.values.priority === priority.value}
            />
          ))}

          {formik.errors.priority ? <div>{formik.errors.priority}</div> : null}
        </Fieldset>

        {isTagVisible ? (
          <Tags
            tags={formik.values.tags}
            onChange={formik.handleChange}
            onAddInput={handleAddInput}
            onRemoveInput={handleRemoveInput}
          />
        ) : (
          <div>
            <Button
              variant="link"
              size="sm"
              onClick={() => {
                setIsTagVisible(true);
                handleAddInput();
              }}
            >
              Add Tags
            </Button>
          </div>
        )}

        <TaskFormActionsStyled>
          <div>
            <Button variant="light" size="sm" type="reset">
              Clear
            </Button>

            <Checkbox
              name="isCompleted"
              checked={formik.values.isCompleted}
              valid={formik.values.isCompleted}
              onChange={() =>
                formik.setFieldValue("isCompleted", !formik.values.isCompleted)
              }
            >
              {formik.values.isCompleted ? "Completed" : "Not Completed"}
            </Checkbox>
          </div>

          <Button type="submit">{task ? "Update Task" : "Add Task"}</Button>
        </TaskFormActionsStyled>
      </TaskFormStyled>
    </Container>
  );
}
