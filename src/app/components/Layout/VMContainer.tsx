import { OnlyChild } from "@/utils/globalTypes";
import React from "react";

const VMContainer = ({ children }: OnlyChild) => {
  return <section className="min-h-screen vm-bg container">{children}</section>;
};

export default VMContainer;
