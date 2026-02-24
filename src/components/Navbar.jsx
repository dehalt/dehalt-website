// "use client"
import React from "react";
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
  return (
    <div className="logo_font fixed z-10 mt-1 flex h-auto w-[90%] items-center justify-between rounded-xl bg-[#f0f0f0] px-4 py-2 text-3xl font-bold text-[#212121] sm:mt-3 sm:w-[90%] sm:py-2.5 lg:mt-5 lg:max-w-fit lg:gap-20 lg:py-3 xl:gap-60">
      <div className="flex items-center gap-1 py-0.5">
        <span className="flex-1">
          {" "}
          <svg
            width="30"
            height="30"
            viewBox="0 0.5 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.9199 17.1583L19.0478 15.5593C19.08 15.1564 19.2388 14.7743 19.5009 14.4667L20.541 13.2449C21.1527 12.527 21.1526 11.4716 20.5409 10.7538L19.5008 9.53271C19.2387 9.2251 19.0796 8.84259 19.0475 8.43972L18.9204 6.84093C18.8453 5.9008 18.0986 5.15403 17.1585 5.07901L15.5594 4.95108C15.1566 4.91893 14.7746 4.76143 14.467 4.49929L13.246 3.45879C12.5282 2.84707 11.4718 2.84707 10.754 3.45879L9.53285 4.49883C9.22525 4.76097 8.84274 4.91981 8.43987 4.95196L6.84077 5.07957M18.9208 17.159C18.8458 18.0991 18.0993 18.8457 17.1591 18.9207M17.1586 18.9197L15.5595 19.0473C15.1567 19.0795 14.7744 19.2376 14.4667 19.4997L13.246 20.5407C12.5282 21.1525 11.4717 21.1525 10.7539 20.5408L9.53316 19.5008C9.22555 19.2386 8.84325 19.0798 8.44038 19.0477L6.84077 18.9197M6.84173 18.9207C5.90159 18.8457 5.15505 18.0991 5.08003 17.159L4.9521 15.5594C4.91995 15.1565 4.76111 14.7742 4.49898 14.4666L3.45894 13.2459C2.84721 12.5281 2.84693 11.4715 3.45865 10.7537L4.49963 9.53301C4.76176 9.22541 4.91908 8.84311 4.95122 8.44024L5.07915 6.84063M5.08003 6.84158C5.15505 5.90145 5.9016 5.15491 6.84173 5.07989"
              stroke="#ff6600"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span>Dehalt</span>
      </div>

      <div className="flex justify-center rounded-sm bg-[#ff6600] p-1.5 lg:hidden">
        <svg
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
      <div className="h-[full hidden w-full items-end lg:flex lg:gap-15">
        <div className="text-2xl font-medium">Services</div>
        <div className="text-2xl font-medium">Cases</div>
        <div className="text-2xl font-medium">About</div>
      </div>
      <div className="hidden w-full items-center gap-2.5 p-0.5 font-bold lg:flex">
        <div className="text-2xl">Talk to us</div>

        <div className="h-full rounded-sm bg-[#ff6600] p-2">
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
  );
};

export default Navbar;
