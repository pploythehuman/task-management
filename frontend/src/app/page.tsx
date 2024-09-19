"use client";

import Image from "next/image";
import { createTask, getTasks, updateTask } from "@/services";
import { TaskInput, TaskItem } from "@/components";
import { clipboardIcon } from "@/assets/icons";
import { useEffect, useState } from "react";
import { Task } from "@/types";

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAddTask = async (task: string) => {
    try {
      const newTask = await createTask({ name: task });
      setTasks((prevTasks) => [...prevTasks, newTask]);
    } catch (error) {
      console.error("Error creating task:", error);
    }
  };

  const handleUpdateTask = async (id: string, updatedTask: Partial<Task>) => {
    try {
      const updated = await updateTask(id, updatedTask);
      setTasks((prevTasks) =>
        prevTasks.map((task) => (task.id === id ? updated : task))
      );
    } catch (error) {
      console.error("Error updating task:", error);
    }
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

        <TaskInput onSubmit={handleAddTask} />
      </div>
      <div>
        <div>To do</div>
        {tasks.map((task, index) => {
          return (
            <TaskItem key={index} task={task} onUpdateTask={handleUpdateTask} />
          );
        })}
      </div>
    </>
  );
}
