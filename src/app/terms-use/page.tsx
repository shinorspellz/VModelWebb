"use client";

import React from "react";
import VMContainer from "../components/Layout/VMContainer";
import VMHeader from "../components/Layout/VMHeader";
import { Fade } from "react-awesome-reveal";
import { dm_sans } from "@/utils/fonts";
import { VTBody, VTHead, VTList } from "../components/Shared";
import { VFooterN } from "../components/Home";

const TermsUse = () => {
  return (
    <>
      <VMContainer noWrapper={true} autoHeight={true}>
        <VMHeader />
      </VMContainer>
      <VMContainer>
        <div className="w-full mb-9">
          <div className="py-7 text-center w-full">
            <div className="w-full text-center">
              <Fade triggerOnce delay={0}>
                <h1
                  className={`vm-h1 vm-h1-md pb-4 md:pb-0 vm-text-sec font-extrabold ${dm_sans.className}`}
                >
                  Terms <span className="lowercase">of</span> use
                </h1>
              </Fade>
            </div>
          </div>
          <div className="mx-auto mt-12 max-w-[75%] space-y-12"></div>
        </div>
      </VMContainer>
      <VFooterN noPadd={true} />
    </>
  );
};

export default TermsUse;
