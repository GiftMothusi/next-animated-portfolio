"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Sidebar from "@/components/sidebar";
import { portfolioCard } from "@/contants";

const Portfolio = () => {
  const [currentCard, setCurrentCard] = useState(0);

  const nextSlide = () => {
    setCurrentCard(
      currentCard === portfolioCard.length - 1 ? 0 : currentCard + 1
    );
  };
  const handleCardSelect = (index) => {
    setCurrentCard(index);
  };

  return (
    <motion.div
      className="h-full "
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-wrap jusitify-center items-center h-full overflow-y-scroll">
        <div className="w-full bg-transparent">
          <div className="px-6 py-4">
            <div className=" font-bold text-center text-5xl mb-4 p-5">
              {portfolioCard[currentCard].title}
            </div>
            <div className="flex flex-wrap justify-center p-10 sm:p-5">
              {portfolioCard[currentCard].images.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt={`Image ${index + 1}`}
                  className="m-2 border border-gray-300 rounded-md w-48 h-48"
                />
              ))}
            </div>
            <div className="px-6 py-5 flex flex-wrap justify-center items-center space-x-4 xl:mb-5 mb-60 pb-20 xl:pb-10 pt-10 sm:pt-10">
              {portfolioCard.map((card, index) => (
                <button
                  key={index}
                  onClick={() => handleCardSelect(index)}
                  className={`px-5 py-2 ${
                    index === currentCard
                      ? "bg-blue-500 text-white"
                      : "bg-gray-400 text-gray-700"
                  } truncate rounded-md hover:bg-blue-600 hover:text-white w-full sm:w-auto mb-2 sm:mb-10`}
                >
                  {card.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Portfolio;
