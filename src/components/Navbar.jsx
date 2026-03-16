"use client"
import React, { useState } from "react";
import { motion } from "framer-motion";
// import { easeIn, easeOut, motion } from "framer-motion";
// const fadeUp = {
//   hidden: { opacity: 0, y: -30 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.5 },
//   },
// };
const Navbar = () => {

  const [data,setdata]=useState();

  const menu=()=>{
    setdata(!data);
  }
  console.log(data);

  const dehaltref=()=>{
    document.getElementById("dehalt")?.scrollIntoView({
      behavior:"smooth"
    })
  }
  const serviceref=()=>{
    document.getElementById("services")?.scrollIntoView({
      behavior:"smooth"
    })
  }

  const caseref=()=>{
    document.getElementById("cases")?.scrollIntoView({
      behavior:"smooth"
    })
  }

  const aboutref=()=>{
    document.getElementById("about")?.scrollIntoView({
      behavior:"smooth"
    })
  }

  const talkref=()=>{
    document.getElementById("talk")?.scrollIntoView({
      behavior:"smooth"
    })
  }

  return (
    <div className="logo_font fixed z-10 mt-1 flex h-auto w-[90%] items-center justify-between rounded-xl bg-[#f0f0f0]  py-2 text-3xl font-bold text-[#212121] sm:mt-3 sm:w-[90%] sm:py-2.5 lg:mt-5 lg:max-w-fit lg:gap-150 lg:py-3 xl:gap-150">
      <div className="flex items-center gap-2 py-0.5 px-4">
        <motion.span

        className="flex-1 w-8 h-8 overflow-hidden rounded-sm">
                  {" "}
  
        <motion.img src="/images/logo.png" alt="Dehalt Logo" onClick={dehaltref}
          initial={{scale:1.3}}
          whileHover={{scale:1.3}}

        className="cursor-pointer "
       
        
        />

        </motion.span>
        <span>Dehalt</span>
      </div>

      {/* <div className="flex justify-center rounded-sm bg-[#ff6600] p-1.5 lg:hidden mr-4" >
        <svg onClick={dehaltref} 
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 17H19M5 12H19M5 7H19"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
       */}



      {/* <div className="h-[full hidden w-full items-end lg:flex lg:gap-15">
        <div className="text-2xl font-medium cursor-pointer" onClick={serviceref}>Services</div>
        <div className="text-2xl font-medium cursor-pointer" onClick={caseref}>Cases</div>
        <div className="text-2xl font-medium cursor-pointer" onClick={aboutref}>About</div>
      </div> */}
      <div className="hidden w-full items-center gap-2.5 p-0.5 font-bold lg:flex">
        <div className="text-2xl w-fit cursor-pointer" >
          Talk to us
        </div>

        <div className="h-full rounded-sm bg-[#ff6600] p-2 mr-2">
          <svg onClick={talkref} className="cursor-pointer"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 17L17 7M17 7H9M17 7V15"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
            <div className={`h-140 w-full lg:hidden  absolute ${data ? "block" : "hidden"} mt-150`}>
          <div className=' h-42 md:w-auto bg-white mt-3   rounded-lg pt-1 pl-1 pr-1 '>
          <div className='h-12 w-auto bg-gray-100 rounded-md pl-3 pt-3'><h1 className='text-[20px] font-bold' onClick={serviceref}>Services</h1></div>
          <div className='h-12 w-auto bg-gray-100 rounded-md mt-2 pl-3 pt-3'><h1 className='text-[20px]  font-bold' onClick={caseref}>Cases</h1></div>
          <div className='h-12 w-auto bg-gray-100 rounded-md mt-2 pl-3 pt-3'><h1 className='text-[20px]  font-bold' onClick={aboutref}>About</h1></div>
          </div>
          <div className='h-13 w-auto bg-white mt-1 rounded-md pt-1  flex  pr-2 '> 
            <div className='h-11 w-full  flex justify-end items-center text-lg gap-2'>
              <span>Talk to us</span>
              <div className=" rounded-sm bg-[#ff6600] p-2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
              <path
                d="M7 17L17 7M17 7H9M17 7V15"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              </svg>
              </div>
            </div>
          </div>
      </div>
    </div>
  

  

  );
};

export default Navbar;