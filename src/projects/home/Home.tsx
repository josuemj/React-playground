import { Card } from "../../components/Card";
import "./Home.css";

export function Home() {
  interface Project {
    name: string;
    desc: string;
    route: string;
    backgrounColor: string;
    onHoverColor: string;
    labels: string[];
  }
  const projects: Project[] = [
    {
      name: "Counter",
      desc: "A basic counter",
      route: "/counter",
      backgrounColor: "rgb(255, 204, 102)",
      onHoverColor: "rgb(255, 102, 102)",
      labels: ["setState", "foundational"],
    },
    {
      name: "Cat Facts",
      desc: "Random cat facts",
      route: "/catfacts",
      backgrounColor: "rgb(35, 84, 169)",
      onHoverColor: "rgb(39, 116, 139)",
      labels: ["fetch", "data", "API", "JSON"],
    },
  ];
  return (
    <>
      <section className="main_section">
        {projects.map((project) => (
          <Card
            projectName={project.name}
            route={project.route}
            backGroundColor={project.backgrounColor}
            onHoverColor={project.onHoverColor}
            description={project.desc}
            labels={project.labels}
          />
        ))}
      </section>
    </>
  );
}

export default Home;
