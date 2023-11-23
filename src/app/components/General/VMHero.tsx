import React from "react";
import VMContainer from "../Layout/VMContainer";
import { dm_sans } from "@/utils/fonts";

const VMHero = () => {
  return (
    <VMContainer autoHeight={true}>
      <div className="h-[50vh] w-full flex items-center">
        <h1 className={`vm-h1-lg font-extrabold ${dm_sans.className}`}>
          About Us
        </h1>
      </div>
    </VMContainer>
  );
};

export default VMHero;
