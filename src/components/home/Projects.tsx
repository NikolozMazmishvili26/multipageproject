import styled from "styled-components";

// import components
import ProjectCard from "../shared/ProjectCard";

// import assets
import {
  WebDesignMobile,
  WebDesignDesktop,
  WebDesignTablet,
  //
  AppDesignMobile,
  AppDesignTablet,
  AppDesignDesktop,
  //
  GraphicDesignMobile,
  GraphicDesignTablet,
  GraphicDesignDesktop,
} from "../../assets/index";
import { Link } from "react-router-dom";

const webDesignImages = {
  mobile: WebDesignMobile,
  tablet: WebDesignTablet,
  desktop: WebDesignDesktop,
};

const appDesignImages = {
  mobile: AppDesignMobile,
  tablet: AppDesignTablet,
  desktop: AppDesignDesktop,
};

const graphicDesignImages = {
  mobile: GraphicDesignMobile,
  tablet: GraphicDesignTablet,
  desktop: GraphicDesignDesktop,
};

function Projects() {
  return (
    <ProjectsContainer>
      <LeftSide>
        <Link to="design/web">
          <ProjectCard images={webDesignImages} title="web design" />
        </Link>
      </LeftSide>

      <RightSide>
        <Link to="design/app">
          <ProjectCard images={appDesignImages} title="app design" />
        </Link>
        <Link to="design/graphic">
          <ProjectCard images={graphicDesignImages} title="graphic design" />
        </Link>
      </RightSide>
    </ProjectsContainer>
  );
}

export default Projects;

const ProjectsContainer = styled.div`
  max-width: 1111px;
  width: 100%;
  margin: auto;
  padding: 120px 24px;
  display: flex;
  flex-direction: column;
  row-gap: 24px;

  @media screen and (min-width: 1111px) {
    flex-direction: row;
    min-height: 640px;
    padding: 160px 0px;
    column-gap: 30px;
  }
`;

const LeftSide = styled.div`
  @media screen and (min-width: 1111px) {
    flex: 1;
    height: 640px;
  }
`;

const RightSide = styled.div`
  display: grid;
  row-gap: 24px;
  @media screen and (min-width: 1111px) {
    flex: 1;
    display: grid;
    grid-template-rows: 308px 308px;
    row-gap: 24px;
  }
`;
