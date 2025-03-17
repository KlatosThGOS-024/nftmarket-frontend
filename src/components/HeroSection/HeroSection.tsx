import Image from "next/image";
import React from "react";
import { Button } from "../NavBar/Button";

export const HeroSection = () => {
  return (
    <section>
      <div
        className="max-md:p-2 max-sm:w-[475px]  px-[96px]  overflow-x-hidden 
       py-[64px] "
      >
        {" "}
        <div
          className="
          bg-[url('/images/1.png')] bg-cover bg-center  
         opacity-100 brightness-80  max-xl:h-[400px]
          max-sm:w-full rounded-xl 
        mx-auto    "
        >
          {" "}
          <div className="w-full max-sm:w-[500px] flex items-center  justify-center">
            {" "}
            <div className="w-1/2 max-lg:w-full mt-[96px] px-[48px] space-y-[18px]">
              <h3 className="   text-white text-[38px] max-lg:text-[28px]">
                Harry Potter™ x Funko
              </h3>

              <p className="text-white text-[21px] mb-7  max-lg:text-[18px]">
                The redemption period for this collection has already ended, and
                the redemption tokens are no longer redeemable for Pop! vinyl
                figures.
              </p>
              <div className="w-fit flex gap-4">
                {" "}
                <Button
                  prop="Mint Nft"
                  tailwindAttributes={
                    " bg-white/60 px-6 py-4 bg-[#4A4855] text-[21px]"
                  }
                />
                <Button
                  prop="More"
                  tailwindAttributes={
                    " bg-white/60 px-6 py-4 bg-[#4A4855] text-[21px]"
                  }
                />
              </div>
            </div>
            <div className="flex relative w-1/2 max-lg:hidden  py-[48px]">
              <div className=" px-[64px] mb-[96px]">
                {" "}
                <video
                  className="p-10  w-[520px] h-[440px] max-xl:w-[380px] 
                     max-xl:h-[290px] max-xl:-top-7 max-xl:-left-10 
                    max-lg:w-[380px]
                     max-lg:h-[290px] -rotate-11 z-20 absolute "
                  loop
                  autoPlay
                  muted
                  playsInline
                  preload="auto"
                  style={{ display: "block", visibility: "visible" }}
                >
                  <source src="/video/dragonNft.webm" type="video/webm" />
                  Your browser doesn't support the video tag.
                </video>
                <video
                  className="absolute w-[520px] h-[440px]  max-xl:w-[380px]  max-xl:h-[290px]
                    max-lg:w-[380px] max-xl:-top-7 max-xl:left-16 

                     max-lg:h-[290px]  p-8 z-30 left-50"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  style={{ display: "block", visibility: "visible" }}
                >
                  <source src="/video/harryNFT.webm" type="video/webm" />
                  Your browser doesn't support the video tag.
                </video>
                <video
                  className="p-11  w-[520px] h-[440px]  max-xl:w-[380px]  max-xl:h-[290px]
                    max-lg:w-[380px] max-xl:-top-7 max-xl:left-44

                     max-lg:h-[290px] rotate-13 z-20 absolute left-90 "
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  style={{ display: "block", visibility: "visible" }}
                >
                  <source src="/video/VOLDEMORTNft.webm" type="video/webm" />
                  Your browser doesn't support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" absolute top-0"></div>
    </section>
  );
};
