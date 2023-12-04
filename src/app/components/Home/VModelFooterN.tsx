"use client";

import React, { useEffect, useState } from "react";
import { VMLogo } from "../General/VMLogo";
import VMContainer from "../Layout/VMContainer";
import Link from "next/link";
import { dm_sans } from "@/utils/fonts";
import SocialHandle from "../General/SocialHandle";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FootListItem = ({
  title,
  url,
  isExternal,
}: {
  title: string;
  url: string;
  isExternal?: boolean;
}) => {
  return (
    <div>
      {isExternal ? (
        <a
          href={url}
          rel="noreferrer"
          target="_blank"
          className={`${dm_sans.className} font-normal text-base vm-text-sec hover:text-white transition-all duration-[.3s] opacity-100  `}
        >
          {title}
        </a>
      ) : (
        <Link
          href={url}
          className={`font-normal text-base vm-text-sec hover:text-white transition-all duration-[.3s] opacity-100  ${dm_sans.className}`}
        >
          {title}
        </Link>
      )}
    </div>
  );
};

const VModelFooterN = ({ noPadd = false }: { noPadd?: boolean }) => {
  const [isOpen, setisOpen] = useState(0);
  const mobile = require("is-mobile");
  const [isMobileView, setisMobileView] = useState(false);
  const FootLink = [
    {
      mainTitle: "VModel",
      subLink: [
        {
          title: "About us",
          url: "/about",
          isExternal: false,
        },
        {
          title: "For Employees",
          url: "https://vmodel-steel.vercel.app/",
          isExternal: true,
        },
        {
          title: "VModel Careers",
          url: "",
          isExternal: false,
        },
        {
          title: "Partnerships",
          url: "",
          isExternal: false,
        },
        {
          title: "Terms of Use",
          url: "",
          isExternal: false,
        },
        {
          title: "Legal",
          url: "",
          isExternal: false,
        },
        {
          title: "Vell Magazine",
          url: "https://vell-magazine.vercel.app/",
          isExternal: true,
        },
      ],
    },
    {
      mainTitle: "Help Centre",
      subLink: [
        // {
        //   title: "FAQ",
        //   url: "https://vmodel-faq.vercel.app/",
        //   isExternal: false,
        // },
        {
          title: "Businesses",
          url: "",
          isExternal: false,
        },
        {
          title: "Creators",
          url: "",
          isExternal: false,
        },
        {
          title: "Partnerships",
          url: "",
          isExternal: false,
        },
        {
          title: "Careers",
          url: "",
          isExternal: false,
        },
        {
          title: "Business Hub",
          url: "",
          isExternal: false,
        },
        {
          title: "Create an ad on VModel",
          url: "",
          isExternal: false,
        },
        {
          title: "Marketplace",
          url: "",
          isExternal: false,
        },
        {
          title: "Creation tools",
          url: "",
          isExternal: false,
        },
        {
          title: "VModel Stickers",
          url: "",
          isExternal: false,
        },
      ],
    },
    {
      mainTitle: "Creatives/Businesses",
      subLink: [
        {
          title: "FAQ",
          url: "https://vmodel-faq.vercel.app/",
          isExternal: false,
        },
        {
          title: "Spotlight",
          url: "",
          isExternal: false,
        },
        {
          title: "Services",
          url: "",
          isExternal: false,
        },
        {
          title: "Coupons",
          url: "",
          isExternal: false,
        },
        {
          title: "Jobs",
          url: "",
          isExternal: false,
        },
        {
          title: "Invite and earn",
          url: "",
          isExternal: false,
        },
        {
          title: "VMC",
          url: "",
          isExternal: false,
        },
        {
          title: "Partnerships",
          url: "",
          isExternal: false,
        },
      ],
    },
  ];

  useEffect(() => {
    setisMobileView(false);
    if (mobile()) {
      setisMobileView(true);
    }
  }, [mobile]);

  const _handleChange = (index: number) => {
    console.log(index);
  };

  return (
    <>
      <VMContainer autoHeight={true} bgSec={false}>
        <section
          className={`${!noPadd ? "pt-[2%]" : ""} pb-[6%] vm-bg contain`}
        >
          <div className="md:lg:py-[100px] md:pt-0 md:pb-6 lg:pb-0 flex flex-col md:flex-row md:mb-9 relative">
            <div className="w-full md:w-[45%] flex flex-col justify-between md:pr-[10%]">
              <div className="space-y-3">
                <div className="flex items-center justify-center md:block -ml-2 mb-5">
                  <VMLogo
                    isFull={true}
                    isDark={true}
                    width={160}
                    height={160}
                  />
                </div>
                <div
                  className={`text-base vm-text-sec lg:text-[17px] ${dm_sans.className}`}
                >
                  VModel is on a mission to democratise the creative industry,
                  empowering both creatives and businesses to access top-tier
                  talent, fostering meaningful collaborations that know no
                  limits.
                </div>
                <div className="w-full mt-9 md:mt-5 md:pr-[3%]">
                  <div>
                    <h5
                      className={`vm-text-sec font-medium opacity-40  text-[17px] mb-2 ${dm_sans.className}`}
                    >
                      Subscribe to our newsletter
                    </h5>
                  </div>
                  <div className="relative">
                    <input
                      className="w-full h-[45px] md:h-[45px] rounded-[80px] px-5 text-white outline-none placeholder:text-white placeholder:opacity-40"
                      type="email"
                      style={{
                        background: "rgb(237 206 171 / 50%)",
                      }}
                      placeholder="Enter your email"
                    />
                    <button
                      className="absolute right-0 top-0 h-[45px] md:h-[45px] transition-all vm-btn-hover duration-[.3s] px-5 rounded-[60px] vm-text-sec"
                      style={{
                        background: "rgb(80 60 59 / 72%)",
                      }}
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-full mt-6 md:mt-0 md:w-[55%]">
                <div className="relative m-auto w-full">
                  <ul className="flex justify-between text-center lg:text-right w-full socialMedia">
                    <SocialHandle
                      PIcon={` <svg
                      className="svg-inline--fa fa-twitter fa-w-16"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="twitter"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      data-fa-i2svg
                    >
                      <path
                        fill="currentColor"
                        d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                      />
                    </svg>`}
                      PLink="https://x.com/vmodelapp"
                      PTitle="Connect with us on twitter"
                    />
                    <SocialHandle
                      PIcon={` <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      className="MuiBox-root css-1t9pz9x iconify iconify--ant-design"
                      width="1em"
                      height="1em"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 1024 1024"
                    >
                      <path
                        fill="currentColor"
                        d="M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3S645.3 585.4 645.3 512S585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165c-3.1-64-17.7-120.8-64.5-167.6c-46.9-46.9-103.6-61.4-167.6-64.5c-55.2-3.1-109.9-2.6-165-2.6c-55.2 0-109.9-.5-165 2.6c-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6c46.9 46.9 103.6 61.4 167.6 64.5c55.2 3.1 109.9 2.6 165 2.6c55.2 0 109.9.5 165-2.6c64-3.1 120.8-17.7 167.6-64.5c46.9-46.9 61.4-103.6 64.5-167.6c3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9S717.1 398.5 717.1 512S625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9s47.9 21.4 47.9 47.9a47.84 47.84 0 0 1-47.9 47.9z"
                      />
                    </svg>`}
                      PLink="https://instagram.com/vmodelapp"
                      PTitle="Connect with us on instagram"
                    />
                    <SocialHandle
                      PIcon={`<svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      width="1em"
                      height="1em"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M15.15 8.4a5.83 5.83 0 0 0-5.85 5.82v5.88a.9.9 0 0 0 .9.9h2.1a.9.9 0 0 0 .9-.9v-5.88a1.94 1.94 0 0 1 2.15-1.93a2 2 0 0 1 1.75 2v5.81a.9.9 0 0 0 .9.9h2.1a.9.9 0 0 0 .9-.9v-5.88a5.83 5.83 0 0 0-5.85-5.82Z"
                      />
                      <rect
                        width="4.5"
                        height="11.7"
                        x="3"
                        y="9.3"
                        fill="currentColor"
                        rx=".9"
                        ry=".9"
                      />
                      <circle
                        cx="5.25"
                        cy="5.25"
                        r="2.25"
                        fill="currentColor"
                      />
                    </svg>`}
                      PLink="https://www.linkedin.com/company/vmodel/"
                      PTitle="Connect with us on linkedin"
                    />
                    <SocialHandle
                      PIcon={`<svg
                      className="svg-inline--fa fa-youtube fa-w-18"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="youtube"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      data-fa-i2svg
                    >
                      <path
                        fill="currentColor"
                        d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
                      />
                    </svg>`}
                      PLink="https://www.youtube.com/@vmodelapp"
                      PTitle="Connect with us on youtube"
                    />
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-full mt-9 md:mt-0 md:w-[60%]">
              {!isMobileView ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 md:gap-y-0 md:gap-x-4">
                  {FootLink.map((footItem, index) => (
                    <div key={index}>
                      <h4
                        className={`font-bold text-lg vm-text-sec mb-6  ${dm_sans.className}`}
                      >
                        {footItem?.mainTitle}
                      </h4>
                      <div className="space-y-3">
                        {footItem?.subLink.map((subItem, indexSub) => (
                          <div key={indexSub}>
                            <FootListItem
                              title={subItem?.title}
                              url={subItem?.url}
                              isExternal={subItem?.isExternal}
                              key={indexSub}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="vm-accord">
                  {FootLink.map((footItem, index) => (
                    <Accordion
                      key={index}
                      // expanded={index == isOpen ? true : false}
                      // onChange={() => _handleChange(index)}
                      defaultExpanded={index == 0 ? true : false}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography>{footItem?.mainTitle}</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <div className="space-y-3">
                          {footItem?.subLink.map((subItem, indexSub) => (
                            <div key={indexSub}>
                              <FootListItem
                                title={subItem?.title}
                                url={subItem?.url}
                                isExternal={subItem?.isExternal}
                                key={indexSub}
                              />
                            </div>
                          ))}
                        </div>
                      </AccordionDetails>
                    </Accordion>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="pt-9 flex items-center justify-center text-center">
            <div className="">
              <p className="text-xs md:text-base text-white opacity-70">
                © {new Date().getFullYear()} VModel. All rights reserved.
              </p>
            </div>
          </div>
        </section>
      </VMContainer>
    </>
  );
};

export default VModelFooterN;
