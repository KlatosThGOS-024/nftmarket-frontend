"use client";
import React from "react";
import { MdOutlineVerified } from "react-icons/md";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
export const FollowerCard = () => {
  return (
    <div className="w-full  ">
      <div>
        <img
          className="rounded-xl"
          src="https://beyondidonline.com/wp-content/uploads/2023/03/what-is-nft-art-min.jpg"
        />
        <div>
          <div
            className=" z-40 w-17  h-17
           absolute max-md:top-[50%] xl:top-[60%] py-[28px] max-lg:top-[60%]  px-[28px] left-[38%]
            bg-[#111112] rounded-full"
          ></div>
          <img
            className="rounded-full max-lg:top-[60%] xl:top-[60%]
             absolute z-50 max-md:top-[50%]
             left-[40%] w-16 h-16"
            src="https://srueis.sru.ac.th/assets/images/users/1.jpg"
          />
        </div>
        <div className="flex items-center mt-9 gap-2  justify-between">
          <p className="flex flex-col   text-[#FBFBFB]">
            <span className="flex items-center  s">
              Glado Mano <MdOutlineVerified />
            </span>
            <span>13.75 ETH</span>
          </p>
          <button className=" rounded-2xl px-5 py-2 hover:opacity-90 cursor-pointer bg-[#D0D8E4] ">
            Following
          </button>
        </div>
      </div>
    </div>
  );
};

export const FollowerSection = () => {
  const data = [
    {
      followerImgSrc: "https://srueis.sru.ac.th/assets/images/users/1.jpg",
    },
    {
      followerImgSrc: "https://srueis.sru.ac.th/assets/images/users/1.jpg",
    },
    {
      followerImgSrc: "https://srueis.sru.ac.th/assets/images/users/1.jpg",
    },
    {
      followerImgSrc: "https://srueis.sru.ac.th/assets/images/users/1.jpg",
    },
    {
      followerImgSrc: "https://srueis.sru.ac.th/assets/images/users/1.jpg",
    },
    {
      followerImgSrc: "https://srueis.sru.ac.th/assets/images/users/1.jpg",
    },
    {
      followerImgSrc: "https://srueis.sru.ac.th/assets/images/users/1.jpg",
    },
  ];
  const rightSlider = () => {
    var rightSlide = document.getElementById("sliderMove");
    rightSlide?.scrollBy({ left: +600, behavior: "smooth" });
  };
  const leftSlider = () => {
    var leftSlide = document.getElementById("sliderMove");
    leftSlide?.scrollBy({ left: -600, behavior: "smooth" });
  };
  return (
    <section className="bg-[#111112] relative">
      <div
        className="grid grid-cols-4 max-xl:max-w-[1280px] max-lg:grid-cols-2 max-lg:max-w-[880px]
         max-2xl:max-w-[1480px] max-md:hidden
       px-[94px] gap-6 max-w-[1600px] mx-auto "
      >
        <div className="relative">
          {" "}
          <FollowerCard />
        </div>
        <div className="relative">
          {" "}
          <FollowerCard />
        </div>{" "}
        <div className="relative">
          {" "}
          <FollowerCard />
        </div>{" "}
        <div className="relative">
          {" "}
          <FollowerCard />
        </div>
      </div>
      <div
        id="sliderMove"
        className=" overflow-x-scroll  px-[64px] md:hidden
      scrollbar-hide"
      >
        <div
          className=" absolute z-20 bottom-[55%]
         left-[0.5]"
        >
          <MdChevronLeft
            onClick={leftSlider}
            className="cursor-pointer bg-white
             fill-black rounded-full hover:opacity-90"
            size={40}
          />
        </div>
        <div className="flex gap-[28px] scroll-smooth  whitespace-nowrap scroll h-full w-full">
          {data.map((img, index) => {
            return (
              <div key={index} className="w-[220px] relative">
                <FollowerCard />
              </div>
            );
          })}
        </div>
        <div className=" absolute z-20 bottom-[55%] right-[0.5]">
          <MdChevronRight
            onClick={rightSlider}
            className="cursor-pointer bg-white fill-black rounded-full hover:opacity-90"
            size={40}
          />
        </div>
      </div>
    </section>
  );
};
