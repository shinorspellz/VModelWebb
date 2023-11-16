"use client";

import React from "react";
import VMContainer from "../Layout/VMContainer";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import { dm_sans } from "@/utils/fonts";

const WorkList = ({
  counter,
  title,
}: {
  counter: number;
  title: React.ReactNode;
}) => {
  return (
    <div className="w-full md:w-1/2 mb-[20px] md:mb-0">
      <div className="flex md:flex-wrap items-center w-full relative content-center ">
        <div className="w-[30px] md:w-auto max-w-full">
          <div className="vm-circle-numb   rounded-full">
            <span className="flex justify-center w-[30px] h-[30px] items-center">
              <span
                className={`flex-grow text-sm md:text-lg order-10 inline-block ${dm_sans.className}`}
              >
                {counter}
              </span>
            </span>
          </div>
        </div>
        <div className="w-full md:w-auto max-w-full">
          <div className="ml-[25px]">
            <h3
              className={`vm-h3-ext vm-text-sec vm-no-bold vm-no-br font-normal md:font-medium ${dm_sans.className}`}
            >
              {title}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

const VModelWorks = () => {
  return (
    <VMContainer otherClass="md:pt-[100px] md:pb-[80px] ">
      <div className="flex flex-col md:flex-row mx-auto md:items-center w-full">
        <div className="hidden  md:w-1/2 md:flex md:items-end justify-center">
          <div className="w-auto relative">
            <div className="w-[350px] h-[709px]">
              <Fade>
                <Image
                  alt=""
                  src="/assets/images/vmodel-app-ui/vm-phone-5.png"
                  width={350}
                  height={709}
                  style={{
                    boxShadow: "-12px 15px 25px 0px #000000",
                    borderRadius: "54px 54px 54px 54px",
                  }}
                />
              </Fade>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div
            className="vm-no-p-right vm-no-p-bottom flex md:items-center md:content-center flex-wrap w-full"
            style={{
              padding: "0% 2% 19% 0%",
            }}
          >
            <div className="text-left mb-2 md:mb-5 w-full">
              <h2
                className={`vm-h2 vm-text-sec vm-no-capitalise ${dm_sans.className}`}
              >
                How It Works
              </h2>
            </div>
            <div
              className={`text-[18px] mb-5 w-full ${dm_sans.className} font-normal leading-[18px]`}
            >
              <div className="text-white md:font-medium">
                Booking talent on VModel is really easy
              </div>
            </div>
            <section className="mt-[10px] md:mt-[40px] w-full">
              <div className="max-w-[1140px] w-full flex flex-col md:flex-row mx-auto relative">
                <WorkList
                  counter={1}
                  title={
                    <>
                      Download
                      <br /> The App
                    </>
                  }
                />
                <WorkList
                  counter={2}
                  title={
                    <>
                      Create a <br />
                      Free Account
                    </>
                  }
                />
              </div>
            </section>
            <section className="md:mt-[60px] w-full">
              <div className="max-w-[1140px] w-full flex flex-col md:flex-row mx-auto relative">
                <WorkList
                  counter={3}
                  title={
                    <>
                      Create a job or <br />
                      book a creative <br />
                      directly
                    </>
                  }
                />
                <WorkList counter={4} title={<>Leave a review</>} />
              </div>
            </section>
          </div>
        </div>
      </div>
    </VMContainer>
  );
};

export default VModelWorks;
