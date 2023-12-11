"use client";
import Image from "next/image";
import { AttentionSeeker, Fade } from "react-awesome-reveal";
import { TypeAnimation } from "react-type-animation";
import ActionButton from "../General/ActionButton";
import VMContainer from "../Layout/VMContainer";
import VMHeader from "../Layout/VMHeader";
import { useEffect, useState } from "react";

const VMBanner = () => {
  const mobile = require("is-mobile");
  const [isMobileView, setisMobileView] = useState(false);
  useEffect(() => {
    setisMobileView(false);
    if (mobile()) {
      setisMobileView(true);
    }
  }, [mobile]);
  return (
    <VMContainer noWrapper={true}>
      <VMHeader />
      <section className="px-[24px] md:px-[1%] pt-[30px] md:pt-0">
        <div className="max-w-[1200px] md:min-h-[85vh] flex flex-col lg:flex-row mx-auto justify-end ">
          <div className="lg:w-[52%] flex items-center">
            <div className="flex items-end content-center flex-wrap w-full relative">
              <div className="mb-5 w-full">
                <div className="text-left">
                  <Fade delay={0} triggerOnce>
                    <h1 className="min-h-[130px] pr-sm md:min-h-auto vm-h1-text vm-text-sec">
                      Discover, Connect, and Collaborate with{" "}
                      {/* {isMobileView ? <br /> : ""} */}
                      <TypeAnimation
                        sequence={[
                          // Same substring at the start will only be typed out once, initially
                          "Creators",
                          1000, // wait 1s before replacing "Mice" with "Hamsters"
                          "Talent",
                          1000,
                          "Influencers",
                          1000,
                          "Bookers",
                          1000,
                          "Photographers",
                          1000,
                          "Chefs",
                          1000,
                          "Stylists",
                          1000,
                          "Businesses",
                          1000,
                        ]}
                        className="vm-anim-text"
                        cursor={false}
                        wrapper="span"
                        speed={50}
                        style={{
                          fontSize: "85px",
                          display: "inline-block",
                          color: "#fff",
                        }}
                        repeat={Infinity}
                      />
                    </h1>
                  </Fade>
                </div>
              </div>
              <div className="text-left md:mb-5 w-full">
                <AttentionSeeker effect="shake" triggerOnce>
                  <h4 className="vm-h4-text vm-text-sec">
                    Welcome to the future of talent discovery and seamless
                    booking.
                  </h4>
                </AttentionSeeker>
              </div>
              <div>
                <Fade damping={0.6} delay={2} triggerOnce>
                  <div className="grid grid-cols-2 w-full gap-x-4 mt-6">
                    <ActionButton title="Google Play" icon="google" url="/" />
                    <ActionButton title="Apple Store" icon="apple" url="/" />
                  </div>
                </Fade>
              </div>
            </div>
          </div>
          <div className="w-full pt-[10%] md:pt-0 md:w-[48%]">
            <div className="p-[10px] vm-no-bxshadow flex items-center justify-center flex-wrap w-full">
              <div>
                <Fade triggerOnce>
                  <Image
                    alt=""
                    src="/assets/images/vmodel-app-ui/vm-phone-1.png"
                    width={340}
                    height={690}
                    style={{
                      boxShadow: "-11px 12px 25px 0px #000000",
                      borderRadius: "54px 54px 54px 54px",
                    }}
                  />
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </section>
    </VMContainer>
  );
};

export default VMBanner;
