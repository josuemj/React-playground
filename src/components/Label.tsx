import "./Label.css";
import { labelColors } from "../assets/data/Labels";
import { useState } from "react";

type LabelProps = {
  label: string;
};

export function Label({ label }: LabelProps) {
  const [isHovered, setHover] = useState(false);
  console.log("label", label);
  const style = {
    backgroundColor: isHovered
      ? labelColors[label].onHoverColor
      : labelColors[label].backgroundColor,
    color: labelColors[label].textColor,
  };

  return (
    <>
      <div
        className="label"
        style={style}
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
      >
        {label}
      </div>
    </>
  );
}
