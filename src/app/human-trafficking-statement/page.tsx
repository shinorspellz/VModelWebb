// privacy-policy.js (or any preferred filename)
"use-client"
import Link from 'next/link';
import VMContainer from "../components/Layout/VMContainer";
import VMHeader from "../components/Layout/VMHeader";
import { VFooterN } from "../components/Home";

const SlaveryPolicy = () => {



  return (
    <>
      <VMContainer noWrapper={true} autoHeight={true}>
        <VMHeader />
      </VMContainer>
      <VMContainer>
        <img src="/assets/images/extras/statement.jpg" alt="Privacy Policy" width={1920} height={1080} />
      </VMContainer>
      <VFooterN noPadd={true} />
    </>
  );
};

export default SlaveryPolicy;

// Layout.js (or any preferred filename)

