"use client";

import React from "react";
import VMContainer from "../Layout/VMContainer";
import { dm_sans } from "@/utils/fonts";
import { AttentionSeeker } from "react-awesome-reveal";
import { VMLogo } from "../General/VMLogo";
import { useParallax, Parallax } from "react-scroll-parallax";

const VModelWhat = () => {
  // const parallax = useParallax<HTMLDivElement>({
  //   rotate: [20, 360],
  // });
  return (
    <VMContainer>
      <section className="max-w-[1140px] flex items-center mx-auto relative">
        <div className="w-full">
          <div className="flex justify-center flex-wrap content-start relative ">
            <div className="text-center mb-5 w-full">
              <AttentionSeeker effect="tada" triggerOnce>
                <Parallax
                  translateX={["-400px", "0px"]}
                  scale={[0.75, 1]}
                  rotate={[-180, 0]}
                  easing="easeInQuad"
                >
                  <h2
                    className={`vm-h2 vm-no-capitalise ${dm_sans.className} vm-text-sec`}
                  >
                    What VModel will do for you{" "}
                  </h2>
                </Parallax>
              </AttentionSeeker>
            </div>
            <div className="absolute mb-0 left-0">
              <VMLogo isDark={true} width={65} height={65} />
            </div>
          </div>
        </div>
      </section>
    </VMContainer>
  );
};

export default VModelWhat;
