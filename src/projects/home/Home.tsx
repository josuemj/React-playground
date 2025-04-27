import { Card } from "../../components/Card";
import { useEffect, useState } from "react";
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

  const [projectsData, setProjects] = useState<Project[]>([]);

  const getProjects = async () => {
    try {
      const response = await fetch("../data/projects.json");
      const data = await response.json();
      console.log(data);
      if (data) {
        setProjects(data);
      } else {
        setProjects([]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);
  return (
    <>
      <section className="main_section">
        {projectsData ? (
          projectsData.map((project) => (
            <Card
              projectName={project.name}
              route={project.route}
              backGroundColor={project.backgrounColor}
              onHoverColor={project.onHoverColor}
              description={project.desc}
              labels={project.labels}
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
