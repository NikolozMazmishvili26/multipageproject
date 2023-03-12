import styled from "styled-components";

// import assets
import { Phone } from "../../assets/index";

function Banner() {
  return (
    <BannerContainer>
      <BannerDescribeContainer>
        <BannerTitle>
          Award-winning custom designs and digital branding solutions
        </BannerTitle>
        <BannerDescription>
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </BannerDescription>
        <Button>learn more</Button>
      </BannerDescribeContainer>

      <Circle />
      <MobileImage src={Phone} alt="phoneImage" />
    </BannerContainer>
  );
}

export default Banner;

const BannerContainer = styled.div`
  position: relative;
  background-color: var(--peach);
  color: var(--white);
  padding: 80px 24px 451px 24px;
  overflow: hidden;
  max-width: 1411px;
  width: 100%;
  margin: auto;
  @media screen and (min-width: 1411px) {
    border-radius: 15px;
    display: flex;
    padding: 145px 24px 145px 95px;
  }
`;

const BannerDescribeContainer = styled.div`
  max-width: 850px;
  width: 100%;
  margin: auto;
  @media screen and (min-width: 1411px) {
    max-width: 650px;
    margin: 0;
  }
`;

const BannerTitle = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 36px;
  text-align: center;
  color: var(--white);
  position: relative;
  z-index: 2;

  @media screen and (min-width: 768px) {
    font-size: 48px;
    line-height: 48px;
  }

  @media screen and (min-width: 1411px) {
    text-align: start;
  }
  @media screen and (min-width: 1411px) {
    min-height: 165px;
  }
`;

const BannerDescription = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 25px;
  text-align: center;
  color: var(--white);
  margin-top: 14px;
  position: relative;
  z-index: 2;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 26px;
  }
  @media screen and (min-width: 1411px) {
    text-align: start;
    margin-top: 11px;
    min-height: 76px;
  }
`;

const Button = styled.button`
  display: flex;
  margin: auto;
  font-family: "Jost";
  margin-top: 24px;
  background-color: var(--white);
  border-radius: 8px;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: var(--dark-grey);
  padding: 18px 24px;
  border: none;
  cursor: pointer;
  position: relative;
  z-index: 2;
  transition-duration: 0.2s;

  &:hover {
    background-color: var(--light-peach);
    color: var(--white);
  }

  @media screen and (min-width: 1411px) {
    margin: 0;
    margin-top: 40px;
  }
`;

const Circle = styled.div`
  position: absolute;
  top: 102px;
  left: 0px;
  width: 640px;
  height: 640px;
  border-radius: 50%;
  background: linear-gradient(
    90deg,
    rgba(93, 2, 2, 0.0001) 0%,
    rgba(93, 2, 2, 0.497569) 100%
  );
  transform: matrix(0, -1, -1, 0, 0, 0);
  opacity: 0.31;

  @media screen and (min-width: 650px) {
    left: auto;
    right: 0px;
  }
  @media screen and (min-width: 1411px) {
    top: 0;
  }
`;

const MobileImage = styled.img`
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  bottom: -380px;
  @media screen and (min-width: 1411px) {
    left: auto;
    transform: translate(0);
    right: -86px;
    bottom: -240px;
  }
`;
