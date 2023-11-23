"use client";

import React from "react";
import VMContainer from "../Layout/VMContainer";
import { Fade, Slide } from "react-awesome-reveal";
import { dm_sans } from "@/utils/fonts";
import { Parallax } from "react-scroll-parallax";
import Image from "next/image";

const VMMIssion = () => {
  return (
    <>
      <VMContainer autoHeight={false} bgSec={true}>
        <div className="flex flex-col w-full mx-auto md:items-center md:justify-center h-screen relative">
          <div className="-left-[50px] bottom-[23%] w-[208px] h-[300px]  rounded-md absolute z-20 bg-cover">
            <Parallax translateX={["50px", "-120px"]} easing="easeInQuad">
              <Image
                alt=""
                src="/assets/images/vmodel-app-ui/vm-phone-18.jpg"
                objectFit="cover"
                width={208}
                height={300}
                style={{
                  borderRadius: 8,
                }}
              />
            </Parallax>
          </div>

          <div className="left-[90px] bottom-[.2%] scale-[.6] w-[208px] h-[300px]  rounded-md absolute z-10 bg-cover">
            <Parallax translateX={["0px", "120px"]} easing="easeInQuad">
              <Image
                alt=""
                src="/assets/images/vmodel-app-ui/vm-phone-20.jpg"
                objectFit="cover"
                width={208}
                height={300}
                style={{
                  borderRadius: 8,
                }}
              />
            </Parallax>
          </div>
          <div className="-right-[50px] bottom-[23%] w-[208px] h-[300px] rounded-md absolute z-20 bg-cover">
            <Parallax translateX={["50px", "-120px"]} easing="easeInQuad">
              <Image
                alt=""
                src="/assets/images/vmodel-app-ui/vm-phone-17.jpg"
                objectFit="cover"
                width={208}
                height={300}
                style={{
                  borderRadius: 8,
                }}
              />
            </Parallax>
          </div>

          <div className="right-[90px] bottom-[.2%] scale-[.8] w-[208px] h-[300px]  rounded-md absolute z-30 bg-cover">
            <Parallax translateX={["0px", "120px"]} easing="easeInQuad">
              <Image
                alt=""
                src="/assets/images/vmodel-app-ui/vm-phone-19.jpg"
                objectFit="cover"
                width={208}
                height={300}
                style={{
                  borderRadius: 8,
                }}
              />
            </Parallax>
          </div>

          <div className="text-center pt-3 relative">
            <Fade triggerOnce>
              <h1
                className={`text-[40px] vm-text-primary font-extrabold ${dm_sans.className}`}
              >
                Our Mission
              </h1>
            </Fade>
          </div>
          <div className="text-center mt-2 px-[22%]">
            <Slide direction="up" delay={50} triggerOnce>
              <h3
                className={`vm-text-primary text-4xl font-normal lht-md ${dm_sans.className}`}
              >
                VModel is on a mission to democratise the creative industry,
                empowering both creatives and businesses to access top-tier
                talent, fostering meaningful collaborations that know no limits.
              </h3>
            </Slide>
          </div>
        </div>
      </VMContainer>
    </>
  );
};

export default VMMIssion;
