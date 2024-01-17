import React from 'react';
import Link from 'next/link';
import UnderlineTextCenter from '../common/UnderlineTextCenter';
import TitleText from '../common/TitleText';

const Visainfo = () => {
  const visainfoData = [
    {
      head: 'Leisure:',
      para: 'All kinds of tourism-related activities - visiting friends and family, going on holidays, exploring Australian tourist sites, going on a cruise, etc.',
    },
    {
      head: 'Business:',
      para: 'Participating in training, attending business conferences and meetings, looking for potential business partners, negotiating contracts, etc. (not permanent work).',
    },
    {
      head: 'Transit:',
      para: 'Making a transit stop on your way to another travel destination.',
    },
    {
      head: 'Education:',
      para: 'Studying or training for up to 3 months.',
    },
  ];
  return (
    <div className="container py-8">
      <div className="space-y-4 md:text-center">
        <UnderlineTextCenter title="About Australia" />
        <TitleText
          title="Lorem Ipsum is simply dummy text
of the printing and typesetting"
        />
        <p>
          Australia ETA was introduced in 2008 by the Australian Government to
          speed up the visa application process for citizens of selected
          countries. Applicants eligible for the Australian electronic visa can
          avoid numerous embassy visits, filing paperwork, or spending long
          hours on interviews. This multiple-entry travel authorization enables
          visiting Australia multiple times. ETA holders may stay in Australia
          for up to 90 days during each visit, while the ETA Visa is valid for
          365 days.
        </p>
      </div>
      <div className="grid gap-12 py-10 md:grid-cols-12">
        <div className="order-2 col-span-6 md:py-16 ">
          <h2 className="text-primary font-bold text-[25px] leading-[1.2]">
            As a holder of an Australian ETA electronic visa, you may use it
            for:
          </h2>
          <div className="py-4">
            {visainfoData.map((e, i) => (
              <div key={i}>
                <h2 className="py-2 font-bold">{e.head}</h2>
                <p>{e.para}</p>
              </div>
            ))}
          </div>

          <p className="pt-5 tracking-tighter text-justify">
            If you require a visa for permanent work, medical visits, education,
            or permanent residence, you can schedule a consultation with a
            registered Australia Migration Officer.
          </p>

          <Link href="/application">
            <div className="flex items-center w-full pt-10 justify-left">
              <button className="bg-primary text-white rounded-lg transition duration-200 hover:bg-[#1e1e1e] hover:text-white px-4 py-2 font-medium text-md md:block hidden">
                Book A Consultation Session
              </button>
            </div>
          </Link>
        </div>
        <div className="col-span-6 md:pt-0 md:order-2">
          <img
            src="/assets/images/australia/visainfo.png"
            className="w-full object-cover md:h-[700px] h-[300px] object object-center rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Visainfo;
