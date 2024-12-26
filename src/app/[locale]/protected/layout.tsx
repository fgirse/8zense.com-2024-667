import type { Metadata } from "next";
import Footer from "@/src/components/layout/Footer"
import { Roboto_Condensed, Architects_Daughter } from "next/font/google";
//import Navigation_Protected from "@/src/components/Navigation/Menu_Protected";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

const roboto = Roboto_Condensed({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-roboto-condensed",
});

const arch_daughter = Architects_Daughter({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-architects-daughter",
});
export const metadata: Metadata = {
  title: "8zenSe.com",
  description:
    "LandingPage for startup, Interiore Design, Innenarchitektur, Desing Beton-Möbel ",
  icons: { icon: "/assets/images/LogoEZ990.svg" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.className}>
      <body className="bg-background text-foreground">
        <main className="min-h-screen flex flex-col items-center">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
