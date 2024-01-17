import React from "react";

const Quicklooksrilanka = () => {
  return (
    <div className="container ">
      <div className="grid md:grid-cols-12 gap-8 ">

        <div className="col-span-6 md:order-2 md:pt-0 pt-20">
          <img
            src="/assets/images/srilanka/home/quicksrilanka.png"
            className="w-full object-cover md:h-[450px]"
          />
        </div>
        <div className="col-span-6 md:py-8">
          <div className="md:text-left text-start mx-auto py-4 font-semibold text-3xl space-y-3">
            <h3 className="md:text-[37px] text-[30px] font-semibold">
              Quick Look At Sri Lanka
            </h3>
            <hr className="h-[3px] bg-[#0068E5] w-48" />
          </div>
          <p className="text-justify tracking-tighter">
            Sri Lanka, a tropical island in the Indian Ocean, boasts a rich
            history and breathtaking natural beauty. With its flourishing
            Buddhist heritage and untouched landscapes, it offers a unique
            experience within a compact area. Spanning just 65,610 square
            kilometers, the country is home to 8 UNESCO World Heritage Sites,
            1,330 kilometers of pristine coastline, 15 national parks teeming
            with wildlife, vast tea estates covering 500,000 acres, botanical
            gardens spanning 250 acres, enchanting waterfalls numbering 350, and
            over 25,000 water bodies. <br />
            <br />
            The culture of Sri Lanka stretches back over 2,500 years, making it
            a fascinating destination for travelers seeking a harmonious blend
            of history, nature, and cultural wonders.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Quicklooksrilanka;
