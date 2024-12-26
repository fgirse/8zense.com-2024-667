// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';

import { ColorSchemeScript, MantineProvider, mantineHtmlProps } from '@mantine/core';
import {clsx} from 'clsx';
import {Inter} from 'next/font/google';
import {NextIntlClientProvider} from 'next-intl';
import {useMessages} from 'next-intl';
import {ReactNode} from 'react';
import { ThemeProvider } from "@/src/components/theme-provider";
import "@/src/app/[locale]/globals.css";
import type { Metadata } from "next";
import SupabaseProvider from "@/src/providers/SupabaseProvider";
import UserProvider from "@/src/providers/UserProvider";
import Navigation from "@/src/components/layout/Navbar/navbar"
import AuthInfoBar from "@/src/components/layout/AuthInfo/AuthInfoBar";

//import Navigation from '@/src/components/Navigation';

import {Roboto_Condensed, Architects_Daughter, Bowlby_One_SC } from "next/font/google";
import ScrollToTopButton from '@/src/components/ScrollToTopButton';


const architectsDaughter = Architects_Daughter({


    subsets: ['latin'],

  

    weight: ['400'],

  

      variable: '--font-architectsDaughter',

  

  });

  

  

  const bowlbySC = Bowlby_One_SC({

  

    subsets: ['latin'],

  

    weight: ['400'],

  

    variable: '--font-bowlbySC',

  

  });

  

  const robotoCondensed = Roboto_Condensed({

  

    subsets: ['latin'],

  

    weight: [ '400', ],

  

    variable: '--font-robotoCondensed',

  

  });

type Props = {
  children: ReactNode;
  locale: string;
};

export const metadata: Metadata = {
	title: "8zense.com",
	description: "Landing page for Startup  8zense.com",            
};


export default function BaseLayout({children, locale}: Props) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = useMessages();

  return (
    <html className={`${robotoCondensed.variable} ${bowlbySC.variable} ${architectsDaughter.variable} h-full` } lang={locale} {...mantineHtmlProps}>  
     <head>
        <ColorSchemeScript />
      </head>
      <body className={clsx(robotoCondensed.className, 'flex h-full flex-col')}>
        
        <NextIntlClientProvider messages={messages}>


        <ThemeProvider
					attribute="class"
					defaultTheme="light"
					enableSystem
					disableTransitionOnChange>
					<SupabaseProvider>
						<UserProvider>
              <AuthInfoBar/>
              <Navigation/>
             {children}
              <ScrollToTopButton/>
              </UserProvider>
					</SupabaseProvider>
				</ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

