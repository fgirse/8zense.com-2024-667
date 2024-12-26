import Image from "next/image";
//import LogoEZ from "@/src/components/EZLogo";
import React from "react";
import Logo01 from "@/public/images/LogoEZ990.svg";
import ArchGrafik from "@/public/images/grafik70.png";
import "./about.module.css";
import Tools from "@/src/components/Tools";
import Hook from "@/src/components/Hackchen.js";
import Arrow from "@/public/images/arrow06.svg";
import { transform } from "next/dist/build/swc";
import Signature from "@/public/images/unterschrift.svg";
import styles from "./about.module.css";
import Projekt from "@/public/images/Hotel-SaoPaulo.png";
import { Button } from "@/src/components/ui/button";
import SpringModal from "@/src/components/SpringModal";
import Portrait01 from "@/public/images/Portrait01.jpeg";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

export default function Whoweare({
  params: { locale },
}: Readonly<{ params: { locale: string } }>) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("Whoweare");

  return (
    <>
      <section className="mx-auto min-h-screen w-[100%]">
        <div className="flex flex-col items-center justify-center container">
          <h1 className="w-[100vw] py-1 text-center text-xs md:text-sm lg:text-xl bg-slate-900 p-1 font-bold text-white uppercase">
            {t("präTitle")}
          </h1>

          <div className="relative top-3 w-28 h-28">
            <Image src={Logo01} alt="Logo 8zense" sizes="100vw" fill />
          </div>

          {/*<h1 className='text-3xl font-bold text-zenseGrey md:mt-72'>8zense.com</h1>*/}

          <div className="mt-3 relative w-44 h-44 md:w-60 md:h-60 lg:w-72 lg:h-72">
            <Image
              src={Portrait01}
              alt="Portrait"
              sizes="100vw"
              className="rounded-full"
              fill
            />
          </div>

          <div className="relative w-80 h-20 lg:w-[33vw]">
            <Image
              src={Signature}
              alt="Signature"
              sizes="100vw"
              className="rounded-full"
              fill
            />
          </div>
          <p className="w-36 text-xs md:text-sm  lg:text-xl text-center">
            Fernanda Pereira
          </p>

          <h1 className="mt-12 text-amber-500 text-[2.336rem] uppercase font-bowlbySC text-center leading-10 sm:mt-600 md:text-8xl lg:mt-1 lg:text-[6rem]">
            {t("Title_Whoweare")}
          </h1>

          <h2 className="mb-3 mt-3 text-[1.25rem] md:text-[2.33rem] lg:text-[4rem]">
            {t("SubTitle_Whoweare")}
          </h2>

          <div className="mx-5 rounded-xl bg-gradient-to-b from-gray-300 via-gray-200 to-zinc-50 mb-16">
            <p className="text-base text:justify px-7 text-justify   md:text-lg text-slate-700 my-4 md:my-6 lg:text-2xl">
              <span className="text-orange">8zense.com</span>{" "}
              {t("Text_Whoweare")}
            </p>
          </div>                                                                    

          <div className="flex flex-col items-center w-28 h-28 lg:w-[33vw] lg:h-[33vh]                                                          transform scale-110 lg:w-20vw lg:text-6xl">
            <Image src={Arrow}  alt="pfeil" />
          </div>

          <section className="mt-28">
            <div className="flex flex-row items-baseline justify-start">
              <h1 className="font-bowlbySC text-left uppercase text-gray-600 leading-3 text-4xl md:text-9xl lg:text-[10rem]">
                design{""}
              </h1>

              <span className=" text-center bg-yellow-500 ml-5 h-16 w-16 lg:w-60 lg:h-60 py-2 px-3 rounded-full text-neutral-50 text-5xl lg:text-[14rem]">
                &#x2714;
              </span>
            </div>
          </section>

          <section className="mt-12">
            <div className="flex flex-row items-baseline justify-start">
              <h1 className="font-bowlbySC text-left uppercase text-gray-600 leading-3 text-4xl md:text-9xl lg:text-[10rem]">
                individuell{""}
              </h1>

              <span className=" text-center bg-yellow-500 ml-5 h-16 w-16 lg:w-60 lg:h-60 py-2 px-3 rounded-full text-neutral-50 text-5xl lg:text-[14rem]">
                &#x2714;
              </span>
            </div>
          </section>
          
          <section className="mt-12">
            <div className="flex flex-row items-baseline justify-start">
              <h1 className="font-bowlbySC text-left uppercase text-gray-600 leading-3 text-4xl md:text-9xl lg:text-[10rem]">
                exclusive{""}
              </h1>

              <span className=" text-center bg-yellow-500 ml-5 h-16 w-16 lg:w-60 lg:h-60 py-2 px-3 rounded-full text-neutral-50 text-5xl lg:text-[14rem]">
                &#x2714;
              </span>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
