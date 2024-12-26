'use client'


import Link from 'next/link'
import Image from 'next/image';
import { MenuIcon } from 'lucide-react'
import { Button } from '@/src/components/ui/button'
import MobileMenu from '@/src/components/layout/Navbar/mobile-menu';
import NavDropdown from '@/src//components/layout/Navbar/nav-dropdown';
import { getMessages } from '@/lib/geMssages';
import LocaleSwitcher from '@/src/components/LocaleSwitcher';
import { GetStaticProps, GetStaticPaths } from 'next';


import { useTranslations } from 'next-intl';
export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params?.locale) {
    return {
      notFound: true,
    };
  }

  const messages = await getMessages(params.locale);
  return {
    props: {
      messages,
    },
  };
};

export default function Navbar({ }) {
  const  t  = useTranslations("Navbar");  

  const navItems = [
    { title: t('home'), href: '/' },
    {
      title: t('about'),
      items: [
        { title: t('whoweare'), href: '/about/whoweare' },
        { title: t('whatwedo'), href: '/about/whatwedo' },
        { title: t('cv'), href: '/about/Curriculum' },
      ],
    },
    { title: t('galery'), href: '/galery' },
    { title: t('Services'), href: '/services' },
    { title: t('contact'), href: '/contact' },
    {
      title: t('rechtliches'),
      items: [
        { title: t('impressum'), href: '/Rechtliches/impressum' },
        { title: t('datenschutz'), href: '/Rechtliches/datenschutz' },
        { title: t('cookies'), href: '/Rechtliches/cookies' },
        { title: t('agb'), href: '/Rechtliches/agb' },
      ],
    },
  ];

  return (
           
    <nav className="bg-neutral-500 shadow text-neutral-50 lg:text-2xl">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <div className=' ml-5 flex flex-row justify-center items-center'>
                <LocaleSwitcher />
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navItems.map((item) => (
                item.items ? (
                  <NavDropdown key={item.title} title={item.title} items={item.items} />
                ) : (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="inline-flex items-center px-1 pt-1 font-medium text-gray-50 hover:text-red-800  hover:transform translate-x-3   lg:text-2xl uppercase"
                  >
                    {item.title}
                  </Link>
                )
              ))}
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">




          </div>
          <div className="flex items-center sm:hidden">
            <MobileMenu navItems={navItems} />
          
          </div>
        </div>
      </div>
    </nav>
  )
}