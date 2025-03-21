import Image from "next/image";
import React from "react";
import SocialHandle from "../General/SocialHandle";
import { dm_sans } from "@/utils/fonts";
import { VMLogo } from "../General/VMLogo";

const VModelFooter = ({ noPadd = false }: { noPadd?: boolean }) => {
  const FooterLinks = [
    {
      title: "FAQ",
      url: "/",
      external: false,
    },
    {
      title: "For Employees",
      url: "/dashboard",
      external: false,
    },
    {
      title: "VModel Careers",
      url: "/",
      external: false,
    },
    {
      title: "Contact Us",
      url: "/",
      external: false,
    },
    {
      title: "About Us",
      url: "/",
      external: false,
    },
    {
      title: "Back to Home",
      url: "/",
      external: false,
    },
  ];
  return (
    <section className={`${!noPadd ? "pt-[5%]" : ""} pb-[7%] vm-bg contain`}>
      <div className="lg:py-[100px] lg:min-h-[70%] pb-6 lg:pb-0 flex justify-center items-center relative">
        <div className="text-center space-y-6 lg:space-y-9 lg:px-[14%]">
          {/* <div className="relative hidden  h-[50px] justify-center items-center md:flex"></div> */}
          <div>
            <VMLogo isFull={true} isDark={true} width={300} height={300} />
          </div>
          <div
            className={`text-base px-[4%] vm-text-sec lg:text-[17px] ${dm_sans.className}`}
          >
            VModel is on a mission to democratise the creative industry,
            empowering both creatives and businesses to access top-tier talent,
            fostering meaningful collaborations that know no limits.
          </div>
          <div className="py-6">
            <ul>
              <li>
                <a></a>
              </li>
            </ul>
          </div>
          <div className="relative m-auto w-[90%] lg:w-[40%]">
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
                PLink="https://facebook.com/"
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
                PLink="https://twitter.com/"
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
                PLink="https://instagram.com/"
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
                PLink="https://linkedin.com/"
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
                PLink="https://youtube.com/"
                PTitle="Connect with us on youtube"
              />
            </ul>
          </div>
          <div className="">
            <p className="text-xs md:text-base text-white opacity-70">
              © {new Date().getFullYear()} Voltis Labs. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VModelFooter;
