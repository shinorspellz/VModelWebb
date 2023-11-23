import { VMMIssion, VMPlayer, VMStory } from "../components/About";
import VMVision from "../components/About/VMVision";
import { VFooterN } from "../components/Home";
import VMContainer from "../components/Layout/VMContainer";
import VMHeader from "../components/Layout/VMHeader";

const AboutPage = () => {
  return (
    <>
      <VMContainer noWrapper={true} autoHeight={true}>
        <VMHeader />
      </VMContainer>
      {/* <VMHero /> */}
      <VMStory />
      <VMPlayer />
      <VMMIssion />
      <VMVision />
      <VFooterN noPadd={true} />
    </>
  );
};

export default AboutPage;
