"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeadingSection from "./HeadingSection";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const HowItWorks = () => {
  const customeSlider = useRef();
  const testimonial = [
    {
      id: 1,
      image: "/assets/images/main/online-application.png",
      name: "Fill Out Online Application",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      id: 1,
      image: "/assets/images/main/makePayment.png",
      name: "Make Payment Easily Online",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      id: 1,
      image: "/assets/images/main/receiveVisa.png",
      name: "Receive eVisa Letter On Time",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
  ];

  return (
    <div className="md:py-20 py-12 bg-sky-50">
      <div className="container text-center mx-auto md:max-w-4xl">
        <HeadingSection
          sub="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
          the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
          type and scrambled it to make a type specimen book."
          title="How It Works?"
        />
      </div>

      <div className="container">
        <div className="md:grid grid-cols-3">
          {testimonial.map((item, e) => (
            <div className="group md:mx-5 md:py-10 py-4" key={e}>
              <div className=" text-center bg-white shadow-md  hover:drop-shadow-xs  hover:shadow-lg rounded-xl py-10">
                <div className=" duration duration-1000 rounded-full   w-full flex justify-center">
                  <img
                    src={item.image}
                    alt=""
                    className="  rounded-lg w-20 h-20 mx-auto "
                  />
                </div>
                <h2 className="font-semibold text-lg text-primaryMain text-center pt-3 w-52 mx-auto">
                  {item.name}
                </h2>
                <p className="text-black/80 group-hover:text-black py-4 pb-4 text-center px-5 ">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div>
          <button className="btnBlue py-2 px-8 mx-auto flex">Apply Now!</button>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
