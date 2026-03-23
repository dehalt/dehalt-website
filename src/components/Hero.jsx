"use client";
import React from "react";
import { easeIn, easeOut, motion } from "framer-motion";
import CardSwap, { Card } from "./CardSwap.jsx";
import VerticalLoop from "./VerticalLoop.jsx";
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};
const images = [
    '/images/recom.jpg',
    '/images/work2.jpeg',
    '/images/work3.jpeg',
    '/images/work4.jpeg',
];


const gettouch = () => {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
};

const Hero = () => {
  return (
    <div
      className="flex h-auto w-full justify-center border-b border-gray-200"
      id="dehalt"
    >
      <div className="flex w-[95%] flex-col gap-6 overflow-hidden border-r border-l border-gray-200 bg-[#f0f0f0] px-3  pb-30 md:px-6 lg:px-8 xl:flex-row xl:gap-25 lg:gap-0  lg:flex-row 2xl:w-376">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex w-fit flex-col gap-6 pt-60  h-170"
        >
          
          <motion.div
                    variants={fadeUp}
                    className="flex w-fit items-start gap-3 rounded-xl bg-black px-3  py-1 justify-center   text-sm font-bold text-white"
                  >
                    <div><span className="text-[#FF5400]">//</span> Active with growing agencies <span className="text-[#FF5400]">//</span></div>
          
                    
                  </motion.div>
          <motion.div
            variants={fadeUp}
            className="h-fit w-fit text-4xl font-extrabold text-black max-lg:text-6xl md:w-150 lg:text-7xl lg:w-100 xl:w-150 "
          >
            Operational Clarity for Faster <span className="text-[#4F4F4F]">Decisions</span>.
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="h-fit w-[70%] text-xl text-black lg:w-fit "
          >
            Stop wasting hours on Client Reporting.
          </motion.div>
         
          <motion.div
            variants={fadeUp}
            className="shadow-button flex w-fit items-center gap-2 rounded-4xl bg-[#FF5400] p-2 pl-4 font-bold text-black"
          >
            <div onClick={gettouch} className="cursor-pointer">
              {" "}
              Get in touch
            </div>

            <div className="rounded-full bg-black p-1.5">
              <svg
                onClick={gettouch}
                className="cursor-pointer"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 12H17M17 12L13 8M17 12L13 16"
                  stroke="#FF5400"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          // variants={fadeUp}
          initial={
            {
              opacity:0
            }
          }
          animate={{
            opacity:1,
            transition: {duration: 1,easeOut}
            
          }}
          // animate="show"

          style={{ position: "relative" }}
          className=" w-300  h-100 hidden lg:flex  gap-2.5"

        >

       <VerticalLoop images={images} />

      {/* reverse direction */}
      <VerticalLoop images={images} reverse />


        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
