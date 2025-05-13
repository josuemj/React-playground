import { Card } from "../../components/Card";
import { useEffect, useState } from "react";
import { Project } from "../../models/Project";
import { getProjects } from "../../services/projectService";
import "./Home.css";
import { Header } from "../../components/header/Header";

export function Home() {
  const [projectsData, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    getProjects().then(setProjects);
  }, []);
  return (
    <>
      <Header />
      <section className="main_section">
        {projectsData.length > 0 ? (
          projectsData.map((project) => (
            <Card
              image={project.image}
              projectName={project.name}
              route={project.route}
              backGroundColor={project.backgrounColor}
              onHoverColor={project.onHoverColor}
              description={project.desc}
              labels={project.labels}
              key={project.name}
            />
          ))
        ) : (
          <h1>no data</h1>
        )}
      </section>
    </>
  );
}

export default Home;
