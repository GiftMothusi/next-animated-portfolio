"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { hero } from "../../public";

const Homepage = () => {
  return (
    <motion.div
      className="h-full "
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 ">
        {/**TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/**TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold">
            HI THERE! <br /> I&apos;M DINEO
          </h1>
          {/**DESCRIPTION */}
          <p className="md:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            euismod libero ut hendrerit mattis. Vestibulum vitae tempor lorem.
            Donec pretium orci pharetra sapien sollicitudin vulputate. Nunc
            finibus eros ut urna laoreet, sit amet consequat augue laoreet.
          </p>
          {/**BUTTONS */}
          <div className="w-full flex gap-4 ">
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
              MORE ABOUT ME
            </button>
            <button className="p-4 rounded-lg ring-1 ring-black bg-transparent text-black">
              CONTACT ME
            </button>
          </div>
        </div>
        {/**IMAGE CONTAINER  */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative ">
          <Image src={hero} alt="heroBanner" fill className="object-contain" />
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
