import { dm_sans } from "@/utils/fonts";
import React from "react";

export type TVTList = {
  data: {
    id: number;
    title: string;
  }[];
};
const VTList = ({ data }: TVTList) => {
  return (
    <ul className="my-3 pl-12">
      {data.length &&
        data.map((item) => (
          <li
            key={item?.id}
            className={`mt-4 list-disc text-[18px] text-[#ececec] font-normal ${dm_sans.className}`}
          >
            {item?.title}
          </li>
        ))}
    </ul>
  );
};

export default VTList;
