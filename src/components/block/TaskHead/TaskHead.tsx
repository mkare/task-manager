import React from "react";
import { Badge } from "@components/base";
import { Link } from "react-router-dom";
import { TaskHeadStyled, TaskTitle, EditButton } from "./TaskHead.styles";

type Priority = "low" | "medium" | "high";

type TaskHeadProps = {
  id: string;
  title: string;
  dueDate: string;
  remainingTime: string;
  priority: Priority;
  isOutOfDate: boolean;
  tags: Array<string>;
};

const TaskHead: React.FC<TaskHeadProps> = ({
  id,
  title,
  dueDate,
  remainingTime,
  priority,
  isOutOfDate,
  tags,
}) => {
  return (
    <TaskHeadStyled>
      <TaskTitle>{title}</TaskTitle>
      <div>
        <p>Priority: {priority}</p>
        {/* <PriorityBadge variant={priority}>{priority}</PriorityBadge> */}
      </div>
      <div>
        <p>Deadline: </p>
        {isOutOfDate ? (
          <Badge variant="danger">overdue: {dueDate}</Badge>
        ) : (
          <p>
            <Badge variant="primary">On time</Badge>
            <Badge variant="primary">{dueDate}</Badge>
          </p>
        )}
      </div>
      {!isOutOfDate ? (
        <div>
          <p>Remaining time: </p>
          <Badge variant="light">{remainingTime}</Badge>
        </div>
      ) : null}

      {tags.length > 0 ? (
        <div>
          <p>Tags: </p>
          {/* <TagBadges tags={tags} /> */}

          {tags.map((tag) => (
            <Badge variant="info" key={tag}>
              {tag}
            </Badge>
          ))}
        </div>
      ) : null}

      <EditButton>
        <Link to={`/edit/${id}`} className="edit-button">
          Edit
        </Link>
      </EditButton>
    </TaskHeadStyled>
  );
};

export default TaskHead;
