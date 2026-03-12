"use client";
import React from "react";
import { delay,motion } from "framer-motion";

const Whyus = () => {
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
  return (
    <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
           className="relative flex h-fit w-full justify-center border-b border-gray-200 bg-[#F0F0F0]">
      <div className="flex w-[95%] flex-col gap-6 border-r border-l border-gray-200 bg-[#f0f0f0] px-3 pt-10 pb-10 md:px-6 lg:px-8 2xl:w-336">
        <motion.div
        variants={fadeUp} className="flex w-fit items-center gap-2 rounded-4xl bg-black py-2 pr-3 pl-4 text-sm font-bold text-white">
          <div>BENEFITS</div>

          <div className="rounded-full bg-black">
          <svg width="20" height="20" viewBox="0 1 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.33496 10.3368C2.02171 10.0471 2.19187 9.52339 2.61557 9.47316L8.61914 8.76107C8.79182 8.74059 8.94181 8.63215 9.01465 8.47425L11.5469 2.98446C11.7256 2.59703 12.2764 2.59695 12.4551 2.98439L14.9873 8.47413C15.0601 8.63204 15.2092 8.74077 15.3818 8.76124L21.3857 9.47316C21.8094 9.52339 21.9791 10.0472 21.6659 10.3369L17.2278 14.4419C17.1001 14.56 17.0433 14.7357 17.0771 14.9063L18.255 20.8359C18.3382 21.2544 17.8928 21.5787 17.5205 21.3703L12.2451 18.4166C12.0934 18.3317 11.9091 18.3321 11.7573 18.417L6.48144 21.3695C6.10913 21.5779 5.66294 21.2544 5.74609 20.8359L6.92414 14.9066C6.95803 14.7361 6.90134 14.5599 6.77367 14.4419L2.33496 10.3368Z" stroke="#D1630E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>

          </div>
        </motion.div>
        <motion.div
        variants={fadeUp} className="flex w-full flex-wrap items-center justify-between gap-4">
          <div className="h-fit w-auto text-5xl font-extrabold tracking-tighter text-black md:text-6xl lg:w-[50%] lg:text-7xl">
            Why Us ?
          </div>
          <div className="h-fit px-1 pr-9 text-lg tracking-tighter text-gray-800 sm:pr-0">
            <div className="hidden sm:flex sm:gap-1">
              <div>Reliable product builds at a </div>{" "}
              <div>fixed monthly rate. </div>{" "}
            </div>
            <div className="hidden sm:flex sm:gap-1">
              <div>No surprise invoices </div>{" "}
              <div> adapt your engagement as your startup evolves.</div>
            </div>
            <div className="sm:hidden">
              <div>
                Reliable product builds at a fixed monthly rate. No surprise
                invoices
              </div>
              <div>adapt your engagement as your startup evolves.</div>
            </div>
          </div>
        </motion.div>
        
         <motion.div variants={fadeUp}
          className="relative flex h-fit w-full flex-col gap-1.5 rounded-3xl bg-[#E5E5E5] p-2 md:flex-row xl:flex-col xl:gap-1.5">
          <div 
           className="flex w-full flex-col gap-1.5 xl:flex-row">
            <div
           className="flex min-h-60 flex-col justify-between rounded-3xl bg-[#F0F0F0] px-6 py-6 xl:flex-1">
              <div className="w-full">
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 11V15.8002C3 16.9203 3 17.4801 3.21799 17.9079C3.40973 18.2842 3.71547 18.5905 4.0918 18.7822C4.5192 19 5.07899 19 6.19691 19H17.8031C18.921 19 19.48 19 19.9074 18.7822C20.2837 18.5905 20.5905 18.2842 20.7822 17.9079C21 17.4805 21 16.9215 21 15.8036V11M3 11V9M3 11H21M3 9V8.2002C3 7.08009 3 6.51962 3.21799 6.0918C3.40973 5.71547 3.71547 5.40973 4.0918 5.21799C4.51962 5 5.08009 5 6.2002 5H17.8002C18.9203 5 19.4796 5 19.9074 5.21799C20.2837 5.40973 20.5905 5.71547 20.7822 6.0918C21 6.5192 21 7.07899 21 8.19691V9M3 9H21M7 15H11M21 11V9"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-xl font-bold text-black">
                  Predictable Pricing
                </div>
                <div className="text-lg text-gray-900 md:max-w-70">
                  Simple pricing structure that gives unlimited scope
                </div>
              </div>
            </div>
            <div 
            className="flex min-h-60 flex-col justify-between rounded-3xl bg-[#F0F0F0] px-6 py-6 xl:flex-1">
              <div className="w-full">
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 8L17 12L13 16M7 8L11 12L7 16"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-xl font-bold text-black">
                  Fast Turnarounds
                </div>
                <div className="text-lg text-gray-900 md:max-w-70">
                  Quick and reliable results to keep your business moving
                  foward.
                </div>
              </div>
            </div>
            <div
            variants={fadeUp} className="flex min-h-60 flex-col justify-between rounded-3xl bg-[#F0F0F0] px-6 py-6 xl:flex-1">
              <div className="w-full">
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 16H5V21M14 8H19V3M4.58301 9.0034C5.14369 7.61566 6.08244 6.41304 7.29255 5.53223C8.50266 4.65141 9.93686 4.12752 11.4298 4.02051C12.9227 3.9135 14.4147 4.2274 15.7381 4.92661C17.0615 5.62582 18.1612 6.68254 18.9141 7.97612M19.4176 14.9971C18.8569 16.3848 17.9181 17.5874 16.708 18.4682C15.4979 19.3491 14.0652 19.8723 12.5723 19.9793C11.0794 20.0863 9.58606 19.7725 8.2627 19.0732C6.93933 18.374 5.83882 17.3175 5.08594 16.0239"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-xl font-bold text-black">
                  Unlimited Requests
                </div>
                <div className="text-lg text-gray-900 md:max-w-70">
                  We'll handle them one by one or two at a time with Pro plan.
                </div>
              </div>
            </div>
          </div>
          <div
           className="flex w-full flex-col gap-1.5 xl:flex-row">
            <div 
            variants={fadeUp} className="flex min-h-60 flex-col justify-between rounded-3xl bg-[#F0F0F0] px-6 py-6 xl:flex-1">
              <div className="w-full">
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 13L19 16M19 16L16 19M19 16H5M8 11L5 8M5 8L8 5M5 8H19"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-xl font-bold text-black">
                  Direct Communication
                </div>
                <div className="text-lg text-gray-900 md:max-w-70">
                  Direct Communication with teams to make it seemless
                </div>
              </div>
            </div>
            <div 
            variants={fadeUp} className="flex min-h-60 flex-col justify-between rounded-3xl bg-[#F0F0F0] px-6 py-6 xl:flex-1">
              <div className="w-full">
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 15.0002V16.8C3 17.9201 3 18.4798 3.21799 18.9076C3.40973 19.2839 3.71547 19.5905 4.0918 19.7822C4.5192 20 5.07899 20 6.19691 20H21.0002M3 15.0002V5M3 15.0002L6.8534 11.7891L6.85658 11.7865C7.55366 11.2056 7.90288 10.9146 8.28154 10.7964C8.72887 10.6567 9.21071 10.6788 9.64355 10.8584C10.0105 11.0106 10.3323 11.3324 10.9758 11.9759L10.9822 11.9823C11.6357 12.6358 11.9633 12.9635 12.3362 13.1153C12.7774 13.2951 13.2685 13.3106 13.7207 13.1606C14.1041 13.0334 14.4542 12.7275 15.1543 12.115L21 7"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-xl font-bold text-black">Top-Tier</div>
                <div className="text-lg text-gray-900 md:max-w-70">
                  Built with care by a team that treats your brand like their
                  own.
                </div>
              </div>
            </div>
            <div 
            variants={fadeUp} className="flex min-h-60 flex-col justify-between rounded-3xl bg-[#F0F0F0] px-6 py-6 xl:flex-1">
              <div className="w-full">
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 7H17.8486C17.3511 7 17 6.49751 17 6C17 4.34315 15.6569 3 14 3C12.3431 3 11 4.34315 11 6C11 6.49751 10.6488 7 10.1513 7H8C7.44771 7 7 7.44772 7 8V10.1513C7 10.6488 6.49751 11 6 11C4.34315 11 3 12.3431 3 14C3 15.6569 4.34315 17 6 17C6.49751 17 7 17.3511 7 17.8486V20C7 20.5523 7.44771 21 8 21L20 21C20.5523 21 21 20.5523 21 20V17.8486C21 17.3511 20.4975 17 20 17C18.3431 17 17 15.6569 17 14C17 12.3431 18.3431 11 20 11C20.4975 11 21 10.6488 21 10.1513L21 8C21 7.44772 20.5523 7 20 7Z"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-xl font-bold text-black">
                  Problem Solving
                </div>
                <div className="text-lg text-gray-900 md:max-w-70">
                  We resolve your brand challenges with innovative solutions.
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Whyus;
