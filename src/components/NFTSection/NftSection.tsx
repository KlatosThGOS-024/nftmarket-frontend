import React from "react";
import { NftCards } from "./NftCards,";
const nftCards = [
  {
    nftImgSrc: "/nfts/nft1.gif",
    price: "7.42 ETH",
    creator: "Alice",
    nftName: "Crypto Dragon",
  },
  {
    nftImgSrc: "/nfts/nft2.gif",
    price: "3.15 ETH",
    creator: "Bob",
    nftName: "Ethereal Punk",
  },
  {
    nftImgSrc: "/nfts/nft3.png",
    price: "5.98 ETH",
    creator: "Charlie",
    nftName: "Pixel Samurai",
  },
  {
    nftImgSrc: "/nfts/nft4.gif",
    price: "1.23 ETH",
    creator: "David",
    nftName: "Neon Phantom",
  },
  {
    nftImgSrc: "/nfts/nft5.jpg",
    price: "9.76 ETH",
    creator: "Eve",
    nftName: "Astral Ape",
  },
  {
    nftImgSrc: "/nfts/nft6.jpg",
    price: "2.89 ETH",
    creator: "Frank",
    nftName: "Cyber Glitch",
  },
  {
    nftImgSrc: "/nfts/nft7.gif",
    price: "6.34 ETH",
    creator: "Grace",
    nftName: "Void Explorer",
  },
  {
    nftImgSrc: "/nfts/nft8.gif",
    price: "4.27 ETH",
    creator: "Hank",
    nftName: "Digital Phoenix",
  },
  {
    nftImgSrc: "/nfts/nft9.jpg",
    price: "8.92 ETH",
    creator: "Ivy",
    nftName: "Quantum Fox",
  },
  {
    nftImgSrc: "/nfts/nft7.gif",
    price: "0.99 ETH",
    creator: "Jack",
    nftName: "Hologram Knight",
  },
  {
    nftImgSrc: "/nfts/nft4.gif",
    price: "3.78 ETH",
    creator: "Kara",
    nftName: "Celestial Guardian",
  },
  {
    nftImgSrc: "/nfts/nft6.jpg",
    price: "5.47 ETH",
    creator: "Leo",
    nftName: "Synthwave Bot",
  },
];
type NFT = {
  nftImgSrc: string;
  price: string;
  creator: string;
  nftName: string;
};
export const NftSection = () => {
  return (
    <section>
      <div
        className="max-md:p-2 w-full flex relative 
        mx-auto px-[96px] bg-[#111112] 
       py-[96px]"
      >
        <div
          className="bg-[#111112] rounded-xl border-[1px]
         border-white/10 px-8 py-4"
        >
          <h2 className="text-white mb-3 text-[28px]">Latest Drops</h2>
          <hr className="bg-white320"></hr>

          <div className="grid grid-cols-6 gap-4 mt-[44px] max-[1750px]:grid-cols-5 max-[880px]:grid-cols-2 max-[1115px]:grid-cols-3 max-[1430px]:grid-cols-4">
            {nftCards.map((value: NFT, index: number) => {
              return (
                <div key={index} className="flex flex-col h-full">
                  <NftCards props={value} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
