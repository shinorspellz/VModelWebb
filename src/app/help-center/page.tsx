import React from "react";
import Iframe from "react-iframe";

const HelpCenter = () => {
  return (
    <>
      <Iframe
        // url="https://vmodel-faq.vercel.app/portfolio"
        url="https://v-model-help-centre.vercel.app"
        width="640px"
        height="320px"
        id=""
        className=""
        loading={"lazy"}
        allowFullScreen
        allow="fullscreen"
        display="block"
        styles={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
        position="relative"
      />
    </>
  );
};

export default HelpCenter;
