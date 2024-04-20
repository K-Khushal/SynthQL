import { Inter } from "next/font/google";
import "./globals.css";
import {Providers} from "@/app/Providers";
import Navigation from "@/components/Navigation";
import { ClerkProvider } from '@clerk/nextjs'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SynthQL",
  description: "An AI SQL Query builder",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en" className="bg-[#121212]">
      <body className={`${inter.className} bg-[#121212] text-white dark`}>
      <Providers>
        <Navigation/>
      {children}
      </Providers>
      </body>
    </html>
    </ClerkProvider>
  );
}
