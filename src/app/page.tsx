import { Footer } from "@/components/Footer/Footer";
import { HeroSection } from "@/components/HeroSection/HeroSection";
import { NavBar } from "@/components/NavBar/NavBar";
import { FilterSection } from "@/components/OfferSection/FilterSection";
import {
  InfoSection,
  OfferSection,
} from "@/components/OfferSection/OfferSection";

export default function Home() {
  return (
    <>
      <div className="bg-[#292046]">
        <img
          className="relative opacity-10 h-[880px] 
          max-md:h-[550px] max-xl:h-[680px]"
          src="images/1.png"
        />
        <div className="absolute top-0   left-0 right-0">
          <NavBar />
          <HeroSection />
        </div>
      </div>
      <FilterSection />
      <InfoSection />
      <OfferSection />
      <Footer />
    </>
  );
}
