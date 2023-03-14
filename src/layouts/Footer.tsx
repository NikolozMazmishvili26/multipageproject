import styled from "styled-components";

// import components
import { FooterCard, FooterContent } from "../components/footer/index";

function Footer() {
  return (
    <FooterContainer>
      <FooterCard />
      <FooterContent />
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.div`
  position: relative;
  max-width: 1440px;
  width: 100%;
  background-color: var(--black);
  margin: auto;
  padding: 253px 24px 64px 24px;

  @media screen and (min-width: 768px) {
    padding: 166px 39px 80px 39px;
  }

  @media screen and (min-width: 1111px) {
    padding: 144px 164px 72px 164px;
  }
`;
