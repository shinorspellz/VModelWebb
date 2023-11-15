"use client";
import Image from "next/image";
import { AttentionSeeker, Fade } from "react-awesome-reveal";
import { TypeAnimation } from "react-type-animation";
import ActionButton from "../General/ActionButton";
import VMContainer from "../Layout/VMContainer";
import VMHeader from "../Layout/VMHeader";

const VMBanner = () => {
  return (
    <VMContainer>
      <VMHeader />
      <section className="px-[1%] pt-6">
        <div className="max-w-[1200px] min-h-[85vh] flex mx-auto justify-end ">
          <div className="w-[52%]">
            <div className="flex items-end content-end pb-[120px] flex-wrap w-full relative">
              <div className="mb-5 w-full">
                <div className="text-left">
                  <Fade damping={0.6} triggerOnce>
                    <h1 className="vm-h1-text vm-text-sec">
                      Discover, Connect, and Collaborate with{" "}
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
                        ]}
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
              <div className="text-left mb-5 w-full">
                <AttentionSeeker effect="shake" triggerOnce>
                  <h4 className="vm-h4-text vm-text-sec">
                    Welcome to the future of talent discovery and seamless
                    booking.
                  </h4>
                </AttentionSeeker>
              </div>
              <Fade damping={0.6} delay={2} triggerOnce>
                <div className="grid grid-cols-2 gap-x-4 mt-6">
                  <ActionButton title="Google Play" icon="google" url="/" />
                  <ActionButton title="Apple Store" icon="apple" url="/" />
                </div>
              </Fade>
            </div>
          </div>
          <div className="w-[48%]">
            <div className="p-[10px] flex items-center justify-center flex-wrap w-full">
              <div
                style={
                  {
                    //   transform: "translateY(-9.799999999999997px)",
                  }
                }
              >
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </VMContainer>
  );
};

export default VMBanner;
