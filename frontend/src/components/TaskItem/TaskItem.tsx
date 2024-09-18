"use client";

import { useEffect, useRef, useState } from "react";
import TaskItemButton from "./TaskItemButton";
import IconButton from "../IconButton";
import { checkMarkIcon, pencilIcon } from "@/assets/icons";

import "./TaskItem.css";

interface TaskItemProps {
  name: string;
}

export default function TaskItem({ name }: TaskItemProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isComplete, setIsComplete] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  // Locate cursor at input when edit
  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  return (
    <div className="taskItemContainer">
      <TaskItemButton
        value={isComplete}
        onClick={() => {
          setIsComplete(!isComplete);
        }}
      />
      <input
        ref={inputRef}
        value={name}
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
