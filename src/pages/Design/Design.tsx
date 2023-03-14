import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

// import types
import { ProjectType } from "../../../types";

// import axios request
import { getCategoryProjects } from "../../axios";

// import components
import { DesignoProjects } from "../../components/design";
import ProjectCard from "../../components/shared/ProjectCard";
import Loading from "../../components/loading/Loading";

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

function Design() {
  const params = useParams();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<ProjectType[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getCategoryProjects(params.category || "");
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    getData();
  }, [params.category]);

  // navigate function
  if (isLoading) {
    return <Loading />;
  }

  const bannerDescription =
    params.category === "web"
      ? "We build websites that serve as powerful marketing tools and bring memorable brand experiences."
      : params.category === "app"
      ? "Our mobile designs bring intuitive digital solutions to your customers right at their fingertips."
      : "We deliver eye-catching branding materials that are tailored to meet your business objectives.";

  return (
    <DesignContainer>
      <Banner>
        <BannerTitle>{params.category} Design</BannerTitle>
        <BannerDescription>{bannerDescription}</BannerDescription>
      </Banner>
      {/* wrapper */}
      <Wrapper>
        <DesignoProjects projects={data} />
      </Wrapper>
      <ProjectsLinks>
        {params.category !== "web" ? (
          <Link to={`/design/web`}>
            <ProjectCard images={webDesignImages} title="web design" />
          </Link>
        ) : null}
        {params.category !== "app" ? (
          <Link to={`/design/app`}>
            <ProjectCard images={appDesignImages} title="app design" />
          </Link>
        ) : null}

        {params.category !== "graphic" ? (
          <Link to={`/design/graphic`}>
            <ProjectCard images={graphicDesignImages} title="graphic design" />
          </Link>
        ) : null}
      </ProjectsLinks>
    </DesignContainer>
  );
}

export default Design;

const DesignContainer = styled.div`
  max-width: 1111px;
  width: 100%;
  padding-bottom: 286px;
  margin: auto;
  @media screen and (min-width: 768px) {
    padding-bottom: 384px;
  }
  @media screen and (min-width: 1111px) {
    padding-bottom: 380px;
  }
`;

const Banner = styled.div`
  width: 100%;
  background-color: var(--peach);
  padding: 105px 24px;
  @media screen and (min-width: 768px) {
    padding: 64px 0px;
  }
  @media screen and (min-width: 1111px) {
    border-radius: 15px;
  }
`;

const BannerTitle = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 36px;
  text-align: center;
  color: var(--white);
  text-transform: capitalize;

  @media screen and (min-width: 768px) {
    font-size: 48px;
    line-height: 48px;
  }
`;

const BannerDescription = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 25px;
  text-align: center;
  color: var(--white);
  margin-top: 24px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 26px;
    max-width: 500px;
    margin: auto;
    margin-top: 24px;
  }
`;

// wrapper

const Wrapper = styled.div`
  width: 100%;
  padding: 96px 24px;

  @media screen and (min-width: 768px) {
    padding: 120px 40px;
  }

  @media screen and (min-width: 1111px) {
    padding: 160px 0px;
  }
`;

const ProjectsLinks = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 24px;
  padding: 0 24px;
  @media screen and (min-width: 1111px) {
    grid-template-columns: repeat(2, auto);
    grid-template-rows: repeat(1, 308px);
    column-gap: 30px;
    padding: 0px;
    flex-wrap: wrap;
    row-gap: 0px;
  }
  @media screen and (min-width: 1180px) {
    grid-template-columns: repeat(2, 540px);
  }
`;
