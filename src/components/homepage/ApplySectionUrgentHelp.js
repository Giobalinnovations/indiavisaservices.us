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
  return (
    <>
      {/* urgent help satrt  */}
      <div>
        <h2 className="bg-secondary rounded-t text-white font-semibold text-lg text-center py-3">
          TRAVEL INFORMATION
        </h2>
        <div className="divide-y-[1px]">
          {travelInfoData.map((e, i) => (
            <div className="space-x-3 flex items-center p-3">
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
        <div className="flex flex-wrap text-center justify-center gap-3">
          {travelInfoData.map((e, i) => (
            <div className="border-b-2" key={i}>
              <img src="/images/home/mastercard.png" className="w-24" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ApplySectionUrgentHelp;
