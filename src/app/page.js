// import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
// import Whyus from "@/components/Whyus";
// import Work from "@/components/Work";
// import Stories from "@/components/Stories";
import Talk from "@/components/Talk";
import Footer from "@/components/Footer"; 
// import Siddu from "@/components/Siddu";
export default function Home() {
  return (
    <div className="w-full h-screen bg-[#F0F0F0]  flex flex-col items-center overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services/>
      {/* <Whyus /> */}
      {/* <Work /> */}
      {/* <Stories/> */}
      <Talk/>
      <Footer/>
      {/* <Siddu /> */}
    </div>
  );
}
