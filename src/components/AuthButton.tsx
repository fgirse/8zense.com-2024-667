
import { createClient } from "@/src/utils/supabase/client"
import Link from "next/link";
import { redirect } from "next/navigation";
import { useMessages, useTranslations } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";

export default async function AuthButton() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const signOut = async () => {
    "use server";

    const supabase = createClient();
    await supabase.auth.signOut();
    return redirect("/login");
  };

  const t = await getTranslations("authButton");

  return user ? (
    <div className="flex  bg-re agru  items-center gap-2">
      Hey, {user.email}!
      <form action={signOut}>
        <button className="py-2 px-4 rounded-xl no-underline bg-btn-background hover:bg-btn-background-hover">
          Logout
        </button>
      </form>
    </div>
  ) : (
    <Link
      href="/login"
      className="cursor-pointer py-2 px-3 flex h-12 rounded-xl text-3xl no-underline bg-amber-500 hover:bg-amber-600"
    >
      {t("login")}
    </Link>
  );
}
