// privacy-policy.js (or any preferred filename)
"use-client"
import Link from 'next/link';
import VMContainer from "../components/Layout/VMContainer";
import VMHeader from "../components/Layout/VMHeader";
import { VFooterN } from "../components/Home";

const SlaveryPolicy = () => {



  return (

    <><VMContainer noWrapper={true} autoHeight={true}>
      <VMHeader />
    </VMContainer>
      <VMContainer>
        <iframe style={{width:'100%',height:700}} src="https://drive.google.com/file/d/1qzFP6xDHlWLMk0i5YxDSzAQUvTdW_1xB/preview" allow="autoplay"></iframe>
      </VMContainer>
      <VFooterN noPadd={true} />
      </>
  );
};

export default SlaveryPolicy;

// Layout.js (or any preferred filename)

