"use client";

import { OnlyChild } from "@/utils/globalTypes";
import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";

const ParallaxPro = ({ children }: OnlyChild) => {
  return <ParallaxProvider>{children}</ParallaxProvider>;
};

export default ParallaxPro;
