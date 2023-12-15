"use client";

import React from "react";
import VMContainer from "../components/Layout/VMContainer";
import VMHeader from "../components/Layout/VMHeader";
import { Fade } from "react-awesome-reveal";
import { dm_sans } from "@/utils/fonts";
import { VTBody, VTHead, VTList } from "../components/Shared";
import { VFooterN } from "../components/Home";
const Acceptance = () => {
  return (
    <>
      <VMContainer noWrapper={true} autoHeight={true}>
        <VMHeader />
      </VMContainer>
      <VMContainer>
        <div className="w-full mb-9">
          <div className="py-7 text-center w-full">
            <div className="w-full text-center">
              <Fade triggerOnce delay={0}>
                <h1
                  className={`vm-h1 vm-h1-md pb-4 md:pb-0 vm-text-sec font-extrabold ${dm_sans.className}`}
                >
                  Acceptance <span className="lowercase">of</span> use
                </h1>
              </Fade>
            </div>
          </div>
          <div className="mx-auto mt-12 max-w-[75%] space-y-12">
            <div>
              <VTHead title="Acceptance of Terms" />
              <VTBody
                desc={`By accessing or using the VModel app (the "App"), you agree to comply
    with and be bound by these Terms of Use. If you do not agree to these
    terms, please do not use the App.`}
              />
            </div>
            <div>
              <VTHead title="Use of the App" />
              <VTList
                data={[
                  {
                    id: 0,
                    title: "You must be at least 18 years old to use the App.",
                  },
                  {
                    id: 1,
                    title:
                      "You are responsible for maintaining the confidentiality of your account and password. Notify us immediately if you suspect unauthorised access.",
                  },
                ]}
              />
            </div>

            <div>
              <VTHead title="User Content" />
              <VTList
                data={[
                  {
                    id: 0,
                    title:
                      "Users retain ownership of content uploaded to the App",
                  },
                  {
                    id: 1,
                    title:
                      "By submitting content, users grant VModel a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, publish, and distribute.",
                  },
                ]}
              />
            </div>
            <div>
              <VTHead title="Prohibited Activities" />
              <VTList
                data={[
                  {
                    id: 0,
                    title:
                      "Users must not violate any laws, infringe intellectual property rights, or engage in illegal activities on the App",
                  },
                  {
                    id: 1,
                    title:
                      "Users must not upload malicious software or interfere with the App's functionality",
                  },
                ]}
              />
            </div>
            <div>
              <VTHead title="Privacy Policy" />
              <VTList
                data={[
                  {
                    id: 0,
                    title:
                      "Our Privacy Policy explains how we collect, use, and protect your data. By using the App, you agree to the terms outlined in the Privacy Policy",
                  },
                ]}
              />
            </div>
            <div>
              <VTHead title="Disclaimers and Limitation of Liability" />
              <VTList
                data={[
                  {
                    id: 0,
                    title: `VModel is provided "as is." We make no warranties regarding the accuracy, reliability, or availability of the App`,
                  },
                  {
                    id: 1,
                    title: `We are not liable for any direct, indirect, incidental, consequential, or punitive damages.`,
                  },
                ]}
              />
            </div>
            <div>
              <VTHead title="Modifications" />
              <VTList
                data={[
                  {
                    id: 0,
                    title: `We reserve the right to modify, suspend, or discontinue the App at any time without notice`,
                  },
                  {
                    id: 1,
                    title: `These terms may be revised periodically. Continued use after changes constitutes acceptance`,
                  },
                ]}
              />
            </div>
            <div>
              <VTHead title="Termination" />
              <VTList
                data={[
                  {
                    id: 0,
                    title: `We may terminate or suspend your account at our discretion without prior notice.`,
                  },
                  {
                    id: 1,
                    title: `Upon termination, you lose access to the App, including any content therein`,
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </VMContainer>
      <VFooterN noPadd={true} />
    </>
  );
};

export default Acceptance;
