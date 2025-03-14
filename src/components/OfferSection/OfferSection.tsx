"use client";
import { RiNftLine } from "react-icons/ri";
import { IoIosCheckmark } from "react-icons/io";
import { FaLongArrowAltDown } from "react-icons/fa";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export const OfferSection = () => {
  const container = useRef("");
  return (
    <section>
      <div
        className="max-md:p-2 w-full 
        mx-auto px-[96px] bg-[#111112]
       py-[64px] "
      >
        <div className="bg-[#262628] py-9 rounded-xl  px-[64px]">
          <h2 className=" text-black  text-[48px] ">
            <span className="" id="hd1">
              Most
            </span>{" "}
            <span className="" id="hd1">
              Popluar
            </span>
          </h2>
        </div>
      </div>
    </section>
  );
};

export const InfoSection = () => {
  return (
    <section className="bg-[#111112]">
      <div
        className="max-md:p-2w w-full mx-auto px-[96px] 
        flex gap-7 items-center py-[64px] "
      >
        <div className="relative ">
          {/* <div
            className="w-[64px] absolute top-30 h-[64px]  border-4
          bg-[#1c1c1e]  border-gray-600 shadow-lg 
          rounded-full py-3 px-3"
          >
            <FaLocationArrow className="w-6 h-6" />
          </div> */}
          <div
            className="bg-[#262628] rounded-xl h-[740px] mt-[120px]
           w-[980px]"
          ></div>
          <img
            className="w-[980px] h-[980px] absolute z-20 -top-30 "
            src="/images/boredApe.png"
          />
        </div>

        <div className=" w-fit bg-[#262628] rounded-xl p-[98px]">
          <h3 className=" text-white text-[68px]">VIP Channel</h3>
          <span
            className=" text-[#8fff6A] flex items-center gap-3 
          text-[48px]"
          >
            <RiNftLine /> 550%
          </span>
          <ul>
            <li className="gap-2 text-white text-[21px] flex items-center">
              <IoIosCheckmark className="w-6 h-6" />
              <span>AI-powered NFT auctions</span>
            </li>
            <li className="gap-2 text-white text-[21px] flex items-center">
              <IoIosCheckmark className="w-6 h-6" />
              <span>Gas-free instant transactions</span>
            </li>
            <li className="gap-2 flex text-white text-[21px] items-center">
              <IoIosCheckmark className="w-6 h-6" />
              <span>Cross-chain NFT support</span>
            </li>
          </ul>
        </div>

        {/* <div className=" w-fit bg-[#262628] rounded-xl p-[38px]">
          <h3 className=" text-white text-[38px]">VIP Channel</h3>
          <span className=" text-[#8fff6A] flex items-center gap-3 text-[28px]">
            <RiNftLine /> 550%
          </span>
          <ul>
            <li className="gap-2 text-white text-[18px] flex items-center">
              <IoIosCheckmark className="w-6 h-6" />
              <span>AI-powered NFT auctions</span>
            </li>
            <li className="gap-2 text-white text-[18px flex items-center">
              <IoIosCheckmark className="w-6 h-6" />
              <span>Gas-free instant transactions</span>
            </li>
            <li className="gap-2 flex text-white text-[18px items-center">
              <IoIosCheckmark className="w-6 h-6" />
              <span>Cross-chain NFT support</span>
            </li>
          </ul>
        </div> */}

        <div className="bg-[#262628] rounded-xl ">
          <FaLongArrowAltDown className=" w-[98px] h-[96px]" />
        </div>
      </div>
    </section>
  );
};
