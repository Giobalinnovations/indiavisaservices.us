import React from 'react'
import Link from "next/link";

const Button = ({ title,link }) => {
  return (
    <Link
    href={link}
    className="md:text-base text-sm border-[1px] font-semibold  px-6 py-3 text-white bg-primary rounded-full hover:bg-secondary hover:text-white hover:scale-105 duration-150 transition-all w-fit"
  >
    {title}
  </Link>
  )
}

export default Button