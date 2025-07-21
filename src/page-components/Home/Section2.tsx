
import React from "react";
import mintIcon from "@/assets/images/mint-icon.png";
import mintBg from "@/assets/images/mint-bg.png";
import mintCor from "@/assets/images/mint-corner.png";

import strawBg from "@/assets/images/straw-bg.png";
import strawIcon from "@/assets/images/straw-icon.png";
import strawCor from "@/assets/images/straw-corner.png";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import clsx from "clsx";
const Section2 = () => {
  const data = [
    {
      title: "Refreshing Mint",
      price: "130.00",
      highlights: "5.0 (20 Reviews)",
      icon: mintIcon,
      background: mintBg,
      corner: mintCor,
      featuring: [
        "400 Interwoven strings for the best clean",
        "All natural and eco-friendly",
        "Made with recycled materials for a greener future",
        "Refreshing Mint scent to revitalize your flossing",
      ],
    },
    {
      title: "Sweet Strawberry",
      price: "130.00",
      highlights: "5.0 (20 Reviews)",
      background: strawBg,
      icon: strawIcon,
      corner: strawCor,
      featuring: [
        "400 Interwoven strings for the best clean",
        "All natural and eco-friendly",
        "Made with recycled materials for a greener future",
        "Refreshing Mint scent to revitalize your flossing",
      ],
    },
  ];
  return (
    <div className="flex flex-col md:flex-row justify-start items-start   bg-white  space-y-10 md:space-x-10 px-10 md:px-14 ">
      {data?.map((a, idx) => (
        <div
          key={`show-items-${idx}`}
          className="w-full md:w-1/2 flex flex-col bg-white rounded-md overflow-hidden"
        >
          <div className=" w-full  flex flex-col relative ">
            <div className="min-h-[600px] w-full flex flex-col relative ">
              <div className="absolute w-full z-1 h-full inset-0 flex items-center justify-center">
                <Image
                  fill
                  className="w-full h-full object-center object-cover"
                  src={a.background}
                  alt={a.title}
                  quality={100}
                />
              </div>
              <div className="absolute bottom-5 w-full z-2 min-h-1/4 px-6">
                <div className="w-full h-full min-h-fit bg-white flex-col space-y-4 rounded-md py-4 px-5">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-start gap-2">
                    {[a.title, `$${a.price}`].map((b, idxb) => (
                      <span
                        key={`idbx-item-${idxb}`}
                        className="text-[#392E09] text-[clamp(20px,2vw,26px)]"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-row gap-3 items-center w-full justify-start flex-wrap">
                    {Array(5)
                      .fill(" ")
                      .map((a, indx) => (
                        <FaStar
                          className="text-[gold] text-sm"
                          key={`star-${indx}`}
                        />
                      ))}
                    <span>{a.highlights}</span>
                  </div>
                  <div
                    className={clsx(
                      "w-full  h- py-2 px-4 flex items-center justify-center text-[clamp(16px,2vw,24px)] rounded-md ",
                      idx === 0 &&
                        "bg-gradient-to-r from-[#34633A] to-[#538C4D]",
                      idx === 1 &&
                        "bg-gradient-to-r from-[#AE3337] to-[#DF5451]"
                    )}
                  >
                    Buy Now
                  </div>
                </div>
              </div>
            </div>

            <div
              className={clsx(
                "w-full p-4 relative h-fit min-h-32 overflow-hidden",
                idx === 0 && "bg-[#EEF4E1]",
                idx === 1 && " bg-[#FFE3D9]"
              )}
            >
              <div className="absolute z-1 -top-9 pointer-events-none -right-9">
                <div className="w-32 h-32">
                  <Image
                    fill
                    src={a.corner}
                    alt="icon"
                    className="object-cover w-full h-full "
                  />
                </div>
              </div>
              <div className="relative z-2 flex flex-col text-[#231F20] space-y-2">
                <span className="text-[clamp(22px,5vw,32px)] py-2">
                  Why {a.title} ?
                </span>
                {a.featuring.map((ab, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-start gap-2"
                  >
                    <div className="inline-flex relative justify-center items-center w-5 h-5">
                      <Image fill src={a.icon} alt={a.title}></Image>
                    </div>
                    <span className=" text-sm ">{ab}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Section2;
