"use client";

import Image from "next/image";
import React from "react";
import bg from "@/assets/images/background.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HomeLoading from "./HomeLoading";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Section7 from "./Section7";
import Section8 from "./Section8";
import Section9 from "./Section9";
import Section10 from "./Section10";
gsap.registerPlugin(ScrollTrigger);
const Banner = () => {
  return (
    <div className="flex items-center justify-center w-full relative h-[clamp(600px,100vh,1200px)] aspect-video">
      <div className="absolute inset-0 w-full h-full z-1 pointer-events-none">
        <Image
          alt="bg-image"
          className=" object-[30%_30%] md:object-center lg:object-top object-cover"
          src={bg}
          fill
        />
      </div>
      <div className="absolute bottom-0 left-0 z-1  w-full h-6/12 pointer-events-none  bg-gradient-to-t from-white/90 via-white/50 to-transparent" />

      <div className="relative z-4 w-full h-full flex  justify-center ">
        <div className="absolute bottom-4 w-full flex items-center justify-center min-h-fit">
          <div className="flex flex-col px-4 sm:px-10 md:px-20 lg:flex-row justify-between items-center lg:justify-center lg:items-center gap-4">
            <div className="text-text capitalize flex-2/3 leading-none text-[clamp(40px,7vw,80px)]">
              {"The beginning of\n Something Great"}
            </div>
            <div className="text-text flex-1/3  text-[clamp(16px,4vw,24px)]">
              Luxurious floss that not only elevates your dental routine but
              also promotes environmental responsibility in every silky-smooth
              glide.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Index = () => {
  return (
    <>
      <HomeLoading>{<Banner />}</HomeLoading>
      <div className="w-full min-h-screen space-y-10 bg-white pt-20">
        <Section2 />
        <Section3 />
        <Section4 />
        <div className="flex flex-col w-full">
          <Section5 />
          <Section6 />
          <Section7 />
          <Section8 />
          <Section9 />
          <Section10 />
        </div>
      </div>
    </>
  );
};

export default Index;
