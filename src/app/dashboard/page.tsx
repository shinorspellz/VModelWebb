'use client'
import React, { useEffect } from "react";
import Iframe from "react-iframe";

const Dashboard = () => {


  return (
    <Iframe
      url="https://v-model-dash.vercel.app"
      width="100%"
      height="100%"
      id="dashframe"
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

export default Dashboard