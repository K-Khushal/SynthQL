import {SignInButton} from "@clerk/nextjs";
import {GithubIcon, LinkedinIcon, TwitterIcon} from "@/components/Icons";
import React from "react";

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
        <nav className="sticky top-0 glass__bg h-16 py-8 px-4 z-10 w-full">
            <div className="container mx-auto flex flex-row justify-between items-center tracking-wider">
                <a className="font-semibold text-2xl flex items-center" href="/">
                    SynthQL
                </a>
                <div className="flex items-center gap-5 text-2xl font-medium">
                    {SocialLinks.map((link,index) => (
                        <a
                            key={index}
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                            className="text-gray-500 font-medium text-xl underline hover:text-white transition-all duration-300"
                        >
                            {link.icon}
                        </a>

                    ))}
                    <a href="/login">
                        <button
                            className="relative before:shadow-lg flex h-10 items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:bg-white before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 w-max">
                            <span className="relative text-xl font-medium text-black flex items-center">
                                Login
                            </span>
                        </button>
                    </a>
                </div>
            </div>
        </nav>
    );
}