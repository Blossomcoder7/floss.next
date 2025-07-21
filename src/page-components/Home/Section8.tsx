

import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import image1 from "@/assets/images/image1.png";
import image2 from "@/assets/images/image2.png";
import image3 from "@/assets/images/image3.png";
import Image from "next/image";
const Section8 = () => {
  const data = [
    {
      date: "10 June, 2023",
      text: "Taste The Difference: Exploring Natural Flavors In Recycled Floss",
      image: image1,
    },
    {
      date: "10 June, 2023",
      text: "Sustainable Oral Care: The Advantages of Natural Recycled Floss",
      image: image2,
    },
    {
      date: "10 June, 2023",
      text: "Dental Health Meets Sustainability: Natural Recycled Floss For a Greener Tomorrow",
      image: image3,
    },
  ];

  
  return (
    <div className="bg-[#EEF4E1] flex flex-col justify-center items-center w-full h-fit py-20">
      <div className="w-full h-fit flex justify-between items-center px-10 md:px-14">
        <div className="w-full text-left italic font-thin text-[clamp(40px,4vw,60px)]">
          Our Blogs
        </div>
        <div className="w-fit mx-auto flex gap-4">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-[#34633A] text-[#34633A]">
            <FaArrowLeft />
          </div>
          <div className="flex items-center justify-center w-10 h-10 rounded-full border bg-[#34633A] text-white border-[#34633A]">
            <FaArrowRight />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 py-10 w-full min-h-fit px-10 md:px-14">
        {data.map((a, i) => (
          <div
            key={i}
            className="col-span-full md:col-span-1 w-full rounded-md bg-[#4D854A] text-white flex flex-col justify-between items-center px-10 py-12"
          >
            <div className="rounded-md relative  overflow-hidden w-full h-[356px] ">
              <Image
                fill
                className="w-full h-full object-center object-cover"
                alt="image"
                src={a.image}
                quality={100}
              />
            </div>
            <div className="flex flex-col py-2 gap-3 justify-between items-start">
              <p className="text-sm">{a.date}</p>
              <p className="text-md line-clamp-2">{a.text}</p>
              <p className="">Read More</p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full text-center flex items-center justify-center">
        <div className="w-fit px-10 text-white bg-gradient-to-r  flex items-center justify-center rounded-md from-[#34633A] to-[#538C4D] py-2">
          See All
        </div>
      </div>
    </div>
  );
};

export default Section8;
