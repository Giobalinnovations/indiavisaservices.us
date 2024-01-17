'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaLongArrowAltRight } from 'react-icons/fa';

export const CountriesMap = () => {

    const data = [
        {
            id: 1,
            imgSrc: '/assets/images/main/india-desti.png',
            title: 'India',
            link: '/india',
        },
        {
            id: 2,
            imgSrc: '/assets/images/main/srilanka.jpg',
            title: 'Srilanka',
            link: '/srilanka',
        },
        {
            id: 3,
            imgSrc: '/assets/images/main/australia.jpg',
            title: 'Australia',
            link: '/australia',
        },
        {
            id: 4,
            imgSrc: '/assets/images/main/turkey.jpg',
            title: 'Turkey',
            link: '/turkey',
        },
        {
            id: 5,
            imgSrc: '/assets/images/main/thailand.jpg',
            title: 'Thailand',
            link: '/thailand',
        },
        {
            id: 6,
            imgSrc: '/assets/images/main/cambodia.jpg',
            title: 'Cambodia',
            link: '/cambodia',
        },
        {
            id: 7,
            imgSrc: '/assets/images/main/oman.jpg',
            title: 'Oman',
            link: '/oman',
        },
        {
            id: 8,
            imgSrc: '/assets/images/main/egypt.jpg',
            title: 'Egypt',
            link: '/egypt',
        },
        {
            id: 9,
            imgSrc: '/assets/images/main/singapore.jpg',
            title: 'Singapore',
            link: '/singapore',
        },
        {
            id: 10,
            imgSrc: '/assets/images/main/malaysia.jpg',
            title: 'Malaysia',
            link: '/malaysia',
        },
        {
            id: 11,
            imgSrc: '/assets/images/main/indonesia.jpg',
            title: 'Indonesia',
            link: '/indonesia',
        },
        {
            id: 12,
            imgSrc: '/assets/images/main/hongkong.jpg',
            title: 'Hongkong',
            link: '/hongkong',
        },
        {
            id: 13,
            imgSrc: '/assets/images/main/morocco.jpg',
            title: 'Morocco',
            link: '/morocco',
        },
        {
            id: 14,
            imgSrc: '/assets/images/main/japan.jpg',
            title: 'Japan',
            link: '/japan',
        },
    ];

    return (
        <div className="container pt-40 pb-20">
            <div className="grid-cols-4 gap-6 space-y-8 md:grid md:space-y-0">
                {data?.map((e, i) => (
                    <div
                        key={i}
                        className="max-w-sm shadow-md group rounded-2xl dark:border-gray-700"
                    >
                        <div className="relative z-0 overflow-hidden rounded-t-3xl">
                            <Image
                                src={e.imgSrc}
                                width={500}
                                height={500}
                                className="mx-auto full h-[200px] "
                                alt="banner"
                            />
                            <div className="absolute bottom-0 z-10 flex items-end justify-end w-full h-full bg-black/40">
                                <h2 className="w-full py-2 text-lg font-semibold text-center text-white uppercase bg-primary/60">
                                    {e?.title}
                                </h2>
                            </div>
                        </div>
                        <div className="px-5 py-4 text-center space-y-3 border-primary border-[1px] rounded-b-2xl border-b-2 group-hover:bg-primaryMain group-hover:text-white text-primaryMain">
                            <Link
                                href={e.link}
                                className="flex items-center justify-center space-x-2 font-semibold"
                            >
                                <span>Read More</span>
                                <span>
                                    <FaLongArrowAltRight />
                                </span>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
