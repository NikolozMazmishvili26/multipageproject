import styled from "styled-components";

// import assets
import {
  CanadaLocation,
  AustraliaLocation,
  UkLocation,
} from "../../assets/index";
// import components
import LocationBox from "./LocationBox";

function Locations() {
  return (
    <LocationsContainer>
      <LocationBox
        image={CanadaLocation}
        title="canada"
        transformTranslate="0, -1, -1, 0, 0, 0"
      />
      <LocationBox
        image={AustraliaLocation}
        title="australia"
        transformTranslate="-1, 0, 0, 1, 0, 0"
      />
      <LocationBox
        image={UkLocation}
        title="united kingdom"
        transformTranslate="0, 1, 1, 0, 0, 0"
      />
    </LocationsContainer>
  );
}

export default Locations;

const LocationsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 48px;
  max-width: 1111px;
  width: 100%;
  margin: auto;
  margin-top: 120px;
  margin-bottom: 120px;

  @media screen and (min-width: 768px) {
    margin-bottom: 0px;
  }

  @media screen and (min-width: 1111px) {
    flex-direction: row;
    justify-content: space-between;
    margin-top: 160px;
  }
`;
