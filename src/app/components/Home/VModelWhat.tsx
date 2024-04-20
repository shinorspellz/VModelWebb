"use client";

import { AttentionSeeker, Fade } from "react-awesome-reveal";
import { Parallax } from "react-scroll-parallax";
import VMIcons from "../General/VMIcons";
import { VMLogo } from "../General/VMLogo";
import VMContainer from "../Layout/VMContainer";
import { dm_sans } from "@/utils/fonts";
import Image from "next/image";
import { useState, useLayoutEffect } from "react";

const LogoRoller = ({ right }: { right: boolean }) => {
  return (
    <div
      className={`vm-roller absolute w-[65px] h-[65px] mb-0 ${
        right ? "right-[1012px]" : "right-[39px]"
      }`}
    >
      <Parallax rotate={[0, 180]} speed={0}>
        <Fade>
          <VMLogo isDark={true} width={65} height={65} />
        </Fade>
      </Parallax>
    </div>
  );
};

const FeaturesItem = ({
  title,
  desc,
  icon,
}: {
  title: string;
  desc: string;
  icon: number;
}) => {
  return (
    <div className="mb-5 w-full">
      <div className="text-left">
        <div className="">
          <div className="mb-2">
            <VMIcons type={icon} />
          </div>
          <div className="space-y-3">
            <h3 className={`vm-h3 vm-text-sec ${dm_sans.className} `}>
              {title}
            </h3>
            <p
              className={`vm-text-sec text-[13px] font-light ${dm_sans.className}`}
            >
              {desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const VModelWhat = () => {
  const mobile = require("is-mobile");
  const [isMobileView, setisMobileView] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useLayoutEffect(() => {
    setIsReady(false);
    if (mobile()) {
      setisMobileView(true);
      setIsReady(true);
    } else {
      setIsReady(true);
    }
  }, [mobile]);
  return (
    <VMContainer otherClass="md:pb-[80px]">
      <div className="w-full">
        {isReady && (
          <Parallax
            translateY={[isMobileView ? "0px" : "200px", "0px"]}
            easing="easeInQuad"
          >
            <div className="flex flex-col md:flex-row justify-center flex-wrap content-start relative ">
              <div className="text-center mb-5 w-full">
                <AttentionSeeker effect="tada" triggerOnce>
                  <h2 className={`vm-h2 vm-no-capitalise vm-text-sec`}>
                    What will VModel do for you?{" "}
                  </h2>
                </AttentionSeeker>
              </div>
              <div className="hidden lg:block">
                <LogoRoller right={true} />
              </div>
              <LogoRoller right={false} />
              <section className="mt-[90px] w-full md:mb-[100px]">
                <div className="max-w-[1140px] w-full flex flex-col md:flex-row mx-auto relative">
                  <div className="w-full md:w-1/3 relative order-1">
                    <div
                      className="vm-no-p-right flex items-center content-center flex-wrap w-full relative space-y-5 h-full"
                      style={{
                        padding: "0% 20% 0% 0%",
                      }}
                    >
                      <div>
                        <FeaturesItem
                          title="Comprehensive Creative Database"
                          desc="Access a vast and diverse database of talented professionals, including models, influencers, digital creators, beauticians, stylists, and more. Find the perfect match for your project or campaign."
                          icon={1}
                        />
                      </div>
                      <div>
                        <FeaturesItem
                          title="Seamless Booking Process"
                          desc="Streamline the entire talent booking process with our intuitive platform. From searching and shortlisting to negotiating rates and finalizing agreements, VModel ensures a seamless and efficient experience for both businesses and talent."
                          icon={2}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/3 relative order-3 md:order-2">
                    <div
                      className="p-[10px] vm-no-bxshadow flex relative w-full flex-wrap mx-auto"
                      style={{
                        alignContent: "flex-start",
                      }}
                    >
                      <div>
                        <Image
                          alt=""
                          src="/assets/images/vmodel-app-ui/vm-phone-2.png"
                          width={350}
                          height={690}
                          style={{
                            boxShadow: "-11px 12px 25px 0px #000000",
                            borderRadius: "54px 54px 54px 54px",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/3 mt-5 md:mt-0 relative order-2 md:order-3">
                    <div
                      className="vm-no-p-left flex items-center content-center flex-wrap w-full relative space-y-5 h-full"
                      style={{
                        padding: "0% 2% 0% 20%",
                      }}
                    >
                      <div>
                        <FeaturesItem
                          title="Enhanced Communication Tools"
                          desc="Communicate effectively with talent through our built-in messaging system. Discuss project details, share inspirations, and collaborate effortlessly to bring your creative vision to life."
                          icon={3}
                        />
                      </div>
                      <div>
                        <FeaturesItem
                          title="Robust Portfolio Management"
                          desc="Showcase your talent or your brand's portfolio with our robust portfolio management tools. Highlight your skills, achievements, and previous work to attract potential clients or discover exceptional talent for your projects."
                          icon={2}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </Parallax>
        )}
      </div>
    </VMContainer>
  );
};

export default VModelWhat;
