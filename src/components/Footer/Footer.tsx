import React from "react";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";

export const Footer = () => {
  return (
    <section className="bg-[#1B1B1B]">
      <div className="px-[28px] py-[28px]">
        <div className=" grid grid-cols-4 max-lg:grid-cols-2 space-y-[64px] ">
          <div className="flex gap-2 items-center flex-col">
            <div className="flex items-center gap-4 mb-[28px]">
              {" "}
              <Image
                src="https://opensea.io/static/images/logos/opensea-logo.svg"
                width={50}
                height={50}
                alt="Picture of the author"
              />
              <span className="text-white">OpenSea</span>
            </div>
            <p className="max-w-[464px] mb-[38px]  ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
              nesciunt ex dicta ipsa optio nisi debitis facilis, at labore
              officiis magni illo cumque esse dolorem molestiae eum non. Fugit,
              nostrum!
            </p>
            <ul className="flex items-center  gap-7">
              <li>
                <FaFacebookF className=" cursor-pointer w-7 h-7" />
              </li>
              <li>
                <FaLinkedinIn className=" cursor-pointer w-7 h-7" />
              </li>
              <li>
                <FaXTwitter className="cursor-pointer  w-7 h-7" />
              </li>
              <li>
                <FaYoutube className=" cursor-pointer w-7 h-7" />
              </li>
              <li>
                <FaInstagram className="cursor-pointer w-7 h-7" />
              </li>
            </ul>
          </div>
          <div className=" place-items-center">
            <h2 className="mb-7 text-[28px]  w-full text-center">Discovery</h2>
            <ul className=" text-[18px] ml-7 max-lg:ml-[48px] flex gap-4 flex-col ">
              <li className="cursor-pointer hover:opacity-80">Collection</li>
              <li className="cursor-pointer hover:opacity-80">Search</li>
              <li className="cursor-pointer hover:opacity-80">
                Auther Profile
              </li>
              <li className="cursor-pointer hover:opacity-80">Upload Nft</li>
              <li className="cursor-pointer hover:opacity-80">
                Account Settings
              </li>
              <li className="cursor-pointer hover:opacity-80">
                Connect Wallet
              </li>
              <li className="cursor-pointer hover:opacity-80">Blog</li>
            </ul>
          </div>
          <div>
            <h2 className=" mb-7 text-[28px]">Help Center</h2>
            <ul className=" ml-4 flex text-[18px] gap-4 flex-col ">
              <li className="cursor-pointer hover:opacity-80">Collection</li>
              <li className="cursor-pointer hover:opacity-80">Search</li>
              <li className="cursor-pointer hover:opacity-80">
                Auther Profile
              </li>
              <li className="cursor-pointer hover:opacity-80">Upload Nft</li>
            </ul>
          </div>
          <div className=" space-y-5 mb-7">
            <h2 className=" text-[28px]">Subscribe</h2>

            <div
              className=" bg-[#3A3D3E] px-3 py-2 rounded-xl 
              items-center max-w-[500px]
                     hover:opacity-90 gap-2
                    flex "
            >
              <div className="   rounded-xl px-2 py-3">
                {" "}
                <BiSearch className=" w-6 h-6" />
              </div>
              <input placeholder="search" className="w-full outline-0"></input>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              maxime libero, iure nesciunt ut obcaecati dolorem sint aliquid
              quasi perspiciatis porro?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
