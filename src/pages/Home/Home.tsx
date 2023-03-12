import styled from "styled-components";

// import components
import { Banner, Projects } from "../../components/index";

function Home() {
  return (
    <HomeContainer>
      <Banner />
      {/*  */}
      <Projects />
      {/*  */}
    </HomeContainer>
  );
}

export default Home;

const HomeContainer = styled.div``;
