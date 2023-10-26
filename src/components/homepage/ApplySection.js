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
      imgSrc: "/images/common/apply-online.jpg",
      pera: "Secure online application saves time and check status online.",
      arrow: true,
    },
    {
      id: 2,
      title: "Submit documents",
      imgSrc: "/images/common/doc.jpg",
      pera: "Submit your application with required documents at Indian Misison/Visa collection centre.",
      arrow: true,
    },
    {
      id: 3,
      title: "Receive passport, visa",
      imgSrc: "/images/common/visaImg.jpg",
      pera: "Collect your passport/visa from Indian Mission/Collection Centre or by post.",
      arrow: false,
    },
  ];
  return (
    <div className="container md:py-24 py-8">
      <div class="mx-auto grid grid-cols-12 gap-4 bg-zinc-50 p-1">
        <div class="col-span-3 rounded border border-gray-400">
          <ApplySectionUrgentHelp />
        </div>
        <div class="col-span-9 rounded-lg border border-gray-500 bg-gray-50">
          <ApplySectionContentSection />
        </div>
      </div>
      {/* process start  */}
      <div className="pt-20">
        <div className="w-fit md:mx-auto">
          <UnderlineTextCenter title="VISA APPLYING PROCESS" />
        </div>
        <div className="container grid grid-cols-3 gap-2">
          {stepData.map((e, i) => (
            <div key={i} className="mt-20 flex items-center">
              <div class="relative mx-auto bg-white shadow-xl hover:shadow pb-8 rounded h-64">
                <h2 className="p-4 drop-shadow-sm underline-offset-8 underline text-primary font-medium">
                  Step -{e.id}
                </h2>
                <img
                  class="w-32 h-32 object-cover mx-auto rounded-full -mt-20 border-8 border-white border-3 border-r-primary border-l-primary border-t-primary border-b-secondary border-dotted drop-shadow-xl"
                  src={e.imgSrc}
                  alt=""
                />
                <div class="text-center my-4 text-2xl font-medium text-secondary">
                  {e.title}
                </div>

                <p class="px-6 text-center mt-2 text-secondary text-sm">
                  {e.pera}
                </p>
              </div>
              {e.arrow ? (
                // <GiBottomRight3DArrow
                //   size={30}
                //   className="-rotate-45 text-primary"
                // />
                <img
                  src="/images/common/curved-arrow.png"
                  className="text-primary w-16 h-8 -mb-8 pl-2"
                />
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      </div>
      {/* process end  */}
      <div className="flex flex-col justify-center items-center pt-16">
        <h2 className="font-semibold text-lg"> Advisory:</h2>
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
