import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ParallaxPro from "./components/Provider/ParallaxPro";
import MUIProvider from "./components/Provider/MUIProvider";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VModel - Discover, Connect & Collaborate With Creatives.",
  description:
    "Access a vast and diverse database of talented professionals, including models, influencers, digital creators, beauticians, stylists, and more. Find the perfect match for your project or campaign.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MUIProvider>
          <ParallaxPro>{children}</ParallaxPro>
        </MUIProvider>

      </body>
    </html>
  );
}
