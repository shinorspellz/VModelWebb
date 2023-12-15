import { dm_sans } from "@/utils/fonts";
import React from "react";

const VTBody = ({ desc }: { desc: string }) => {
  return (
    <>
      <div
        className={`mt-4 text-[18px] text-[#ececec] font-normal ${dm_sans.className}`}
      >
        {desc}
      </div>
    </>
  );
};

export default VTBody;
