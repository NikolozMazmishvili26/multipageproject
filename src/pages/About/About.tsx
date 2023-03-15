import styled from "styled-components";

// import components
import {
  AboutUsBox,
  TalentBox,
  Locations,
  DealBox,
} from "../../components/about/index";

function About() {
  return (
    <AboutContainer>
      <AboutUsBox />
      <TalentBox />
      <Locations />
      <DealBox />
    </AboutContainer>
  );
}

export default About;

const AboutContainer = styled.div`
  width: 100%;
  padding-bottom: 310px;
  @media screen and (min-width: 768px) {
    padding: 0 40px 384px 40px;
  }
  @media screen and (min-width: 1111px) {
    padding: 0px 0px 380px 0px;
  }
`;
