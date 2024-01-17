import React from "react";
import { FaCheck } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";

const ApplySectionUrgentHelp = () => {
  const travelInfoData = [
    {
      id: 1,
      title: "Contact Us",
    },
    {
      id: 2,
      title: "Urgent Travel",
    },
    {
      id: 3,
      title: "eTourist Travel",
    },
    {
      id: 1,
      title: "Emergency Travel",
    },
    {
      id: 2,
      title: "eBusiness Travel",
    },
    {
      id: 3,
      title: "Travel to Delhi",
    },
    {
      id: 3,
      title: "Indian Tourism",
    },
  ];
  const cardData = [
    {
      id: 1,
      imgSrc: "/assets/images/india/common/paypal.png",
    },
    {
      id: 2,
      imgSrc: "/assets/images/india/common/mastercard-secured.png",
    },
    {
      id: 3,
      imgSrc: "/assets/images/india/common/varified.png",
    },
    {
      id: 4,
      imgSrc: "/assets/images/india/common/mastercard.png",
    },
  ];
  return (
    <>
      {/* urgent help satrt  */}
      <div>
        <h2 className="bg-secondary rounded-t text-white font-semibold text-lg text-center py-3">
          TRAVEL INFORMATION
        </h2>
        <div className="divide-y-[1px]">
          {travelInfoData.map((e, i) => (
            <div key={i} className="space-x-3 flex items-center p-3">
              <span>
                <FaCheck className="font-bold text-green-700" />
              </span>
              <span>{e.title}</span>
            </div>
          ))}
        </div>
      </div>
      {/* urgent help end */}
      <div>
        <h2 className="bg-secondary rounded-t text-white font-semibold text-lg text-center py-3">
          TRAVEL INFORMATION
        </h2>
        <div className="space-x-3 flex items-center p-3 border-b-2">
          <span>
            <BiMailSend size={30} className="font-bold text-green-700" />
          </span>
          <span className="text-sm">info@india-travelservices.com</span>
        </div>
        <div className="flex flex-col space-y-4 flex-wrap text-center justify-center gap-4 py-4">
          {cardData.map((e, i) => (
            <div className="flex items-center justify-center" key={i}>
              <img src={e.imgSrc} className="w-40" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ApplySectionUrgentHelp;
