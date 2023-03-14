import styled from "styled-components";
import { ProjectType } from "../../../types";

interface ProjectCard {
  project: ProjectType;
}

function ProjectCard({ project }: ProjectCard) {
  //
  const { description, image, title } = project;

  return (
    <ProjectItem>
      <div>
        <ProjectImage src={"https://multipage-api.onrender.com" + image} />
      </div>
      <ProjectDescribeBox>
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectDescription>{description}</ProjectDescription>
      </ProjectDescribeBox>
    </ProjectItem>
  );
}

export default ProjectCard;

const ProjectItem = styled.li`
  @media screen and (min-width: 768px) {
    display: flex;
    width: 100%;
  }
  @media screen and (min-width: 1111px) {
    max-width: 350px;
    flex-direction: column;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 15px 15px 0px 0px;
  @media screen and (min-width: 768px) {
    border-radius: 15px 0px 0px 15px;
    width: 338px;
  }
  @media screen and (min-width: 1111px) {
    width: 100%;
    border-radius: 15px 15px 0px 0px;
  }
`;

const ProjectTitle = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;
  text-align: center;
  letter-spacing: 5px;
  text-transform: uppercase;
  color: var(--peach);
  @media screen and (min-width: 768px) {
    max-width: 286px;
    width: 100%;
    margin: auto;
  }
`;

const ProjectDescription = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  text-align: center;
  color: var(--dark-grey);
  margin-top: 16px;
  @media screen and (min-width: 768px) {
    width: 286px;
    margin: auto;
    margin-top: 15px;
  }
`;

const ProjectDescribeBox = styled.div`
  padding: 32px 30px;
  background-color: var(--design-card-color);
  border-radius: 0px 0px 15px 15px;
  transition-duration: 0.2s;

  &:hover {
    cursor: pointer;
    background-color: var(--peach);
    ${ProjectTitle} {
      color: var(--white);
    }
    ${ProjectDescription} {
      color: var(--white);
    }
  }

  @media screen and (min-width: 768px) {
    border-radius: 0px 15px 15px 0px;
    padding: 108px 32px;
    width: 100%;
  }
  @media screen and (min-width: 1111px) {
    padding: 32px;
    border-radius: 0px 0px 15px 15px;
  }
`;
