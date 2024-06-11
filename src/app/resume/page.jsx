"use client";
import React from "react";
import { motion } from "framer-motion";
import Sidebar from "@/components/sidebar";
import Experience from "@/components/Experience";

const Resume = () => {
  return (
    <motion.div
      className="h-full "
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full overflow-scroll lg:flex">
        <Sidebar />
        <Experience />
      </div>
    </motion.div>
  );
};

export default Resume;
