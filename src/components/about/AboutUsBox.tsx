import styled from "styled-components";

// import assets
import {
  AboutHeroMobile,
  AboutHeroTablet,
  AboutHeroDesktop,
} from "../../assets/index";

function AboutUsBox() {
  return (
    <AboutUs>
      <BackgroundImage />
      <DescribeContainer>
        <AboutTitle>About Us</AboutTitle>
        <AboutDescription>
          Founded in 2010, we are a creative agency that produces lasting
          results for our clients. We’ve partnered with many startups,
          corporations, and nonprofits alike to craft designs that make real
          impact. We’re always looking forward to creating brands, products, and
          digital experiences that connect with our clients’ audiences.
        </AboutDescription>
      </DescribeContainer>
      {/*  */}
    </AboutUs>
  );
}

export default AboutUsBox;

const AboutUs = styled.div`
  position: relative;
  background-color: var(--peach);
  max-width: 1111px;
  width: 100%;
  margin: auto;
  overflow: hidden;
  @media screen and (min-width: 768px) {
    border-radius: 15px;
  }
  @media screen and (min-width: 1111px) {
    display: flex;
  }
`;

// photo container styles
const BackgroundImage = styled.div`
  width: 100%;
  height: 320px;
  background-image: url(${AboutHeroMobile});
  background-size: 100% 100%;
  background-position: center;
  @media screen and (min-width: 768px) {
    background-image: url(${AboutHeroTablet});
    border-radius: 15px 15px 0px 0px;
  }
  @media screen and (min-width: 1111px) {
    background-image: url(${AboutHeroDesktop});
    order: 2;
    height: 480px;
    border-radius: 0px 15px 15px 0px;
  }
`;

// describe container styles
const DescribeContainer = styled.div`
  width: 100%;
  padding: 80px 24px;
  @media screen and (min-width: 768px) {
    padding: 64px 58px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
  }
  @media screen and (min-width: 1111px) {
    padding: 135px 82px;
  }
`;

const AboutTitle = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 36px;
  text-align: center;
  color: var(--white);
  @media screen and (min-width: 768px) {
    font-size: 48px;
    line-height: 48px;
  }
  @media screen and (min-width: 1111px) {
    text-align: start;
  }
`;

const AboutDescription = styled.p`
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
    margin-top: 32px;
  }
  @media screen and (min-width: 1111px) {
    text-align: start;
    width: 458px;
  }
`;
