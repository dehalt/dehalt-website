"use client";
// import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Whyus from "@/components/Whyus";
import Work from "@/components/Work";
import Stories from "@/components/Stories";
import Talk from "@/components/Talk";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
// import Siddu from "@/components/Siddu";
// Component added by Ansh - github.com/ansh-dhanani
import GradualBlurMemo from "@/components/GradualBlur";


export default function Home() {

  // const [startAnimation, setStartAnimation] = useState(false);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setStartAnimation(true);
  //   }, 500);

  //   return () => clearTimeout(timer);
  // }, []);


  // if (!startAnimation) {
  //   return (
  //     <div className="flex justify-center items-center h-screen w-full text-3xl font-bold  text-gray-300">

  //       <div className="w-10 h-10 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
  //     </div>
  //   )
  // }



  return (
    <div className="w-full min-h-screen bg-[#F0F0F0] flex flex-col items-center overflow-x-hidden">
       
        <div className="fixed top-0 bg-amber-300 h-fit w-full z-10">
          <GradualBlurMemo
          target="parent"
          position="top"
          height="5rem"
          strength={2}
          divCount={5}
          curve="bezier"
          exponential
          opacity={1}
        />
        </div>
     
      <Navbar />
      <Hero />
      <Services />
      <Whyus />
      <Work />
      <Stories />
      <Talk />
      <Footer />
       <div className="fixed bottom-0 bg-amber-300 h-fit w-full z-10">
          <GradualBlurMemo
          target="parent"
          position="bottom"
          height="3rem"
          strength={2}
          divCount={5}
          curve="bezier"
          exponential
          opacity={1}
        />
        </div>
      {/* <Siddu /> */}
    </div>
  );
}
