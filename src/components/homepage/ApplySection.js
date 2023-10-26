import React from "react";
import Button from "../common/Button";
import Link from "next/link";
import ApplySectionUrgentHelp from "./ApplySectionUrgentHelp";
import ApplySectionContentSection from "./ApplySectionContentSection";

const ApplySection = () => {
  return (
    <div className="container md:py-24 py-8">
      <div class="mx-auto grid grid-cols-12 gap-4 bg-zinc-50 p-1">
        <div class="col-span-3 rounded border border-gray-400">
          <ApplySectionUrgentHelp />
        </div>
        <div class="col-span-9 rounded-lg border border-gray-500 bg-gray-50">
          <ApplySectionContentSection />
        </div>

        <div class="footer col-span-12 rounded-lg border border-gray-800 bg-gray-700 p-6">
          {/* <!-- Footer content --> */}
        </div>
      </div>
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
