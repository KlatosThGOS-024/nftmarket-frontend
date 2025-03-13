import React from "react";
import { SlLogin } from "react-icons/sl";

export const Button = ({
  prop,
  tailwindAttributes,
  icon,
}: {
  prop: string;
  tailwindAttributes?: string;
  icon?: any;
}) => {
  return (
    <div
      className={` ${
        tailwindAttributes
          ? tailwindAttributes
          : "bg-[#4D5051] text-7 px-4 py-3"
      } max-md:text-[16px] rounded-xl flex items-center gap-3
     cursor-pointer hover:opacity-90 `}
    >
      {icon}
      <div className="">{prop}</div>
    </div>
  );
};
