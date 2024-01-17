import React from "react";
import UnderlineTextCenter from "../common/UnderlineTextCenter";
import TitleText from "../common/TitleText";

const About = () => {
  return (
    <div className="container py-12">
      <div className="md:text-center space-y-4">
        <UnderlineTextCenter title="About Australia" />
        <TitleText
          title="Lorem Ipsum is simply dummy text
of the printing and typesetting"
        />
      </div>
      <div className="grid md:grid-cols-12 gap-12 py-10">
        <div className="col-span-6 md:pt-0 order-1">
          <img
            src="/assets/images/australia/aboutimg.png"
            className="w-full object-cover md:h-[400px] rounded-lg"
          />
        </div>
        <div className="col-span-6 md:py-16">
          <p className="text-justify tracking-tighter">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&lsquo;s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <p className="text-justify tracking-tighter pt-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&lsquo;s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
