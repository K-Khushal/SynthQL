import HeroSection from "@/components/HeroSection";
import SideNavbar from "@/components/SideNavbar";
import SQLBuilder from "@/components/SQLBuilder";

export default function App() {
  return (
    <>
        <main>
            <div className="h-screen flex flex-row">
                <SideNavbar/>
                <div className="p-12">
                    <SQLBuilder/>
                </div>
            </div>
        </main>
    </>
  );
}