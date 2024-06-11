"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./Navbar";
import Nav from "./Nav";
import { usePathname } from "next/navigation";

const TransitionProvider = ({ children }) => {
  const pathName = usePathname();

  return (
    <AnimatePresence mode="wait">
      <div
        key={pathName}
        className="w-screen h-screen bg-gradient-to-b from-blue-100 to-red-100"
      >
        {/**ANIMATION FOR THE BLACK BACKGROUND SLIDING IN WHEN SWITCHING BETWEEN MENU LINKS */}
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-b-[100px] z-40 "
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        {/**END OF ANIMATION FOR THE BLACK BACKGROUND SLIDING IN WHEN SWITCHING BETWEEN MENU LINKS */}

        {/*** ANIMATION TO ADD PATH NAME DURING EACH TRANSITION SLIDE */}
        <motion.div
          className="fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-8xl cursor-default z-50 w-fit h-fit"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/**PARSE SUBSTRING FUNCTION TO REMOVE BACK SLASH FROM PATHNAME */}
          {pathName.substring(1)}
        </motion.div>
        {/*** END OF ANIMATION TO ADD PATH NAME DURING EACH TRANSITION SLIDE */}

        {/**ANIMATION FOR SLIDING TRANSITION FOR WEB PAGE WHEN ONE OF THE MENU TABS IS CLICKED ON*/}
        <motion.div
          className="h-screen  w-screen fixed bg-black rounded-t-[100px] bottom-0 z-30"
          initial={{ height: "140vh" }}
          animate={{ height: "0vh", transition: { delay: 0.5 } }}
        />
        {/**END OF ANIMATION FOR SLIDING TRANSITION FOR WEB PAGE WHEN ONE OF THE MENU TABS IS CLICKED ON*/}
        <div className="h-24">
          {" "}
          <Navbar />
          <Nav />
          <div className="h-[calc(100vh-6rem)]">{children}</div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;
