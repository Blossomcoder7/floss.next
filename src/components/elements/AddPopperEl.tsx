
"use client";
import useSmoothScroll from "@/hooks/useSmoothScroll";
import {
  ClickAwayListener,
  PopoverVirtualElement,
  Popper,
} from "@mui/material";
import clsx from "clsx";
import { motion } from "motion/react";
import React, {
  MouseEventHandler,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

interface AddPopperElProps extends React.HTMLAttributes<HTMLDivElement> {
  popperContent: ReactNode | undefined;
}
const AddPopperEl = ({
  children,
  className,
  onClick,
  popperContent,
  ...rest
}: AddPopperElProps) => {
  const elmRef = useRef<HTMLDivElement>(null);

  const [anchorEl, setAnchorEl] = useState<
    | Element
    | (() => Element)
    | PopoverVirtualElement
    | (() => PopoverVirtualElement)
    | null
    | undefined
  >(null);
  const popperRef = useRef<HTMLDivElement>(null);
  const { changeTarget, retrigger } = useSmoothScroll({});
  useEffect(() => {
    if (!popperRef?.current || !anchorEl) {
      return;
    }
    changeTarget(popperRef?.current);
    retrigger();
  }, [changeTarget, retrigger, popperRef, anchorEl]);

  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    onClick?.(e);
    setAnchorEl(e?.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <div
        ref={elmRef}
        onClick={handleClick}
        {...rest}
        className={clsx(className, "")}
      >
        {children}
      </div>
      <Popper
        anchorEl={anchorEl}
        open={!!anchorEl}
        placement="bottom"
        sx={{
          width: "100%",
        }}
      >
        <ClickAwayListener onClickAway={() => handleClose()}>
          <motion.div
            initial={{
              y: 0,
            }}
            animate={{
              y: !!anchorEl ? 0 : -1000,
            }}
            transition={{
              delay: 1,
              type: "spring",
              stiffness: 120,
              damping: 20,
            }}
            ref={popperRef}
            className="min-w-full h-fit max-h-[60svh] max-w-full bg-text text-white overflow-auto "
          >
            <div className="min-h-fit w-full flex flex-col">
              {popperContent}
            </div>
          </motion.div>
        </ClickAwayListener>
      </Popper>
    </>
  );
};

export default AddPopperEl;
