import styled from "styled-components";
import { ProjectType } from "../../../types";
import ProjectCard from "./ProjectCard";

interface DesignoProjectsProps {
  projects: ProjectType[];
}

function DesignoProjects({ projects }: DesignoProjectsProps) {
  return (
    <ProjectsList>
      {projects.map((project) => {
        return <ProjectCard key={project.id} project={project} />;
      })}
    </ProjectsList>
  );
}

export default DesignoProjects;

const ProjectsList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  align-items: center;
  @media screen and (min-width: 768px) {
    row-gap: 32px;
  }

  @media screen and (min-width: 1111px) {
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: 30px;
  }

  @media screen and (max-width: 1125px) {
    justify-content: center;
  }
`;
