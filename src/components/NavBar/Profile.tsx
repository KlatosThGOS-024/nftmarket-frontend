import React from "react";
import { Button } from "./Button";
import { FaRegUser } from "react-icons/fa";
import { FaMoon } from "react-icons/fa6";

export const Profile = () => {
  return (
    <div className="bg-[#202020] rounded-xl py-4 px-3">
      <div className="space-y-4">
        <p className="flex items-center flex-col">
          <span>Priyanshu</span>
          <span>PriyanshuTiwari878@yahoo.com</span>
        </p>
        <hr></hr>
        <ul className="flex flex-col items-center gap-3">
          <li
            className="flex items-center gap-3   hover:opacity-60
         w-full justify-center py-3 "
          >
            <FaRegUser />
            <span>Profile</span>
          </li>{" "}
          <li
            className="flex items-center gap-3   hover:opacity-60
         w-full justify-center py-3 "
          >
            <FaMoon />
            <span>Dark Mode</span>
          </li>
          <li
            className="flex items-center gap-3   hover:opacity-60
         w-full justify-center py-3 "
          >
            <FaRegUser />
            <span>Help</span>
          </li>
        </ul>
        <Button prop="Sign Out" />
      </div>
    </div>
  );
};
