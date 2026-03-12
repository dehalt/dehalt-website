"use client"
import React, { useEffect } from "react";
import {motion,AnimatePresence} from "framer-motion";
import { useState } from "react";


const Talk = () => {
  const container={
    hidden:{},
    show:{
      transition:{
        delay:1,
        staggerChildren:0.2,
      },
    },
  };
  const fadeUp={
    hidden:{opacity:0,y:60},
    show:{
      opacity:1,
      y:0
    },
    transition:{
        duration:0.5,
    },
  }

const [loading, setLoading] = useState(false);

const [data, setData] = useState("");
useEffect(() => {
  if (data) {
    const timer = setTimeout(() => {
      setData("");
    }, 2000);
  }
}, [data]); 


const [table, setTable] = useState({
  yourname: "",
  email: "",
  website: "",
  message: ""
});

const handleChange = (e) => {
  setTable({...table,[e.target.name]: e.target.value });
};

const submit = async (e) => {
  e.preventDefault();
  setLoading(true);
  try {

    const res = await fetch("/api/sendmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(table)
    });

    const result = await res.json();
      
    if (res.ok) {
     
      setData("Message sent");

      setTable({
        yourname: "",
        email: "",
        website: "",
        message: ""
      });

    } else {
      setData("Message not sent ");
    }

  } catch (err) {
    console.log(err);
    setData("Server error ");
  }
  setLoading(false);
};
  return (
    <motion.div
    variants={container}
    initial="hidden"
    whileInView="show"
    viewport={{once:true,amount:0.4}}
    className="relative flex h-fit w-full justify-center border-b border-gray-200 bg-[#F0F0F0]"  id="talk">
      <div className="flex w-[95%] flex-col gap-6 border-r border-l border-gray-200 bg-[#f0f0f0] px-3 pt-10 pb-10 md:px-6 lg:px-8 2xl:w-336">
        <motion.div
        variants={fadeUp}
         className="flex w-fit items-center gap-2 rounded-4xl bg-black py-2 pr-3 pl-4 text-sm font-bold text-white">
          <div>Contact</div>

          <div className="rounded-full bg-black">
            <svg
              width="20"
              height="20"
              viewBox="0 -1 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.3078 13.6923L15.1539 8.84619M20.1113 5.88867L16.0207 19.1833C15.6541 20.3747 15.4706 20.9707 15.1544 21.1683C14.8802 21.3396 14.5406 21.3683 14.2419 21.2443C13.8975 21.1014 13.618 20.5433 13.0603 19.428L10.4694 14.2461C10.3809 14.0691 10.3366 13.981 10.2775 13.9043C10.225 13.8363 10.1645 13.7749 10.0965 13.7225C10.0215 13.6647 9.93486 13.6214 9.76577 13.5369L4.57192 10.9399C3.45662 10.3823 2.89892 10.1032 2.75601 9.75879C2.63207 9.4601 2.66033 9.12023 2.83169 8.84597C3.02928 8.52974 3.62523 8.34603 4.81704 7.97932L18.1116 3.88867C19.0486 3.60038 19.5173 3.45635 19.8337 3.57253C20.1094 3.67373 20.3267 3.89084 20.4279 4.16651C20.544 4.48283 20.3999 4.95126 20.1119 5.88729L20.1113 5.88867Z"
                stroke="#FF5400"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </motion.div>
        <motion.div
        variants={fadeUp} className="flex w-full flex-col gap-3 lg:flex-row lg:gap-7">
          <div className="flex w-full flex-col gap-8 lg:justify-between">
            <div
            className="flex w-full flex-wrap items-center justify-between gap-4 lg:w-fit">
              <div className="h-fit w-auto text-5xl font-extrabold tracking-tighter text-black md:text-6xl lg:w-fit lg:text-7xl">
                Let's Talk.
              </div>
              <div className="h-fit px-1 pr-9 text-lg tracking-tighter text-gray-800 sm:pr-0">
                <div className="hidden sm:flex sm:gap-1">
                  <div>Got questions or ready to </div>
                </div>
                <div className="hidden sm:flex sm:gap-1">
                  <div>
                    start your design project? Let's bring your ideas to life!
                  </div>
                </div>
                <div className="sm:hidden">
                  <div>
                    Got questions or ready to start your design project ? Let's
                    bring your ideas to life!
                  </div>
                </div>
              </div>
            </div>
            <div
             className="flex h-fit w-full flex-col gap-2 rounded-2xl bg-[#E5E5E5] p-2 md:flex-row lg:w-full">
              <div className="flex min-h-45 flex-col justify-between rounded-2xl bg-[#F0F0F0] px-6 py-6 md:w-full xl:flex-1">
                <div className="w-full">
                  <svg
                    width="35"
                    height="35"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 6L10.1076 10.6123L10.1097 10.614C10.7878 11.1113 11.1271 11.3601 11.4988 11.4562C11.8272 11.5412 12.1725 11.5412 12.501 11.4562C12.8729 11.36 13.2132 11.1105 13.8926 10.6123C13.8926 10.6123 17.8101 7.60594 20 6M3 15.8002V8.2002C3 7.08009 3 6.51962 3.21799 6.0918C3.40973 5.71547 3.71547 5.40973 4.0918 5.21799C4.51962 5 5.08009 5 6.2002 5H17.8002C18.9203 5 19.4796 5 19.9074 5.21799C20.2837 5.40973 20.5905 5.71547 20.7822 6.0918C21 6.5192 21 7.07899 21 8.19691V15.8036C21 16.9215 21 17.4805 20.7822 17.9079C20.5905 18.2842 20.2837 18.5905 19.9074 18.7822C19.48 19 18.921 19 17.8031 19H6.19691C5.07899 19 4.5192 19 4.0918 18.7822C3.71547 18.5905 3.40973 18.2842 3.21799 17.9079C3 17.4801 3 16.9203 3 15.8002Z"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="text-lg text-gray-900">Write to us</div>
                  <div className="text-lg font-bold text-black md:max-w-70">
                    contact@dehalt.com
                  </div>
                </div>
              </div>
              <div className="flex min-h-45 flex-col justify-between rounded-2xl bg-[#F0F0F0] px-6 py-6 md:w-full xl:flex-1">
                <div className="w-full">
                  <svg
                    width="35"
                    height="35"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.50246 4.25722C9.19873 3.4979 8.46332 3 7.64551 3H4.89474C3.8483 3 3 3.8481 3 4.89453C3 13.7892 10.2108 21 19.1055 21C20.1519 21 21 20.1516 21 19.1052L21.0005 16.354C21.0005 15.5361 20.5027 14.8009 19.7434 14.4971L17.1069 13.4429C16.4249 13.1701 15.6483 13.2929 15.0839 13.7632L14.4035 14.3307C13.6089 14.9929 12.4396 14.9402 11.7082 14.2088L9.79222 12.2911C9.06079 11.5596 9.00673 10.3913 9.66895 9.59668L10.2363 8.9163C10.7066 8.35195 10.8305 7.57516 10.5577 6.89309L9.50246 4.25722Z"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="text-lg text-gray-900">Call us</div>
                  <div className="text-lg font-bold text-black md:max-w-70">
                    +91 90326 90331
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full rounded-2xl bg-black p-7">
            <form onSubmit={submit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="mb-2 block text-sm text-neutral-400">
                  Your Name <span className="text-white">*</span>
                </label>
                <input
                  autoComplete="off"
                  name="yourname"
                  spellCheck={false}
                  value={table.yourname}
                  onChange={handleChange}
                  type="text"
                  placeholder="Your Name"
                  className="w-full rounded-lg border border-neutral-800 bg-neutral-900 px-4 py-3 text-white placeholder-neutral-500 focus:ring-2 focus:ring-white/20 focus:outline-none required:"
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm text-neutral-400">
                  E-mail <span className="text-white ">*</span>
                </label>
                <input
                    autoComplete="off"
                    spellCheck={false}
                  name="email"
                  value={table.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="Your Email"
                  className="w-full rounded-lg border border-neutral-800 bg-neutral-900 px-4 py-3 text-white placeholder-neutral-500 focus:ring-2 focus:ring-white/20 focus:outline-none required:"
                />
              </div>

              {/* Website */}
              <div>
                <label className="mb-2 block text-sm text-neutral-400">
                  Website <span className="text-white">*</span>
                </label>
                <input
                    autoComplete="off"
                  name="website"
                  spellCheck={false}
                  value={table.website}
                  onChange={handleChange}
                  type="text"
                  placeholder="Your Website"
                  className="w-full rounded-lg border border-neutral-800 bg-neutral-900 px-4 py-3  text-white placeholder-neutral-500 focus:ring-2 focus:ring-white/20 focus:outline-none required:"
                />
              </div>

              {/* Pricing Model */}
              {/* <div>
                <label className="mb-3 block text-sm text-neutral-400">
                  Pricing model
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    className="w-full rounded-lg border border-neutral-800 bg-neutral-900 py-3 text-sm tracking-wide text-white transition hover:bg-neutral-800"
                  >
                    DESIGN RETAINER
                  </button>
                  <button
                    type="button"
                    className="w-full rounded-lg border border-neutral-800 bg-neutral-900 py-3 text-sm tracking-wide text-white transition hover:bg-neutral-800"
                  >
                    SINGLE PROJECT
                  </button>
                </div>
              </div> */}

              {/* Message */}
              <div>
                <label className="mb-2 block text-sm text-neutral-400">
                  Message
                </label>
                <textarea
                  name="message"
                  spellCheck={false}
                  value={table.message}
                  onChange={handleChange}
                  rows="4"
                  type="text"
                  placeholder="Your Message"
                  className="w-full resize-none rounded-lg border border-neutral-800 bg-neutral-900 px-4 py-3 text-white placeholder-neutral-500 focus:ring-2 focus:ring-white/20 focus:outline-none required:"
                />
              </div>
              {/* Submit */}
                <button
                type="submit"
                onClick={submit}
                className="w-full rounded-full bg-neutral-200 py-4 font-bold text-black transition hover:bg-white cursor-pointer "
              >
                {loading ? (<div className="flex items-center justify-center">
                  <div>Sending</div>
          <div className="ml-2 flex ">
            <svg
              width="20"
              height="20"
              viewBox="0 -1 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.3078 13.6923L15.1539 8.84619M20.1113 5.88867L16.0207 19.1833C15.6541 20.3747 15.4706 20.9707 15.1544 21.1683C14.8802 21.3396 14.5406 21.3683 14.2419 21.2443C13.8975 21.1014 13.618 20.5433 13.0603 19.428L10.4694 14.2461C10.3809 14.0691 10.3366 13.981 10.2775 13.9043C10.225 13.8363 10.1645 13.7749 10.0965 13.7225C10.0215 13.6647 9.93486 13.6214 9.76577 13.5369L4.57192 10.9399C3.45662 10.3823 2.89892 10.1032 2.75601 9.75879C2.63207 9.4601 2.66033 9.12023 2.83169 8.84597C3.02928 8.52974 3.62523 8.34603 4.81704 7.97932L18.1116 3.88867C19.0486 3.60038 19.5173 3.45635 19.8337 3.57253C20.1094 3.67373 20.3267 3.89084 20.4279 4.16651C20.544 4.48283 20.3999 4.95126 20.1119 5.88729L20.1113 5.88867Z"
                stroke="#FF5400"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>) : (<div>Get in touch</div>)}
              </button>
            </form>           
          </div>
        </motion.div>
      </div>   
      <AnimatePresence>

                    {data && <div className="absolute right-5 bottom-5 text-white">
          <motion.div
            initial={{opacity:0,x:100}}
            animate={{opacity:1,x:0}}
            exit={{opacity:0,x:100}}
            transition={{duration:0.3}}
            className="bg-black h-13 w-50 flex justify-center items-center rounded-2xl">
            <div>
            {data}
            </div>
          </motion.div>
          </div>}

        </AnimatePresence>       

    </motion.div>  
  );
};
export default Talk;
