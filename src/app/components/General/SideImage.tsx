import React from "react";
import Image from "next/image";

const SideImage = () => {
    return (
        <div className="">
            <Image
                alt=""
                src="/assets/images/vmodel-app-ui/vm-phone-1.png"
                objectFit="cover"
                width={300}
                height={200}
                style={{
                    borderRadius: 8,
                }}
            />
        </div>
    );
};

export default SideImage;
