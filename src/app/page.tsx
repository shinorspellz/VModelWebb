import VMBanner from "./components/Banner";
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
    </>
  );
}
