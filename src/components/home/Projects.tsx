import styled from "styled-components";

// import assets
import {
  AppDesignMobile,
  AppDesignTablet,
  AppDesignDesktop,
  //
  GraphicDesignMobile,
  GraphicDesignTablet,
  GraphicDesignDesktop,
  //
  WebDesignMobile,
  WebDesignTablet,
  WebDesignDesktop,
  Arrow,
} from "../../assets/index";

// import component
import Project from "./Project";

// images objects
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
        <Project
          projectTitle="web design"
          projectImages={webDesignImages}
          height="640px"
        />
      </LeftSide>
      <RightSide>
        <Project
          projectTitle="app design"
          projectImages={appDesignImages}
          height="308px"
        />
        <Project
          projectTitle="graphic design"
          projectImages={graphicDesignImages}
          height="308px"
        />
      </RightSide>
    </ProjectsContainer>
  );
}

export default Projects;

const ProjectsContainer = styled.div`
  max-width: 1411px;
  margin: auto;
  padding: 120px 24px 0px 24px;
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  background-color: gainsboro;

  @media screen and (min-width: 768px) {
    padding: 120px 40px 0px 40px;
  }

  @media screen and (min-width: 1111px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 30px;
  }

  @media screen and (min-width: 1460px) {
    padding: 106px 0px 160px 0px;
  }
`;

const LeftSide = styled.div``;

const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
`;
