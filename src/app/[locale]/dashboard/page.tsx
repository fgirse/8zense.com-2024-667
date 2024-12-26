import { createServerComponentClient } from '@supabase/auth-helpers-react/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import BentoGrid from "@/src/components/layout/Account/BentoGrid" 


export default async function Profile() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/sign-in');
  }

  return (
    <section>
    <div className="flex flex-col justify-center gap-8 min-w-[10rem] items-center rounded-2xl bg-white py-8 px-4 shadow-md sm:min-w-[24rem] sm:px-10card">
      <h2 className="text-sm bg-red-600/50 rounded-lg py-1 px-3 text-center  text-white lg:text-xl ">Du bist mit folgenden Daten bei 8zense.com angemeldet:</h2>
      </div>
      <div className="flex flex-row  gap-x-5 items-center justify-center">
      
      <code className=" ml-1 text-sm rounded-lg bg-gray-100 p-2 font-mono">{user.email}</code>
      <div className="heading text-sm ">Last Signed In:</div>
      <code className="highlight text-sm">{user?.last_sign_in_at ? new Date(user.last_sign_in_at).toUTCString() : 'N/A'}</code>
      {/*<Link className="bg-neutral-500 text-white text-xl py-2 px-3 rounded-lg hover:bg-amber-500 " href="/">
        Go Home
      </Link>
      */}
      </div>
      <BentoGrid />
      </section>

  );
}
