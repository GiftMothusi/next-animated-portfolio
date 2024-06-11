"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

import { dribble, instagram, linkedin, pintrest } from "../../public";

/*
const links = [
  {
    url: "/",
    title: "Home",
  },
  {
    url: "/about",
    title: "About",
  },
  {
    url: "/resume",
    title: "Resume",
  },
  {
    url: "/portfolio",
    title: "Portfolio",
  },
];
*/
const socialIconsList = [
  { id: 1, src: dribble, alt: "dribble" },
  { id: 2, src: instagram, alt: "instagram" },
  { id: 3, src: linkedin, alt: "linkedin" },
  { id: 4, src: pintrest, alt: "pintrest" },
];

const Navbar = () => {
  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-lg">
      {/**LOGO */}
      <div className="lg:flex xl:w-1/3 xl:justify-center ">
        <Link
          href="/"
          className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center"
        >
          <span className="text-white mr-2">Dineo</span>
          <span className="w-15 h-8 rounded bg-white text-black flex items-center justify-center">
            .Malebane
          </span>
        </Link>
      </div>
      {/**SOCIAL MEDIA ICONS ON LARGE DISPLAY */}
      <div className="w-1/3">
        <Link href="" className=" flex md:flex gap-4">
          {socialIconsList.map((icons) => (
            <Image
              key={icons.id}
              src={icons.src}
              alt={icons.alt}
              width={24}
              height={24}
            />
          ))}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
