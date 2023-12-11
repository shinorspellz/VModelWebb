"use client";

import { Button, Select, SelectItem } from "@nextui-org/react";
import { useState } from "react";
import SuccAlert from "../General/SuccAlert";
import VMPopup from "../General/VMPopup";
import axios from "axios";

const Subscriber = ({ onClose, email }: any) => {
  const [selectedType, setSelectedType] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isAlert, setIsAlert] = useState({
    isSuccess: false,
  });
  const SubType = [
    {
      id: "booker",
      name: "Booker",
    },
    {
      id: "business",
      name: "Business",
    },
    {
      id: "photographer",
      name: "Photographer",
    },
    {
      id: "influencer",
      name: "Influencer",
    },
    {
      id: "model",
      name: "Model",
    },
    {
      id: "stylist",
      name: "Stylist",
    },
    {
      id: "chef",
      name: "Chef",
    },
    {
      id: "cook",
      name: "Cook",
    },
  ];

  function removeDomainFromEmail(email: string) {
    const atIndex = email.indexOf("@");
    if (atIndex !== -1) {
      return email.substring(0, atIndex);
    }
    return email;
  }

  async function postData() {
    try {
      const url =
        "https://uat-api.vmodel.app/dashboard/newsletter-subscribers/";
      const data = {
        email: email,
        business_type: selectedType,
      };
      const headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
      };

      const response: any = await axios.post(url, data, { headers });
      // console.log(response);
      if (response?.status == 200 || response?.status == 201) {
        setIsAlert((prevData) => ({
          ...prevData,
          isSuccess: true,
        }));
      } else {
        setIsLoading(false);
      }
    } catch (error) {
      console.error(error);
    }
  }

  const _handleSubmit = () => {
    setIsLoading(true);
    postData();
  };

  return (
    <VMPopup isClose={onClose} title={`@${email}`} size="md">
      {isAlert?.isSuccess ? (
        <SuccAlert
          floatType={1}
          onClose={onClose}
          sText={`Thank you for subscribing!`}
        />
      ) : (
        <div className="flex flex-col space-y-8 justify-center items-center mt-0">
          <div className="flex items-center flex-col text-center justify-center w-full min-h-[70px]">
            <h3 className="vm-text-sec vm-h3 vm-no-capitalise">
              You&rsquo;re Almost Done!
            </h3>
            <h3 className="text-white font-normal text-[14px] mt-3 opacity-60 vm-no-capitalise">
              Please select member type to subcribe
            </h3>
          </div>
          <div className="w-full flex flex-col items-center justify-center vm-select">
            <Select
              label="Member Type"
              className="max-w-xs"
              style={{
                background: "#634e4e",
                color: "rgba(255,255,255,.6)",
              }}
              classNames={{
                popoverContent: "vm-wrapper-selectitem",
                listbox: "text-white",
              }}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              {SubType.map((item) => (
                <SelectItem key={item.id} value={item.name}>
                  {item.name}
                </SelectItem>
              ))}
            </Select>
            <div className="w-full px-[40px] m-auto pt-5">
              <div>
                <Button
                  disabled={selectedType != "" ? false : true}
                  type="button"
                  isLoading={isLoading}
                  onClick={_handleSubmit}
                  color="primary"
                  className="block bg-[#907e7e] h-[50px] disabled:cursor-not-allowed disabled:opacity-40"
                  fullWidth
                >
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </VMPopup>
  );
};

export default Subscriber;
