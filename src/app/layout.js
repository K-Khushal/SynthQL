import {Yanone_Kaffeesatz} from "next/font/google";
import "./globals.css";
import {ClerkProvider} from '@clerk/nextjs'

const inter = Yanone_Kaffeesatz({subsets: ["latin"]});

export const metadata = {
    title: "SynthQL",
    description: "An AI SQL Query builder",
};

export default function RootLayout({children}) {
    return (
        <ClerkProvider>
            <html lang="en" className="bg-[#121212] text-white">
            <body className={`${inter.className}`}>
            {children}
            </body>
            </html>
        </ClerkProvider>
    );
}
