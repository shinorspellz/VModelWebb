import React from "react";

const VMContainer = ({
  children,
  otherClass = "",
  noWrapper,
  autoHeight = false,
  bgSec = false,
}: {
  children: React.ReactNode;
  otherClass?: string;
  noWrapper?: boolean;
  autoHeight?: boolean;
  bgSec?: boolean;
}) => {
  return (
    <section
      className={`${!autoHeight && "lg:min-h-screen"} ${
        bgSec ? "vm-bg-sec" : "vm-bg"
      }`}
    >
      {!noWrapper ? (
        <section
          className={`px-[24px] md:px-0 max-w-[1140px] pt-12 md:pt-0 flex md:items-center mx-auto relative ${otherClass}`}
        >
          {children}
        </section>
      ) : (
        children
      )}
    </section>
  );
};

export default VMContainer;
