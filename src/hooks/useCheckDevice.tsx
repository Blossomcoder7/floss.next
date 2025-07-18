
"use client";
import { useState, useEffect } from "react";

interface useDeviceCheckReturnType {
  isIOS: boolean;
  isMobile: boolean;
  isTablet: boolean;
  isBigScreen: boolean;
}

function isMobileDevice() {
  const userAgent = navigator.userAgent;
  const isIOS = /iPhone|iPad|iPod/i.test(userAgent);
  const isMobile = /Mobi|Android|BlackBerry|IEMobile|Opera Mini/i.test(
    userAgent
  );
  const isTablet = /Tablet|iPad/i.test(userAgent) && !/Mobi/i.test(userAgent);
  const isBigScreen = window.innerWidth > 1200;
  return {
    isIOS,
    isMobile,
    isTablet,
    isBigScreen,
  };
}

type useDeviceCheckType = () => useDeviceCheckReturnType;

const useDeviceCheck: useDeviceCheckType = () => {
  const [device, setDevice] = useState({
    isIOS: false,
    isMobile: false,
    isTablet: false,
    isBigScreen: false,
  });

  useEffect(() => {
    const { isIOS, isMobile, isTablet, isBigScreen } = isMobileDevice();
    setDevice({ isIOS, isMobile, isTablet, isBigScreen });
  }, []);

  return device;
};

export default useDeviceCheck;
