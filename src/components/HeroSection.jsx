

export default function HeroSection() {
    return (
        <main>
            <div className="h-full flex flex-col text-center justify-center items-center text-white pt-28">
                <h1 className="font-bold text-6xl tracking-wider w-[500px]">Generate SQL Queries in seconds with AI</h1>
                <p className="text-gray-400 tracking-wide w-1/2 pt-8 text-xl">AI generates, fixes, explains and
                    optimizes SQL queries. Add database schema, query database directly, and effortlessly train AI to
                    understand it using AI-powered vector search.</p>
                <div className="sm:flex sm:gap-4 hover:cursor-pointer pt-10">
                    <a
                        className="rounded-3xl bg-gray-600 border border-slate-400 px-8 py-2.5 text-medium font-medium text-white shadow tracking-wide"
                        href="/app"
                    >
                        Try now
                    </a>
                </div>
            </div>
        </main>
    );
}