import React from "react";
import { FaFilter } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";

export const FilterSection = () => {
  return (
    <section>
      <div className="bg-[#111112] ">
        <div>
          <h3>Featured NFTs</h3>
          <span>Discover the most outstanding NFTs in all topics of life</span>
        </div>
        <div className="flex justify-between">
          <ul className="flex gap-3">
            <li>NFTs</li>
            <li>Arts</li>
            <li>Muscis</li>
            <li>Photography</li>
            <li>Photography</li>
          </ul>
          <button className="px-3 py-2 rounded-full space-x-3 bg-white/20">
            <FaFilter />
            <span> Filter</span>
            <IoMdArrowDropdown />
          </button>
        </div>
      </div>
    </section>
  );
};
