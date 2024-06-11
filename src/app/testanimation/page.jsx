"use client";
import React from "react";
import { motion } from "framer-motion";

const Testpage = () => {
  const variants = {
    var1: {
      x: 400,
      y: 300,
      opacity: 0.5,
      transition: {
        duration: 3,
        type: "tween",
      },
    },
    var2: {
      x: 100,
      y: -300,
      rotate: 90,
      transition: {
        duration: 4,
        type: "spring",
      },
    },
  };

  return (
    <div className="h-full flex items-center justify-center">
      <motion.div
        variants={variants}
        animate="var1"
        className="w-96 h-96 bg-red-400 rounded"
      ></motion.div>
    </div>
  );
};

export default Testpage;
