import FaqListing from "../components/FAQ/FaqListing";
import { VFooterN } from "../components/Home";
import VMContainer from "../components/Layout/VMContainer";
import VMHeader from "../components/Layout/VMHeader";

const AboutPage = () => {
  return (
    <div className="overflow-x-hidden">
      <VMContainer noWrapper={true} autoHeight={true}>
        <VMHeader />
      </VMContainer>

      <FaqListing />

      <VFooterN noPadd={true} />
    </div>
  );
};

export default AboutPage;
