"use client";

import { useEffect, useRef, useState } from "react";
import { Task } from "@/types";
import TaskItemButton from "./TaskItemButton";
import IconButton from "../IconButton";
import { checkMarkIcon, pencilIcon } from "@/assets/icons";

import "./TaskItem.css";

interface TaskItemProps {
  task: Task;
  onUpdateTask: (id: string, updatedTask: Partial<Task>) => void;
}

export default function TaskItem({ task, onUpdateTask }: TaskItemProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isComplete, setIsComplete] = useState(task.complete);
  const [isEditing, setIsEditing] = useState(false);

  const handleCompleteToggle = () => {
    const value = !isComplete;
    setIsComplete(value);
    onUpdateTask(task.id, { complete: value });
  };

  // Locate cursor at input when edit
  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  return (
    <div className="taskItemContainer">
      <TaskItemButton value={isComplete} onClick={handleCompleteToggle} />
      <input
        ref={inputRef}
        value={task.name}
        className="inputField"
        type="text"
        onChange={(event) => {
          console.log(event.target.value);
        }}
        readOnly={!isEditing}
        style={{ textDecoration: isComplete ? "line-through" : "none" }}
      />

      <IconButton
        icon={isEditing ? checkMarkIcon : pencilIcon}
        onClick={() => setIsEditing(!isEditing)}
      />
    </div>
  );
}
