"use client";
import React from "react";
import { easeIn, easeOut, motion } from "framer-motion";
import CardSwap, { Card } from "./CardSwap.jsx";
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

const gettouch=()=>{
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}

const Hero = () => {
  return (
    <div className="flex h-auto w-full justify-center border-b border-gray-200" id="dehalt">
      <div className="flex w-[95%] flex-col gap-6 overflow-hidden border-r border-l border-gray-200 bg-[#f0f0f0] px-3 pt-52 pb-30 md:px-6 lg:px-8 xl:flex-row 2xl:w-336">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex w-fit flex-col gap-6"
        >
          <motion.div
            variants={fadeUp}
            className="h-fit w-auto text-4xl font-extrabold text-black max-lg:text-6xl md:w-150 lg:text-7xl"
          >
            Automated Client Reporting for Performance Marketing agencies.
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="h-fit w-[70%] text-xl text-black lg:w-fit"
          >
            Stop wasting hours on Client Reporting.....
          </motion.div>
          <motion.div
            variants={fadeUp}
            className="flex w-fit items-center gap-2 rounded-4xl bg-[#FF5400] p-2 pl-4 font-bold text-black shadow-button"
          >
            <div onClick={gettouch} className="cursor-pointer"> Get in touch</div>

            <div className="rounded-full bg-black p-1.5">
              <svg onClick={gettouch} className="cursor-pointer"
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
          // initial="hidden"
          // animate="show"
          style={{ height: "415px", position: "relative" }}
          className="hidden w-160 xl:flex"
        >
          <CardSwap
            cardDistance={50}
            verticalDistance={80}
            delay={5000}
            pauseOnHover={false}
          >
            <Card>
              <div className="b-full h-full bg-amber-50 bg-[url('/images/mvp.jpg')] bg-cover bg-bottom-right"></div>
            </Card>
            <Card>
              <div className="b-full h-full bg-amber-50 bg-[url('/images/data.jpg')] bg-cover bg-bottom-left"></div>
            </Card>
            <Card>
              <div className="b-full h-full bg-amber-50 bg-[url('/images/recom.jpg')] bg-cover bg-bottom-left"></div>
            </Card>
          </CardSwap>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
