import {Yanone_Kaffeesatz} from "next/font/google";
import "./globals.css";
import {Providers} from "@/app/Providers";
import Navigation from "@/components/Navigation";

const inter = Yanone_Kaffeesatz({ subsets: ["latin"] });

export const metadata = {
  title: "SynthQL",
  description: "An AI SQL Query builder",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-[#121212]">
      <body className={`${inter.className} bg-[#121212] text-white dark`}>
      <Providers>
        <Navigation/>
      {children}
      </Providers>
      </body>
    </html>
  );
}
