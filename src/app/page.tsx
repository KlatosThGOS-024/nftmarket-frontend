import { FollowerSection } from "@/components/Follower/FollowerSection";
import { Footer } from "@/components/Footer/Footer";
import { HeroSection } from "@/components/HeroSection/HeroSection";
import { NavBar } from "@/components/NavBar/NavBar";
import { NftSection } from "@/components/NFTSection/NftSection";
import { FilterSection } from "@/components/OfferSection/FilterSection";
import {
  InfoSection,
  OfferSection,
} from "@/components/OfferSection/OfferSection";
import { SubscriptionSection } from "@/components/OfferSection/SubscriptionSection";

export default function Home() {
  return (
    <>
      <div className="bg-[#292046] max-sm:w-[475px] ">
        <img
          className="relative opacity-10 h-[880px]  
          max-md:h-[550px] max-xl:h-[680px]"
          src="images/1.png"
        />
        <div className="absolute top-0 left-0 right-0">
          <NavBar />
          <HeroSection />
        </div>
      </div>
      <FilterSection />
      {/*   <NftSection />

      <OfferSection />
      <FollowerSection />
      <SubscriptionSection />
      <Footer /> */}
    </>
  );
}
