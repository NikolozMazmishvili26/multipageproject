import styled from "styled-components";

// import assets
import { Arrow } from "../../assets/index";

interface ProjectProps {
  projectTitle: string;
  projectImages: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  height: string;
}

function Project({ projectTitle, projectImages, height }: ProjectProps) {
  return (
    <ProjectCardWrapper>
      <ProjectCard projectImages={projectImages} height={height}>
        <ProjectTitle>{projectTitle}</ProjectTitle>
        <ViewProjectsBox>
          <ViewProjects>view projects</ViewProjects>
          <ArrowImage src={Arrow} alt="arrow" />
        </ViewProjectsBox>
      </ProjectCard>
    </ProjectCardWrapper>
  );
}

export default Project;

const ProjectCard = styled.div<{
  projectImages: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  height: string;
}>`
  width: 100%;
  height: 250px;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${(props) => props.projectImages.mobile});
    background-size: cover;
    background-position: center;
    opacity: 0.5;
    z-index: -1;
  }

  @media screen and (min-width: 768px) {
    height: 200px;
    &::before {
      background-image: url(${(props) => props.projectImages.tablet});
    }

    @media screen and (min-width: 1111px) {
      height: ${(props) => props.height};
      &::before {
        background-image: url(${(props) => props.projectImages.desktop});
      }
    }
  }
`;

const ProjectCardWrapper = styled.div`
  width: 100%;
  background: #000000;
  mix-blend-mode: normal;
  border-radius: 15px;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    background: var(--peach);
    mix-blend-mode: normal;
    ${ProjectCard} {
      &::before {
        opacity: 0.2;
      }
    }
  }
`;

const ProjectTitle = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 36px;
  text-align: center;
  letter-spacing: 1.4px;
  color: var(--white);
  text-transform: uppercase;

  @media screen and (min-width: 1111px) {
    font-size: 40px;
    line-height: 48px;
    letter-spacing: 2px;
  }
`;

const ViewProjectsBox = styled.div`
  display: flex;
  align-items: center;
  column-gap: 16px;
  margin-top: 12px;
`;

const ViewProjects = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  letter-spacing: 5px;
  text-transform: uppercase;
  color: var(--white);
`;

const ArrowImage = styled.img``;
