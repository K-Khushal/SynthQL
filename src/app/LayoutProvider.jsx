// Use the client directive for using usePathname hook.
'use client'

// Use usePathname for catching route name.
import { usePathname } from 'next/navigation';
import Navigation from "@/components/Navigation";

export const LayoutProvider = ({ children }) => {
    const pathname = usePathname();
    return (
        <>
            {pathname === "/" && <Navigation/>}
            {children}
        </>
    )
};