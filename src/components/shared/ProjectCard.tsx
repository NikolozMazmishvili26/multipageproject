import styled from "styled-components";

interface ProjectCardProps {
  images: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  title: string;
}

// import assets
import { Arrow } from "../../assets/index";

function ProjectCard({ images, title }: ProjectCardProps) {
  return (
    <ProjectContainer>
      <Project images={images}>
        <ProjectTitle>{title}</ProjectTitle>
        <ViewProjectsBox>
          <ViewProjectsTitle>view projects</ViewProjectsTitle>
          <ArrowImage src={Arrow} alt="arrow" />
        </ViewProjectsBox>
      </Project>
    </ProjectContainer>
  );
}

export default ProjectCard;

const Project = styled.div<{
  images: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
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
    background-image: url(${(props) => props.images.mobile});
    background-size: cover;
    background-position: center;
    opacity: 0.5;
    z-index: -1;
  }

  @media screen and (min-width: 768px) {
    height: 200px;
    &::before {
      background-image: url(${(props) => props.images.tablet});
    }
  }

  @media screen and (min-width: 1111px) {
    height: 100%;
    &::before {
      background-image: url(${(props) => props.images.desktop});
    }
  }
`;

const ProjectContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 15px;
  overflow: hidden;
  background: #000000;
  mix-blend-mode: normal;
  cursor: pointer;
  transition-duration: 0.2s;

  &:hover {
    background: var(--peach);
    ${Project} {
      &::before {
        opacity: 0.2;
      }
    }
  }
`;

const ProjectTitle = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 36px;
  text-align: center;
  letter-spacing: 1.4px;
  color: var(--white);
  z-index: 999;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 48px;
    letter-spacing: 2px;
  }
`;

const ViewProjectsBox = styled.div`
  display: flex;
  column-gap: 16px;
  margin-top: 12px;
  @media screen and (min-width: 768px) {
    margin-top: 24px;
  }
`;

const ViewProjectsTitle = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  letter-spacing: 5px;
  text-transform: uppercase;
  color: var(--white);
`;

const ArrowImage = styled.img``;
