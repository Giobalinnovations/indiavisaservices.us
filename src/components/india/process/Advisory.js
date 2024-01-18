'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import Texteft from '../common/Texteft';
import Tourist from './EvisaCategory/Tourist';
import Business from './EvisaCategory/Business';
import Confrence from './EvisaCategory/Confrence';
import Medical from './EvisaCategory/Medical';
import MedicalAttend from './EvisaCategory/MedicalAttend';
import MainPage from './instruction/MainPage';
import Link from 'next/link';

const Advisory = () => {
  const [select, setSelect] = useState(1);
  const tabs = [
    {
      id: 1,
      text: 'e-Tourist Visa',
    },

    {
      id: 2,
      text: 'e-Business Visa',
    },
    {
      id: 3,
      text: 'e-Conference Visa',
    },
    {
      id: 4,
      text: 'e-Medical Visa',
    },
    {
      id: 5,
      text: 'e-Medical Attendant Visa',
    },
  ];

  const data = [
    {
      id: 1,
      title: 'Sample e-Visa Application',
      link: '#',
    },
    {
      id: 2,
      title: 'Apply here for e-Visa',
      link: '/visa/step-one',
    },
    {
      id: 3,
      title: 'Complete partially filled application form',
      link: '#',
    },
    {
      id: 4,
      title: 'Verify Payment / Pay e-Visa fee',
      link: '#',
    },
    {
      id: 5,
      title: 'Print e-Visa Application',
      link: '#',
    },
    {
      id: 6,
      title: 'Check your Status',
      link: '#',
    },
  ];
  return (
    <div className="container">
      <div className="grid items-end grid-cols-5 justify-content-between ">
        <div className="flex flex-col col-span-4 justify-left items-left">
          <h2 className="text-lg font-semibold"> Advisory:</h2>
          <p className="text-lg text-left">
            Government of India makes no provision of charging of any emergency
            fees or additional fees for grant of any emergency / express
            e-visa.Those travelling to India are also advised to go through
            instructions available on the website of Bureau of Immigration at
            <span className="text-primary"> https://boi.gov.in</span>.
          </p>
        </div>
        <div className="flex col-span-1 space-x-4">
          <div>
            <Image
              src="/assets/images/india/process/iconre.png"
              width={30}
              height={30}
              alt="iconre"
            />
          </div>
          <p className="font-semibold">Reupload Data</p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-10 pt-16 ">
        {data.map((e, i) => (
          <>
            <Link href={e.link}>
              <div
                className="bg-white border border-primary hover:drop-shadow-lg hover:shadow-[2px_6px_30px_-15px_#ff6c00] hover:border-transparent  px-8 py-10 h-[120px] flex flex-col space-y-3 rounded-2xl justify-content-center align-items-center hover:cursor-pointer"
                key={i}
              >
                <p className="text-lg font-semibold text-center text-primary">
                  {' '}
                  {e.title}
                </p>
              </div>
            </Link>
          </>
        ))}
      </div>

      <div className="grid items-start gap-8 md:grid-cols-3 md:pt-20">
        <div className="overflow-scroll  md:overflow-auto">
          <Texteft title="eVisa is admissable only under the following categories:" />
          <div className="flex space-x-4 whitespace-pre  md:flex-col md:space-x-0">
            {tabs.map((item, index) => (
              <div className="pt-5 group" key={index}>
                <div
                  onClick={() => setSelect(item.id)}
                  className={` py-3 rounded-md md:text-lg flex space-x-2 items-center w-fit cursor-pointer ${
                    select === item.id
                      ? ' font-bold text-primary '
                      : '  text-secondary font-semibold '
                  }`}
                >
                  <img
                    src="/assets/images/india/process/circleicon.png"
                    alt=""
                    className="md:w-5 md:h-5 "
                  />
                  <span>{item.text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-2">
          <div className="bg-white  shadow-xl rounded-xl h-[600px]">
            {select === 1 ? (
              <>
                <Tourist />
              </>
            ) : select === 2 ? (
              <>
                <Business />
              </>
            ) : select === 3 ? (
              <>
                <Confrence />
              </>
            ) : select === 4 ? (
              <>
                <Medical />
              </>
            ) : (
              <>
                <MedicalAttend />
              </>
            )}
          </div>
        </div>
        <div></div>
      </div>
      <div>
        <MainPage />
      </div>
    </div>
  );
};

export default Advisory;
