"use client";

import React, { useLayoutEffect, useState, useEffect } from "react";
import VMContainer from "../Layout/VMContainer";
import ReactPlayer from "react-player";
import { Fade } from "react-awesome-reveal";
import { Parallax } from "react-scroll-parallax";
import { Pause } from "iconsax-react";

const VMPlayer = () => {
  const mobile = require("is-mobile");
  const [isMobileView, setisMobileView] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useLayoutEffect(() => {
    setIsReady(false);
    if (mobile()) {
      setisMobileView(true);
      setIsReady(true);
    } else {
      setIsReady(true);
    }
  }, [mobile]);

  useEffect(() => {
    setTimeout(() => {
      setIsPlaying(true);
    }, 3000);
  }, []);

  const _handlePlay = () => {
    setIsPlaying(!isPlaying);
    // setTimeout(() => {
    //   setIsPlaying(!isPlaying);
    // }, 300);
  };

  return (
    <>
      {isReady && (
        <Parallax scale={[1, isMobileView ? 1 : 1.3]} easing="easeInQuad">
          <Fade>
            <VMContainer>
              <div className="flex flex-col md:flex-row w-full mx-auto md:items-center md:pt-[80px] px-[10px]">
                <div className="h-auto mb-12 md:mb-0 md:h-[80vh] w-full rounded-md overflow-hidden relative">
                  <div className="absolute z-30 w-full h-full bg-black opacity-40"></div>
                  <div className="absolute left-3 md:left-0 bottom-2 md:bottom-0 z-30">
                    <div className="self-start xl:p-16 md:p-12">
                      <div className="font-bold text-white text-lg md:text-3xl md:mb-3 richtext">
                        Janet Chris
                      </div>
                      <p className="text-base md:text-lg richtext text-white">
                        Food, Influencer
                      </p>
                    </div>
                  </div>

                  <div className="md:absolute z-20 w-full rounded-md overflow-hidden h-full">
                    <ReactPlayer
                      url="/assets/videos/vm-video-1.mp4"
                      autoPlay
                      width={"100%"}
                      height={"100%"}
                      className="react-player"
                      objectFit="cover"
                      borderRadius="30px"
                      playing={isPlaying}
                      muted={true}
                    />
                  </div>
                  {/* <div
                    className="absolute left-[50%] w-[50px] h-[50px] md:w-[100px] md:h-[100px] z-40 top-[50%] rounded-full"
                    style={{
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <button
                      className=" h-14 w-14 md:h-32 md:w-32 flex z-20 rounded-full border-white border place-items-center justify-center absolute -translate-x-1/2 left-1/2 -translate-y-1/2 top-1/2"
                      type="button"
                      aria-label="Play Muck N Brass video"
                    >
                      <div className="w-0 h-0 border-y-[12px] border-y-transparent border-l-[20px] border-l-white ml-1"></div>
                    </button>
                  </div> */}
                  <div
                    className="absolute right-[2%] md:right-[3%] w-[50px] h-[50px] md:w-[100px] md:h-[100px] z-40 bottom-[2%] md:bottom-[7%] rounded-full"
                    // style={{
                    //   transform: "translate(-50%, -50%)",
                    // }}
                  >
                    <button
                      className=" h-8 w-8 md:h-16 md:w-16 flex z-20 rounded-full border-white border place-items-center justify-center absolute -translate-x-1/2 left-1/2 -translate-y-1/2 top-1/2"
                      type="button"
                      onClick={_handlePlay}
                      aria-label="Play Muck N Brass video"
                    >
                      {isPlaying ? (
                        <div className="w-0 h-0 border-y-[12px] scale-50 md:scale-95 border-y-transparent border-l-[20px] border-l-white ml-1"></div>
                      ) : (
                        <Pause size="32" color="#fff" variant="Bold" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </VMContainer>
          </Fade>
        </Parallax>
      )}
    </>
  );
};

export default VMPlayer;
