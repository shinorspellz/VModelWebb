'use client'
import React, { useEffect } from "react";
import Iframe from "react-iframe";

const HelpCenter = () => {
  useEffect(() => {
    // Function to handle changes in URL parameters
    const handleParamChange = () => {
      const params = new URLSearchParams(window.location.search);
      const section = params.get("section");

      if (section) {
        const iframe = document.getElementById("helpCenterIframe") as HTMLIFrameElement;
        if (iframe) {
          // Encode the section parameter to handle slashes correctly
          const encodedSection = encodeURIComponent(section);
          iframe.src = `https://v-model-help-centre.vercel.app/${encodedSection}`;
        }
      }
    };

    // Call handleParamChange on initial render to handle initial parameters
    handleParamChange();

    // Listen for changes in URL parameters
    window.addEventListener("hashchange", handleParamChange);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("hashchange", handleParamChange);
    };
  }, []);

  return (
    <Iframe
      url="https://v-model-help-centre.vercel.app"
      width="100%"
      height="100%"
      id="helpCenterIframe"
      loading="lazy"
      allowFullScreen
      styles={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        border: "none", // Optional: Remove iframe border
      }}
    />
  );
};

export default HelpCenter;
