'use client';
import { useRef } from 'react';

const Banner = () => {
  const ref = useRef(null);

  return (
    <div className="relative">
      <div
        className="relative mt-20 bg-no-repeat bg-cover h-[500px] transition-all duration-500 ease-in-out overflow-hidden"
        style={{
          backgroundImage: 'url("/assets/images/india/home/banner.png")',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>

        {/* Decorative Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange/30 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative h-full text-white">
          <div className="container h-full p-0">
            <div className="flex flex-col items-center justify-center w-full h-full space-y-8 text-center">
              <div className="max-w-4xl px-4 md:px-0">
                <h1 className="mb-6 text-3xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                  Online Portal for{' '}
                  <span className="relative">
                    <span className="relative z-10 text-orange">
                      Visa Application
                    </span>
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange/50 to-primary/50 blur-sm"></span>
                  </span>{' '}
                  to India
                </h1>
                <p className="max-w-2xl mx-auto text-sm leading-relaxed text-gray-300 md:text-base lg:text-lg">
                  All foreign nationals entering India are required to possess a
                  valid international travel document in the form of a national
                  passport with a valid visa from an Indian Mission/Post or
                  eVisa.
                </p>
              </div>

              {/* Decorative Shapes */}
              <div className="absolute left-0 w-64 h-64 bg-gradient-to-br from-orange/20 via-primary/10 to-transparent rounded-full blur-3xl -z-10"></div>
              <div className="absolute right-0 w-64 h-64 bg-gradient-to-bl from-primary/20 via-orange/10 to-transparent rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Announcement Bar */}
      <div className="absolute bottom-0 w-full bg-gradient-to-r from-black/90 via-black/80 to-black/90 backdrop-blur-sm border-t border-white/5">
        <div className="container py-4">
          <div className="flex items-center justify-between text-white">
            <div className="w-full overflow-hidden">
              <marquee
                className="text-sm font-medium tracking-wide md:text-base"
                behavior="scroll"
                direction="left"
                scrollamount="5"
              >
                <span className="inline-flex items-center">
                  <span className="w-2 h-2 mr-4 bg-orange rounded-full"></span>
                  Avail Indian Visa plus services through &quot;Official app
                  Indian Visa Su-Swagatam&quot; mobile App for 60 countries
                  <span className="mx-8">•</span>
                  One stop solution for all Visa related services
                  <span className="w-2 h-2 ml-4 bg-orange rounded-full"></span>
                </span>
              </marquee>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
