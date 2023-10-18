import React from "react";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
const Footer = () => {
    const data = [
        {
            id: 1,
            icon: <FaFacebookF />,
            href: "#",
        },
        {
            id: 2,
            icon: <FaInstagram />,
            href: "#",
        },
        {
            id: 3,
            icon: <FaLinkedin />,
            href: "#",
        },
        {
            id: 4,
            icon: <FaXTwitter />,
            href: "#",
        },
    ];
    return (
        <div className=" ">
            <div className='pb-6 bg-cover bg-no-repeat bg-right-bottom' style={{
                backgroundImage: ' url("/images/common/bannerfooter.png")'
            }}>
                <div className="container ">
                    <div className="pt-16">
                        <div className=" grid md:grid-cols-12  gap-6 justify-start md:px-0  pb-12 md:pt-0 pt-8">
                            <div className="space-y-4 col-span-5">
                                <Link href="/">
                                    <div>
                                        <Image
                                            src="/images/common/logo-white.png"
                                            width="140"
                                            height="140"
                                        />
                                    </div>
                                </Link>
                                <p className="text-base text-white text-justify  md:tracking-tight  tracking-tighter  leading-relaxed ">
                                    Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry. Lorem Ipsum has been the industry.
                                </p>
                                <div className="space-y-6">
                                <div>
                                    <ul className="flex space-x-4  pt-3">
                                        {data.map((e, i) => (
                                            <li key={i} className="flex space-x-5">
                                                <Link
                                                    href={e.href}
                                                    target="_blank"
                                                    className="hover:scale-110 duration-200 w-8  rounded-full bg-white p-2"
                                                >
                                                    {e.icon}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                    <ul className="">
                                        <Link href="#">
                                            <li className="text-base  hover:text-primary mt-2 flex space-x-2 items-center">
                                                <IoIosMail className="rounded-full bg-white  p-1 w-6 h-6 text-black" /> <span className="text-white">info@example.com</span>
                                            </li>
                                        </Link>
                                        <Link href="#">
                                            <li className="text-base  hover:text-primary mt-2 flex space-x-2 items-center">
                                                <FaPhoneAlt className="rounded-full bg-white  p-1 w-6 h-6 text-black" /> <span className="text-white">+91-9876543219</span>
                                            </li>
                                        </Link>
                                    </ul>
                                </div>
                              
                            </div>
                            <div className="flex justify-center col-span-2">
                                <div className="md:flex md:space-x-28 md:space-y-0 space-y-6">
                                    <div>
                                        <div className="space-y-6">
                                            <h2 className="text-xl font-semibold text-white capitalize underline underline-offset-8 decoration-primary">
                                                Quick Links
                                            </h2>
                                            <ul className="">
                                                <Link href="/">
                                                    <li className="text-base text-white hover:text-primary mt-2">
                                                        <span className="">Home
                                                        </span>
                                                    </li>
                                                </Link>
                                                <Link href="/about-us">
                                                    <li className="text-base text-white hover:text-primary mt-2">
                                                        <span className="">About Us
                                                        </span>
                                                    </li>
                                                </Link>

                                                <Link href="/contact-us#contact-form">
                                                    <li className="text-base text-white hover:text-primary mt-2">
                                                        <span className="">Apply VISA
                                                        </span>
                                                    </li>
                                                </Link>
                                                <Link href="/privacy-policy">
                                                    <li className="text-base text-white hover:text-primary mt-2">
                                                        <span className="">Ongoing Application
                                                        </span>
                                                    </li>
                                                </Link>
                                                <Link href="/terms-and-condition">
                                                    <li className="text-base text-white hover:text-primary mt-2">
                                                        <span className="">Contact Us</span>
                                                    </li>
                                                </Link>

                                            </ul>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center col-span-3">
                                <div className="space-y-6">
                                    <h2 className="text-xl font-semibold text-white capitalize underline underline-offset-8 decoration-primary">
                                        Apply For Indian VISA
                                    </h2>
                                    <ul className="">
                                        <Link href="/">
                                            <li className="text-base text-white hover:text-primary mt-2">
                                                <span className=""> Indian eVisa Online
                                                </span>
                                            </li>
                                        </Link>
                                        <Link href="/">
                                            <li className="text-base text-white hover:text-primary mt-2">
                                                <span className="">Indian Tourist eVisa
                                                </span>
                                            </li>
                                        </Link>
                                        <Link href="/">
                                            <li className="text-base text-white hover:text-primary mt-2">
                                                <span className="">Indian Medical eVisa
                                                </span>
                                            </li>
                                        </Link>
                                        <Link href="/">
                                            <li className="text-base text-white hover:text-primary mt-2">
                                                <span className=""> Indian Business eVisa</span>
                                            </li>
                                        </Link>

                                    </ul>
                                </div>
                            </div>
                            <div className=" flex justify-end col-span-2">
                                <div className="space-y-6">
                                    <h2 className="text-xl font-semibold text-white capitalize underline underline-offset-8 decoration-primary">
                                        Support
                                    </h2>
                                    <ul className="">
                                        <Link href="/">
                                            <li className="text-base text-white hover:text-primary mt-2">
                                                <span className=""> Terms & Conditions
                                                </span>
                                            </li>
                                        </Link>
                                        <Link href="/">
                                            <li className="text-base text-white hover:text-primary mt-2">
                                                <span className="">
                                                    Privacy Policy

                                                </span>
                                            </li>
                                        </Link>
                                        <Link href="/">
                                            <li className="text-base text-white hover:text-primary mt-2">
                                                <span className="">Cookies Policy</span>
                                            </li>
                                        </Link>

                                    </ul>
                                </div>
                            </div>
                        </div>
                        <hr className="h-[1px] bg-primary border-primary" />
                        <div className="text-center py-5 text-white text-base md:px-0 px-5">
                            <p>
                                {" "}
                                Copyright © 2023 |
                                <span className="font-semibold px-2">E-Visa</span>| All
                                Rights Reserved
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
