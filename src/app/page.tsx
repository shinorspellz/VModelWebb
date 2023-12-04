import VMBanner from "./components/Banner";
import CookieConsent from "./components/Banner/CookieConsent";
import CookieConsent2 from "./components/Banner/CookieConsent2";
import { VBannCT, VFeature, VFooterN, VWhat, VWorks } from "./components/Home";

export default function Home() {
  return (
    <>
      <VMBanner />
      <VWhat />
      <VFeature />
      <VWorks />
      <VBannCT />
      <VFooterN />
      <CookieConsent/>
      {/* <CookieConsent2/> */}
    </>
  );
}
