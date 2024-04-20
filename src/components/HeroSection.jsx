

export default function HeroSection() {
    return (
        <main>
            <div className="h-full flex flex-col text-center justify-center items-center text-white pt-28">
                <h1 className="font-bold text-6xl tracking-wider w-[500px]">Generate SQL Queries in seconds with AI</h1>
                <p className="text-gray-400 tracking-wide w-1/2 pt-8 text-xl">AI generates, fixes, explains and optimizes SQL queries. Add database schema, query database directly, and effortlessly train AI to understand it using AI-powered vector search.</p>
                <button className="bg-black/25 px-6 py-2 border border-gray-400 rounded-2xl mt-8">Try now</button>
            </div>
        </main>
    );
}