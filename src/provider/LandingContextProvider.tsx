"use client";
import LandingPageContext from "@/context/LandingPageContext";
import React, { ReactNode, useContext, useState } from "react";

const LandingContextProvider = ({ children }: { children: ReactNode }) => {
  const [loaded, setLoaded] = useState(true);

  return (
    <LandingPageContext.Provider value={{ loaded, setLoaded }}>
      {children}
    </LandingPageContext.Provider>
  );
};

const useGetLandingLoadedStatus = () => {
  const context = useContext(LandingPageContext);
  if (!context) {
    throw new Error("Please use The Status Only inside provider");
  } else return context;
};
export { useGetLandingLoadedStatus };
export default LandingContextProvider;
