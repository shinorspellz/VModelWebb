"use client";

import React from "react";
import VMContainer from "../Layout/VMContainer";
import Image from "next/image";
import { Fade, Slide } from "react-awesome-reveal";
import { Parallax } from "react-scroll-parallax";

const VModelFeat = () => {
  const mobile = require("is-mobile");
  const [isMobileView, setisMobileView] = React.useState(false);
  const [isReady, setIsReady] = React.useState(false);

  React.useLayoutEffect(() => {
    setIsReady(false);
    if (mobile()) {
      setisMobileView(true);
      setIsReady(true);
    } else {
      setIsReady(true);
    }
  }, [mobile]);
  const listItem = [
    {
      featID: 0,
      feat: " Access a vast network of creative talent ready to bring your vision to life",
    },
    {
      featID: 1,
      feat: "Collaborate with professionals who understand your industry and deliver exceptional results",
    },
    {
      featID: 2,
      feat: "Build long-lasting relationships with reliable and talented creatives",
    },
    {
      featID: 3,
      feat: "Manage bookings, schedules, and communications in one place",
    },
    {
      featID: 4,
      feat: "Book Pet Models",
    },
  ];
  return (
    <VMContainer>
      {isReady && (
        <Parallax
          translateY={[
            isMobileView ? "0px" : "-60px",
            isMobileView ? "0px" : "30px",
          ]}
          easing="easeInQuad"
        >
          <div className="flex flex-col md:flex-row mx-auto md:items-center">
            <div className="w-auto">
              <div
                className="vm-no-p-right flex md:items-center flex-wrap w-full md:content-center "
                style={{
                  padding: "0% 5% 0% 0%",
                }}
              >
                <div className="pb-5">
                  <Fade>
                    <h2 className="vm-h2 vm-text-sec vm-no-capitalise">
                      Choose the talent you want, at your own budget.
                    </h2>
                  </Fade>
                </div>
                <div className="pt-3">
                  <ul className="vm-list space-y-5 pr-5">
                    {listItem.map((list) => (
                      <li className="text-white text-base" key={list.featID}>
                        {list.feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-full md:w-[50%] flex flex-col md:flex-row md:items-center">
              <div className="w-auto flex relative min-h-[1px] md:-mr-[80px]">
                <div
                  className="flex items-center content-center w-full flex-wrap"
                  style={{
                    padding: "0% 0% 0% 5%",
                  }}
                >
                  <div className="mb-5 w-full text-center ">
                    <div className="mt-9 md:mt-5">
                      <div className="w-[308px] h-[626px]">
                        <Fade>
                          <Image
                            alt=""
                            src="/assets/images/vmodel-app-ui/vm-phone-3.png"
                            width={340}
                            height={690}
                            style={{
                              boxShadow: "-12px 15px 25px 0px #000000",
                              borderRadius: "54px 54px 54px 54px",
                            }}
                          />
                        </Fade>
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="mt-5">
                      <div className="mb-4">
                        <span className="text-sm vm-text-sec">
                          <Slide direction="up" triggerOnce>
                            <b>Businesses, brands and Bookers</b>
                          </Slide>
                        </span>
                      </div>
                      <div className="mb-4">
                        <Slide direction="up" triggerOnce>
                          <span className="text-[13px] vm-text-sec pr-6">
                            Find the most suitable local talent according to
                            your creative needs and budget, without compromising
                            on quality.
                          </span>
                        </Slide>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-auto flex relative min-h-[1px] md:ml-[76px]">
                <div
                  className="flex vm-no-p-top md:items-center md:content-center w-full flex-wrap md:ml-[60px]"
                  style={{
                    padding: "0% 0% 0% 5%",
                  }}
                >
                  <div className="mb-5 w-full text-center ">
                    <div className="mt-6 md:mt-[120px]">
                      <div className="w-[308px] vm-no-bxshadow h-[626px]">
                        <Fade>
                          <Image
                            alt=""
                            src="/assets/images/vmodel-app-ui/vm-phone-4.png"
                            width={340}
                            height={690}
                            style={{
                              boxShadow: "-12px 15px 25px 0px #000000",
                              borderRadius: "54px 54px 54px 54px",
                            }}
                          />
                        </Fade>
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="mt-5">
                      <div className="mb-4">
                        <Slide direction="up" triggerOnce>
                          <span className="text-sm vm-text-sec">
                            <b>Talent and creatives</b>
                          </span>
                        </Slide>
                      </div>
                      <div className="mb-4">
                        <Slide direction="up" delay={2} triggerOnce>
                          <span className="text-[13px] vm-text-sec">
                            Effortlessly find jobs and services around your and
                            collaborate with your favorite co-creatives
                            seamlessly.
                          </span>
                        </Slide>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Parallax>
      )}
    </VMContainer>
  );
};

export default VModelFeat;
