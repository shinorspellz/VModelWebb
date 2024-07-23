import { dm_sans } from "@/utils/fonts";
import { ActionButton } from "@/utils/globalTypes";
import { GooglePlay, Apple } from "iconsax-react";
import Link from "next/link";
import React from "react";

const ActionButton = ({ icon, title, url }: ActionButton) => {
  return (
    <Link
      href={url}
      className="vm-text-sec vm-hover vm-btn-link"
      style={{
        border: "2px solid var(--vm-secondary)",
        borderRadius: "var(--vm-rounded-md)",
        padding: "15px 30px",
      }}
    >
      <div className="flex space-x-2 items-center">
        <span>
          {icon == "apple" ? (
            <Apple size="22" color="#fff" variant="Bold" />
          ) : (
            <GooglePlay size="22" color="#fff" variant="Bold" />
          )}
        </span>
        <span className={`text-white ${dm_sans.className} text-[18px]`}>
          {title}
        </span>
      </div>
    </Link>
  );
};

export default ActionButton;
