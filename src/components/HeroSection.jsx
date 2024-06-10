import {ClerkIcon, GithubIcon, NextIcon, ReactIcon, Tailwind} from "@/components/Icons";

export default function HeroSection() {

    const TechStack = [
        {
            name: "Next.js",
            icon: <NextIcon/>,
        },
        {
            name: "React.js",
            icon: <ReactIcon/>,
        },
        {
            name: "Tailwind CSS",
            icon: <Tailwind/>,
        },
        {
            name: "Clerk",
            icon: <ClerkIcon/>
        }
    ]
    return (
        <main className="container mx-auto px-4">
            <section className="relative md:pt-24 pt-20">
                <div className="flex flex-col items-center text-center mx-auto max-w-5xl tracking-wide">
                    <p className="text-gray-400 font-sans font-semibold border border-gray-400 rounded-full w-max px-3 py-1 text-sm mx-auto cursor-pointer hover:text-white hover:border-white transition-colors duration-300">build
                        better. build faster.</p>
                    <h1 className="text-white font-bold text-3xl sm:text-5xl lg:text-7xl mt-5">Generate SQL Queries in
                        seconds with AI
                        <span className="inline-block mt-4 -rotate-2 bg-gray-200/10 text-white px-4 py-2 rounded ml-2">
                                <span className="block rotate-2"> Text to SQl</span>
                            </span>
                    </h1>
                    <h5 className="mt-6 max-w-2xl mx-auto font-medium text-gray-500">
                        AI generates, fixes, explains and optimizes SQL queries. Add database schema, query database
                        directly, and effortlessly train AI to understand it using AI-powered vector search.
                    </h5>
                    <div className="mt-7 flex flex-wrap justify-center items-center gap-4">
                        <a className="relative before:shadow-lg flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-xl before:bg-gray-800 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                           href="/app">
                            <span className="relative text-base font-semibold text-white">Try Now</span>
                        </a>
                    </div>
                    <div className="flex flex-col justify-center flex-wrap items-center gap-2 mt-20">
                        <p className="text-gray-200 font-medium md:text-base text-sm tracking-wider">Made by using</p>
                        <div className="flex justify-center flex-wrap items-center gap-5">
                            {TechStack.map((tech, index) => (
                                <div key={index}>
                                    {tech.icon}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}