"use client";

import Image from "next/image";
import { getTasks } from "@/services";
import { TaskInput, TaskItem } from "@/components";
import { clipboardIcon } from "@/assets/icons";
import { useEffect, useState } from "react";
import { Task } from "@/types";

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: string) => {
    console.log("Add Task: ", task);
  };

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const taskData = await getTasks();
        setTasks(taskData);
      } catch (error) {
        console.error("Error fetching task:", error);
      }
    };

    fetchTask();
  }, []);

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
        {tasks.map((task, index) => {
          return <TaskItem key={index} name={task.name} />;
        })}
      </div>
    </>
  );
}
