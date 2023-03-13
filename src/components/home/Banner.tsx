import styled from "styled-components";

// import assets
import { HalfPhone, FullPhone } from "../../assets/index";

function Banner() {
  return (
    <BannerContainer>
      {/*  */}
      <BannerDescribeBox>
        <BannerTitle>
          Award-winning custom designs and digital branding solutions
        </BannerTitle>
        <BannerDescription>
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </BannerDescription>
        <Button>learn more</Button>
      </BannerDescribeBox>
      {/*  */}

      <Circle />

      {/*  */}
      <PhoneImageBox>
        <HalfPhoneImage src={HalfPhone} alt="phone" />
        <FullPhoneImage src={FullPhone} alt="phone" />
      </PhoneImageBox>
    </BannerContainer>
  );
}

export default Banner;

const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  background-color: var(--peach);
  padding: 80px 24px 451px 24px;
  max-width: 11111px;
  width: 100%;
  margin: auto;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    padding: 60px 58px 457px 58px;
  }

  @media screen and (min-width: 1111px) {
    max-width: 1111px;
    border-radius: 15px;
    padding: 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 145px 105px 145px 95px;
  }
`;

// banner describe box styles

const BannerDescribeBox = styled.div``;

const BannerTitle = styled.h1`
  position: relative;
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 36px;
  text-align: center;
  color: var(--white);
  min-height: 118px;
  z-index: 999;

  @media screen and (min-width: 768px) {
    font-size: 48px;
    line-height: 48px;
    max-width: 573px;
    margin: auto;
    min-height: 165px;
  }

  @media screen and (min-width: 1111px) {
    max-width: 540px;
    text-align: start;
  }
`;

const BannerDescription = styled.p`
  position: relative;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 25px;
  text-align: center;
  color: var(--white);
  margin-top: 14px;
  margin-bottom: 42px;
  z-index: 999;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 26px;
    max-width: 445px;
    margin: 8px auto;
    margin-bottom: 19px;
  }
  @media screen and (min-width: 1111px) {
    text-align: start;
    margin: 11px 0;
    margin-bottom: 40px;
  }
`;

const Button = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 152px;
  height: 56px;
  border-radius: 8px;
  border: none;
  margin: auto;
  font-family: "Jost";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: var(--dark-grey);
  cursor: pointer;
  transition-duration: 0.2s;
  z-index: 999;

  &:hover {
    background-color: var(--light-peach);
    color: var(--white);
  }

  @media screen and (min-width: 1111px) {
    margin: 0;
  }
`;

// circle styles

const Circle = styled.div`
  position: absolute;
  top: 102px;
  left: 0;
  width: 640px;
  height: 640px;
  border-radius: 50%;
  background: linear-gradient(
    90deg,
    rgba(93, 2, 2, 0.0001) 0%,
    rgba(93, 2, 2, 0.497569) 100%
  );
  mix-blend-mode: normal;
  opacity: 0.31;
  transform: matrix(0, -1, -1, 0, 0, 0);

  @media screen and (min-width: 640px) {
    left: auto;
    right: 0;
  }

  @media screen and (min-width: 1111px) {
    top: 0;
  }
`;

// phone image box styles

const PhoneImageBox = styled.div``;

const HalfPhoneImage = styled.img`
  position: absolute;
  bottom: -2.5px;
  left: 50%;
  transform: translate(-50%);
  @media screen and (min-width: 1111px) {
    display: none;
  }
`;

const FullPhoneImage = styled.img`
  display: none;
  @media screen and (min-width: 1111px) {
    display: block;
    position: absolute;
    right: 0px;
    bottom: 0px;
  }
`;
