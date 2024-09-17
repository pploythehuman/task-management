import Image from "next/image";
import rightArrowIcon from "../assets/icons/right-arrow.svg";
import { inherits } from "util";

interface TaskInputProps {
  placeholder: string;
}

const buttonStyle = {
  border: "none",
  cursor: "pointer",
  backgroundColor: "inherit",
  padding: 0,
  width: "20px",
  height: "20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export const TaskInput = ({ placeholder }: TaskInputProps) => {
  return (
    <div>
      <input type="text" placeholder={placeholder} />
      <button type="submit" style={buttonStyle}>
        <div style={{ width: "100%", height: "100%", position: "relative" }}>
          <Image
            src={rightArrowIcon}
            layout="fill"
            objectFit="contain"
            alt="Right Arrow Icon"
          />
        </div>
      </button>
    </div>
  );
};
