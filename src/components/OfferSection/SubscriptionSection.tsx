import { BiSearch } from "react-icons/bi";

export const SubscriptionSection = () => {
  return (
    <section className="bg-[#111112] ">
      {" "}
      <div className="bg-[#191C1F]">
        <div className="flex w-[1400px] py-[48px] mx-auto justify-between">
          <div>
            <h3 className="text-white/80 text-[28px]">Stay in the loop</h3>
            <span className="text-[#A9B3B7] text-[27px]">
              Get the latest insights
            </span>
          </div>
          <div className=" items-center flex gap-4">
            {" "}
            <div
              className=" bg-[#304953]
             max-lg:hidden px-3 py-2 rounded-xl 
             w-[500px]
          hover:opacity-90 gap-2
       "
            >
              <input
                placeholder="Your e-mail"
                className="w-full outline-0 py-3"
              ></input>
            </div>
            <button className="rounded-xl cursor-pointer px-3 py-2  bg-white/90 w-fit ">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
