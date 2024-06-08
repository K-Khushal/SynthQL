
import SideNavbar from "@/components/SideNavbar";
import PromptSection from "@/components/PromptSection";

export default function App() {
    return (
        <>
            <main className="flex flex-row">
                <div className="min-h-screen max-h-full w-64">
                    <SideNavbar/>
                </div>
                <div className="flex flex-col justify-center items-center flex-grow p-10">
                    <PromptSection/>
                </div>
            </main>
        </>
    );
}