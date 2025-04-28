import "./Cards.css";
import { useNavigate } from "react-router-dom";
import { Label } from "./Label";
type CardProps = {
  image: string
  projectName: string;
  route: string;
  backGroundColor: string;
  onHoverColor: string;
  description: string;
  labels: string[];
};

export function Card({
  image,
  projectName,
  route,
  backGroundColor,
  onHoverColor,
  description,
  labels,
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
        <div className="image-container">
          <img src={image} />
        </div>
        <p className="project-title">{projectName}</p>
        <p className="project-description">{description}</p>
        <div className="label-container">
          {labels.map((label) => (
            <Label label={label} />
          ))}
        </div>
      </div>
    </>
  );
}
