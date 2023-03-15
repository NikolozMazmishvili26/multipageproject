import AboutDescriptionBox from "../shared/AboutDescriptionBox";

// import assets

import { DealMobile, DealTablet, DealDesktop } from "../../assets/index";

const images = {
  mobile: DealMobile,
  tablet: DealTablet,
  desktop: DealDesktop,
};

function DealBox() {
  return (
    <AboutDescriptionBox
      images={images}
      title="The Real Deal"
      description="As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success."
      secondDescription=" We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results."
      order="2"
      borderRadius="0px 15px 15px 0px"
    />
  );
}

export default DealBox;
