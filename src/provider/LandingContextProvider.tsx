"use client";
import LandingPageContext from "@/context/LandingPageContext";
import React, { ReactNode, useState } from "react";

const LandingContextProvider = ({ children }: { children: ReactNode }) => {
  const [loaded, setLoaded] = useState(true);
  return (
    <LandingPageContext.Provider value={{ loaded, setLoaded }}>
      {children}
    </LandingPageContext.Provider>
  );
};


export default LandingContextProvider;
