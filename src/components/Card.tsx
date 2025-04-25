import "./Cards.css";
import React from "react";
import { useNavigate } from "react-router-dom";

type CardProps = {
  projectName: string;
  route: string;
  backGroundColor: string;
  onHoverColor: string;
};

export function Card({
  projectName,
  route,
  backGroundColor,
  onHoverColor,
}: CardProps) {
  const navigator = useNavigate();
  const style = {
    "--bg": backGroundColor,
    "--hover": onHoverColor,
  } as React.CSSProperties;

  return (
    <>
      <div
        className="card"
        style={style}
        onClick={() => {
          navigator(route);
        }}
      >
        {projectName}
        <p>{route}</p>
      </div>
    </>
  );
}
