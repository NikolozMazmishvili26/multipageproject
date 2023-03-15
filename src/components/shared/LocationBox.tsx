import styled from "styled-components";

// import assets
import {
  canadaMapMobile,
  CanadaMapTablet,
  CanadaMapDesktop,
} from "../../assets/index";

interface LocationBoxProps {
  images: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  countryTitle: string;
  descriptionTitle: string;
  street: string;
  address: string;
  phone: string;
  email: string;
}

function LocationBox({
  images,
  address,
  countryTitle,
  descriptionTitle,
  email,
  phone,
  street,
}: LocationBoxProps) {
  return (
    <Location>
      <MapBackgroundImage images={images} />
      {/* <MapImage src={canadaMapMobile} alt="location" /> */}
      <DescriptionContainer>
        {/*  */}
        <OfficeContainer>
          <Country>{countryTitle}</Country>
          <OfficeDescription>
            <Text>{descriptionTitle}</Text> <br></br>
            <Text style={{ fontWeight: 500 }}>{street}</Text> <br></br>
            <Text style={{ fontWeight: 500 }}>{address}</Text>
          </OfficeDescription>
        </OfficeContainer>
        {/*  */}
        <ContactContainer>
          <Text>Contact</Text> <br></br>
          <Text style={{ fontWeight: 500 }}>{phone}</Text> <br></br>
          <Text style={{ fontWeight: 500 }}>{email}</Text>
        </ContactContainer>
      </DescriptionContainer>
    </Location>
  );
}

export default LocationBox;

const Location = styled.div`
  width: 100%;
  background-color: var(--design-card-color);
  @media screen and (min-width: 768px) {
    background-color: transparent;
  }
  @media screen and (min-width: 1111px) {
    display: flex;
    column-gap: 30px;
    align-items: flex-start;
  }
`;

const MapBackgroundImage = styled.div<{
  images: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
}>`
  width: 100%;
  height: 320px;
  background-image: url(${(props) => props.images.mobile});
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  order: 2;

  @media screen and (min-width: 768px) {
    height: 326px;
    background-image: url(${(props) => props.images.tablet});
    border-radius: 15px;
  }

  @media screen and (min-width: 1111px) {
    background-image: url(${(props) => props.images.desktop});
  }
`;

// description styles

const DescriptionContainer = styled.div`
  padding: 80px 24px;
  background-color: var(--design-card-color);
  @media screen and (min-width: 768px) {
    margin-top: 31px;
    background-color: var(--design-card-color);
    border-radius: 15px;
    display: flex;
    align-items: flex-end;
    column-gap: 30px;
    padding: 88px 75px;
  }

  @media screen and (min-width: 1111px) {
    padding: 88px 95px;
    margin-top: 0px;
  }
`;

const OfficeContainer = styled.div`
  @media screen and (min-width: 768px) {
    width: 255px;
  }
`;

const Country = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 36px;
  text-align: center;
  color: var(--peach);
  @media screen and (min-width: 768px) {
    text-align: start;
    font-size: 40px;
    line-height: 48px;
  }
  @media screen and (min-width: 1111px) {
    width: 445px;
  }
`;

const OfficeDescription = styled.div`
  text-align: center;
  margin-top: 24px;
  @media screen and (min-width: 768px) {
    text-align: start;
  }
`;

const Text = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 25px;
  text-align: center;
  color: var(--dark-grey);
  @media screen and (min-width: 768px) {
    text-align: start;
    font-size: 16px;
    line-height: 26px;
  }
`;

const ContactContainer = styled.div`
  text-align: center;
  margin-top: 24px;
  @media screen and (min-width: 768px) {
    margin-top: 0px;
    width: 255px;
    text-align: start;
  }
`;
