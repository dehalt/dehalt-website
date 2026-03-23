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
export default function Home() {

  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartAnimation(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);


  if (!startAnimation) {
    return (
      <div className="flex justify-center items-center h-screen w-full text-3xl font-bold  text-gray-300">

        <div className="w-10 h-10 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
      </div>
    )
  }



  return (
    <div className="w-full min-h-screen bg-[#F0F0F0] flex flex-col items-center overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Whyus />
      <Work />
      <Stories/>
      <Talk />
      <Footer />
      {/* <Siddu /> */}
    </div>
  );
}
