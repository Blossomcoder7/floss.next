"use client";

import useSmoothScroll from "@/hooks/useSmoothScroll";
import useWheelActivity from "@/hooks/useWheelActivity";
import { motion, AnimatePresence } from "motion/react";
import React, { ReactNode, useRef } from "react";
import logo from "@/assets/logos/logo.png";
import Image from "next/image";
import { HiOutlineBars3 } from "react-icons/hi2";
import Drawer, { DrawerRefType } from "@/components/elements/Drawer";
import { IconButton } from "@mui/material";
import { FaCartPlus, FaSearch, FaUser } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import AddPopperEl from "@/components/elements/AddPopperEl";
import { useGetLandingLoadedStatus } from "@/provider/LandingContextProvider";

const Layout = ({ children }: { children: ReactNode }) => {
  useSmoothScroll({ autoInit: true });
  const isScrolling = useWheelActivity(800);
  const drawerEl = useRef<DrawerRefType>(null);
  const { loaded } = useGetLandingLoadedStatus();

  return (
    <>
      <nav className="fixed top-13 w-full z-[99] px-4 sm:px-10 md:px-20">
        <AnimatePresence>
          <motion.div
            initial={{ y: -200 }}
            animate={{ y: loaded ? (isScrolling ? -200 : 0) : -200 }}
            exit={{ y: -200 }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 20,
              mass: 0.9,
            }}
            className="w-full z-[99] flex items-center justify-center"
          >
            <div className="flex items-center justify-between w-full rounded-md bg-white px-4 sm:px-6 md:px-7 h-[72px] min-h-[72px]">
              {/* Mobile logo */}
              <div className="lg:hidden">
                <Image
                  src={logo}
                  alt="logo"
                  height={32}
                  width={170}
                  className="object-contain object-center"
                />
              </div>

              {/* Right section with Drawer/Menu */}
              <div className="w-fit lg:w-full h-full">
                <Drawer
                  ref={drawerEl}
                  muiDrawerProps={{
                    anchor: "right",
                    disableScrollLock: true,
                  }}
                  menu={
                    <IconButton
                      className="text-primary text-[clamp(20px,5vw,32px)] hover:text-accent"
                      sx={{ p: 2 }}
                      onClick={() => drawerEl?.current?.open?.()}
                    >
                      <HiOutlineBars3 />
                    </IconButton>
                  }
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between w-full h-full mt-20 lg:mt-0 space-y-6 lg:space-y-0 px-6 text-[clamp(18px,2vw,18px)] font-semibold uppercase">
                    {/* Desktop Logo */}
                    <div className="hidden lg:flex items-center justify-center w-fit">
                      <Image
                        src={logo}
                        alt="logo"
                        height={32}
                        width={170}
                        className="object-contain object-center"
                      />
                    </div>

                    {/* Nav Links */}
                    <div className="flex flex-col lg:flex-row items-center justify-center flex-1 space-y-6 lg:space-y-0 lg:space-x-8">
                      {["Home", "Shop", "Learn", "About", "Help"].map(
                        (label, i) => {
                          if (i === 1) {
                            return (
                              <div
                                key={i}
                                className="text-text   text-[clamp(18px,2vw,18px)] cursor-pointer hover:text-accent  text-center flex items-center justify-center gap-1"
                              >
                                <span className=" inline-flex  [text-transform:none]">
                                  {label}
                                </span>
                                <AddPopperEl
                                  className="flex items-center justify-center gap-2 h-full "
                                  popperContent={
                                    <>
                                      <div className="flex w-full h-screen items-center justify-center">
                                        Hello Gudu{" "}
                                      </div>
                                    </>
                                  }
                                >
                                  <span className="hidden  items-center justify-center [text-transform:none]">
                                    {" "}
                                    {label}{" "}
                                  </span>
                                  <span className="hidden  justify-center items-center  h-full">
                                    <IoIosArrowDown className="" />
                                  </span>
                                </AddPopperEl>
                              </div>
                            );
                          }
                          return (
                            <button
                              type="button"
                              key={i}
                              className="text-text hover:text-accent text-center"
                            >
                              {label}
                            </button>
                          );
                        }
                      )}
                    </div>

                    {/* Icons */}
                    <div className="flex flex-col lg:flex-row items-center justify-center space-y-6 lg:space-y-0 lg:space-x-6">
                      {[FaSearch, FaCartPlus, FaUser].map((Icon, idx) => (
                        <button
                          type="button"
                          key={idx}
                          className="text-text hover:text-accent text-xl"
                        >
                          <Icon />
                        </button>
                      ))}
                    </div>
                  </div>
                </Drawer>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </nav>
      <main>{children}</main>
      <footer></footer>
    </>
  );
};

export default Layout;
