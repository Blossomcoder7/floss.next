
import Image from "next/image";
import React from "react";
import bg from "@/assets/images/about-us-sec-bg.png";
import mint from "@/assets/images/mint-corner.png";

const Section3 = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  auto-rows-fr w-full bg-[#EEF4E1] min-h-fit relative overflow-hidden">
      <div className="absolute -bottom-8 z-1 -left-8 w-40 h-40 flex items-center justify-center">
        <Image
          fill
          src={mint}
          alt="corner"
          className="object-contain w-full h-full"
        />
      </div>
      <div className=" col-span-full md:col-span-1 w-full h-full relative">
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <Image
            fill
            className=" object-center object-cover"
            alt="bg"
            src={bg}
          />
        </div>
      </div>
      <div className="z-2 relative py-10 col-span-full md:col-span-1 md:-order-1 w-full h-full  text-[#231F20] p-5 pl-10 md:pl-14 space-y-4 ">
        <div className=" italic text-[clamp(80px,6vw,95px)]">About Us</div>
        <div className="text-left text-pretty text-[clamp(20px,3vw,24px)]">
          {`Designed to be the best floss in existence, Purifloss stands above the
          rest with nearly 400 tightly interwoven fibers that expand with
          friction to provide the addictive clean feeling you’ve been searching
          for while being gentle on your gums. There are no marketing gimmicks
          and no corners cut when it comes to our floss.`}
        </div>
        <div className="w-fit px-10 text-white bg-gradient-to-r from-[#34633A] to-[#538C4D] py-3">
          Read More
        </div>
      </div>
    </div>
  );
};

export default Section3;
