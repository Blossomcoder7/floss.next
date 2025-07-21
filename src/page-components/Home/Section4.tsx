
import MotionOverlay from "@/components/animated/MotionOverlay";
import clsx from "clsx";
import { motion } from "motion/react";
import Image from "next/image";
import React, { useRef, useState } from "react";
import mintBg from "@/assets/images/mint.png";
import strawBg from "@/assets/images/strawberry.png";
import soaps from "@/assets/images/soaps.png";
import { IoIosArrowDown } from "react-icons/io";

const Section4 = () => {
  const containerEl = useRef<HTMLDivElement>(null);
  const [hoverElIndex, setHoverElIndex] = useState<number>(1);
  const elmsRef = useRef<(HTMLDivElement | null)[]>([]);
  const items = [
    { id: 1, name: "All" },
    { id: 2, name: "Best Sellers" },
    { id: 3, name: "Refills" },
    { id: 4, name: "Bundles" },
  ];

  const data = [
    {
      title: "1 30yd bobbin with glass dispenser",
      name: "Refreshing Mint",
      price: "12.00",
      background: mintBg,
      featuring: [
        "400 Interwoven strings for the best clean",
        "All natural and eco-friendly",
        "Made with recycled materials for a greener future",
        "Refreshing Mint scent to revitalize your flossing",
      ],
    },
    {
      title:
        "The Traveler - 1 30yd bobbin with glass dispenser & 2 minis of same scent",
      name: "Sweet Strawberry",
      price: "15.00",
      background: strawBg,
      featuring: [
        "400 Interwoven strings for the best clean",
        "All natural and eco-friendly",
        "Made with recycled materials for a greener future",
        "Refreshing Mint scent to revitalize your flossing",
      ],
    },
    {
      title: "4 Miniature floss bobbins with dispensers",
      name: "Sweet Strawberry",
      price: "20.00",
      background: soaps,
      featuring: [
        "400 Interwoven strings for the best clean",
        "All natural and eco-friendly",
        "Made with recycled materials for a greener future",
        "Refreshing Mint scent to revitalize your flossing",
      ],
    },
  ];
  return (
    <div className="fex flex-col m w-full space-y-10">
      {/* //hading area */}
      <div className="w-full flex items-center justify-center text-[#231F20] relative">
        <span className="text-[clamp(60px,6vw,80px)]  italic font-thin text-center w-fit ">
          Explore Our Flosses
        </span>
      </div>
      <div
        ref={containerEl}
        className="w-fit mx-auto flex flex-row flex-wrap justify-center items-center gap-2 font-medium  px-1 py-2 bg-[#F8F3E4] overflow-hidden relative rounded-[44px] "
      >
        <MotionOverlay
          cellRefs={elmsRef}
          containerEl={containerEl}
          hoverElIndex={hoverElIndex}
          overlayClasses="bg-gradient-to-r from-[#34633A] z-1 to-[#538C4D] rounded-[44px]"
        ></MotionOverlay>
        {items.map((a) => (
          <motion.div
            key={a.id}
            onMouseEnter={() => setHoverElIndex(a.id)}
            onMouseLeave={() => setHoverElIndex((p) => (p ? p : 0))}
            className="w-fit relative cursor-pointer z-2 px-10 py-3 rounded-[44px] "
            ref={(el) => {
              elmsRef.current[a.id] = el;
            }}
          >
            <motion.span
              className="relative z-3"
              animate={{
                color: hoverElIndex === a.id ? "white" : "inherit",
              }}
            >
              {a.name}
            </motion.span>
          </motion.div>
        ))}
      </div>
      <div className="grid grid-cols-1  md:grid-cols-3 auto-rows-max gap-y-10 md:gap-x-10 px-10 md:px-20">
        {data?.map((a, idx) => (
          <div
            key={`show-items-${idx}`}
            className="w-full col-span-full md:col-span-1 max-h-full flex flex-col bg-[#F8F3E4] rounded-md overflow-hidden"
          >
            <div className=" w-full h-full flex flex-col relative ">
              <div className=" w-full h-full flex flex-col relative ">
                <div className="relative h-[400px]  w-full z-1 inset-0 flex items-center justify-center">
                  <Image
                    fill
                    className=" h-full object-center p-10 object-contain"
                    src={a.background}
                    alt={a.title}
                    quality={100}
                  />
                </div>
                <div className="relative  flex-1 bottom-5 w-full z-2 min-h-1/4 px-6">
                  <div className="w-full h-full min-h-fit bg-white  text-[#392E09] flex justify-between flex-col space-y-4 rounded-md py-4 px-5">
                    <div className="flex flex-col w-full flex-1">
                      <div className="w-full font-medium text-center text-[clamp(16px,1vw,20px)]">
                        {a.title}
                      </div>
                      <div className="w-full flex items-center justify-between">
                        <div className="flex flex-row md:flex-row md:items-center md:justify-start gap-2">
                          {[a.name, `$${a.price}`].map((b, idxb) => (
                            <span key={`idbx-item-${idxb}`} className="">
                              {b}
                            </span>
                          ))}
                        </div>
                        <IoIosArrowDown />
                      </div>
                    </div>

                    <div
                      className={clsx(
                        "w-full  h-fit  py-2 px-4 flex items-center justify-center text-[clamp(16px,2vw,18px)] rounded-md ",
                        "bg-gradient-to-r from-[#34633A] to-[#538C4D] text-white"
                      )}
                    >
                      Buy Now
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section4;
