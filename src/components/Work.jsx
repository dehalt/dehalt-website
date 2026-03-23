"use client";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Work = () => {
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [close, setclose] = useState(false);
  const [left, setleft] = useState(false);
  const [right, setright] = useState(false);
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
      className="relative flex h-fit w-full justify-center border-b border-gray-200 bg-[#F0F0F0]"
      id="cases"
    >
      <div className="flex w-[95%] flex-col gap-6 border-r border-l border-gray-200 bg-[#f0f0f0] px-3 pt-10 pb-10 md:px-6 lg:px-8 2xl:w-376">
        <motion.div
          variants={fadeUp}
          className="flex w-fit items-center gap-2 rounded-4xl bg-black py-2 pr-3 pl-4 text-sm font-bold text-white"
        >
          <div>Work</div>

          <div className="rounded-full bg-black">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
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
          variants={fadeUp}
          className="flex w-full flex-wrap items-center justify-between gap-4"
        >
          <div className="h-fit w-auto text-5xl font-extrabold tracking-tighter text-black md:text-6xl lg:w-[50%] lg:text-7xl">
            Selected Work.
          </div>
          <div className="h-fit px-1 pr-9 text-lg tracking-tighter text-gray-800 sm:pr-0">
            <div className="hidden sm:flex sm:gap-1">
              <div>A look at some of the brands </div>{" "}
            </div>
            <div className="hidden sm:flex sm:gap-1">
              {" "}
              <div>we've helped - and the </div>
              <div>outcomes we've delivered. </div>{" "}
            </div>
            <div className="sm:hidden">
              <div>
                A look at some of the brands we've helped - and the outcomes
                we've delivered.
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={fadeUp}
          className="relative flex h-fit w-full flex-col gap-2 rounded-3xl md:flex-row xl:flex-col xl:gap-1.5"
        >
          <div className="flex w-full flex-col gap-2 xl:flex-row">
            <motion.div
              initial={{ backgroundSize: "130%" }}
              whileHover={{ backgroundSize: "120%" }}
              transition={{ duration: 0.5 }}
              onHoverStart={() => setOpen(true)}
              onHoverEnd={() => setOpen(false)}
              className="relative flex min-h-80 flex-col justify-end overflow-hidden rounded-3xl bg-[#F0F0F0] bg-[url('/images/work3.jpeg')] bg-cover bg-center p-2 lg:min-h-120 xl:flex-1"
            >
              <AnimatePresence>
                {open && (
                  <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 100 }}
                    transition={{ duration: 0.3 }}
                    className="bottom-2 flex w-full justify-between rounded-xl bg-[#F0F0F0] py-1.5 pr-1.5 pl-5"
                  >
                    <div className="flex flex-col">
                      <div className="text-xl font-bold text-black">
                        Stackwise
                      </div>
                      <div className="text-gray-900">Design & Devlopment</div>
                    </div>
                    <div className="flex rounded-lg bg-black p-3">
                      <svg
                        width="35"
                        height="35"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.1718 14.8288L14.8287 9.17192M7.05086 11.293L5.63664 12.7072C4.07455 14.2693 4.07409 16.8022 5.63619 18.3643C7.19829 19.9264 9.7317 19.9259 11.2938 18.3638L12.7065 16.9498M11.2929 7.05L12.7071 5.63579C14.2692 4.07369 16.8016 4.07397 18.3637 5.63607C19.9258 7.19816 19.9257 9.73085 18.3636 11.2929L16.9501 12.7071"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
            <motion.div
              initial={{ backgroundSize: "130%" }}
              whileHover={{ backgroundSize: "120%" }}
              transition={{ duration: 0.5 }}
              onHoverStart={() => setclose(true)}
              onHoverEnd={() => setclose(false)}
              className="relative flex min-h-80 flex-col justify-end overflow-hidden rounded-3xl bg-[#F0F0F0] bg-[url('/images/work4.jpeg')] bg-cover bg-center p-2 lg:min-h-120 xl:flex-1"
            >
              <AnimatePresence>
                {close && (
                  <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 100 }}
                    transition={{ duration: 0.3 }}
                    className="bottom-2 flex w-full justify-between rounded-xl bg-[#F0F0F0] py-1.5 pr-1.5 pl-5"
                  >
                    <div className="flex flex-col">
                      <div className="text-xl font-bold text-black">
                        Stackwise
                      </div>
                      <div className="text-gray-900">Design & Devlopment</div>
                    </div>
                    <div className="flex rounded-lg bg-black p-3">
                      <svg
                        width="35"
                        height="35"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.1718 14.8288L14.8287 9.17192M7.05086 11.293L5.63664 12.7072C4.07455 14.2693 4.07409 16.8022 5.63619 18.3643C7.19829 19.9264 9.7317 19.9259 11.2938 18.3638L12.7065 16.9498M11.2929 7.05L12.7071 5.63579C14.2692 4.07369 16.8016 4.07397 18.3637 5.63607C19.9258 7.19816 19.9257 9.73085 18.3636 11.2929L16.9501 12.7071"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
          <div className="flex w-full flex-col gap-2 xl:flex-row">
            <motion.div
              initial={{ backgroundSize: "130%" }}
              whileHover={{ backgroundSize: "120%" }}
              transition={{ duration: 0.5 }}
              onHoverStart={() => setleft(true)}
              onHoverEnd={() => setleft(false)}
              className="relative flex min-h-80 flex-col justify-end overflow-hidden rounded-3xl bg-[#F0F0F0] bg-[url('/images/work1.jpeg')] bg-cover bg-center p-2 lg:min-h-120 xl:flex-1"
            >
              <AnimatePresence>
                {left && (
                  <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 100 }}
                    transition={{ duration: 0.3 }}
                    className="bottom-2 flex w-full justify-between rounded-xl bg-[#F0F0F0] py-1.5 pr-1.5 pl-5"
                  >
                    <div className="flex flex-col">
                      <div className="text-xl font-bold text-black">
                        Stackwise
                      </div>
                      <div className="text-gray-900">Design & Devlopment</div>
                    </div>
                    <div className="flex rounded-lg bg-black p-3">
                      <svg
                        width="35"
                        height="35"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.1718 14.8288L14.8287 9.17192M7.05086 11.293L5.63664 12.7072C4.07455 14.2693 4.07409 16.8022 5.63619 18.3643C7.19829 19.9264 9.7317 19.9259 11.2938 18.3638L12.7065 16.9498M11.2929 7.05L12.7071 5.63579C14.2692 4.07369 16.8016 4.07397 18.3637 5.63607C19.9258 7.19816 19.9257 9.73085 18.3636 11.2929L16.9501 12.7071"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
            <motion.div
              initial={{ backgroundSize: "130%" }}
              whileHover={{ backgroundSize: "120%" }}
              transition={{ duration: 0.5 }}
              onHoverStart={() => setright(true)}
              onHoverEnd={() => setright(false)}
              className="relative flex min-h-80 flex-col justify-end overflow-hidden rounded-3xl bg-[#F0F0F0] bg-[url('/images/work2.jpeg')] bg-cover bg-center p-2 lg:min-h-120 xl:flex-1"
            >
              <AnimatePresence>
                {right && (
                  <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 100 }}
                    transition={{ duration: 0.3 }}
                    className="bottom-2 flex w-full justify-between rounded-xl bg-[#F0F0F0] py-1.5 pr-1.5 pl-5"
                  >
                    <div className="flex flex-col">
                      <div className="text-xl font-bold text-black">
                        Stackwise
                      </div>
                      <div className="text-gray-900">Design & Devlopment</div>
                    </div>
                    <div className="flex rounded-lg bg-black p-3">
                      <svg
                        width="35"
                        height="35"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.1718 14.8288L14.8287 9.17192M7.05086 11.293L5.63664 12.7072C4.07455 14.2693 4.07409 16.8022 5.63619 18.3643C7.19829 19.9264 9.7317 19.9259 11.2938 18.3638L12.7065 16.9498M11.2929 7.05L12.7071 5.63579C14.2692 4.07369 16.8016 4.07397 18.3637 5.63607C19.9258 7.19816 19.9257 9.73085 18.3636 11.2929L16.9501 12.7071"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Work;
