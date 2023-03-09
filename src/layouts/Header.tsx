import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import assets
import { LogoDark, iconHamburger, hamburgerClose } from "../assets/shared";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const backDropRef = useRef<HTMLDivElement | null>(null);

  const handleBackDrop: React.MouseEventHandler<HTMLDivElement> = (event) => {
    if (event.target === backDropRef.current) {
      setShowMenu(false);
    }
  };

  return (
    <HeaderComponent>
      <Link to="/">
        <LogoImage src={LogoDark} alt="logo" />
      </Link>
      {showMenu ? (
        <CloseBurgerIcon
          src={hamburgerClose}
          alt="closeHamburger"
          onClick={() => setShowMenu(false)}
        />
      ) : (
        <OpenBurgerIcon
          src={iconHamburger}
          alt="openHamburger"
          onClick={() => setShowMenu(true)}
        />
      )}
      <HeaderNav>
        <NavList>
          <Link
            to="/about"
            style={{
              textDecoration: "none",
              width: "fit-content",
              color: "#1D1C1E",
            }}
            onClick={() => setShowMenu(false)}
          >
            <NavItem>our company</NavItem>
          </Link>
          <Link
            to="/location"
            style={{
              textDecoration: "none",
              width: "fit-content",
              color: "#1D1C1E",
            }}
            onClick={() => setShowMenu(false)}
          >
            <NavItem>locations</NavItem>
          </Link>
          <Link
            to="/contact"
            style={{
              textDecoration: "none",
              width: "fit-content",
              color: "#1D1C1E",
            }}
            onClick={() => setShowMenu(false)}
          >
            <NavItem>contact</NavItem>
          </Link>
        </NavList>
      </HeaderNav>
      {/* backdrop */}
      {showMenu && (
        <Backdrop onClick={handleBackDrop} ref={backDropRef}>
          <Menu>
            <MenuContainer>
              <NavList>
                <Link
                  to="/about"
                  style={{
                    textDecoration: "none",
                    width: "fit-content",
                    color: "#FFFFFF",
                  }}
                  onClick={() => setShowMenu(false)}
                >
                  <NavItem>our company</NavItem>
                </Link>
                <Link
                  to="/location"
                  style={{
                    textDecoration: "none",
                    width: "fit-content",
                    color: "#FFFFFF",
                  }}
                  onClick={() => setShowMenu(false)}
                >
                  <NavItem>locations</NavItem>
                </Link>
                <Link
                  to="/contact"
                  style={{
                    textDecoration: "none",
                    width: "fit-content",
                    color: "#FFFFFF",
                  }}
                  onClick={() => setShowMenu(false)}
                >
                  <NavItem>contact</NavItem>
                </Link>
              </NavList>
            </MenuContainer>
          </Menu>
        </Backdrop>
      )}
    </HeaderComponent>
  );
}

export default Header;

const HeaderComponent = styled.header`
  padding: 35px 24px 34px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    padding: 64px 40px 64px 39px;
  }

  @media screen and (min-width: 1111px) {
    max-width: 1411px;
    width: 100%;
    margin: auto;
  }

  @media screen and (min-width: 1411px) {
    padding: 64px 0px;
  }
`;

const LogoImage = styled.img`
  width: 202px;
  cursor: pointer;
`;

const OpenBurgerIcon = styled.img`
  cursor: pointer;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const CloseBurgerIcon = styled(OpenBurgerIcon)``;

const HeaderNav = styled.nav`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
  }
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 32px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    row-gap: 0px;
    column-gap: 42px;
  }
`;

const NavItem = styled.li`
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 25px;
  letter-spacing: 2px;
  cursor: pointer;
  width: fit-content;
  text-transform: uppercase;
  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 14px;
    transition-duration: 0.2s;

    &:hover {
      text-decoration-line: underline;
    }
  }
`;

// show menu styles

const Backdrop = styled.div`
  width: 100vw;
  height: calc(100vh - 96px);
  position: absolute;
  z-index: 999;
  top: 96px;
  left: 0px;
  background-color: rgba(0, 0, 0, 0.5);
  transition: height 2s ease-in;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const Menu = styled.div`
  width: 100%;
  background-color: var(--black);
  color: var(--white);

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const MenuContainer = styled.div`
  padding: 48px 24px;
`;
