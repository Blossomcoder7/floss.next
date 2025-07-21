
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import React from "react";
import mintCor from "@/assets/images/mint-corner.png";
import strawCor from "@/assets/images/straw-corner.png";
import Image from "next/image";
import left from "@/assets/images/left.png";
import right from "@/assets/images/right.png";

const Section5 = () => {
  return (
    <div className="flex w-full min-h-fit bg-[#F8F3E4] py-20 relative overflow-hidden">
      <div className="absolute -left-10 -bottom-10 w-40 h-40">
        <Image
          className="object-cover hidden md:block  w-full h-full"
          src={mintCor}
          alt="corners"
          fill
          quality={100}
        />
      </div>
      <div className="absolute -right-10 -top-10 w-40 h-40">
        <Image
          className="object-cover  hidden md:block w-full h-full"
          src={strawCor}
          alt="corners"
          fill
          quality={100}
        />
      </div>
      <div className="absolute left-20 top-10 w-52 h-52">
        <Image
          className="object-cover hidden md:block  w-full h-full"
          src={left}
          alt="corners"
          fill
          quality={100}
        />
      </div>
      <div className="absolute right-20 bottom-10 w-52 h-52">
        <Image
          className="object-cover  hidden md:block w-full h-full"
          src={right}
          alt="corners"
          fill
          quality={100}
        />
      </div>
      <div className="min-h-[16rem] py-32 w-full flex flex-col gap-5 items-center justify-center text-center text-[#231F20]">
        <p className="text-[clamp(70px,4vw,120px)] italic font-thin">Pure</p>
        <p className=" max-w-md text-[clamp(18px,2ve,24px)] font-normal">{`Free of dyes, harmful chemicals, and toxins such as BPA, PTFE, PFAS, SLS, and parabens, you can trust Purifloss is safe for everyone.`}</p>
        <div className="w-fit mx-auto flex gap-4">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-[#34633A] text-[#34633A]">
            <FaArrowLeft />
          </div>
          <div className="flex items-center justify-center w-10 h-10 rounded-full border bg-[#34633A] text-white border-[#34633A]">
            <FaArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
