"use client"
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState, RefObject } from "react";

interface Props {
  containerEl: RefObject<HTMLDivElement | null>;
  cellRefs: RefObject<(HTMLDivElement | null)[]>;
  hoverElIndex: number | null;
  overlayClasses?: string;
}

const MotionOverlay: React.FC<Props> = ({
  containerEl,
  cellRefs,
  hoverElIndex,
  overlayClasses,
}) => {
  const [overlayStyle, setOverlayStyle] = useState({
    top: 0,
    left: 0,
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (hoverElIndex === null || !cellRefs.current) return;

    const cell = cellRefs.current[hoverElIndex];
    const grid = containerEl.current;

    if (cell && grid) {
      const gridRect = grid.getBoundingClientRect();
      const cellRect = cell.getBoundingClientRect();
      setOverlayStyle({
        top: cellRect.top - gridRect.top,
        left: cellRect.left - gridRect.left,
        width: cellRect.width,
        height: cellRect.height,
      });
    }
  }, [hoverElIndex, cellRefs, containerEl]);

  if (hoverElIndex === null) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="overlay"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          top: overlayStyle.top,
          left: overlayStyle.left,
          width: overlayStyle.width,
          height: overlayStyle.height,
        }}
        exit={{ opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={clsx("absolute z-1 pointer-events-none", overlayClasses)}
      />
    </AnimatePresence>
  );
};

export default React.memo(MotionOverlay);
