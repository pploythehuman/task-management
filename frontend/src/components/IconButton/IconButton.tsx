"use client";

import Image from "next/image";
import "./IconButton.css";

interface IconButtonProps {
  icon: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  className?: string;
}

export default function IconButton({
  icon,
  type = "button",
  onClick,
  className,
}: IconButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={className ? className : "iconButton"}
    >
      <div style={{ width: "100%", height: "100%", position: "relative" }}>
        <Image
          src={icon}
          layout="fill"
          objectFit="contain"
          alt="Right Arrow Icon"
        />
      </div>
    </button>
  );
}
