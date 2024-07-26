'use client';
import { useRef } from 'react';

const Banner = () => {
  const ref = useRef(null);
  // const isInView = useInView(ref, { once: true });

  return (
    <div className="relative">
      <div
        className="mt-20 bg-right-bottom bg-no-repeat bg-cover h-80"
        style={{
          backgroundImage: ' url("/assets/images/india/home/banner.png")',
        }}
      >
        <div className="h-full text-white bg-gradient-to-r from-black/80 via-black/50 to-transparent">
          <div className="container h-full p-0">
            <div className="flex flex-col items-center justify-center w-full h-full pb-16 space-y-4">
              <h2 className="text-xl text-center italic font-extrabold text-[#ecebeb] capitalize md:text-3xl drop-shadow-lg ">
                Online portal for visa application to india
              </h2>
              {/* <Link href="https://indianvisaonline.gov.in/">
                <h3 className="text-2xl font-extrabold msd:text-5xl text-primary">
                  Indianvisaonline.gov.in
                </h3>
              </Link> */}
              {/* <p className="md:text-lg">
                All foreign nationals entering India are required to possess a
                valid international travel document in the form of a national
                passport with a valid visa from an Indian Mission/Post or eVisa
                (Limited Categories) from Bureau of Immigration, Ministry of
                Home Affairs.
              </p> */}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full bg-black/50">
        <div className="container flex flex-wrap items-center justify-between gap-4 py-4 overflow-x-auto text-white">
          <div className="flex items-center space-x-4 md:text-base">
            <marquee>
              Avail Indian Visa plus services through &quot;Official app Indian
              Visa Su-Swagatam&quot; mobile App for 60 countries&quot;.... One
              stop solution for all Visa related services.
            </marquee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
