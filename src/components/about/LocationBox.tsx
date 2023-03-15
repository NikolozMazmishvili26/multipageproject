import styled from "styled-components";

interface LocationBoxProps {
  image: string;
  title: string;
  transformTranslate: string;
}

// import component
import Button from "../button/Button";

function LocationBox({ image, title, transformTranslate }: LocationBoxProps) {
  return (
    <div>
      <CircleBox transformTranslate={transformTranslate}>
        <CircleImage
          src={image}
          alt="location"
          transformTranslate={transformTranslate}
        />
      </CircleBox>
      <LocationTitle>{title}</LocationTitle>
      <Button buttonValue="see location" bgColor="#E7816B" margin="auto" />
    </div>
  );
}

export default LocationBox;

const CircleBox = styled.div<{ transformTranslate: string }>`
  background: linear-gradient(
    90deg,
    rgba(93, 2, 2, 0.0001) 0%,
    rgba(93, 2, 2, 0.15) 100%
  );
  width: 202px;
  height: 202px;
  border-radius: 50%;
  transform: matrix(${(props) => props.transformTranslate});
  margin: auto;
`;

const CircleImage = styled.img<{ transformTranslate: string }>`
  transform: matrix(${(props) => props.transformTranslate});
`;

const LocationTitle = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;
  text-align: center;
  letter-spacing: 5px;
  color: var(--dark-grey);
  text-transform: uppercase;
  margin-top: 48px;
  margin-bottom: 32px;
`;
