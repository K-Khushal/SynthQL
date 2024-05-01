import HeroSection from "@/components/HeroSection";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col gap-36 w-full">
      <HeroSection/>
        <Footer/>
    </div>
  );
}
