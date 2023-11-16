import React from "react";

const VMContainer = ({
  children,
  otherClass = "",
  noWrapper,
}: {
  children: React.ReactNode;
  otherClass?: string;
  noWrapper?: boolean;
}) => {
  return (
    <section className="lg:min-h-screen vm-bg">
      {!noWrapper ? (
        <section
          className={`px-[24px] md:px-0 max-w-[1140px] pt-[10%] md:pt-0 flex md:items-center mx-auto relative ${otherClass}`}
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
