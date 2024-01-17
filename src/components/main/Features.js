import React from "react";

export default function Features() {
  const smallIcon = [
    {
      id: 1,
      imgSrc: "/assets/images/main/happy.png",
      title: "10k+ Happy Customers",
    },
    {
      id: 2,
      imgSrc: "/assets/images/main/time.png",
      title: "99% On Time Delivery",
    },
    {
      id: 3,
      imgSrc: "/assets/images/main/experience.png",
      title: "5+ Years of Experience",
    },
    {
      id: 4,
      imgSrc: "/assets/images/main/rating.png",
      title: "Ratings By Customers",
    },
  ];
  return (
    <div className="relative w-full md:h-80 overflow-y-auto ">
      <div
        className="background-image fixed top-0 left-0 w-full h-full bg-cover bg-center -z-10 "
        style={{ backgroundImage: `url(/assets/images/main/feature.png)` }}
      ></div>
      <div className="md:grid grid-cols-4 justify-center items-center pt-20 container gap-6 md:space-y-0 space-y-8">
        {smallIcon.map((e, i) => (
          <div
            key={i}
            className="text-white flex flex-col justify-center py-8 items-center space-y-2 bg-black/50 rounded-md border-2 border-primaryMain/80 hover:brightness-150  shadow-md  hover:drop-shadow-2xl  hover:shadow-lg hover:-translate-y-4 duration-200 "
          >
            <img src={e.imgSrc} className="w-16 h-[3.5rem]" />
            <h5 className="font-semibold text-center ">{e.title}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};
