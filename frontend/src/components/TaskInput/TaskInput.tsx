"use client";

import { useState } from "react";
import Image from "next/image";

import { validateInput } from "@/utils/helpers";
import IconButton from "../IconButton/IconButton";
import { plusIcon, rightArrowIcon } from "@/assets/icons";

import "./TaskInput.css";

interface TaskInputProps {
  onSubmit: (value: string) => void;
}

export default function TaskInput({ onSubmit }: TaskInputProps) {
  const [value, setValue] = useState<string>("");

  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validateInput(value, "Task cannot be empty!")) return;

    onSubmit(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmitForm} className="taskInputContainer">
      <div className="labelContainer">
        <Image src={plusIcon} width="20" height="20" alt="Plus Icon" />
        <p>Add a Task</p>
      </div>

      <input
        type="text"
        value={value}
        placeholder="Try typing 'Buy Milk'"
        onChange={(event) => {
          setValue(event.target.value);
        }}
        className="inputField"
      />

      <IconButton type="submit" icon={rightArrowIcon} />
    </form>
  );
}
