"use client";

import React from "react";
import VMContainer from "../Layout/VMContainer";
import { Fade } from "react-awesome-reveal";
import { dm_sans } from "@/utils/fonts";
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";

const VMStory = () => {
  return (
    <>
      <VMContainer>
        <div className="flex flex-col md:flex-row w-full mx-auto md:items-center md:pt-[80px]">
          <div className="w-full md:w-[50%] mt-4 md:mt-0 order-2 md:order-1">
            <div
              className="vm-no-p-right flex md:items-center flex-wrap w-full md:content-center "
              style={{
                padding: "0% 5% 0% 0%",
              }}
            >
              <div className="pb-5 relative w-full mt-3 md:mt-0 md:space-y-7">
                <Fade triggerOnce delay={0}>
                  <h1
                    className={`vm-h1 pb-4 md:pb-0 vm-text-sec font-extrabold ${dm_sans.className}`}
                  >
                    Our Story
                  </h1>
                </Fade>

                <div className="space-y-7">
                  <Fade triggerOnce delay={10}>
                    <p
                      className={`text-lg vm-text-sec md:text-justify  ${dm_sans.className}`}
                    >
                      We started VModel as a team of passionate individuals who
                      shared a common frustration with the traditional model of
                      talent discovery and booking. As professionals in the
                      creative industry, we often encountered challenges in
                      finding the right talents for our projects. The process
                      was time-consuming, inefficient, and lacked transparency.
                      We believed there had to be a better way.
                    </p>
                  </Fade>
                  <Fade triggerOnce delay={20}>
                    <p
                      className={`text-lg vm-text-sec md:text-justify  ${dm_sans.className}`}
                    >
                      Inspired by our own experiences and fueled by a shared
                      vision to transform the creative landscape, we embarked on
                      a journey to reimagine talent discovery and booking. Just
                      like three college students searching for a healthier way
                      to eat, we were determined to create a platform that would
                      revolutionize the way businesses connect with creatives.
                    </p>
                  </Fade>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full order-1 md:order-2 relative md:w-[50%]">
            <div className="md:pl-[6rem] relative h-[400px] md:h-[550px]">
              <div className="w-full md:w-[420px] overflow-hidden h-[400px] md:h-[550px] top-0  rounded-md z-20 md:absolute">
                <Image
                  alt=""
                  src="/assets/images/vmodel-app-ui/vm-phone-15.jpg"
                  fill
                  objectFit="cover"
                  style={{
                    borderRadius: "6px",
                  }}
                />
              </div>
              <Parallax rotate={[0, 2]} easing="easeInQuad">
                <div
                  className="w-[420px] hidden md:block h-[550px] overflow-hidden top-0  rounded-md z-10 absolute"
                  style={{
                    transform: "rotateZ(7deg) translate(10px, 20px) scale(1)",
                  }}
                >
                  <Image
                    alt=""
                    src="/assets/images/vmodel-app-ui/vm-phone-12.jpg"
                    fill
                    // width={420}
                    // height={550}
                    objectFit="cover"
                    // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 420px, 550px"
                  />
                </div>
              </Parallax>
            </div>
          </div>
        </div>
      </VMContainer>
    </>
  );
};

export default VMStory;
