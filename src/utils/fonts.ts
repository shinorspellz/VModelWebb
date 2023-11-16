import { DM_Sans, Montserrat_Subrayada } from "next/font/google";
import localFont from "next/font/local";

const montserrat = Montserrat_Subrayada({
  weight: ["400", "700"],
  subsets: ["latin"],
});

// const dm_sans = DM_Sans({
//   weight: ["400", "500", "600", "700", "800", "900", "1000"],
//   subsets: ["latin"],
// });

const dm_sans = localFont({
  src: [
    {
      path: "../../public/assets/fonts/dm_sans/dm-sans-v14-latin-300.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/dm_sans/dm-sans-v14-latin-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/dm_sans/dm-sans-v14-latin-500.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/dm_sans/dm-sans-v14-latin-600.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/dm_sans/dm-sans-v14-latin-700.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/dm_sans/dm-sans-v14-latin-800.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/dm_sans/dm-sans-v14-latin-900.woff2",
      weight: "900",
      style: "normal",
    },
  ],
});

export { montserrat, dm_sans };
