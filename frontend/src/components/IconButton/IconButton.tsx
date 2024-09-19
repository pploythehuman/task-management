"use client";

import Image from "next/image";
import React from "react";
import "./IconButton.css";

interface IconButtonProps {
  icon: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  className?: string;
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ icon, type = "button", onClick, className }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        onClick={onClick}
        className={className ? className : "iconButton"}
      >
        <div style={{ width: "100%", height: "100%", position: "relative" }}>
          <Image
            src={icon}
            layout="fill"
            objectFit="contain"
            alt="icon"
          />
        </div>
      </button>
    );
  }
);

IconButton.displayName = "IconButton";

export default IconButton;
