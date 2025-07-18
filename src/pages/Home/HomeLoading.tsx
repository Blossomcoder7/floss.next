"use client";
import Image from "next/image";
import React, {
  ReactNode,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import logo from "@/assets/logos/logo.png";
import { useGSAP } from "@gsap/react";
import useSmoothScroll from "@/hooks/useSmoothScroll";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGetLandingLoadedStatus } from "@/provider/LandingContextProvider";
gsap.registerPlugin(ScrollTrigger);

const HomeLoading = ({ children }: { children: ReactNode }) => {
  const containerEl = useRef<HTMLDivElement>(null);
  const overlayEl = useRef<HTMLDivElement>(null);
  const bannerEl = useRef<HTMLDivElement>(null);
  const leftEl = useRef<HTMLDivElement>(null);
  const rightEl = useRef<HTMLDivElement>(null);
  const logoEl = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState<boolean>(true);
  const { lenisInstance } = useSmoothScroll({});

  // 🔁 Setup ScrollTrigger Proxy after lenis is ready
  useEffect(() => {
    if (!lenisInstance || !containerEl.current) return;

    ScrollTrigger.scrollerProxy(containerEl.current, {
      scrollTop(value) {
        if (arguments.length) {
          lenisInstance.scrollTo(value!);
        }
        return lenisInstance.scroll;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: containerEl.current.style.transform ? "transform" : "fixed",
    });

    ScrollTrigger.refresh();
  }, [lenisInstance]);
  const { setLoaded } = useGetLandingLoadedStatus();
  useGSAP(
    () => {
      if (
        !containerEl ||
        !overlayEl?.current ||
        !bannerEl?.current ||
        !leftEl?.current ||
        !rightEl?.current ||
        !logoEl?.current
      ) {
        return;
      } else {
        ScrollTrigger.refresh();
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerEl?.current,
            start: "top top",
            end: "bottom top",
            pin: containerEl?.current,
            pinSpacing: true,
            scrub: 1,
            markers: false,
            onUpdate: (self) => {
              const prog = self?.progress;
              if (prog >= 0.55) {
                setLoaded(true);
              } else {
                setLoaded(false);
              }
            },
            onEnter: () => {
              gsap.set(containerEl?.current, { zIndex: 9999 });
              setLoaded(false);
            },
            onLeave: () => {
              gsap.set(containerEl?.current, { zIndex: 9 });
              setLoaded(true);
              setIsAnimating(false);
            },
            onEnterBack: () => {
              gsap.set(containerEl?.current, { zIndex: 9999 });
              setLoaded(false);
            },
            onLeaveBack: () => {
              gsap.set(containerEl?.current, { zIndex: 9 });
              setLoaded(true);
              setIsAnimating(false);
            },
          },
        });

        tl?.to(
          leftEl?.current,
          {
            left: "-100%",
            display: "none",
            opacity: 0,
          },
          "<"
        )
          ?.to(
            rightEl?.current,
            {
              right: "-100%",
              display: "none",
              opacity: 0,
            },
            "<"
          )
          ?.to(
            logoEl?.current,
            {
              opacity: 0,
              scale: 2,
              display: "none",
            },
            "<"
          )
          .to(containerEl?.current, {
            zIndex: 9,
            // display: "none",
          });
      }
      console.log(isAnimating);
    },
    {
      scope: containerEl,
      dependencies: [containerEl, overlayEl, logoEl, bannerEl, leftEl, rightEl],
    }
  );

useLayoutEffect(() => {
  
},[]);

  return (
    <>
      <div ref={containerEl} className="w-full flex flex-col h-fit relative ">
        <div
          ref={overlayEl}
          className="w-full h-screen flex items-center justify-center z-[9] sticky top-0 inset-0  "
        >
          <div
            ref={logoEl}
            className="absolute w-full h-full backdrop-blur-[10px] items-center flex justify-center"
          >
            <Image
              src={logo}
              alt="logo"
              className=" aspect-video w-[clamp(400px,60vw,600px)] h-auto object-contain"
              width={400}
              height={400}
              // placeholder={
              priority
              quality={100}
            />
          </div>
          <div
            ref={leftEl}
            className="w-full h-full bg-gradient-to-r from-white/90 via-white/80 to-transparent"
          ></div>
          <div
            ref={rightEl}
            className="w-full h-full bg-gradient-to-l from-white/90 via-white/80 to-transparent"
          ></div>
        </div>
        <div
          ref={bannerEl}
          className="absolute top-0 left-0 w-full h-fit flex min-h-fit"
        >
          {children}
        </div>
      </div>
      <div className="flex"></div>
    </>
  );
};

export default HomeLoading;
