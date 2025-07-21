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
import Scrollindicator from "@/components/UI/Scrollindicator";
import footerbg from "@/assets/images/footerbg.png";
import useGetLandingLoadedStatus from "@/hooks/use";

const Layout = ({ children }: { children: ReactNode }) => {
  useSmoothScroll({ autoInit: true });
  const isScrolling = useWheelActivity(800);
  const drawerEl = useRef<DrawerRefType>(null);
  const { loaded } = useGetLandingLoadedStatus();

  return (
    <>
      <Scrollindicator />
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
                                  className="flex items-center justify-center gap-4 h-full "
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
      <footer className="grid grid-cols-1 w-full min-h-fit auto-rows-fr bg-[#FCE4DC] pb-10 px-10 md:px-14 relative">
        {/* Background Image */}
        <div className="absolute z-0 w-full h-full inset-0">
          <Image
            fill
            className="object-cover object-top w-full h-full"
            src={footerbg}
            alt="footer"
          />
        </div>
        <div className="w-full h-full"></div>
        {/* Main Content */}
        <div className="relative z-10 w-full min-h-[424px] bg-[#FFFCF3] text-[#231F20] rounded-[22px] p-10 flex flex-col justify-between gap-10">
          {/* Top Grid: Logo + Links */}
          <div className="flex flex-col md:flex-row w-full gap-8">
            {/* Left Logo Section (40%) */}
            <div className="w-full md:w-[40%] flex items-start">
              <Image src={logo} alt="Logo" width={180} height={80} />
            </div>

            {/* Right Links Section (60%) */}
            <div className="w-full md:w-[60%] grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm font-medium">
              {/* Info */}
              <div className="flex flex-col gap-4">
                <h4 className="font-semibold text-xl mb-1">Info</h4>
                <a href="#">Home</a>
                <a href="#">Shop</a>
                <a href="#">About</a>
                <a href="#">Contact Us</a>
              </div>

              {/* Follow Us */}
              <div className="flex flex-col gap-4">
                <h4 className="font-semibold text-xl mb-1">Follow Us</h4>
                <a href="#">Instagram</a>
                <a href="#">Twitter</a>
                <a href="#">Facebook</a>
                <a href="#">Youtube</a>
              </div>

              {/* Conditions */}
              <div className="flex flex-col gap-4">
                <h4 className="font-semibold text-xl mb-1">Conditions</h4>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms & Condition</a>
                <a href="#">Cookie Policy</a>
              </div>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="w-full border-t border-[#D8D1C3] pt-6 text-xs md:text-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <p>© 2023 — Copyright All Right Reserved.</p>
            <p>Design by MarkaWorks</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Layout;
