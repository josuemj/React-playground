import { Project } from "../models/Project";

export async function getProjects(): Promise<Project[]> {
  try {
    const response = await fetch("../data/projects.json");
    const data = await response.json();
    return data || [];
  } catch (error) {
    console.log(error);
    return [];
  }
}
