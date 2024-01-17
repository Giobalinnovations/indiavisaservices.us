import React from "react";

const Touristattractions = () => {
  return (
    <div className="container">
      <div className="grid md:grid-cols-12 gap-8  py-12">
        <div className="col-span-6">
          <img
            src="/assets/images/srilanka/home/tourist.png"
            className="w-full md:object-cover md:object-top md:h-[450px]"
          />
        </div>

        <div className="col-span-6">
          <h3 className="Secheading md:text-[37px] text-[30px] font-semibold pb-4">
            Tourist Attractions in Sri Lanka
          </h3>
          <p className="text-justify tracking-tighter">
            Sri Lanka offers a wide range of tourist attractions that showcase
            its stunning contrasts and breathtaking beauty within its compact
            size. Visitors can enjoy exploring the picturesque coastal areas
            with their pristine beaches, embark on safari tours, take guided
            walks through ancient cities, and immerse themselves in the rich
            culture of modern Sri Lanka. We invite you to discover your own
            unique travel experience in Sri Lanka. In the past, Sri Lanka&apos;s
            potential as a destination was not effectively communicated to the
            international audience, with the focus primarily on its beaches.
            However, recognizing the need to showcase the island&apos;s diverse
            facets, Sri Lanka Tour has launched an extensive integrated
            communication campaign. This campaign includes various marketing
            efforts such as advertising, international public relations, trade
            shows, online marketing, and sponsorship activities. The aim is to
            create awareness and demand for the Sri Lanka brand, capturing the
            hearts and minds of the target audience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Touristattractions;
