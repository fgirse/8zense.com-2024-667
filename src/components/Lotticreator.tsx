"use client";

import React from "react";
import { useLottie } from "lottie-react";
import groovyWalkAnimation from "@/public/images/space02.svg";
import Lottie from "lottie-react";

const App = () => (
  <Lottie
    className="bg-neutral-700"
    animationData={groovyWalkAnimation}
    loop={false}
  />
);

export default App;
