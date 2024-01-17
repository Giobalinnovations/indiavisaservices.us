"use client";
import React from "react";
import Slider from "react-slick";
import UnderlineTextCenter from "../common/UnderlineTextCenter";
import { AiFillSafetyCertificate } from "react-icons/ai";

const Recommended = () => {
  const data = [
    {
      id: 1,
      imgSrc: "/assets/images/turkey/re1.png",
    },
    {
      id: 2,
      imgSrc: "/assets/images/turkey/re2.png",
    },
    {
      id: 3,
      imgSrc: "/assets/images/turkey/re3.png",
    },
    {
      id: 4,
      imgSrc: "/assets/images/turkey/re4.png",
    },
    {
      id: 5,
      imgSrc: "/assets/images/turkey/re2.png",
    },
    {
      id: 6,
      imgSrc: "/assets/images/turkey/re3.png",
    },
   
  ];
  const settings = {
    autoplay: true,
    infinite: true,
    autoplaySpeed: 0,
    slidesToScroll: 1,
    slidesToShow: 4,
    arrows: false,
    cssEase: "linear",
    speed: 4000,
    initialSlide: 1,
    draggable: false,

    responsive: [
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,

          speed: 4000,
        },
      },
    ],
  };
  return (
    <div className="bg-third py-16">
      <div className="container space-y-8 md:py-10 py-8 shadow-2xl shadow-primary/20  rounded-xl">
        <div className="space-y-4 md:space-0 flex items-center justify-center">
           <div><AiFillSafetyCertificate className="-mr-5 mt-3 text-primary" size={24} /></div> 
         <div> <UnderlineTextCenter title="We are recommended on world wide" /></div>
          
        </div>
        {/* slider start  */}
        <div className="space-x-4 px-10">
          <Slider {...settings}>
            {data &&
              data.length > 0 &&
              data.map((e, i) => (
                <div key={i} className="p-4">
                  <img src={e.imgSrc} className="bg-white rounded-lg" />
                </div>
              ))}
          </Slider>
        </div>
        {/* slider end  */}
      </div>
    </div>
  );
};

export default Recommended;
