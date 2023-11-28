import { IconButton, Typography } from "@mui/material";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import * as React from "react";
import CloseIcon from "@mui/icons-material/Close";

import styles from "./SidebarDrawer.module.css";
import { VMLogo } from "../General/VMLogo";
import SocialHandle from "../General/SocialHandle";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import ActionButton from "../General/ActionButton";

type Anchor = "top" | "left" | "bottom" | "right";

interface drawProps {
  setDrawerTogg: any;
}

const SidebarDrawer = (props: drawProps) => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
    anchor: "right",
  });

  React.useEffect(() => {
    setState({ ...state, right: true });
  }, []);

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, right: open });
      setTimeout(() => {
        if (!open) {
          props.setDrawerTogg(open);
        }
      }, 200);
    };

  const ListItems = [
    {
      itemid: 1,
      itemTitle: "About Us",
      itemLink: "/about",
      itemType: 0,
      isExternal: false,
    },

    {
      itemid: 3,
      itemTitle: "Help Center",
      itemLink: "/help-center",
      itemType: 0,
      isExternal: false,
    },
    {
      itemid: 2,
      itemTitle: "For Employees",
      itemLink: "https://vmodel-steel.vercel.app/",
      itemType: 0,
      isExternal: false,
    },
  ];

  return (
    <React.Fragment>
      <SwipeableDrawer
        anchor={"right"}
        open={state.right}
        onClose={toggleDrawer("right", false)}
        onOpen={toggleDrawer("right", true)}
      >
        <div className="flex flex-col w-screen h-full vm-bg">
          <div
            className="px-5 relative w-full pb-5 flex items-center justify-between "
            style={{
              paddingTop: "calc(env(safe-area-inset-top) + 24px)",
            }}
          >
            <a>
              <div className="">
                <VMLogo isDark={true} width={50} height={50} />
              </div>
            </a>
            <div className="flex justify-end items-center">
              <IconButton onClick={toggleDrawer("right", false)}>
                <CloseIcon sx={{ fontSize: "30px", color: "#edceab" }} />
              </IconButton>
            </div>
          </div>
          <div
            className="overflow-auto p-0 "
            style={{
              flex: "1 1 0",
              paddingBottom: "env(safe-area-inset-bottom)",
            }}
          >
            <div className="block p-0 m-0">
              <div className="h-[5px]"></div>
              <ul className="p-0 m-0 flex flex-col flex-grow max-w-full">
                {ListItems.map((litem, index) => (
                  <Link
                    key={index}
                    href={litem.itemLink}
                    target={`${litem?.isExternal ? "_blank" : "_self"}`}
                    className={[
                      "relative min-h-[72px] flex flex-row items-center sbItem",
                      styles.sbarListItem,
                    ].join(" ")}
                  >
                    <div className="flex-col flex flex-grow  min-w-0 ">
                      <p
                        className="m-0 text-[18px] font-bold leading-6"
                        style={{
                          color: "#edceab",
                        }}
                      >
                        {litem.itemTitle}
                      </p>
                    </div>
                    <svg
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0 w-6 h-6"
                      fill="rgba(255,255,255,.4)"
                    >
                      <path d="M14.481 12l-7.14 6.247a1 1 0 001.318 1.506l8-7a1 1 0 000-1.506l-8-7a1 1 0 10-1.317 1.506L14.482 12z"></path>
                    </svg>
                  </Link>
                ))}
              </ul>
              {/* <div className={styles.separator}></div>
              <ul className="p-0 m-0 flex flex-col flex-grow max-w-full">
                <a
                  className={[
                    "relative min-h-[72px] flex flex-row items-center sbItem",
                    styles.sbarListItem,
                  ].join(" ")}
                  href="/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="flex-col flex flex-grow  min-w-0 ">
                    <p
                      className="m-0 text-[18px] font-bold leading-6"
                      style={{
                        color: "rgba(255, 255, 255,.7)",
                      }}
                    >
                      Download the app
                    </p>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="flex-shrink-0 w-6 h-6"
                  >
                    <path
                      fill="rgba(255,255,255,.4)"
                      fillRule="evenodd"
                      d="M15.293 4.293a1 1 0 011.414 0l7 7A1.006 1.006 0 0124 12l-.004-.086.003.054L24 12a1.018 1.018 0 01-.146.52 1.035 1.035 0 01-.147.187l.08-.09a1.003 1.003 0 01-.007.008l-.073.082-7 7a1 1 0 01-1.414-1.414L20.585 13H3a1 1 0 01-.993-.883L2 12a1 1 0 011-1h17.585l-5.292-5.293a1 1 0 01-.083-1.32z"
                    />
                  </svg>
                </a>
              </ul> */}
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 w-full min-h-[70px] pb-8 items-center justify-center text-center">
          <div className="flex-col flex flex-grow text-center  min-w-0 ">
            <p
              className="m-0 text-[18px] font-bold leading-6"
              style={{
                color: "rgba(255, 255, 255,.7)",
              }}
            >
              Download the VModel app
            </p>
          </div>
          <div className="px-[5%] mb-12">
            <div className="flex items-center space-x-4 w-full justify-center mt-6">
              <ActionButton title="Google Play" icon="google" url="/" />
              <ActionButton title="Apple Store" icon="apple" url="/" />
            </div>
          </div>
          <div className="relative m-auto w-full">
            <ul className="flex justify-between text-center lg:text-right w-full socialMedia">
              <SocialHandle
                PIcon={` <svg
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
                                d="M17 3.5a.5.5 0 0 0-.5-.5H14a4.77 4.77 0 0 0-5 4.5v2.7H6.5a.5.5 0 0 0-.5.5v2.6a.5.5 0 0 0 .5.5H9v6.7a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-6.7h2.62a.5.5 0 0 0 .49-.37l.72-2.6a.5.5 0 0 0-.48-.63H13V7.5a1 1 0 0 1 1-.9h2.5a.5.5 0 0 0 .5-.5Z"
                              />
                            </svg>`}
                PLink="https://facebook.com/xdsdata"
                PTitle="Connect with us on facebook"
              />
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
                PLink="https://twitter.com/xdsdata"
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
                PLink="https://instagram.com/xdsdata"
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
                PLink="https://linkedin.com/xdsdata"
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
                PLink="https://youtube.com/xdsdata"
                PTitle="Connect with us on youtube"
              />
            </ul>
          </div>
          <div className="mt-5">
            <p className="text-xs md:text-base text-white opacity-70">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </SwipeableDrawer>
    </React.Fragment>
  );
};

export default SidebarDrawer;
