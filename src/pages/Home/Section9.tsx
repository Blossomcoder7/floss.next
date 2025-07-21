import Image from "next/image";
import React from "react";
import logo1 from "@/assets/logos/Mask group (1).png";
import logo2 from "@/assets/logos/Mask group (2).png";
import logo3 from "@/assets/logos/Mask group (3).png";
import logo4 from "@/assets/logos/Mask group.png";

const Section9 = () => {
  const logos = [logo1, logo2, logo3, logo4];

  const SlideContent = () => (
    <div className="flex  flex-nowrap items-center w-full justify-evenly sm:min-w-fit min-w-full  gap-10 ">
      {logos.map((logo, i) => (
        <div key={i} className="relative h-32 aspect-[3/2] flex-shrink-0">
          <Image
            src={logo}
            alt={`Logo ${i + 1}`}
            fill
            className="object-contain object-center"
            // sizes="(max-width: 768px) 100px, 200px"
          />
        </div>
      ))}
    </div>
  );

  return (
    <div className="w-full h-fit py-20 flex flex-col justify-center bg-[#FFFCF3] items-center px-10 md:px-14 overflow-hidden">
      <div className="py-10 w-full max-w-full overflow-hidden flex flex-nowrap group cursor-pointer">
        <div className="slide min-w-fit sm:min-w-full w-full flex items-center relative h-24 group-hover:[animation-play-state:paused]">
          <SlideContent />
        </div>
        <div className="slide min-w-fit sm:min-w-full w-full flex items-center relative h-24 group-hover:[animation-play-state:paused]">
          <SlideContent />
        </div>
      </div>
    </div>
  );
};

export default Section9;
