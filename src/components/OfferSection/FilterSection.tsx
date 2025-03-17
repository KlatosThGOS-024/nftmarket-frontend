"use client";
import React, { useState } from "react";
import { FaFilter } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";

export const FilterSection = () => {
  const [showFilter, setShowFilter] = useState(false);
  const filterHandler = () => {
    setShowFilter(!showFilter);
  };
  return (
    <section className="bg-[#111112] w-full py-[96px] px-[68px] ">
      <div className="  max-md:w-[480px] m-auto max-sm:w-[475px]">
        <div className="text-white/60">
          <h3 className=" text-[38px]">Featured NFTs</h3>
          <span className="text-[21px]">
            Discover the most outstanding NFTs in all topics of life
          </span>
        </div>
        <div className="flex justify-between mt-7   max-sm:w-[475px] space-y-7 max-lg:flex-col space-x-6  ">
          <ul
            className="flex gap-6 max-md:gap-1 text-[21px] max-md:grid max-lg:max-w-[500px]
           grid-cols-2"
          >
            <li
              className="hover:bg-[#c4cbd72c]  rounded-xl py-1 pt-3
             px-[49px] cursor-pointer"
            >
              NFTs
            </li>
            <li className="hover:bg-[#c4cbd72c]  rounded-xl py-1 pt-3 px-[49px] cursor-pointer">
              Arts
            </li>
            <li className="hover:bg-[#c4cbd72c]  rounded-xl py-1 pt-3 px-[49px] cursor-pointer">
              Muscis
            </li>
            <li className="hover:bg-[#c4cbd72c]  rounded-xl py-1 pt-3 px-[49px] cursor-pointer">
              Photography
            </li>
            {/* <li className="hover:bg-[#c4cbd72c]  rounded-xl py-1 pt-3 px-[49px] cursor-pointer">
              Photography
            </li> */}
          </ul>
          <div className="relative">
            <button
              onClick={filterHandler}
              className="px-6  flex items-center py-3 cursor-pointer rounded-xl space-x-3 bg-white/20"
            >
              <FaFilter />
              <span>Filter</span>
              <IoMdArrowDropdown className="w-8 h-8" />
            </button>{" "}
            {showFilter && (
              <div className=" w-fit lg:absolute z-40 right-0 mt-1 ">
                <ul className="flex flex-col gap-[1px] text-[21px]">
                  <li className="bg-[#c4cbd72c] hover:opacity-90 rounded-t-xl py-1 pt-3 px-[49px] cursor-pointer">
                    30Min
                  </li>
                  <li className="bg-[#c4cbd72c]  hover:opacity-90   py-1 pt-3 px-[49px] cursor-pointer">
                    1 Hour
                  </li>
                  <li className="bg-[#c4cbd72c]  hover:opacity-90   py-1 pt-3 px-[49px] cursor-pointer">
                    1 Day
                  </li>
                  <li className="bg-[#c4cbd72c]  hover:opacity-90   py-1 pt-3 px-[49px] cursor-pointer">
                    7 Day
                  </li>
                  <li className="bg-[#c4cbd72c]  hover:opacity-90   py-1 pt-3 px-[49px] cursor-pointer">
                    30 Day
                  </li>
                  <li className="bg-[#c4cbd72c]  hover:opacity-90  rounded-b-xl py-1 pt-3 px-[49px] cursor-pointer">
                    All
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
