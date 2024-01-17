import React from "react";
import HeadingSection from "./HeadingSection";
import { FaCheckCircle } from "react-icons/fa";

export default function WhyChooseUs() {
  const dataList = [
    {
      id: 1,
      title: "Speed and Simplicity",
      pera: "Easy, traveler-friendly application process. Simple and much less complicated than dealing with foreign governments.",
    },
    {
      id: 1,
      title: "Get Approved",
      pera: "All documents are reviewed by a team of immigration experts.Our staff is well-trained and offers years of experience.",
    },
    {
      id: 1,
      title: "Secure and Safe",
      pera: "World-class data centers and state-of-the-art security. Your credit card information will never be exposed to any government websites!",
    },
    {
      id: 1,
      title: "Awesome Support",
      pera: "Our customer support is ready to help 24/7. We want you to enjoy your travels and avoid the stress of getting a visa!",
    },
  ];
  return (
    <div className="md:grid grid-cols-12 bg-white">
      <div className="col-span-5">
        <img
          src="/assets/images/main/whyChooseUs.png"
          className="brightness-50 "
        />
      </div>
      <div className="md:col-span-6 px-8 flex flex-col justify-center space-y-8 md:py-0 py-8">
        <div className="text-left">
          <HeadingSection
            title="Why Choose Us?"
            sub="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          />
        </div>
        <div className="space-y-4">
          {dataList.map((e, i) => (
            <div key={i} className="flex space-x-2">
              <span className="mt-1">
                <FaCheckCircle size="20" className="text-primaryMain" />
              </span>
              <div>
                <h2 className="font-semibold text-xl text-primaryMain">
                  {e.title}
                </h2>
                <small>
                  Easy, traveler-friendly application process. Simple and much
                  less complicated than dealing with foreign governments.
                </small>
              </div>
            </div>
          ))}
        </div>
        <div>
          <button className="btnBlack py-2 px-8">Apply Now!</button>
        </div>
      </div>
    </div>
  );
}
