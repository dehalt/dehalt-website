import React from "react";

const Stories = () => {
  return (
    <div className="relative flex h-fit w-full justify-center border-b border-gray-200 bg-[#F0F0F0]">
      <div className="flex w-[95%] flex-col gap-6 border-r border-l border-gray-200 bg-[#f0f0f0] px-3 pt-10 pb-10 md:px-6 lg:px-8 2xl:w-336">
        <div className="flex w-fit items-center gap-2 rounded-4xl bg-black py-2 pr-3 pl-4 text-sm font-bold text-white">
          <div>Reviews</div>

          <svg
            width="20"
            height="20"
            viewBox="0 -1 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 17C17.6569 17 19 15.6569 19 14V12.0001M19 12.0001V8.59847C19 8.03951 19 7.7596 18.8911 7.5459C18.7952 7.35774 18.6419 7.20487 18.4537 7.10899C18.2398 7 17.9602 7 17.4001 7H15.6001C15.04 7 14.7598 7 14.5459 7.10899C14.3577 7.20487 14.2049 7.35774 14.109 7.5459C14 7.75981 14 8.04005 14 8.6001V10.4001C14 10.9602 14 11.2398 14.109 11.4537C14.2049 11.6419 14.3577 11.7952 14.5459 11.8911C14.7596 12 15.0395 12 15.5985 12L19 12.0001ZM7 17C8.65685 17 10 15.6569 10 14L10 12.0001M10 12.0001V8.59846C10 8.0395 10 7.7596 9.89111 7.5459C9.79524 7.35774 9.64186 7.20487 9.4537 7.10899C9.23979 7 8.96015 7 8.4001 7H6.6001C6.04005 7 5.75981 7 5.5459 7.10899C5.35774 7.20487 5.20487 7.35774 5.10899 7.5459C5 7.75981 5 8.04005 5 8.6001V10.4001C5 10.9602 5 11.2398 5.10899 11.4537C5.20487 11.6419 5.35774 11.7952 5.5459 11.8911C5.7596 12 6.0395 12 6.59845 12L10 12.0001Z"
              stroke="#FF5400"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="flex w-full flex-wrap items-center justify-between gap-4">
          <div className="h-fit w-auto text-5xl font-extrabold tracking-tighter text-black md:text-6xl lg:w-[50%] lg:text-7xl">
            Success stories.
          </div>
          <div className="h-fit px-1 pr-9 text-lg tracking-tighter text-gray-800 sm:pr-0">
            <div className="hidden sm:flex sm:gap-1">
              <div>Discover how our design subscription helps </div>{" "}
            </div>
            <div className="hidden sm:flex sm:gap-1">
              {" "}
              <div>innovative brands grow smarter and faster. </div>
            </div>
            <div className="sm:hidden">
              <div>
                Discover how our design subscription helps innovative brands
                grow smarter and faster.
              </div>
            </div>
          </div>
        </div>
        <div className="no-scrollbar flex w-full gap-3 overflow-x-auto py-4">
          <div className="flex aspect-square w-[95%] max-w-200 shrink-0 flex-col justify-between rounded-2xl bg-white p-[7%] shadow-md transition-all duration-300 md:aspect-auto md:h-fit md:max-h-90 md:max-w-130 md:gap-20 md:p-10">
            <div className="md: flex h-fit items-center border-l-2 border-black pl-7 text-xl font-bold sm:text-3xl">
              "We saw 200% increase in Sales Qualified Leads"
            </div>

            <div className="flex w-full items-center gap-5 sm:h-20 md:h-15">
              <div className="aspect-square h-full rounded-full bg-red-300 bg-[url('/images/profile.png')] bg-cover bg-center"></div>
              <div className="flex flex-col sm:gap-1">
                <div className="text-full font-bold text-black">
                  Reza Schott
                </div>
                <div className="text-full text-gray-900">Head of Marketing</div>
              </div>
            </div>
          </div>
          <div className="flex aspect-square w-[95%] max-w-200 shrink-0 flex-col justify-between rounded-2xl bg-white p-[7%] shadow-md transition-all duration-300 md:aspect-auto md:h-fit md:max-h-100 md:max-w-130 md:gap-20 md:p-10">
            <div className="md: flex h-fit items-center border-l-2 border-black pl-7 text-xl font-bold sm:text-3xl">
              "I know exactly what I can expect from the Dapper team. They move
              fast, deliver good quality, and make clear decisions."
            </div>

            <div className="flex w-full items-center gap-5 sm:h-20 md:h-15">
              <div className="aspect-square h-full rounded-full bg-red-300 bg-[url('/images/profile2.png')] bg-cover bg-center"></div>
              <div className="flex flex-col sm:gap-1">
                <div className="text-full font-bold text-black">
                  Reza Schott
                </div>
                <div className="text-full text-gray-900">Head of Marketing</div>
              </div>
            </div>
          </div>
          <div className="flex aspect-square w-[95%] max-w-200 shrink-0 flex-col justify-between rounded-2xl bg-white p-[7%] shadow-md transition-all duration-300 md:aspect-auto md:h-fit md:max-h-90 md:max-w-130 md:gap-20 md:p-10">
            <div className="md: flex h-fit items-center border-l-2 border-black pl-7 text-xl font-bold sm:text-3xl">
              "This is the first marketing agency I've worked with where I see
              results."
            </div>

            <div className="flex w-full items-center gap-5 sm:h-20 md:h-15">
              <div className="aspect-square h-full rounded-full bg-red-300 bg-[url('/images/profile3.png')] bg-cover bg-center"></div>
              <div className="flex flex-col sm:gap-1">
                <div className="text-full font-bold text-black">
                  Reza Schott
                </div>
                <div className="text-full text-gray-900">Head of Marketing</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stories;
