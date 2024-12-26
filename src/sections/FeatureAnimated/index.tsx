"use client";
import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { Link, Locale } from "@/src/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import getMessages from "next-intl/server";

interface Step {
  id: number;
  text: string;
  animation: string;
}

const locale: string = "en-US";

export default function HowItWorks() {
  const t = useTranslations("HowItWorks");

  const [step, setStep] = useState<number>(0);

  const steps: Step[] = [
    {
      id: 1,
      text: t("text_01"),
      animation:
        "https://lottie.host/e90fc516-078a-4e65-ac43-ab5a7b1bc4ed/W6DDrvJFL3.json",
    },
    {
      id: 2,
      text: t("text_02"),
      animation:
        "https://lottie.host/57443a3d-e280-4f39-9134-86d96cd8f28f/ohtp2XVGjS.json",
    },
    {
      id: 3,
      text: t("text_03"),
      animation:
        "https://lottie.host/78373cd4-e991-482b-8f25-e897acb9bbb8/V0IaYYRt3A.json",
    },
    {
      id: 4,
      text: t("text_04"),
      animation:
        "https://assets3.lottiefiles.com/private_files/lf30_p9it5a2a.json",
    },
    {
      id: 5,
      text: t("text_05"),
      animation:
        "https://lottie.host/d969d744-bf03-4aa4-90ac-50f9c5dda9b5/P36NGczhaX.json",
    },

    {
      id: 6,
      text: t("text_06"),
      animation:
        "https://lottie.host/59703381-ed25-463c-913f-7cd163db2aa7/uF1vDxwgIZ.json",
    },
  ];

  const handleStepChange = useCallback(() => {
    setStep((prevStep) => (prevStep + 1) % steps.length);
  }, [steps.length]);

  useEffect(() => {
    const interval = setInterval(handleStepChange, 7000);
    return () => clearInterval(interval);
  }, [handleStepChange]);

  return (
    <>
      <h1 className="text-center bg-black uppercase text-xl text-white lg:py-5">
        {t("Howitworks")}
       
      </h1>
      <h1 className="mt-7 text-center text-xl"> {t('Prozesse')} </h1>
      <motion.div
        className=" flex flex-col "
        key={steps[step].id} // Add a unique key to trigger motion animation on step change
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0.5 }}
        transition={{
          duration: 1, // Adjust the duration as desired
        }}
      >
        <div className=" flex flex-col items-center justify-center">
          <div className=" grid-cols-2 gap-8">
            <p className="mb-12 text-sm md:text-base text-slate-800 font-light leading-relaxed text-center"></p>
            
            <Player
              autoplay
              loop
              src={steps[step].animation}
              style={{ height: "", width: "100%", marginBottom: "3vh" }}
            />
          </div>
          <p className="h-24 w-96 relative')]  text-sm px-6 text-slate-900 font-light mb-4 text-center">
            {steps[step].text}
          </p>
        </div>
      </motion.div>
    </>
  );
}
