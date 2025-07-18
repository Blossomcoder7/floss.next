"use client";
import React, { createContext, SetStateAction } from "react";

export interface LandingPageContextType {
  loaded: boolean;
  setLoaded: React.Dispatch<SetStateAction<boolean>>;
}
const LandingPageContext = createContext<LandingPageContextType | null>(null);

export default LandingPageContext;
