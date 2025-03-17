"use client";

const nftData = [
  {
    name: "Cyber Dragon",
    ownerImgSrc:
      "https://media.licdn.com/dms/image/v2/C4D03AQFyTrc5fazD9g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1633469514405?e=2147483647&v=beta&t=GrPdgBnhYW9-n31sCxyZu17T-laDWc9O-MzmvdLrXYc",
    ownerName: "Alice Crypto",
    nftImgSrc: "/images/boredApe1.png",
    collectionName: "Cyber Beasts",
    price: "2.5 ETH",
    countdown: { days: 3, hours: 12, mins: 45, sec: 30 },
  },

  {
    name: "Pixel Panther",
    ownerImgSrc: "/images/owner3.png",
    ownerName: "PantherLord",
    nftImgSrc: "/images/boredApe3.jpg",
    collectionName: "Pixel Zoo",
    price: "1.8 ETH",
    countdown: { days: 5, hours: 23, mins: 10, sec: 5 },
  },
  {
    name: "Meta Phoenix",
    ownerImgSrc: "/images/owner4.png",
    ownerName: "SkyBurn",
    collectionName: "Mythic Flames",
    nftImgSrc: "/images/boredApe4.jpg",
    price: "4.2 ETH",
    countdown: { days: 2, hours: 15, mins: 30, sec: 50 },
  },
];
import { FaLeftLong, FaRightLong } from "react-icons/fa6";
import { RiNftLine } from "react-icons/ri";
import { IoIosCheckmark } from "react-icons/io";
import { FaLongArrowAltDown } from "react-icons/fa";
import { FaEthereum } from "react-icons/fa";
import { LuTimer } from "react-icons/lu";
import { Button } from "../NavBar/Button";
import { useEffect, useState } from "react";

export const InfoSection = () => {
  return (
    <section className="bg-[#111112]">
      <div
        className="max-md:p-2 w-full mx-auto px-[96px] lg:w-full max-md:w-[900px]
        flex gap-7 items-center py-[64px] "
      >
        <div className="relative ">
          <img
            className="w-[980px] h-[980px] lg:absolute max-lg:block max-lg:h-[700px]
             max-lg:w-[700px]
             z-20 -top-30 "
            src="/images/boredApe.png"
          />
        </div>

        <div
          className=" w-fit bg-[#262628] rounded-xl 
        p-[98px]"
        >
          <h3 className=" text-white text-[68px]">VIP Channel</h3>
          <span
            className=" text-[#8fff6A] flex items-center
             gap-3 
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

        <div className="bg-[#262628] rounded-xl ">
          <FaLongArrowAltDown className=" w-[98px] h-[96px]" />
        </div>
      </div>
    </section>
  );
};
export const OfferSection = () => {
  const [index, setIndex] = useState(0);
  const [nft, setNft] = useState(nftData[index]);
  const indexHandlerRight = () => {
    if (index >= nftData.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  const indexHandlerLeft = () => {
    if (index <= 0) {
      setIndex(nftData.length - 1);
    } else {
      setIndex(index - 1);
    }
  };
  useEffect(() => {
    setNft(nftData[index]);
  }, [index]);
  return (
    <section
      className="text-white/90  2xl:flex items-center gap-5 2xl:flex-row w-full bg-[#111112]  "
      id="offerSection"
    >
      <div
        className="max-md:px-6 w-full flex relative   lg:w-[1400px] mx-auto
        px-[96px] max-lg:flex-col
       py-[96px] "
      >
        <div
          className="bg-[#262628] max-lg:w-full   z-30 shadow-2xl   
        lg:w-fit py-9 rounded-xl max-lg:px-[64px] lg:px-[96px]"
        >
          <h2 className=" text-black  text-[48px] ">
            <span className="" id="hd1">
              Most
            </span>
            <span className="" id="hd1">
              Popluar
            </span>
          </h2>

          <div className=" space-y-5 ">
            <h2 className="text-[38px]">{nft.collectionName}</h2>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img className="w-12 rounded-full h-12" src={nft.ownerImgSrc} />
                <div className="text-[20px]">
                  <span>Creator</span>
                  <p>{nft.ownerName}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FaEthereum className="w-12 h-12" />
                <div className="text-[20px]">
                  <span>Creator</span>
                  <p>{nft.ownerName}</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div
                className="bg-[#111112] w-fit px-5 absolute -top-5 left-7
              text-white py-3 rounded-lg "
              >
                Current Price
              </div>
              <input
                value={`${nft.price} Ethers`}
                className=" w-full outline-none border px-4 py-7 pl-[96px] rounded-xl"
              ></input>
            </div>
            <div className="flex gap-5 text-[] text-white/60 items-center">
              <LuTimer className="w-9 h-9" /> <span>Authion Ending in</span>
            </div>

            <ul className="flex gap-9 text-white/90 ">
              <li className="space-y-1 flex flex-col items-center">
                <span className="max-lg:text-[28px] text-[48px]">
                  {nft.countdown.days}
                </span>
                <span className="text-[28px]">Days</span>
              </li>
              <li className="space-y-1 flex flex-col items-center">
                <text className="max-lg:text-[28px] text-[48px]">
                  {nft.countdown.hours}
                </text>
                <span className="text-[28px]">Hours</span>
              </li>
              <li className="space-y-1 flex flex-col items-center">
                <text className=" max-lg:text-[28px] text-[48px]">
                  {nft.countdown.mins}
                </text>
                <span className="text-[28px]">Mins</span>
              </li>
              <li className="space-y-1 flex flex-col items-center">
                <text className=" max-lg:text-[28px]  text-[48px]">
                  {nft.countdown.sec}
                </text>
                <span className="text-[28px]">Secs</span>
              </li>
            </ul>
          </div>
          <div className="flex  gap-4 w-full items-center  justify-center mt-9">
            <Button
              prop="Mint"
              tailwindAttributes="bg-[#4D5051] text-[28px] max-lg:text-[21px]  shadow-2xl px-9 py-3"
            />
            <Button
              prop="Buy"
              tailwindAttributes="bg-[#4D5051] text-[28px] max-lg:text-[21px] shadow-2xl px-9 py-3"
            />
          </div>
          <div className="flex items-center gap-4 max-lg:mt-4 ">
            <FaLeftLong
              onClick={indexHandlerLeft}
              className="w-9 h-9  cursor-pointer"
            />
            <FaRightLong
              onClick={indexHandlerRight}
              className="w-9 h-9  cursor-pointer"
            />
          </div>
        </div>
        <div
          className="p-6 max-lg:px-5 rounded-2xl bg-white/90 max-lg:w-full lg:w-[570px] 
 lg:absolute lg:top-19 lg:left-[40%]  z-20"
        >
          <img src={nft.nftImgSrc} className="w-full  rounded-2xl " />
        </div>
      </div>
      <div className="max-2xl:hidden">
        {" "}
        <InfoSection />
      </div>
    </section>
  );
};
