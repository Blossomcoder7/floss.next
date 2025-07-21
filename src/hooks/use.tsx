"use client"

import LandingPageContext from "@/context/LandingPageContext";
import { useContext } from "react";

const useGetLandingLoadedStatus = () => {
  const context = useContext(LandingPageContext);
  if (!context) {
    throw new Error("Please use The Status Only inside provider");
  } else return context;
};
export default useGetLandingLoadedStatus ;