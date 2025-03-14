// "use client";
// import { RiNftLine } from "react-icons/ri";
// import { IoIosCheckmark } from "react-icons/io";
// import { FaLongArrowAltDown } from "react-icons/fa";
// import { FaEthereum } from "react-icons/fa";
// import { LuTimer } from "react-icons/lu";
// import { Button } from "../NavBar/Button";

// export const OfferSection = () => {
//   const nftData = [
//     {
//       name: "Cyber Dragon",
//       ownerImgSrc: "/images/owner1.png",
//       ownerName: "Alice Crypto",
//       collectionName: "Cyber Beasts",
//       price: "2.5 ETH",
//       countdown: { days: 3, hours: 12, mins: 45, sec: 30 },
//     },
//     {
//       name: "Neon Samurai",
//       ownerImgSrc: "/images/owner2.png",
//       ownerName: "SamuraiX",
//       collectionName: "Futuristic Warriors",
//       price: "3.1 ETH",
//       countdown: { days: 1, hours: 8, mins: 20, sec: 15 },
//     },
//     {
//       name: "Pixel Panther",
//       ownerImgSrc: "/images/owner3.png",
//       ownerName: "PantherLord",
//       collectionName: "Pixel Zoo",
//       price: "1.8 ETH",
//       countdown: { days: 5, hours: 23, mins: 10, sec: 5 },
//     },
//     {
//       name: "Meta Phoenix",
//       ownerImgSrc: "/images/owner4.png",
//       ownerName: "SkyBurn",
//       collectionName: "Mythic Flames",
//       price: "4.2 ETH",
//       countdown: { days: 2, hours: 15, mins: 30, sec: 50 },
//     },
//   ];

//   return (
//     <section className="text-white/90 " id="offerSection">
//       <div
//         className="max-md:p-2 w-full flex relative
//         mx-auto px-[96px] bg-[#111112]
//        py-[96px] "
//       >
//         <div className="bg-[#262628] z-30 shadow-2xl w-1/2 py-9 rounded-xl  px-[64px]">
//           <h2 className=" text-black  text-[48px] ">
//             <span className="" id="hd1">
//               Most
//             </span>
//             <span className="" id="hd1">
//               Popluar
//             </span>
//           </h2>

//           <div className=" space-y-5 ">
//             <h2 className="text-[38px]">Hello Nft</h2>
//             <div className="flex items-center justify-between">
//
//               <div className="flex items-center gap-3">
//                 <img
//                   className="w-12 rounded-full h-12"
//                   src="https://media.licdn.com/dms/image/v2/C4D03AQFyTrc5fazD9g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1633469514405?e=2147483647&v=beta&t=GrPdgBnhYW9-n31sCxyZu17T-laDWc9O-MzmvdLrXYc"
//                 />
//                 <div className="text-[20px]">
//                   <span>Creator</span>
//                   <p>Daulat hussain</p>
//                 </div>
//               </div>
//               <div className="flex items-center gap-3">
//
//                 <FaEthereum className="w-12 h-12" />
//                 <div className="text-[20px]">
//                   <span>Creator</span>
//                   <p>Daulat hussain</p>
//                 </div>
//               </div>
//             </div>
//             <div className="relative">
//               <div
//                 className="bg-[#111112] w-fit px-5 absolute -top-5 left-7
//               text-white py-3 rounded-lg "
//               >
//                 Current Price
//               </div>
//               <input
//                 value={"0.0004 Ethers"}
//                 className=" w-full outline-none border px-4 py-7 pl-[96px] rounded-xl"
//               ></input>
//             </div>
//             <div className="flex gap-5 text-[] text-white/60 items-center">
//               <LuTimer className="w-9 h-9" /> <span>Authion Ending in</span>
//             </div>

//             <ul className="flex gap-9 text-white/90 ">
//               <li className="space-y-1 flex flex-col items-center">
//                 <text className="text-[48px]">21</text>
//                 <span className="text-[28px]">Days</span>
//               </li>
//               <li className="space-y-1 flex flex-col items-center">
//                 <text className="text-[48px]">40</text>
//                 <span className="text-[28px]">Hours</span>
//               </li>
//               <li className="space-y-1 flex flex-col items-center">
//                 <text className="text-[48px]">21</text>
//                 <span className="text-[28px]">Mins</span>
//               </li>
//               <li className="space-y-1 flex flex-col items-center">
//                 <text className="text-[48px]">49</text>
//                 <span className="text-[28px]">Secs</span>
//               </li>
//             </ul>
//           </div>
//           <div className="flex  gap-4 w-full items-center  justify-center mt-9">
//             <Button
//               prop="Mint"
//               tailwindAttributes="bg-[#4D5051] text-[28px] shadow-2xl px-9 py-3"
//             />
//             <Button
//               prop="Buy"
//               tailwindAttributes="bg-[#4D5051] text-[28px] shadow-2xl px-9 py-3"
//             />
//           </div>
//         </div>
//         <div className=" p-6 rounded-2xl bg-white/90 absolute top-1 right-[15%] z-20">
//           <img src="/images/boredApe1.png" className="w-[780px] rounded-2xl " />
//         </div>
//       </div>
//     </section>
//   );
// };

// export const InfoSection = () => {
//   return (
//     <section className="bg-[#111112]">
//       <div
//         className="max-md:p-2w w-full mx-auto px-[96px]
//         flex gap-7 items-center py-[64px] "
//       >
//         <div className="relative ">
//           {/* <div
//             className="w-[64px] absolute top-30 h-[64px]  border-4
//           bg-[#1c1c1e]  border-gray-600 shadow-lg
//           rounded-full py-3 px-3"
//           >
//             <FaLocationArrow className="w-6 h-6" />
//           </div> */}
//           <div
//             className="bg-[#262628] rounded-xl h-[740px] mt-[120px]
//            w-[980px]"
//           ></div>
//           <img
//             className="w-[980px] h-[980px] absolute z-20 -top-30 "
//             src="/images/boredApe.png"
//           />
//         </div>

//         <div className=" w-fit bg-[#262628] rounded-xl p-[98px]">
//           <h3 className=" text-white text-[68px]">VIP Channel</h3>
//           <span
//             className=" text-[#8fff6A] flex items-center gap-3
//           text-[48px]"
//           >
//             <RiNftLine /> 550%
//           </span>
//           <ul>
//             <li className="gap-2 text-white text-[21px] flex items-center">
//               <IoIosCheckmark className="w-6 h-6" />
//               <span>AI-powered NFT auctions</span>
//             </li>
//             <li className="gap-2 text-white text-[21px] flex items-center">
//               <IoIosCheckmark className="w-6 h-6" />
//               <span>Gas-free instant transactions</span>
//             </li>
//             <li className="gap-2 flex text-white text-[21px] items-center">
//               <IoIosCheckmark className="w-6 h-6" />
//               <span>Cross-chain NFT support</span>
//             </li>
//           </ul>
//         </div>

//         <div className="bg-[#262628] rounded-xl ">
//           <FaLongArrowAltDown className=" w-[98px] h-[96px]" />
//         </div>
//       </div>
//     </section>
//   );
// };
"use client";

const nftData = [
  {
    name: "Cyber Dragon",
    ownerImgSrc:
      "https://media.licdn.com/dms/image/v2/C4D03AQFyTrc5fazD9g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1633469514405?e=2147483647&v=beta&t=GrPdgBnhYW9-n31sCxyZu17T-laDWc9O-MzmvdLrXYc",
    ownerName: "Alice Crypto",
    nftImgSrc: "/video/boredApe1.png",
    collectionName: "Cyber Beasts",
    price: "2.5 ETH",
    countdown: { days: 3, hours: 12, mins: 45, sec: 30 },
  },
  {
    name: "Neon Samurai",
    ownerImgSrc: "/images/dragonNft.webm",
    ownerName: "SamuraiX",
    nftVideoSrc: "/video/dragonNft.webm",
    collectionName: "Futuristic Warriors",
    price: "3.1 ETH",
    countdown: { days: 1, hours: 8, mins: 20, sec: 15 },
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
    <section className="text-white/90 " id="offerSection">
      <div
        className="max-md:p-2 w-full flex relative 
        mx-auto px-[96px] bg-[#111112] 
       py-[96px] "
      >
        <div className="bg-[#262628] z-30 shadow-2xl w-1/2 py-9 rounded-xl  px-[64px]">
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
                <span className="text-[48px]">{nft.countdown.days}</span>
                <span className="text-[28px]">Days</span>
              </li>
              <li className="space-y-1 flex flex-col items-center">
                <text className="text-[48px]">{nft.countdown.hours}</text>
                <span className="text-[28px]">Hours</span>
              </li>
              <li className="space-y-1 flex flex-col items-center">
                <text className="text-[48px]">{nft.countdown.mins}</text>
                <span className="text-[28px]">Mins</span>
              </li>
              <li className="space-y-1 flex flex-col items-center">
                <text className="text-[48px]">{nft.countdown.sec}</text>
                <span className="text-[28px]">Secs</span>
              </li>
            </ul>
          </div>
          <div className="flex  gap-4 w-full items-center  justify-center mt-9">
            <Button
              prop="Mint"
              tailwindAttributes="bg-[#4D5051] text-[28px] shadow-2xl px-9 py-3"
            />
            <Button
              prop="Buy"
              tailwindAttributes="bg-[#4D5051] text-[28px] shadow-2xl px-9 py-3"
            />
          </div>
          <div className="flex items-center gap-4 ">
            <FaLeftLong
              onClick={indexHandlerLeft}
              className="w-9 h-9 cursor-pointer"
            />
            <FaRightLong
              onClick={indexHandlerRight}
              className="w-9 h-9  cursor-pointer"
            />
          </div>
        </div>
        <div className=" w-fit my-auto mx-auto rounded-2xl bg-white/90    ">
          <video
            className=" rounded-2xl "
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            style={{ display: "block", visibility: "visible" }}
          >
            <source
              src="/video/harryNFT.webm"
              className="w-full "
              type="video/webm"
            />
            Your browser doesn't support the video tag.
          </video>
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
