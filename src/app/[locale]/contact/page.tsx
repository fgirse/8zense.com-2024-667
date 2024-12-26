import Phone from "@/src/components/Illustrationen/email";
import Email from "@/src/components/Illustrationen/email";
import QRCode from "@/public/images/QRCode2.png";
import { Separator } from "@/components/ui/separator";
import React from 'react'
import Image from 'next/image';
import { useTranslations } from 'next-intl'
import LogoEC from"@/public/images/LogoEZ990.svg";
import { unstable_setRequestLocale } from "next-intl/server";
export default function Contact ({
  params: { locale },
}: Readonly<{ params: { locale: string } }>) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('Contact')
  
  return (




    <section className="w-[100%] h-[100vh] bg-neutral-400 flex flex-col items-center">
    <div className='py-20 font-bowlbySC headingB text-7xl lg:text-[8rem] uppercase text-center text-neutral-600'>{t("Title_Contact")}</div>
    <div className='flex flex-col items-center gap-8 w-full max-w-md '>
      <div className='mb-16 w-24 h-24 md:w-54 d:h-60 lg:w-52 lg:h-52'> 
      <Image src={LogoEC} alt="Logo" />
      </div> 
      <div className='grid_Contact text-3xl font-robotoC sm=text-5xl lg:text-[3.222rem] lg:leading-10'>
        <h1 className=" text-center ">{t('Title_Contact')}</h1>
        <h1 className=" text-center ">3 Rue de Blotzheim</h1>
        <h1 className=" text-center ">F-68128-Village-Neuf</h1>
        <h1 className=" text-center">Frankreich</h1>
        <h1 className=" text-center">+33(0)671463942</h1>
        <h1 className=" text-center mb-12">info@8zense.com</h1>

      </div>
    </div>
    </section>
    
  )}