import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import ReactDOM from "react-dom";
import { useTranslations } from 'next-intl';
function App  ()  {

  const t = useTranslations('CallToAct')

   return (

    <div className='bg-lime-200 flex flex-col justify-center items-center'> 
    <h1 className=' font-bowlbySC text-neutral-600 py-20 text-4xl text-center'>{t('Fragen')}</h1>
    <DotLottieReact
      src="/images/calltoact.lottie"
      loop
      autoplay
  
      className='relative -top-20 w-[85vw] h-[86vh] mx-auto'
    />
</div>
  );

};
export default App

