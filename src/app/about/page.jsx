"use client";
import React from "react";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import Brain from "@/components/brain";
import { heroBanner } from "../../../public";

import { useRef } from "react";
import Sidebar from "@/components/sidebar";

const About = () => {
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({ container: containerRef });
  //This hook is for the scroll animation, we will utilize it to check if our Skills section is within our viewport
  const skillRef = useRef();
  //set the animation to once with every page refresh and only animate when within margin
  const isSkillRefInView = useInView(
    skillRef,
    { margin: "-100px" },
    { once: true }
  );

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(
    experienceRef,
    { margin: "100px" },
    { once: true }
  );

  console.log(scrollYProgress);

  return (
    <motion.div
      className="h-full "
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/**PARENT CONTAINER */}
      <div className="h-full  overflow-scroll lg:flex" ref={containerRef}>
        {/*****************SIDEBAR CONTAINER************/}
        <Sidebar />
        {/****************END OF SIDEBAR CONTAINER*******/}

        {/**TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/**BIOGRAPHY SECTION */}
          <div className="flex flex-col gap-12 justify-center">
            <h1 className="text-2xl font-bold">BIOGRAPHY</h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              euismod libero ut hendrerit mattis. Vestibulum vitae tempor lorem.
              Donec pretium orci pharetra sapien sollicitudin vulputate. Nunc
              finibus eros ut urna laoreet, sit amet consequat augue laoreet.
            </p>
            <span className="italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </span>
            {/**SVG For Signature  */}
            <div className="self-end">
              <svg
                width="73"
                height="32"
                viewBox="0 0 73 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 4C7.96518 4.43174 7.74983 4.95259 7.65957 5.38083C7.53419 5.97576 7.3434 6.53207 7.19149 7.11339C6.96808 7.96827 6.80851 9.07551 6.80851 9.98578C6.80851 12.4954 6.42594 15.2582 5.72104 17.5739C5.40376 18.6161 5.3319 19.829 5.19149 20.9413C5.07788 21.8411 4.84002 22.6956 4.68085 23.5727C4.55197 24.2828 4.296 25.0522 4.25532 25.7807C4.24199 26.0194 4.19917 26.4628 4.12766 26.6795C4.05457 26.9011 4.14813 27.168 4 26.8619"
                  stroke="black"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M7.28491 5.59444C7.33999 4.96538 9.00073 4.48161 9.39828 4.32107C10.3252 3.94674 11.3215 4.0095 12.2801 4.0095C13.2864 4.0095 14.2877 3.89021 15.21 4.49717C16.0126 5.02532 16.8725 5.29159 17.5636 6.08888C19.6481 8.49403 20.4454 12.0039 20.4454 15.4698C20.4454 18.0588 20.1175 21.4383 18.6203 23.3945C17.6437 24.6704 16.7087 25.5829 15.4502 26.3815C14.3789 27.0614 13.1407 27.513 11.9973 27.9664C10.7391 28.4655 9.60858 28.8808 8.26155 28.8808C7.58482 28.8808 6.90045 29.1247 6.22823 29.1247C5.60916 29.1247 4.99009 29.1247 4.37103 29.1247C3.67297 29.1247 3.085 29.0894 2.4818 28.6641C1.22753 27.7797 2.71765 26.5685 3.60253 26.7134C4.75275 26.9018 5.61973 28.0819 6.60714 28.7454C7.53111 29.3662 8.73382 29.8974 9.78253 29.9713C11.5687 30.0973 13.3553 29.7891 15.114 29.4227C16.8913 29.0524 18.7636 28.7174 20.1092 27.1198C20.8049 26.2938 21.4582 25.5675 21.9611 24.5189C22.4802 23.4365 22.9521 22.1491 23.2312 20.929C23.4869 19.8116 23.7115 18.711 23.7115 17.5424C23.7115 17.0405 23.675 17.3679 23.5675 17.6711C23.3693 18.23 23.292 18.8233 23.1352 19.3983C22.6497 21.1783 22.262 22.7946 22.7296 24.6408C23.0133 25.7612 23.8656 26.1774 24.7682 26.1986C25.8665 26.2244 26.4649 25.4976 27.0737 24.3699C28.363 21.9818 29.1871 18.9918 29.1871 16.093C29.1871 14.7043 28.895 16.8588 28.8455 17.2444C28.6336 18.8965 28.617 20.56 28.52 22.2227C28.4682 23.1107 28.338 24.0109 28.2478 24.8982C28.1629 25.7336 28.0343 26.1597 28.0343 24.9794C28.0343 22.4296 28.5695 19.8416 29.4753 17.5424C29.8901 16.4894 30.8367 16.689 31.6313 16.689C32.5803 16.689 33.1656 16.4472 33.5579 17.6643C34.1116 19.3821 33.7981 21.6576 33.7981 23.4758C33.7981 24.4774 34.0863 25.4038 34.0863 26.3747C34.0863 27.2814 34.2071 26.3116 34.4812 26.1377C35.7445 25.336 37.0976 24.8466 38.313 23.8754C39.4634 22.9561 41.2391 21.9676 41.7179 20.2314C41.9761 19.295 41.9769 18.052 41.483 17.2512C41.2064 16.8025 39.7583 15.9283 39.3697 16.5942C38.9246 17.3568 38.6536 18.1769 38.5265 19.1274C38.388 20.1624 38.311 22.0865 38.7186 23.0017C39.1445 23.9579 39.7812 24.6572 40.5651 25.1285C42.0656 26.0305 43.7718 26.1559 44.8185 24.3292C45.5863 22.9893 45.8637 21.5253 46.0513 19.9266C46.3422 17.4483 47.1623 13.6048 49.6483 13.8917C50.4824 13.9879 51.4434 15.3322 51.687 16.2826C52.0021 17.512 52.1629 19.3187 51.7617 20.5633C51.2739 22.0766 50.5971 23.7879 49.2854 24.3428C48.6147 24.6265 47.9715 24.6484 47.2681 24.5189C47 24.4695 46.7412 24.4059 46.5263 24.1937C46.4478 24.1163 46.2743 23.8955 46.1901 23.8822C45.9291 23.8408 45.777 22.4862 45.6137 22.1753"
                  stroke="black"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M59 25C59 21.8798 58.9992 18.8395 59.2927 15.7391C59.4964 13.5867 59.772 11.4478 59.878 9.28181C59.9305 8.21013 60.0332 7.11156 60.1924 6.05667C60.2517 5.66389 60.3659 5.2941 60.3659 4.89027C60.3659 4.55492 60.323 4.18621 60.4417 3.87846C60.5875 3.50064 60.5653 4.33128 60.5718 4.39842C60.6719 5.43599 61.2011 6.62756 61.5583 7.54628C61.7193 7.9606 63.5735 12.0637 63.9756 11.8184C64.1699 11.6998 64.1775 11.0974 64.2304 10.8768C64.5143 9.69085 64.8378 8.52801 65.0705 7.32143C65.3382 5.9329 65.6546 4.59369 66.0461 3.27419C66.1625 2.88169 66.5215 2.50981 66.6856 2.1078C66.8368 1.73775 66.9309 2.42944 66.9512 2.55046C67.0547 3.16738 67.1962 3.70392 67.3902 4.286C68.4834 7.56562 69.1668 10.954 69.9268 14.3479C70.5623 17.1857 71 26.0578 71 23.1029"
                  stroke="black"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M24 13.0218C24 14.3771 24 13.6861 24 13.0744C24 12.5501 24 15.0216 24 13.495"
                  stroke="black"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          <div className="flex flex-col gap-12 justify-center pb-10">
            <h1 className="text-2xl font-bold">Educational History </h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              euismod libero ut hendrerit mattis. Vestibulum vitae tempor lorem.
              Donec pretium orci pharetra sapien sollicitudin vulputate. Nunc
              finibus eros ut urna laoreet, sit amet consequat augue laoreet.
            </p>
          </div>
        </div>
        {/**SVG CONTAINER ONLY APPEARS ON XL SCREENS*/}
        <div className="hidden lg:block w-1/3 sticky top-0 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default About;
