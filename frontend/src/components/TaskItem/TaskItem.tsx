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
  const editSaveButtonRef = useRef<HTMLButtonElement>(null);
  const [name, setName] = useState(task.name);
  const [isComplete, setIsComplete] = useState(task.complete);
  const [isEditing, setIsEditing] = useState(false);

  const handleCompleteToggle = () => {
    const value = !isComplete;
    setIsComplete(value);
    onUpdateTask(task.id, { complete: value });
  };

  const handleEditSaveToggle = () => {
    setIsEditing(!isEditing);
    if (isEditing) {
      onUpdateTask(task.id, { name });
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    console.log("editSaveButtonRef", editSaveButtonRef);
    if (
      isEditing &&
      inputRef.current &&
      !inputRef.current.contains(event.target as Node) &&
      editSaveButtonRef.current &&
      !editSaveButtonRef.current.contains(event.target as Node)
    ) {
      alert("You haven't finished editing!");
      setIsEditing(false);
    }
  };

  // Alert when have not finshed editing
  useEffect(() => {
    if (isEditing) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isEditing]);

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
        type="text"
        defaultValue={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
        readOnly={!isEditing}
        className="inputField"
        style={{ textDecoration: isComplete ? "line-through" : "none" }}
      />

      <IconButton
        ref={editSaveButtonRef}
        icon={isEditing ? checkMarkIcon : pencilIcon}
        onClick={handleEditSaveToggle}
      />
    </div>
  );
}
