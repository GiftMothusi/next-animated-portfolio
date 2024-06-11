"use client";
import { motion } from "framer-motion";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import Image from "next/image";
import { SectionWrapper } from "@/hoc";
import { experiences, tools } from "@/contants";
import { textVariant } from "@/utils/motion";
import BallCanvas from "./canvas/Ball";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      className="p-5 right-0"
      visible={true}
      contentStyle={{
        background: "white",
        color: "#000",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full bg-white-100 rounded-full">
          <Image
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[50%] object-contain "
          />
        </div>
      }
    >
      {" "}
      <div>
        <h3 className="text-black text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-black text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-black-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="text-center text-lg font-light">
          What I have done so far
        </p>
        <h2 className="text-center text-2xl font-bold">Work Experience</h2>
      </motion.div>

      <div className="mt-20 flex flex-col -ml-[30px]">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
      {/**SKILLS SECTION */}
      <h1 className="font-bold text-2xl text-center p-10">Tools</h1>
      <div className="flex flex-wrap pt-10 justify-center gap-10">
        {tools.map((tool, index) => (
          <div key={index} className="w-20 h-20 mb-10">
            <Image src={tool.icon} alt={tool.name} />

            {/** Rendering 3d objects an issue in nextjs, problem to be investigated
            
             <BallCanvas icon={tool.icon} />
             */}
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
