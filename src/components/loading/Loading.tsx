import styled from "styled-components";

// import assets
import loading from "../../assets/shared/desktop/loading.gif";

function Loading() {
  return (
    <LoadingContainer>
      <LoadingGif src={loading} />
    </LoadingContainer>
  );
}

export default Loading;

const LoadingContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 99999;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

const LoadingGif = styled.img`
  width: 350px;
  object-fit: cover;
  @media screen and (min-width: 768px) {
    width: 450px;
  }
`;
