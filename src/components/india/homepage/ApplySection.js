import React from "react";
import Button from "../common/Button";
import Link from "next/link";
import ApplySectionUrgentHelp from "./ApplySectionUrgentHelp";
import ApplySectionContentSection from "./ApplySectionContentSection";
import { GiBottomRight3DArrow } from "react-icons/gi";
import UnderlineTextCenter from "../common/UnderlineTextCenter";

const ApplySection = () => {
  const stepData = [
    {
      id: 1,
      title: "Apply Online",
      imgSrc: "/assets/images/india/common/apply-online.jpg",
      pera: "Secure online application saves time and check status online.",
      arrow: true,
    },
    {
      id: 2,
      title: "Submit documents",
      imgSrc: "/assets/images/india/common/doc.jpg",
      pera: "Submit your application with required documents at Indian Misison/Visa collection centre.",
      arrow: true,
    },
    {
      id: 3,
      title: "Receive passport, visa",
      imgSrc: "/assets/images/india/common/visaImg.jpg",
      pera: "Collect your passport/visa from Indian Mission/Collection Centre or by post.",
      arrow: false,
    },
  ];
  return (
    <div className="container py-8 md:py-24">
      <div className="md:grid grid-cols-12 gap-4 p-1 mx-auto bg-zinc-50">
        <div className="col-span-3 border border-gray-400 rounded">
          <ApplySectionUrgentHelp />
        </div>
        <div className="col-span-9 border border-gray-500 rounded-lg bg-gray-50">
          <ApplySectionContentSection />
        </div>
      </div>
      {/* process start  */}
      <div className="pt-20">
        <div className="w-fit md:mx-auto">
          <UnderlineTextCenter title="VISA APPLYING PROCESS" />
        </div>
        <div className="container grid md:grid-cols-3 gap-2">
          {stepData.map((e, i) => (
            <div key={i} className="flex items-center mt-20">
              <div className="relative h-64 pb-8 mx-auto bg-white rounded shadow-xl hover:shadow">
                <h2 className="p-4 font-medium underline drop-shadow-sm underline-offset-8 text-primary">
                  Step -{e.id}
                </h2>
                <img
                  className="object-cover w-32 h-32 mx-auto -mt-20 border-8 border-white border-dotted rounded-full border-3 border-r-primary border-l-primary border-t-primary border-b-secondary drop-shadow-xl"
                  src={e.imgSrc}
                  alt=""
                />
                <div className="my-4 text-2xl font-medium text-center text-secondary">
                  {e.title}
                </div>

                <p className="px-6 mt-2 text-sm text-center text-secondary">
                  {e.pera}
                </p>
              </div>
              {e.arrow ? (
                // <GiBottomRight3DArrow
                //   size={30}
                //   className="-rotate-45 text-primary"
                // />
                <img
                  src="/assets/images/india/common/curved-arrow.png"
                  className="w-16 h-8 pl-2 -mb-8 text-primary md:block hidden"
                />
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      </div>
      {/* process end  */}
      <div className="flex flex-col items-center justify-center pt-16">
        <h2 className="text-lg font-semibold"> Advisory:</h2>
        <p className="text-lg text-center">
          Government of India has not authorized any agent or intermediary to
          charge any fee for facilitation of emergency / express Visa/eVisa.For
          travel to India a regular/eVisa along with passport is mandatory. Only
          categories exempted under bilateral arrangments may not need a visa.
          For persons of Indian origin (all categories), OCI card is mandatory.
        </p>
      </div>
    </div>
  );
};

export default ApplySection;
