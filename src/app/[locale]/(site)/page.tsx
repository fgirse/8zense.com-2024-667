"use client";

import Footer from "@/src/components/layout/Footer";
import Navbar from "@/src/components/layout/AuthInfo/AuthInfoBar";
import IntroWebside from "@/src/sections/Intro";
import Hero from "@/src/sections/Hero";
import FeatureAnimated from "@/src/sections/FeatureAnimated";
import CollapseCardFeatures from "@/src/sections/ColllapsCardFeatures";
import ColorChangeCards from "@/src/sections/ColorChangeCards";
import CallToAct from "@/src/sections/CallToAct";
import HorizontalScroll from "@/src/components/HorizontalScrollCarousel";
export default function Home() {
  const worker = new Worker('worker.js');

  worker.onerror = function (event) {
    console.error('Error in Web Worker:', event.message);
    // Perform error handling here
  };
  
  worker.postMessage('Some data for the Web Worker');

  return (

    
    <main>
      <div className="bg-[#0D121F] px-[2.5vw] lg:px-[1.vw] text-white">
        <Hero />
      </div>
      <IntroWebside />
      <CollapseCardFeatures />
      <FeatureAnimated />
      <ColorChangeCards />
      <CallToAct />
      <HorizontalScroll />
      <Footer />
    </main>
  );
}
