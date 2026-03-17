"use client";
import React from 'react';

const Footer = () => {
  return (
    
  <div className="w-full bg-[#121212] py-8 px-6">
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 text-gray-400 text-sm font-semibold ">

    
    <div className="flex  gap-6  order-3 lg:order-1">
      <span className='hidden md:inline '>@2026 Dehalt</span>
      <span>Privacy Policy</span>
      <span>Terms and Conditions</span>
     
    </div>
    <div className="flex gap-6 order-4  md:hidden">
      <span>@ 2026 Dehalt</span>
    </div>


       <div className="flex gap-6  order-1 lg:order-2">
        <a href="https://www.linkedin.com/in/akhil-karthik-pilla-a53351263/ target='_blank'">
          <span className='cursor-pointer'>Code By Siddu</span>
        </a>
    </div>
      <div className="flex gap-4 order-2 lg:order-3">

        <a href="http://linkedin.com/company/dehalt/ target='_blank'">
        <svg      
         className="w-15 h-15 md:w-8 md:h-8 rounded-sm cursor-pointer"
          fill="#8b8484" 
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="-143 145 512 512"
          xmlSpace="preserve"
          stroke="#8b8484"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>

          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>

          <g id="SVGRepo_iconCarrier">
            <path d="M329,145h-432c-22.1,0-40,17.9-40,40v432c0,22.1,17.9,40,40,40h432c22.1,0,40-17.9,40-40V185C369,162.9,351.1,145,329,145z M41.4,508.1H-8.5V348.4h49.9V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7c0-15.8,12.1-27.7,30.5-27.7 c18.4,0,29.7,11.9,30.1,27.7C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4 c-14.9,0-23.2,10-27,19.6c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1c3.3-11,21.2-26.6,49.8-26.6 c35.5,0,63.3,23,63.3,72.4V508.1z"></path>
          </g>
        </svg>

        </a>

        </div>
          
          
    </div>
    </div>

  );
};

export default Footer;