import styled from "styled-components";

interface InfoProps {
  image: string;
  title: string;
  description: string;
  matrix: string;
}

function Info({ image, title, description, matrix }: InfoProps) {
  return (
    <InfoCard>
      <CircleBox matrix={matrix}>
        <CircleImage src={image} matrix={matrix} />
      </CircleBox>
      <div>
        <InfoTitle>{title}</InfoTitle>
        <InfoDescription>{description}</InfoDescription>
      </div>
    </InfoCard>
  );
}

export default Info;

const InfoCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    column-gap: 48px;
  }
  @media screen and (min-width: 1111px) {
    flex-direction: column;
  }
`;

const CircleBox = styled.div<{ matrix: string }>`
  width: 202px;
  height: 202px;
  border-radius: 50%;
  background: linear-gradient(
    90deg,
    rgba(93, 2, 2, 0.0001) 0%,
    rgba(93, 2, 2, 0.15) 100%
  );
  transform: matrix(${(props) => props.matrix});
`;

const CircleImage = styled.img<{ matrix: string }>`
  transform: matrix(${(props) => props.matrix});
`;

const InfoTitle = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;
  text-align: center;
  letter-spacing: 5px;
  color: var(--dark-grey);
  text-transform: uppercase;
  margin-top: 48px;
  @media screen and (min-width: 768px) {
    text-align: start;
  }
  @media screen and (min-width: 1111px) {
    text-align: center;
  }
`;

const InfoDescription = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  text-align: center;
  color: var(--dark-grey);
  margin-top: 32px;
  @media screen and (min-width: 768px) {
    text-align: start;
    margin-top: 16px;
  }
  @media screen and (min-width: 1111px) {
    text-align: center;
    max-width: 350px;
  }
`;
