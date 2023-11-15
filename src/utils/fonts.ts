import { DM_Sans, Montserrat_Subrayada } from "next/font/google";

const montserrat = Montserrat_Subrayada({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const dm_sans = DM_Sans({
  weight: ["400", "500", "600", "700", "800", "900", "1000"],
  subsets: ["latin"],
});

export { montserrat, dm_sans };
