"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { heroBanner } from "../../public";

const Sidebar = () => {
  return (
    <div className="sm:hidden md:hidden lg:flex lg:flex-col lg:h-full lg:w-1/4 lg:top-0 lg:sticky xl:flex xl:flex-col xl:h-full xl:w-1/4 xl:top-0 xl:sticky">
      {/* Sidebar Header with Full-width Image */}
      <div className="h-60 flex items-center justify-center">
        <Image
          src={heroBanner} // Replace with your image URL
          alt="Sidebar Image"
          className="h-56 w-56 object-contain"
        />
      </div>

      {/* Sidebar Content (Navigation Items) */}
      <div className="flex-grow  text-black p-5">
        {/* Sidebar Navigation Items */}
        <nav className="text-center font-bold">
          <Link
            href="#"
            className="block py-4 hover:text-accent transition duration-300"
          >
            HOME
          </Link>
          <Link
            href="#"
            className="block py-4 hover:text-accent transition duration-300"
          >
            ABOUT ME
          </Link>
          <Link
            href="#"
            className="block py-4 hover:text-accent transition duration-300"
          >
            RESUME
          </Link>
          <Link
            href="#"
            className="block py-4 hover:text-accent transition duration-300"
          >
            PORTFOLIO
          </Link>
          <Link
            href="#"
            className="block py-4 hover:text-accent transition duration-300"
          >
            TESTIMONIALS
          </Link>
          <Link
            href="#"
            className="block py-4 hover:text-accent transition duration-300"
          >
            CONTACT
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
