

import Image from "next/image";
import React from "react";
import mint from "@/assets/images/corner-mint.png";
import girl from "@/assets/images/girl.png";
import {
  FaArrowLeft,
  FaArrowRight,
  FaCheckCircle,
  FaStar,
} from "react-icons/fa";

const Section10 = () => {
  return (
    <div className="w-full bg-[#FCE4DC] py-20 px-10 md:px-14 flex flex-row overflow-hidden relative z-2">
      <div className="absolute -top-12 -left-12 z-1 w-36 h-36 flex">
        <Image
          fill
          src={mint}
          alt="mint"
          className="object-center object-contain"
        />
      </div>
      <div className="w-full py-10 grid grid-cols-1 md:grid-cols-2 auto-rows-fr ">
        <div className="col-span-full md:col-span-1 w-full h-full  relative flex items-center justify-center ">
          <div className="relative w-full h-full overflow-hidden aspect-square rounded-[100%_100%_100%_100%_/_100%_56%_100%_100%]">
            <Image
              fill
              quality={100}
              src={girl}
              alt="girl"
              className="object-center  object-cover w-full h-full aspect-square"
            />
          </div>
        </div>
        <div className="col-span-full md:col-span-1 w-full h-full md:px-10">
          <div className="flex w-full min-h-fit flex-col gap-2">
            <p className="font-normal my-7 text-[clamp(40px,4vw,52px)] italic ">
              Testimonials
            </p>
            <p className="flex items-center gap-1.5">
              {Array(5)
                .fill(" ")
                .map((a, i) => (
                  <FaStar className="text-md font-black text-[gold]" key={i} />
                ))}
            </p>
            <p className="text-sl font-medium">Lorem Ipsum</p>
            <span className="line-clamp-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              nesciunt ipsum itaque possimus quisquam at illum odio beatae
              voluptatibus. Deserunt porro in architecto doloremque, ipsam
              pariatur minima aliquam vero, modi est voluptas nulla consequuntur
              illum omnis magni. Molestiae, beatae, doloremque eos atque sed
              expedita at nesciunt voluptates voluptas totam quae possimus
              tempora quo, error esse consequuntur quos minus! Quisquam,
              facilis.
            </span>
            <span className="pt-10">Tamela L.</span>
            <span className="flex items-center justify-center w-fit gap-3">
              <FaCheckCircle className="text-green-500" /> Verified customer
            </span>
            <div className="w-fit  mt-5 flex gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-[#34633A] text-[#34633A]">
                <FaArrowLeft />
              </div>
              <div className="flex items-center justify-center w-10 h-10 rounded-full border bg-[#34633A] text-white border-[#34633A]">
                <FaArrowRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section10;
