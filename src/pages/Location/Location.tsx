import styled from "styled-components";

// import assets
import {
  canadaMapMobile,
  CanadaMapTablet,
  CanadaMapDesktop,
  //
  australiaMapMobile,
  AustraliaMapTablet,
  AustraliaMapDesktop,
  //
  ukMapMobile,
  UkMapTablet,
  UkMapDesktop,
} from "../../assets/index";

// import components
import LocationBox from "../../components/shared/LocationBox";

function Location() {
  //

  const canadaImages = {
    mobile: canadaMapMobile,
    tablet: CanadaMapTablet,
    desktop: CanadaMapDesktop,
  };

  const australiaImages = {
    mobile: australiaMapMobile,
    tablet: AustraliaMapTablet,
    desktop: AustraliaMapDesktop,
  };

  const ukImages = {
    mobile: ukMapMobile,
    tablet: UkMapTablet,
    desktop: UkMapDesktop,
  };

  return (
    <LocationContainer>
      <LocationBox
        images={canadaImages}
        countryTitle="Canada"
        descriptionTitle="Designo Central Office"
        street="3886 Wellington Street"
        address="Toronto, Ontario M9C 3J5"
        //
        phone="P : +1 253-863-8967"
        email="M : contact@designo.co"
      />
      <LocationBox
        images={australiaImages}
        countryTitle="Australia"
        descriptionTitle="Designo AU Office"
        street="19 Ballone Street"
        address="New South Wales 2443"
        //
        phone="P : (02) 6720 9092"
        email="M : contact@designo.au"
      />
      <LocationBox
        images={ukImages}
        countryTitle="United Kingdom"
        descriptionTitle="Designo UK Office"
        street="13 Colorado Way"
        address="Rhyd-y-fro SA8 9GA"
        //
        phone="P : 078 3115 1400"
        email="M : contact@designo.uk"
      />
    </LocationContainer>
  );
}

export default Location;

const LocationContainer = styled.div`
  padding-bottom: 310px;
  max-width: 1111px;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  row-gap: 40px;

  @media screen and (min-width: 768px) {
    padding: 0px 40px 384px 40px;
    row-gap: 120px;
  }
  @media screen and (min-width: 1111px) {
    padding: 0px 0px 380px 0px;
    row-gap: 32px;
  }
`;
