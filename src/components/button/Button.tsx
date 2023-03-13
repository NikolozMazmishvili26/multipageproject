import styled from "styled-components";

interface ButtonProps {
  buttonValue: string;
}

function Button({ buttonValue }: ButtonProps) {
  return <MainButton>{buttonValue}</MainButton>;
}

export default Button;

const MainButton = styled.button`
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
