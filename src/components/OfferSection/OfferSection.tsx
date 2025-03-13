import { RiNftLine } from "react-icons/ri";
import { IoIosCheckmark } from "react-icons/io";
import { FaLongArrowAltDown } from "react-icons/fa";

export const OfferSection = () => {
  return (
    <section className="bg-[#111112]">
      <div className="max-md:p-2  px-[96px] flex gap-7 items-center  py-[64px] ">
        <div className=" bg-[#262628] rounded-xl w-fit ">
          <img src="/images/boredApe.png" />
        </div>
        <div className=" justify-items-center my-auto">
          {" "}
          <div className=" w-fit bg-[#262628] rounded-xl p-[78px]">
            <h3 className=" text-white text-[38px]">VIP Channel</h3>
            <span className=" text-[#8fff6A] flex items-center gap-3 text-[28px]">
              <RiNftLine /> 550%{" "}
            </span>
            <ul>
              <li className="gap-2 text-white text-[18px] flex items-center">
                <IoIosCheckmark className="w-6 h-6" />
                <span>AI-powered NFT auctions</span>
              </li>{" "}
              <li className="gap-2 text-white text-[18px flex items-center">
                <IoIosCheckmark className="w-6 h-6" />
                <span>Gas-free instant transactions</span>
              </li>
              <li className="gap-2 flex text-white text-[18px items-center">
                <IoIosCheckmark className="w-6 h-6" />
                <span>Cross-chain NFT support</span>
              </li>
            </ul>
          </div>
        </div>{" "}
        <div className="bg-[#262628] rounded-xl ">
          <FaLongArrowAltDown className=" w-[98px] h-[96px]" />
        </div>
      </div>
    </section>
  );
};
