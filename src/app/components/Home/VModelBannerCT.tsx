"use client";

import React from "react";
import VMContainer from "../Layout/VMContainer";
import { dm_sans } from "@/utils/fonts";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import { VMLogo } from "../General/VMLogo";
import { Parallax } from "react-scroll-parallax";
import ActionButton from "../General/ActionButton";

const VModelBannerCT = () => {
  return (
    <VMContainer otherClass="md:pt-[60px] md:pb-[80px]">
      <div className="w-full md:w-[45%] h-full">
        <div
          className="flex h-full items-center flex-wrap w-full"
          style={{
            padding: "0% 5% 13% 0%",
          }}
        >
          <div className="mb-5 w-full ">
            <h1
              className={`vm-h1 vm-h1-md vm-no-capitalise vm-text-sec ${dm_sans.className}`}
            >
              Creatives:
              <br />
              Find the Right Path for You
            </h1>
          </div>
          <div>
            <Fade damping={0.6} delay={2} triggerOnce>
              <div className="grid grid-cols-2 gap-x-4 mt-6">
                <ActionButton title="Google Play" icon="google" url="/" />
                <ActionButton title="Apple Store" icon="apple" url="/" />
              </div>
            </Fade>
          </div>
        </div>
      </div>
      <div className="hidden w-[55%] md:flex items-center relative">
        <div className="absolute -left-[40px] w-[88px] h-[88px] rounded-full top-[90px]">
          <VMLogo isDark={true} width={200} height={200} />
        </div>

        <div className="absolute left-[23px] z-[666] w-[140px] h-[165px] rounded-md top-[255px]">
          <div className="relative vm-no-bxshadow w-full h-full">
            <Parallax translateX={["50px", "-120px"]} easing="easeInQuad">
              <Image
                alt=""
                src="/assets/images/vmodel-app-ui/vm-phone-8.jpg"
                objectFit="cover"
                width={140}
                height={165}
                style={{
                  borderRadius: 8,
                }}
              />
            </Parallax>
          </div>
        </div>

        <div className="absolute -left-[61px] z-40  w-[140px] h-[165px] rounded-md -bottom-[47px]">
          <div className="relative w-full h-full">
            <Parallax translateY={["-80px", "-90px"]} easing="easeInQuad">
              <Image
                alt=""
                src="/assets/images/vmodel-app-ui/vm-phone-9.gif"
                objectFit="cover"
                width={140}
                height={165}
                style={{
                  borderRadius: 8,
                }}
              />
            </Parallax>
          </div>
        </div>
        <div
          className="flex items-center content-center relative z-30 w-full flex-wrap ml-[70px]"
          style={{
            padding: "0% 0% 0% 5%",
          }}
        >
          <div className="mb-5 w-full text-center ">
            <div className="">
              <Parallax translateY={["-50px", "180px"]} easing="easeInQuad">
                <div className="w-[308px] h-[668px]">
                  <Fade triggerOnce>
                    <Image
                      alt=""
                      src="/assets/images/vmodel-app-ui/vm-phone-7.png"
                      width={308}
                      height={668}
                    />
                  </Fade>
                </div>
              </Parallax>
            </div>
          </div>
        </div>

        <div
          className="flex items-center content-center w-full flex-wrap ml-[20px]"
          style={{
            padding: "0% 0% 0% 5%",
          }}
        >
          <div className="mb-5 w-full text-center ">
            <div className="mt-[42px]">
              <Parallax translateY={["90px", "5px"]} easing="easeInQuad">
                <div className="w-[308px] h-[630px] relative">
                  <Fade triggerOnce>
                    <Image
                      alt=""
                      src="/assets/images/vmodel-app-ui/vm-phone-6.png"
                      // width={308}
                      // height={400}
                      objectFit="contain"
                      fill
                    />
                  </Fade>
                </div>
              </Parallax>
            </div>
          </div>
        </div>
      </div>
    </VMContainer>
  );
};

export default VModelBannerCT;
