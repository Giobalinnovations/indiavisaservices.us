"use client";
import React, { useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward, IoIosStar } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testimonial() {
  const customeSlider = useRef();
  const testimonial = [
    {
      id: 1,
      image: "/assets/images/main/testimonialImg.png",
      name: "Mayank Sharma ",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 2,
      image: "/assets/images/main/testimonialImg.png",
      name: "Mayank Khurana ",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 3,
      image: "/assets/images/main/testimonialImg.png",
      name: "Priya Sharma ",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 4,
      image: "/assets/images/main/testimonialImg.png",
      name: "Mehak Sharma ",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 5,
      image: "/assets/images/main/testimonialImg.png",
      name: "Mayank Khurana ",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 6,
      image: "/assets/images/main/testimonialImg.png",
      name: "Priya Sharma ",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 7,
      image: "/assets/images/main/testimonialImg.png",
      name: "Priya Sharma ",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  ];
  const settings = {
    className: "center",
    fade: true,
    slidesToShow: 1,
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
    <div className="testimonialBg relative py-12">
      <img
        src="/assets/images/main/waves.png"
        className="absolute bottom-0 w-full"
      />
      <div className="md:absolute top-16 left-32 -space-y-4">
        <h2 className="font-extrabold md:text-5xl text-2xl text-primaryMain md:pb-0 pb-8 text-center">
          Testimonial
        </h2>
        <h2 className="font-extrabold text-5xl md:block hidden transform scale-y-[-1] bg-gradient-to-b from-primaryMain via-blue-500 to-blue-300 text-transparent bg-clip-text">
          Testimonial
        </h2>
      </div>
      <div className="container relative">
        <Slider {...settings} ref={customeSlider} className="mx-auto">
          {testimonial.map((e, i) => (
            <div key={i}>
              <div className="md:grid grid-cols-12 gap-20 items-center">
                <div className="col-span-4 pb-12 order-2">
                  <img
                    src="/assets/images/main/testimonialImg.png"
                    className="md:w-80 w-52"
                  />
                </div>
                <div className="col-span-8 text-white space-y-4 md:pt-20">
                  <h3 className="text-xl font-semibold">{e.name}</h3>
                  <p className="font-light italic">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry`&apos;s standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book.
                  </p>
                  <div className="flex space-x-2">
                    <IoIosStar className="text-yellow-500" />
                    <IoIosStar className="text-yellow-500" />
                    <IoIosStar className="text-yellow-500" />
                    <IoIosStar className="text-yellow-500" />
                    <IoIosStar className="text-yellow-500" />
                  </div>
                  <h4 className="font-semibold">-Destination</h4>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        {/* custome button  */}
        <div className="absolute flex justify-center space-x-6 bottom-0 right-32">
          <button onClick={() => customeSlider.current.slickPrev()}>
            <IoIosArrowBack
              size={40}
              className="p-2  text-primaryMain bg-white border border-primaryMtext-primaryMain rounded-full"
            />
          </button>
          <button onClick={() => customeSlider.current.slickNext()}>
            <IoIosArrowForward
              size={40}
              className="p-2 text-primaryMain bg-white border border-primaryMtext-primaryMain rounded-full"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
