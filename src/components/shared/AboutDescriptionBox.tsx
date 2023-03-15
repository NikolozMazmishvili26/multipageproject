import styled from "styled-components";

interface AboutDescriptionBoxProps {
  images: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  title: string;
  description: string;
  secondDescription: string;
  order?: string;
  borderRadius?: string;
}

function AboutDescriptionBox({
  description,
  images,
  title,
  secondDescription,
  order,
  borderRadius,
}: AboutDescriptionBoxProps) {
  return (
    <Talent>
      <BackgroundImage
        images={images}
        order={order || ""}
        borderRadius={borderRadius || ""}
      />
      <DescriptionBox>
        <TalentTitle>{title}</TalentTitle>
        <TalentDescription>{description}</TalentDescription>
        <SecondDescription>{secondDescription}</SecondDescription>
      </DescriptionBox>
    </Talent>
  );
}

export default AboutDescriptionBox;

const Talent = styled.div`
  max-width: 1111px;
  width: 100%;
  margin: auto;
  background-color: var(--design-card-color);
  border-radius: 15px;
  @media screen and (min-width: 768px) {
    margin-top: 120px;
  }
  @media screen and (min-width: 1111px) {
    display: flex;
    margin-top: 160px;
  }
`;

const BackgroundImage = styled.div<{
  images: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  order: string;
  borderRadius: string;
}>`
  width: 100%;
  height: 320px;
  background-image: url(${(props) => props.images.mobile});
  background-size: 100% 100%;
  background-position: center;
  order: ${(props) => props.order};
  @media screen and (min-width: 768px) {
    background-image: url(${(props) => props.images.tablet});
    border-radius: 15px 15px 0px 0px;
  }
  @media screen and (min-width: 1111px) {
    background-image: url(${(props) => props.images.desktop});
    height: 640px;
    border-radius: ${(props) =>
      props.borderRadius ? props.borderRadius : "15px 0px 0px 15px"};
  }
`;

const DescriptionBox = styled.div`
  padding: 80px 24px;
  @media screen and (min-width: 768px) {
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
  }
  @media screen and (min-width: 768px) {
    padding: 68px 58px;
  }
  @media screen and (min-width: 1111px) {
    padding: 154px 96px;
  }
`;

const TalentTitle = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 36px;
  text-align: center;
  color: var(--peach);
  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 48px;
  }
  @media screen and (min-width: 1111px) {
    text-align: start;
  }
`;

const TalentDescription = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 25px;
  text-align: center;
  color: var(--dark-grey);
  margin-top: 24px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 26px;
  }
  @media screen and (min-width: 1111px) {
    width: 445px;
    text-align: start;
  }
`;

const SecondDescription = styled(TalentDescription)``;
