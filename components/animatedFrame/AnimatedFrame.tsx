"use client";

import React, { useRef } from "react";

import useInView from "./hooks";
import AnimatedFrameLayout from "./AnimatedFrameLayout";
import { AnimatedFrameProps } from "./types";

const AnimatedFrame: React.FC<AnimatedFrameProps> = ({ children, direction }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <AnimatedFrameLayout ref={ref} isInView={isInView} direction={direction}>
      {children}
    </AnimatedFrameLayout>
  );
};

export default AnimatedFrame;
