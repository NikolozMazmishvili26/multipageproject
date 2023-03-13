import styled from "styled-components";

// import components
import Button from "../button/Button";

function FooterCard() {
  return (
    <FooterCardContainer>
      <CardContent>
        <div>
          <CardTitle>Let’s talk about your project</CardTitle>
          <CardDescription>
            Ready to take it to the next level? Contact us today and find out
            how our expertise can help your business grow.
          </CardDescription>
        </div>
        <div>
          <Button buttonValue="get in touch" />
        </div>
      </CardContent>
    </FooterCardContainer>
  );
}

export default FooterCard;

const FooterCardContainer = styled.div`
  position: absolute;
  top: -189.5px;
  left: 0;
  right: 0px;
  padding-left: 24px;
  padding-right: 24px;

  @media screen and (min-width: 768px) {
    top: -260px;
    padding-left: 39px;
    padding-right: 39px;
  }

  @media screen and (min-width: 1111px) {
    padding: 0px;
    top: -220px;
  }
`;

const CardContent = styled.div`
  background-color: var(--peach);
  padding: 64px 24px 64px 24px;
  border-radius: 15px;
  max-width: 1111px;
  width: 100%;
  margin: auto;

  @media screen and (min-width: 768px) {
    padding: 57px 59px 57px 59px;
  }

  @media screen and (min-width: 1111px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 72px 95px 46px 95px;
  }
`;

const CardTitle = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 36px;
  text-align: center;
  color: var(--white);

  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 40px;
    max-width: 335px;
    margin: auto;
  }
  @media screen and (min-width: 1111px) {
    margin: 0;
    text-align: start;
  }
`;

const CardDescription = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 25px;
  text-align: center;
  color: var(--white);
  margin-top: 16px;
  margin-bottom: 32px;
  @media screen and (min-width: 768px) {
    max-width: 400px;
    margin: auto;
    margin-top: 18px;
    margin-bottom: 32px;
  }
  @media screen and (min-width: 1111px) {
    text-align: start;
    margin: 0;
    margin-top: 18px;
    min-height: 76px;
  }
`;
