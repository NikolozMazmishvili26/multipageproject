import styled from "styled-components";

// import components
import Banner from "../../components/home/Banner";
import Infos from "../../components/home/Infos";
import Projects from "../../components/home/Projects";

function Home() {
  return (
    <HomeContainer>
      <Banner />
      <Projects />
      <Infos />
    </HomeContainer>
  );
}

export default Home;

const HomeContainer = styled.div``;
