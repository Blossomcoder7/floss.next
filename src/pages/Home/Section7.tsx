import Image from "next/image";
import React from "react";
import mint from "@/assets/images/corner-mint.png";
const Section7 = () => {
  return (
    <div className="w-full flex flex-col relative justify-center bg-[#FFFCF3] overflow-hidden text-[#231F20] items-center py-20">
      <div className="absolute w-40 -bottom-12 -right-12 rotate-45 h-40 flex items-center justify-center">
        <Image
          src={mint}
          alt="corner"
          className="object-contain w-full h-full"
          quality={100}
        />
      </div>
      <div className="absolute w-40 -top-10 -left-10 h-40 flex items-center justify-center">
        <Image
          src={mint}
          alt="corner"
          className="object-contain w-full h-full"
          quality={100}
        />
      </div>
      <div className="max-w-lg px-10 md:px-14 flex flex-col gap-5 justify-center items-center ">
        <div className="w-full text-center italic font-thin text-[clamp(70px,4vw,80px)]">
          Join floss
        </div>
        <div className="text-base font-medium font-stretch-semi-condensed text-center">
          {`Stay up to date with our new collections, latest deals and special offers! Get to learn about new products or scents when we launch them!`}
        </div>
        <div className="flex gap-3 flex-col  md:flex-row flex-wrap w-full">
          <input
            type="text"
            placeholder="First Name"
            className=" border border-[#231F20] rounded-md text-[#231F20] ps-2 py-2"
          />
          <input
            type="text"
            placeholder="Email"
            className=" border border-[#231F20] rounded-md text-[#231F20] ps-2 py-2"
          />
          <div className="cursor-pointer w-fit px-4 flex-1 flex items-center justify-center rounded-md text-white bg-gradient-to-r from-[#34633A] to-[#538C4D] py-2">
            Subscribe Now
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section7;
