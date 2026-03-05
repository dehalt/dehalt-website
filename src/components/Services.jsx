"use client";
import { delay, motion } from "framer-motion";
import React from "react";

const container = {
  hidden: {},
  show: {
    transition: {
      delay: 1,
      staggerChildren: 0.2,
    },
  },
};
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};
const Services = () => {
  return (
    <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
           className="relative flex h-fit w-full justify-center border-b border-gray-200 bg-[#F0F0F0]" id="services">
      <div className="flex w-[95%] flex-col gap-6 border-r border-l border-gray-200 bg-[#f0f0f0] px-3 pt-10 pb-10 md:px-6 lg:px-8 2xl:w-336">
        <motion.div 
        variants={fadeUp}
        className="flex w-fit items-center gap-3 rounded-4xl bg-black py-2 pr-3 pl-4 text-sm font-bold text-white">
          <div> Services</div>

          <div className="rounded-full bg-black">
            <svg
              width="20"
              height="20"
              viewBox="0 -2 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 8H6.2002C5.08009 8 4.51962 8 4.0918 8.21799C3.71547 8.40973 3.40973 8.71547 3.21799 9.0918C3 9.51962 3 10.0801 3 11.2002V16.8002C3 17.9203 3 18.4801 3.21799 18.9079C3.40973 19.2842 3.71547 19.5905 4.0918 19.7822C4.5192 20 5.07899 20 6.19691 20H17.8031C18.921 20 19.48 20 19.9074 19.7822C20.2837 19.5905 20.5905 19.2842 20.7822 18.9079C21 18.4805 21 17.9215 21 16.8036V11.1969C21 10.079 21 9.5192 20.7822 9.0918C20.5905 8.71547 20.2837 8.40973 19.9074 8.21799C19.4796 8 18.9203 8 17.8002 8H16M8 8H16M8 8C8 5.79086 9.79086 4 12 4C14.2091 4 16 5.79086 16 8"
                stroke="#FF5400"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </motion.div>
        <motion.div
        variants={fadeUp} className="flex w-full flex-wrap items-center justify-between gap-4">
          <div className="h-fit w-auto text-5xl font-extrabold tracking-tighter text-black md:text-6xl lg:w-[50%] lg:text-7xl">
            What We Do.
          </div>
          <div className="h-fit px-1 pr-9 text-lg tracking-tighter text-gray-800 sm:pr-0">
            <div className="hidden sm:flex sm:gap-1">
              <div>We combine strategy, speed,</div>{" "}
              <div>and skill to</div>{" "}
            </div>
            <div className="hidden sm:flex sm:gap-1">
              <div>deliver exceptional</div> <div>results everytime.</div>
            </div>
            <div className="sm:hidden">
              <div>We combine strategy, speed,</div>
              <div>and skill to deliver exceptional</div>
              <div>results everytime.</div>
            </div>
          </div>
        </motion.div>
        <div
          className="relative flex h-fit w-full flex-col gap-1.5 xl:flex-row xl:gap-3.5"
        >
          <motion.div
            variants={fadeUp}
            className="flex h-160 flex-col gap-2 rounded-3xl bg-[#E5E5E5] p-2 sm:h-200 md:h-fit md:flex-row xl:w-fit xl:flex-col"
          >
            <div className="flex h-fit w-full max-w-170 flex-col gap-3 rounded-3xl bg-[#F0F0F0] p-6 md:h-100 xl:h-fit xl:max-w-120 2xl:min-h-74">
              <div className="w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="70"
                  height="70"
                  viewBox="0 0 50 50"
                >
                  <path d="M 5 4 C 3.346 4 2 5.346 2 7 L 2 13 L 3 13 L 47 13 L 48 13 L 48 11 C 48 9.346 46.654 8 45 8 L 18.044922 8.0058594 C 17.765922 7.9048594 17.188906 6.9861875 16.878906 6.4921875 C 16.111906 5.2681875 15.317 4 14 4 L 5 4 z M 3 15 C 2.448 15 2 15.448 2 16 L 2 43 C 2 44.657 3.343 46 5 46 L 45 46 C 46.657 46 48 44.657 48 43 L 48 16 C 48 15.448 47.552 15 47 15 L 3 15 z"></path>
                </svg>
              </div>
              <div className="text-2xl font-bold text-black">
                MVP's for Startups
              </div>
              <div className="text-black">
                Lean MVP development focused on speed and stability.
              </div>
              <div className="flex flex-wrap gap-1">
                <div className="flex w-fit items-center gap-2 rounded-3xl bg-[#E5E5E5] p-1.25 px-3 text-black">
                  {" "}
                  <div className="h-1 w-1 rounded-full bg-[#FF5400] p-1.25"></div>
                  <div className="text-sm">SYSTEM DESIGN</div>
                </div>
                <div className="flex w-fit items-center gap-2 rounded-3xl bg-[#E5E5E5] p-1.25 px-3 text-black">
                  {" "}
                  <div className="h-1 w-1 rounded-full bg-[#FF5400] p-1.25"></div>
                  <div className="text-sm">INTEGRATION</div>
                </div>

                <div className="flex w-fit items-center gap-2 rounded-3xl bg-[#E5E5E5] p-1.25 px-3 text-black">
                  {" "}
                  <div className="h-1 w-1 rounded-full bg-[#FF5400] p-1.25"></div>
                  <div className="text-sm">CI/CD PIPELINE</div>
                </div>
                <div className="flex w-fit items-center gap-2 rounded-3xl bg-[#E5E5E5] p-1.25 px-3 text-black">
                  {" "}
                  <div className="h-1 w-1 rounded-full bg-[#FF5400] p-1.25"></div>
                  <div className="text-sm">TESTING</div>
                </div>
              </div>
            </div>
            <div className="h-full w-full rounded-3xl bg-amber-400 bg-[url('/images/mvp.jpg')] bg-cover bg-center p-1 md:h-full xl:h-70"></div>

            {/* <img src="./images/mvp.jpg" alt="" /> */}
          </motion.div>
          <motion.div
            variants={fadeUp}
            className="flex h-160 flex-col gap-2 rounded-3xl bg-[#E5E5E5] p-2 sm:h-200 md:h-fit md:flex-row xl:w-fit xl:flex-col"
          >
            <div className="flex h-fit w-full max-w-170 flex-col gap-3 rounded-3xl bg-[#F0F0F0] p-6 md:h-100 xl:h-fit xl:max-w-120 2xl:max-h-100">
              <div className="w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="70"
                  height="70"
                  viewBox="0 0 50 50"
                >
                  <path d="M 5 4 C 3.346 4 2 5.346 2 7 L 2 13 L 3 13 L 47 13 L 48 13 L 48 11 C 48 9.346 46.654 8 45 8 L 18.044922 8.0058594 C 17.765922 7.9048594 17.188906 6.9861875 16.878906 6.4921875 C 16.111906 5.2681875 15.317 4 14 4 L 5 4 z M 3 15 C 2.448 15 2 15.448 2 16 L 2 43 C 2 44.657 3.343 46 5 46 L 45 46 C 46.657 46 48 44.657 48 43 L 48 16 C 48 15.448 47.552 15 47 15 L 3 15 z"></path>
                </svg>
              </div>
              <div className="text-2xl font-bold text-black">
                Recommendation systems
              </div>
              <div className="text-black">
                Personalized recommendations that drive engagement and
                retention.
              </div>
              <div className="flex flex-wrap gap-1">
                <div className="flex w-fit items-center gap-2 rounded-3xl bg-[#E5E5E5] p-1.25 px-3 text-black">
                  {" "}
                  <div className="h-1 w-1 rounded-full bg-[#FF5400] p-1.25"></div>
                  <div className="text-sm">DATA COLLECTION</div>
                </div>
                <div className="flex w-fit items-center gap-2 rounded-3xl bg-[#E5E5E5] p-1.25 px-3 text-black">
                  {" "}
                  <div className="h-1 w-1 rounded-full bg-[#FF5400] p-1.25"></div>
                  <div className="text-sm">TRAINING</div>
                </div>

                <div className="flex w-fit items-center gap-2 rounded-3xl bg-[#E5E5E5] p-1.25 px-3 text-black">
                  {" "}
                  <div className="h-1 w-1 rounded-full bg-[#FF5400] p-1.25"></div>
                  <div className="text-sm">MODEL RETAINING</div>
                </div>
                <div className="flex w-fit items-center gap-2 rounded-3xl bg-[#E5E5E5] p-1.25 px-3 text-black">
                  {" "}
                  <div className="h-1 w-1 rounded-full bg-[#FF5400] p-1.25"></div>
                  <div className="text-sm">TESTING</div>
                </div>
              </div>
            </div>
            <div className="h-full w-full rounded-3xl bg-amber-400 bg-[url('/images/recom.jpg')] bg-cover bg-center p-1 md:h-full xl:h-70"></div>
          </motion.div>
          <motion.div
            variants={fadeUp}
            className="flex h-160 flex-col gap-2 rounded-3xl bg-[#E5E5E5] p-2 sm:h-200 md:h-fit md:flex-row xl:w-fit xl:flex-col"
          >
            <div className="flex h-fit w-full max-w-170 flex-col gap-3 rounded-3xl bg-[#F0F0F0] p-6 md:h-100 xl:h-fit xl:max-w-120">
              <div className="w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="70"
                  height="70"
                  viewBox="0 0 50 50"
                >
                  <path d="M 5 4 C 3.346 4 2 5.346 2 7 L 2 13 L 3 13 L 47 13 L 48 13 L 48 11 C 48 9.346 46.654 8 45 8 L 18.044922 8.0058594 C 17.765922 7.9048594 17.188906 6.9861875 16.878906 6.4921875 C 16.111906 5.2681875 15.317 4 14 4 L 5 4 z M 3 15 C 2.448 15 2 15.448 2 16 L 2 43 C 2 44.657 3.343 46 5 46 L 45 46 C 46.657 46 48 44.657 48 43 L 48 16 C 48 15.448 47.552 15 47 15 L 3 15 z"></path>
                </svg>
              </div>
              <div className="text-2xl font-bold text-black">
                AI & Data-Aware Features
              </div>
              <div className="text-black">
                Make your product adaptive, predictive, and insight-driven.”
              </div>
              <div className="flex flex-wrap gap-1">
                <div className="flex w-fit items-center gap-2 rounded-3xl bg-[#E5E5E5] p-1.25 px-3 text-black">
                  {" "}
                  <div className="h-1 w-1 rounded-full bg-[#FF5400] p-1.25"></div>
                  <div className="text-sm">AI INTEGRATION</div>
                </div>

                <div className="flex w-fit items-center gap-2 rounded-3xl bg-[#E5E5E5] p-1.25 px-3 text-black">
                  {" "}
                  <div className="h-1 w-1 rounded-full bg-[#FF5400] p-1.25"></div>
                  <div className="text-sm">DATA PIPELINES</div>
                </div>
                <div className="flex w-fit items-center gap-2 rounded-3xl bg-[#E5E5E5] p-1.25 px-3 text-black">
                  {" "}
                  <div className="h-1 w-1 rounded-full bg-[#FF5400] p-1.25"></div>
                  <div className="text-sm">ML</div>
                </div>
                <div className="flex w-fit items-center gap-2 rounded-3xl bg-[#E5E5E5] p-1.25 px-3 text-black">
                  {" "}
                  <div className="h-1 w-1 rounded-full bg-[#FF5400] p-1.25"></div>
                  <div className="text-sm">PERSONALIZATION</div>
                </div>
              </div>
            </div>
            <div className="h-full w-full rounded-3xl bg-amber-400 bg-[url('/images/data.jpg')] bg-cover bg-center p-1 md:h-full xl:h-70"></div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Services;
