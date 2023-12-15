import React from "react";

const VTHead = ({ title }: { title: string }) => {
  return (
    <div>
      <h3 className="vm-text-sec text-[20px] font-extrabold">{title}</h3>
    </div>
  );
};

export default VTHead;
