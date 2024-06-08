import {GithubIcon, LinkedinIcon, TwitterIcon} from "@/components/Icons";
import React from "react";
import {SignedIn, SignedOut, UserButton} from "@clerk/nextjs";

export default function Navigation() {

    const SocialLinks = [
        {
            name: "Twitter",
            href: "https://twitter.com/KhushalK_dev",
            icon: <TwitterIcon/>,
        },
        {
            name: "Linkedin",
            href: "https://www.linkedin.com/in/khushal-khandelwal/",
            icon: <LinkedinIcon/>,
        },
        {
            name: "Github",
            href: "https://github.com/K-Khushal/",
            icon: <GithubIcon/>,
        },
    ];
    return (
        <nav className="h-16 py-8 px-4 w-full">
            <div className="container mx-auto flex flex-row justify-between items-center tracking-wider">
                <a className="font-semibold text-3xl flex items-center" href="/">
                    SynthQL
                </a>
                <div className="flex items-center justify-between gap-5 text-2xl font-medium">
                    {SocialLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                            className="text-gray-500 text-xl hover:text-white transition-all duration-300"
                        >
                            {link.icon}
                        </a>

                    ))}
                    <div className="flex items-center pl-1">
                        <SignedOut>
                            <a href="/sign-in">
                                <button
                                    className="relative before:shadow-lg flex py-2 px-8 items-center justify-center before:absolute before:inset-0 before:rounded-full before:bg-white before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 w-max">
                            <span className="relative text-xl font-semibold text-black">
                                Login
                            </span>
                                </button>
                            </a>
                        </SignedOut>
                        <SignedIn>
                            <UserButton afterSignOutUrl="/" appearance={{
                                variables: {
                                    fontFamily: "Sans-serif",
                                    fontWeight: "bold",
                                },
                                elements: {
                                    userButtonAvatarBox: {
                                        width: "42px", // Adjust the size to your preference
                                        height: "42px",
                                    },
                                },
                            }}/>
                        </SignedIn>
                    </div>
                </div>
            </div>
        </nav>
    );
}