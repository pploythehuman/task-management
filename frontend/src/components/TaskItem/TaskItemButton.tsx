"use client";

interface TaskItemButtonProps {
  value: boolean;
  onClick: () => void;
}

export default function TaskItemButton({
  value,
  onClick,
}: TaskItemButtonProps) {
  return (
    <button
      className="taskItemButton"
      onClick={onClick}
      style={{ backgroundColor: value ? "#ffffff" : "inherit" }}
    />
  );
}
