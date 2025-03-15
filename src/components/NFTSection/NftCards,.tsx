import React from "react";

type NFT = {
  nftImgSrc: string;
  price: string;
  creator: string;
  nftName: string;
};

export const NftCards = ({ props }: { props: NFT }) => {
  return (
    <div className="flex flex-col h-full">
      {" "}
      {/* Ensures card container takes full height */}
      <div className="bg-[#222427] h-full rounded-xl px-3 py-4 flex flex-col justify-between">
        <img
          src={props.nftImgSrc}
          alt="NFT Image"
          className="object-cover w-full h-[350px] rounded-t-xl"
        />
        <div className="flex flex-col flex-grow">
          {" "}
          <div className="flex flex-col mb-3">
            <span className="text-white/30">{props.creator}</span>
            <span className="text-white text-[21px]">{props.nftName}</span>
          </div>
          <div className="bg-[#424447] px-3 rounded-xl py-2 flex-grow">
            <div className="flex justify-between items-center">
              <p>
                <span className="text-white/30">Minting</span>
                <span className="flex items-center gap-3">
                  <span className="flex items-center gap-2 font-bold">
                    <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-blink"></span>
                  </span>
                  <span className="text-white">Now</span>
                </span>
              </p>
              <p>
                <span className="text-white/30">Price</span>
                <span className="flex items-center gap-3">
                  <span className="flex items-center gap-2">
                    <span className="text-white">{props.price}</span>
                  </span>
                  <span className="text-white">Eth</span>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
