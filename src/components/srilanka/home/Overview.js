import React from "react";

const Overview = () => {
  return (
    <div className="container">
      <div className=" md:w-[85%] w-[100%] md:m-auto p-0 m-0">
        <div className="md:container md:pt-20 py-4">
          <div className="md:text-center text-start mx-auto py-4 font-semibold text-3xl space-y-3">
            <h3 className="md:text-[37px] text-[30px] font-semibold">
              Overview of Sri Lanka Tourism
            </h3>
            <hr className="h-[3px] bg-[#0068E5] md:mx-auto w-48" />
          </div>
          <p className="md:text-center text-justify tracking-tighter">
            There are numerous tour and travel companies in Sri Lanka that offer
            a wide range of services to cater to the expectations of tourists.
            These companies possess intimate knowledge of Sri Lanka&apos;s diverse
            topography, including its hills, valleys, and cultural traditions
            that make it an attractive destination.
          </p>
          <img src="/assets/images/srilanka/home/overview.png" className="py-4" />
          <p className="md:text-center text-justify tracking-tighter">
            They provide various Sri Lanka tour packages that allow visitors to
            explore this tropical paradise and fulfill their travel desires. Sri
            Lanka, with its enchanting beauty and historical significance, has
            been referred to by various names throughout history, such as
            Serendib, Taprobane, the Pearl of the Indian Ocean, and Ceylon.
            Travelers can discover the refreshing wonders of Sri Lanka through
            these tour packages, which offer an opportunity to experience the
            country&apos;s unique attractions, cultural heritage, and natural
            splendors.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
