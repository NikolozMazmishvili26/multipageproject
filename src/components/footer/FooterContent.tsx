import styled from "styled-components";

// import assets

import { LogoLight } from "../../assets";
import { Facebook, Instagram, Pinterest, Youtube, Twitter } from "../../svg";

function FooterContent() {
  return (
    <Footer>
      {/*  */}
      <NavigationWrapper>
        <NavigationContainer>
          <LogoImage src={LogoLight} alt="logo" />
          <FooterNav>
            <NavList>
              <NavItem>our company</NavItem>
              <NavItem>locations</NavItem>
              <NavItem>contact</NavItem>
            </NavList>
          </FooterNav>
        </NavigationContainer>
      </NavigationWrapper>
      {/*  */}
      <ContactContainer>
        <ContactBoxContainer>
          <ContactBox>
            <ContactTitle>Designo Central Office</ContactTitle>
            <ContactDescription>
              3886 Wellington Street <br></br> Toronto, Ontario M9C 3J5
            </ContactDescription>
          </ContactBox>
          <ContactBox>
            <ContactTitle>Contact Us (Central Office)</ContactTitle>
            <ContactDescription>
              P : +1 253-863-8967 <br></br> M : contact@designo.co
            </ContactDescription>
          </ContactBox>
        </ContactBoxContainer>

        {/*  */}
        <SocialIcons>
          <Facebook />
          <Youtube />
          <Twitter />
          <Pinterest />
          <Instagram />
        </SocialIcons>
      </ContactContainer>
    </Footer>
  );
}

export default FooterContent;

const Footer = styled.footer`
  width: 100%;
`;

// navigation container styles

const NavigationWrapper = styled.div`
  @media screen and (min-width: 768px) {
    &::after {
      content: "";
      width: 100%;
      height: 1px;
      background-color: var(--white);
      display: block;
      margin-top: 40px;
      opacity: 0.1;
    }
  }
`;

const NavigationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const LogoImage = styled.img`
  width: 202px;
`;

const FooterNav = styled.nav`
  width: 100%;
  &::before {
    content: "";
    width: 100%;
    height: 1px;
    background-color: var(--white);
    display: block;
    margin-top: 32px;
    opacity: 0.1;
  }
  @media screen and (min-width: 768px) {
    width: auto;
    &::before {
      display: none;
    }
  }
`;

const NavList = styled.ul`
  @media screen and (min-width: 768px) {
    display: flex;
    column-gap: 42px;
  }
`;

const NavItem = styled.li`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  letter-spacing: 2px;
  color: var(--white);
  text-transform: uppercase;
  text-align: center;
  margin-top: 32px;
  cursor: pointer;
  transition-duration: 0.2s;

  &:hover {
    color: var(--light-peach);
  }

  @media screen and (min-width: 768px) {
    margin-top: 0px;
  }
`;

// contact container styles

const ContactContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }
`;

const ContactBoxContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

const ContactBox = styled.div`
  width: 223px;
  margin: 40px auto;
  @media screen and (min-width: 768px) {
    width: 223px;
    margin-bottom: 0px;
    margin-top: 31px;
  }

  @media screen and (min-width: 1111px) {
    width: 350px;
  }
`;

const ContactTitle = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  color: var(--white);
  opacity: 0.7;
  mix-blend-mode: normal;
  text-align: center;
  @media screen and (min-width: 768px) {
    text-align: start;
  }
`;

const ContactDescription = styled(ContactTitle)`
  font-weight: 500;
  opacity: 0.5;
`;

//

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 16px;
`;
