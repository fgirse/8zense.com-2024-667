"use client";
import { Button } from "@/src/components/ui/button";
import { useUser } from "@/src/hooks/useUser";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import LogoEZ from "@/public/images/LogoEZ990.svg";

export default function Authinfobar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const supabaseClient = useSupabaseClient();

  const { user } = useUser();

  const handleLogout = async () => {
    const { error } = await supabaseClient.auth.signOut();
    if (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full  bg-neutral-400 shadow text-neutral-800 py-4 mx-auto max-w-9xl  px-4 sm:px-6 lg:px-8">
      <div className="lg:backdrop-brightness-200 flex items-center justify-start gap-10">
        <Link
          href="/"
          aria-label="8zense.com"
          title="8zense.com"
          className="inline-flex items-center"
          prefetch={false}
        >
          <div className=" w-16 h-16 ">
            <Image src={LogoEZ} alt="Logo" width="80" height="80" />
          </div>

          <div className="hidden py-3 ml-3 md:block w-[10vw] md:py-2">
            <h1 className="  text-neutral-500 font-bowlbySC">8zense.com</h1>
          </div>
        </Link>

        <div className="bg-slate-400 lg:flex items-center gap-x-4 ">
          {!user ? (
            <>
              <div className=" text-xl border-l border-r text-white bg-slate-800 hover:bg-red-800 text-neutral uppercase w-[20vw] text-center py-5 px-3 ">
                <Link href="/sign-in">Login</Link>
              </div>
            </>
          ) : (
            <>
              <div className=" w-full bg-[#bbbbbb] lg:h-16 ">
                {/*<Image src={Grafik} alt="grafik" width="500"  />*/}
              </div>
              <div className="w-full bg-neutral-400 flex flex-row items-center justify-end bg-neutral-300/50 gap-">
                <div className="w-full  text-center bg-[#d3d355] uppercase text-lg lg:text-xl text-white border-l border-r py-5 px-3 hover:bg-amber-400">
                  <Link href="/dashboard">Dashboard</Link>
                </div>
                <div
                  className="w-full text-center bg-[#d39c55] uppercase text-lg lg:text-xl text-white border-l border-r py-5 px-3 hover:bg-amber-400"
                  onClick={handleLogout}
                >
                  Logout
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
