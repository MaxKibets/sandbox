"use client";

import React, { useRef } from "react";

import useInView from "../utils/useInView";
import AnimatedFrameLayout, {
  AnimationDirectionProps,
} from "../components/AnimatedFrameLayout";

type AnimatedFrameProps = {
  children: React.ReactNode;
} & AnimationDirectionProps;

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
