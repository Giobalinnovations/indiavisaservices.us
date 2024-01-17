import React from "react";

const Documentissued = () => {
  const documentissueData = [
    {
      head: "Tourist Purpose",
      para: "A Visitor planning for a short term stay to Sri Lanka for following purposes, must obtain Document prior approval for their arrival.",
      list1: "Sightseeing, holidaying",
      list2: "Visiting friends and relatives",
      list3: "Medical treatment including Ayurvedic and yoga",
      list4:
        "Participate in sporting events, competitions and activities relating to cultural performance",
    },

    {
      head: "Business Purpose",
      para: "A person visiting Sri Lanka for Business purpose on the following categories only must obtain Business Document.",
      list1: "Participate in business meetings and negotiations",
      list2: "Participate in Conferences, workshops and seminars",
      list3:
        "To take part in Short term training programs (less than one month)",
      list4: "Participate in Music, Art and Dance Cultural Events",
      list5:
        "Attending in Religious activities Participate in Conference Meeting",
    },

    {
      head: "Transit Purpose",
      para: "A person visiting third countries via transiting Sri Lanka for transit purpose on the following purposes only must obtain Document.",
      list1: "Transiting through Sri Lanka",
      list2: "Short trip layover up to 2 days",
    },
  ];

  return (
    <div className="container">
      <div className=" md:w-[85%] w-full md:m-auto">
        <div className="md:container md:pt-20">
          <div className="md:text-center text-start mx-auto md:py-4 font-semibold text-3xl space-y-3">
            <h3 className="md:text-[37px] text-[30px] font-semibold">
              List of Sri Lanka Document issued for all foreign nationals:
            </h3>
            <hr className="h-[3px] bg-[#0068E5] md:mx-auto w-48" />
          </div>
          <p className="md:text-center text-justify tracking-tighter">
            There are numerous tour and travel companies in Sri Lanka that offer
            a wide range of services to cater to the expectations of tourists.
            These companies possess intimate knowledge of Sri Lanka&apos;s diverse
            topography, including its hills, valleys, and cultural traditions
            that make it an attractive destination.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-12 py-8 gap-8">
        {documentissueData.map((e, i) => (
          <div className="col-span-4 shadow-xl p-4" key={i}>
            <h3 className="Secheading font-bold text-[25px] py-4">{e.head}</h3>
            <p>{e.para}</p>
            <ul className="list-disc p-4">
              <li>{e.list1}</li>
              {
                e.list2 ?
                  <li>{e.list2}</li> : ''
              }
              {
                e.list3 ?
                  <li>{e.list3}</li> : ''
              }
              {
                e.list4 ?
                  <li>{e.list4}</li> : ''
              }
              {
                e.list5 ?
                  <li>{e.list5}</li> : ''
              }

            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Documentissued;
