"use client";
import { dm_sans, montserrat } from "@/utils/fonts";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { VMLogo } from "../General/VMLogo";

const Ulist = ({
  url,
  linkText,
  isActive,
}: {
  url: string;
  linkText: string;
  isActive: boolean;
}) => {
  return (
    <li className="flex vm-link">
      <Link
        href={url}
        className={`${dm_sans.className} ${isActive && "vm-link-active"}`}
      >
        {linkText}
      </Link>
    </li>
  );
};

const VMHeader = () => {
  const pathname = usePathname();
  const listLink = [
    {
      id: 0,
      url: "/",
      linkText: "Home",
    },
    {
      id: 1,
      url: "/mission",
      linkText: "Mission",
    },
    {
      id: 2,
      url: "/faq",
      linkText: "FAQ",
    },
  ];

  return (
    <header className="">
      <section className="px-[1%] py-0">
        <div className="max-w-[1600px] min-h-[10vh] items-center flex mx-auto relative">
          <div className="w-auto md:w-1/3">
            <div className="flex items-center content-center p-[10px] w-full flex-wrap ">
              <div className="text-left flex items-center justify-center w-[68px] max-w-full">
                <div>
                  <Link href="/" className="hidden md:inline-block">
                    <VMLogo isDark={true} width={53} height={53} />
                  </Link>
                  <Link href="/" className="md:hidden">
                    <VMLogo isDark={true} width={40} height={40} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[60%] md:w-1/3">
            <div className="flex items-center content-center p-[10px] w-full flex-wrap ">
              <div className="text-center w-full ">
                <Link href="">
                  <h2
                    className={`vm-h2 vm-logo vm-text-sec ${montserrat.className}`}
                  >
                    VModel
                  </h2>
                </Link>
              </div>
            </div>
          </div>
          <div className="vm-hidden-md w-1/3 min-h-[64px] flex">
            <div className="flex items-center content-center p-[10px] w-full flex-wrap ">
              <div className="flex flex-col w-full">
                <nav className="flex">
                  <ul className="ml-auto justify-end flex flex-wrap m-0 p-0 leading-normal relative z-[2] space-x-[50px]">
                    {listLink.map((listItem) => (
                      <div key={listItem?.id}>
                        <Ulist
                          url={listItem?.url}
                          linkText={listItem?.linkText}
                          isActive={pathname == listItem?.url}
                        />
                      </div>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default VMHeader;
