import { motion, useScroll, useSpring } from "motion/react";
import React from "react";

const Scrollindicator = () => {
  const { scrollYProgress } = useScroll(); // gives 0 to 1
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 20,
    mass: 0.5,
  });

  return (
    <>
      <motion.div className="flex w-full h-1 bg-transparent fixed top-0 left-0 z-[999]">
        <motion.div
          className="bg-[#34633A] h-full w-full origin-left"
          style={{
            scaleX: scaleX,
          }}
        ></motion.div>
      </motion.div>
    </>
  );
};

export default Scrollindicator;
