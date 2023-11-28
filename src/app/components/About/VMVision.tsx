import React from "react";
import VMContainer from "../Layout/VMContainer";
import { dm_sans } from "@/utils/fonts";
import Image from "next/image";

const VMVision = () => {
  return (
    <>
      <VMContainer autoHeight={false} bgSec={false}>
        <div className="flex flex-col w-full mx-auto md:items-center md:justify-center md:h-screen relative">
          <div className="w-full pr-[10%]">
            <h2
              className={`text-sm leading-none vm-text-sec opacity-50 font-semibold mb-4 text-teal ${dm_sans.className}`}
            >
              What we&apos;re doing
            </h2>
            <div className="">
              <p
                className={`font-extrabold text-2xl vm-text-sec mb-6 md:text-5xl ${dm_sans.className}`}
              >
                Breaking free from traditional models to embrace a new way of
                talent connection
              </p>
              <div className="md:text-[1.375rem] md:leading-[1.9rem] vm-text-sec text-base space-y-4">
                <p className={`vm-text-sec ${dm_sans.className}`}>
                  &ldquo;we&apos;re leading a movement that challenges the
                  status quo, redefines the rules, and empowers businesses and
                  creatives to shape the future of talent discovery.&rdquo; -
                  VModel
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="grid lg:grid-cols-3 gap-10 mt-16">
              <div >
              <span className="inline-flex items-center justify-center mb-4 p-1 lg:p-2 bg-gray-50 w-[60px] h-[60px] opacity-10 border-4 lg:border-8 border-[#edf9e4] rounded-full ">
                      <Image
                        src="/assets/images/icons/broken-link-icon.svg"
                        alt="brokenlink icon"
                        width={50} // Set the width of your image
                        height={50} // Set the height of your image
                         />
                </span>
                <h3 className="text-[1.375rem] leading-[1.625rem] font-bold pb-4">
                  <div className="richtext vm-text-sec opacity-70">
                    Break free
                  </div>
                </h3>
                <p className="md:text-lg vm-text-sec line-clamp-4">
                  VModel allows individuals and businesses to break free from
                  the limitations of traditional talent discovery and booking.
                  By providing a platform that revolutionizes the creative
                  industry, VModel empowers users to explore new possibilities
                  and overcome the constraints of the past.
                </p>
              </div>
              <div>
              <span className="inline-flex items-center justify-center mb-4 p-1 lg:p-2 bg-gray-50 w-[60px] h-[60px] opacity-10 border-4 lg:border-8 border-[#edf9e4] rounded-full ">
                <Image
                  src="/assets/images/icons/globe-network-icon.svg"
                  alt="globe network icon"
                  width={50} // Set the width of your image
                  height={50} // Set the height of your image
                 />
                </span>
                <h3 className="text-[1.375rem] leading-[1.625rem] font-bold pb-4">
                  <div className="richtext vm-text-sec opacity-70">
                    Connect creatively
                  </div>
                </h3>
                <p className="md:text-lg vm-text-sec line-clamp-4">
                  VModel fosters a creative ecosystem where individuals and
                  businesses can connect in innovative and meaningful ways. By
                  leveraging the platform&apos;s capabilities, users can tap
                  into a vast pool of top-tier talent, enabling them to
                  collaborate and bring their creative visions to life like
                  never before.
                </p>
              </div>
              <div>
              <span className="inline-flex items-center justify-center mb-4 p-1 lg:p-2 bg-gray-50 w-[60px] h-[60px] opacity-10 border-4 lg:border-8 border-[#edf9e4] rounded-full ">
                <Image
                  src="/assets/images/icons/binoculars-icon.svg"
                  alt="binoculars-icon"
                  width={50}
                  height={50}
                />
                </span>
                <h3 className="text-[1.375rem] leading-[1.625rem] font-bold pb-4">
                  <div className="richtext vm-text-sec opacity-70">
                    Discover talent
                  </div>
                </h3>
                <p className="md:text-lg vm-text-sec line-clamp-4">
                  VModel democratizes the creative industry by providing
                  accessible talent discovery. Users can discover exceptional
                  talent that matches their needs, opening doors to new
                  opportunities and unlocking the full potential of their
                  creative projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </VMContainer>
    </>
  );
};

export default VMVision;
