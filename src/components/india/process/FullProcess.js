import React from 'react';
import UnderlineTextCenter from '../common/UnderlineTextCenter';
import Image from 'next/image';
import Link from 'next/link';

const FullProcess = () => {
  const data = [
    {
      id: 1,
      icon: '/assets/images/india/process/icon1.png',
      title: 'Apply online',
      sub: 'Upload Photo and Passport Page',
    },
    {
      id: 2,
      icon: '/assets/images/india/process/icon2.png',
      title: 'Pay eVisa fee online',
      sub: 'Using Credit / Debit card / Payment Wallet',
    },
    {
      id: 3,
      icon: '/assets/images/india/process/icon3.png',
      title: 'Receive ETA Online',
      sub: 'Electronic Travel Authorization/ETA Will be sent to your e-mail',
    },
    {
      id: 4,
      icon: '/assets/images/india/process/icon4.png',
      title: 'Fly To India',
      sub: 'Print ETA and present at Immigration Check Post where eVisa will be stamped on passport.',
    },
  ];

  return (
    <div className="container py-16">
      <div className="w-fit md:mx-auto">
        <UnderlineTextCenter title="E-Visa Application Full Process" />
      </div>

      <div className="grid-cols-4 gap-10 pt-10 space-y-4 md:grid md:space-y-0">
        {data.map((e, i) => (
          <>
            <Link
              href=""
              className="bg-white drop-shadow-lg px-10 py-10 h-[300px] flex flex-col space-y-3 rounded-2xl justify-content-center align-items-center"
              key={i}
            >
              <Image
                className="mx-auto"
                src={e.icon}
                width={60}
                height={60}
                alt={e.title}
              />
              <p className="text-lg font-semibold text-center text-primary">
                {' '}
                {e.title}
              </p>
              <p className="text-center">{e.sub}</p>
            </Link>
          </>
        ))}
      </div>
    </div>
  );
};

export default FullProcess;
