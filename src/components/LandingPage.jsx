import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

const LandingPage = () => {
  return (
    <div className="w-full h-screen bg-black pt-1 ">
      <div className="textstructure mt-40 px-20">
        {["we create", "eye opening", "presentations"].map((item, index) => {
          return (
            <div className="masker ">
               <div className="w-fit flex items-center">
               {index===1 && (<div className="mr-3 rounded-md w-[9vw] h-[4vw] relative bg-red-700"></div>)}
              <h1 className="uppercase leading-[5.5vw] text-[6vw] tracking-tighter font-semibold">
                {item}
              </h1>
               </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-800 flex justify-between items-center mt-32 py-5 px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p className="text-md font-md leading-none tracking-tight">{item}</p>
        ))}
        <div className="start flex gap-3 items-center">
          <div className="px-5 py-2 border-[2px] border-zinc-500 rounded-full text-sm capitalize">
            start the project
          </div>
          <div className="w-10 h-10 text-md flex items-center justify-center border-[2px] border-zinc-500 rounded-full">
            <span className="rotate-[45deg] ">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
