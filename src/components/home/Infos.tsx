import styled from "styled-components";
// import components
import Info from "./Info";

// import assets
import { Passionate, Resourceful, Friendly } from "../../assets/index";

function Infos() {
  return (
    <InfosContainer>
      <Info
        image={Passionate}
        title="passionate"
        description="Each project starts with an in-depth brand research to ensure we only
        create products that serve a purpose. We merge art, design, and
        technology into exciting new solutions."
        matrix="-1, 0, 0, 1, 0, 0"
      />
      <Info
        image={Resourceful}
        title="resourceful"
        description="Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs."
        matrix="0, 1, 1, 0, 0, 0"
      />
      <Info
        image={Friendly}
        title="friendly"
        description="We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide."
        matrix="0, -1, -1, 0, 0, 0"
      />
    </InfosContainer>
  );
}

export default Infos;

const InfosContainer = styled.div`
  max-width: 1111px;
  width: 100%;
  margin: auto;
  padding: 0px 24px 311px 24px;
  display: flex;
  flex-direction: column;
  row-gap: 80px;

  @media screen and (min-width: 768px) {
    row-gap: 32px;
    padding: 0px 39px 331px 39px;
  }

  @media screen and (min-width: 1111px) {
    flex-direction: row;
    padding: 0px 0px 380px 0px;
    column-gap: 30px;
    row-gap: 0px;
  }
`;
