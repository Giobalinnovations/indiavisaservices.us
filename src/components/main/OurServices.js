"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeadingSection from "./HeadingSection";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const OurServices = () => {
  const customeSlider = useRef();
  const testimonial = [
    {
      id: 1,
      image: "/assets/images/main/ourServiceIcon1.png",
      name: "Simplified Application",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 2,
      image: "/assets/images/main/ourServiceIcon2.png",
      name: "Urgent Processing",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 3,
      image: "/assets/images/main/ourServiceIcon3.png",
      name: "Multiple Payment Options",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 4,
      image: "/assets/images/main/ourServiceIcon1.png",
      name: "Simplified Application",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  ];

  const settings = {
    className: "center",
    slidesToShow: 3,
    focusOnSelect: true,
    dots: false,
    infinite: true,
    arrows: false,
    loop: true,
    autoplay: true,
    speed: 2000,

    lazyLoad: true,
    accessibility: true,
    cssEase: "ease-out",
    swipeToSlide: true,
    pouseonhover: true,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          arrows: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          speed: 1000,
        },
      },
    ],
  };
  return (
    <div className="bg-white">
      <div className="container md:py-20 py-12 space-y-8">
        <div className="text-center max-w-4xl mx-auto">
          <HeadingSection
            sub="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
            the industry's standard dummy text ever since the 1500s"
            title="Our Services"
          />
        </div>

        <div className="relative flex items-center justify-between">
          <div className="absolute z-10 -left-8 text-center md:block hidden">
            <button onClick={() => customeSlider.current.slickPrev()}>
              <IoIosArrowBack
                size={40}
                className="p-2  text-white border border-primaryMain rounded-full bg-primaryMain "
              />
            </button>
          </div>
          <div className="w-[100%]">
            <Slider {...settings} ref={customeSlider} className="mx-auto  ">
              {testimonial.map((item, e) => (
                <div className="group p-4" key={e}>
                  <div className="bg-white border hover:drop-shadow-xs hover:shadow-lg rounded-xl md:h-96 p-6 space-y-4">
                    <div className=" duration duration-1000 rounded-full w-full">
                      <img
                        src={item.image}
                        alt=""
                        className="  rounded-lg w-14 h-14 "
                      />
                    </div>
                    <h2 className="font-semibold text-2xl w-52">{item.name}</h2>
                    <p className="text-black/80 group-hover:text-black  ">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </Slider>

            <div className="flex justify-center">
              <button className="btnBlue px-12 py-2">Apply Now</button>
            </div>
          </div>
          <div className="absolute z-10 -right-8 text-center md:block hidden">
            <button onClick={() => customeSlider.current.slickNext()}>
              <IoIosArrowForward
                size={40}
                className="p-2  text-white bg-primaryMain border border-primaryMain rounded-full"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
