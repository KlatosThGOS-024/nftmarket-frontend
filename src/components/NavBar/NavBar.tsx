"use client";
import React, { useState } from "react";
import Image from "next/image";
import { BiSearch } from "react-icons/bi";
import { Button } from "./Button";
import { FaRegUserCircle } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { Profile } from "./Profile";
import { SlLogin } from "react-icons/sl";

export const NavBar = () => {
  const [profileShow, setProfileShow] = useState(false);
  const showProfileHandler = () => {
    setProfileShow(!profileShow);
  };
  return (
    <section>
      <div
        className="flex items-center  justify-between px-8 overflow-hidden
x max-sm:w-[465px] 
      py-[14px]"
      >
        <div className="flex items-center gap-4  overflow-hidden ">
          <div className="flex gap-2 items-center">
            <Image
              src="https://opensea.io/static/images/logos/opensea-logo.svg"
              width={50}
              height={50}
              alt="Picture of the author"
            />
            <span className="max-md:hidden">OpenSea</span>
          </div>
          <div className=" border-[1px] border-gray-400 h-9"></div>
          <ul className="flex items-center gap-3 max-md:hidden">
            <li>Drops</li>
            <li>Stats</li>
            <li>Create</li>
          </ul>
        </div>

        <div
          className=" bg-[#3A3D3E] max-lg:hidden px-3 py-2 rounded-xl items-center w-[500px]
          hover:opacity-90 gap-2
         flex "
        >
          <div className="   rounded-xl px-2 py-3">
            {" "}
            <BiSearch className=" w-6 h-6" />
          </div>
          <input placeholder="search" className="w-full outline-0"></input>
          <div className="rounded-lg px-3 py-2  bg-white/20 w-fit ">/</div>
        </div>
        <div className="flex items-center gap-3 ">
          <div className="rounded-xl bg-white/15 max-lg:block hidden  p-3 max-md:p-2 ">
            {" "}
            <BiSearch className=" w-6 h-6 " />{" "}
          </div>
          <Button
            prop="Login"
            icon={<SlLogin className="w-6 h-6 max-md:w-4" />}
          />
          <div
            onClick={showProfileHandler}
            className="rounded-xl cursor-pointer  relative bg-white/15 p-3 max-md:p-2 "
          >
            {profileShow && (
              <div className=" absolute right-1 top-13 ">
                <Profile />
              </div>
            )}
            <FaRegUserCircle className=" w-6 h-6 " />
          </div>
          <div className="rounded-xl max-md:hidden bg-white/15 p-3 ">
            <IoCartOutline className=" w-6 h-6 " />
          </div>
        </div>
      </div>
    </section>
  );
};
