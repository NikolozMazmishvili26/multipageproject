// import assets
import {
  WorldTalentMobile,
  WorldTalentTablet,
  WorldTalentDesktop,
} from "../../assets/index";

// import components
import AboutDescriptionBox from "../shared/AboutDescriptionBox";

const images = {
  mobile: WorldTalentMobile,
  tablet: WorldTalentTablet,
  desktop: WorldTalentDesktop,
};

function TalentBox() {
  return (
    <>
      <AboutDescriptionBox
        images={images}
        title="World-class talent"
        description="We are a crew of strategists, problem-solvers, and technologists.
            Every design is thoughtfully crafted from concept to launch,
            ensuring success in its given market. We are constantly updating our
            skills in a myriad of platforms."
        secondDescription=" Our team is
        multi-disciplinary and we are not merely interested in form —
        content and meaning are just as important. We give great importance
        to craftsmanship, service, and prompt delivery. Clients have always
        been impressed with our high-quality outcomes that encapsulates
        their brand’s story and mission."
      />
    </>
  );
}

export default TalentBox;
