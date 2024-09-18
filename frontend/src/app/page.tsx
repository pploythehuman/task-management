'use client'

import Image from "next/image";
import { TaskInput, TaskItem } from "@/components";
import { clipboardIcon } from "@/assets/icons";

export default function Home() {
  const addTask = (task: string) => {
    console.log("Add Task: ", task);
  };

  return (
    <>
      <div>
        <h1
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <Image
            alt="Right Arrow Icon"
            src={clipboardIcon}
            width="30"
            height="30"
          />
          My tasks
        </h1>

        <TaskInput onSubmit={addTask} />
      </div>
      <div>
        <div>To do</div>
        <TaskItem />
      </div>
    </>
  );
}
