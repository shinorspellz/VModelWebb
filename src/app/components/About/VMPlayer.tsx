"use client";

import React from "react";
import VMContainer from "../Layout/VMContainer";
import ReactPlayer from "react-player";
import { Fade } from "react-awesome-reveal";
import { Parallax } from "react-scroll-parallax";

const VMPlayer = () => {
  return (
    <Parallax scale={[1, 1.3]} easing="easeInQuad">
      <Fade>
        <VMContainer>
          <div className="flex flex-col md:flex-row w-full mx-auto md:items-center pt-[80px] px-[10px]">
            <div className="h-[80vh] w-full rounded-md overflow-hidden relative">
              <div className="absolute z-30 w-full h-full bg-black opacity-40"></div>
              <div className="absolute left-0 bottom-0 z-30">
                <div className="self-start xl:p-16 p-12">
                  <div className="font-bold text-white text-3xl mb-3 richtext">
                    Janet Chris
                  </div>
                  <p className="text-lg richtext text-white">
                    Food, Influencer
                  </p>
                </div>
              </div>

              <div className="absolute z-20 w-full rounded-md overflow-hidden h-full">
                <ReactPlayer
                  url="/assets/videos/vm-video-1.mp4"
                  autoPlay
                  width={"100%"}
                  height={"100%"}
                  className="react-player"
                  objectFit="cover"
                  borderRadius="30px"
                  playing={true}
                  muted={true}
                />
                d
              </div>
              <div
                className="absolute left-[50%] w-[100px] h-[100px] z-40 top-[50%] rounded-full"
                style={{
                  transform: "translate(-50%, -50%)",
                }}
              >
                <button
                  className="h-32 w-32 flex z-20 rounded-full border-white border place-items-center justify-center absolute -translate-x-1/2 left-1/2 -translate-y-1/2 top-1/2"
                  type="button"
                  aria-label="Play Muck N Brass video"
                >
                  <div className="w-0 h-0 border-y-[12px] border-y-transparent border-l-[20px] border-l-white ml-1"></div>
                </button>
              </div>
            </div>
          </div>
        </VMContainer>
      </Fade>
    </Parallax>
  );
};

export default VMPlayer;
