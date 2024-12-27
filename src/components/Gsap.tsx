/* eslint-disable react/jsx-no-undef */

"use client";

import { gsap } from "gsap";
import Logo from "@/public/images/LogoEZ990.svg";
import Image from "next/image";
import { useEffect } from "react";

const Gsap = () => {
  useEffect(() => {
    gsap.to("#Logo", {
      backgroundColor: "rgba(0,0,0,1)",
      duration: 4.0,
      opacity: 1,
      scale: 1,
      rotate: 360,
      ease: "back",
    });
  }, []);

  return (
    <div className="-mt-12 size-60 sm:size-72 md:size-80 lg:h-[16vh] lg:w-[16vw]">
      <div>
        <Image id="Logo" alt="logo" src={Logo} width="333" />
      </div>
    </div>
  );
};

export default Gsap;
0.