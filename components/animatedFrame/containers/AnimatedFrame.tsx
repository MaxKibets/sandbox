"use client";

import React, { useRef } from "react";

import useInView from "../utils/useInView";

import css from "../styles/animatedFrame.module.css";

type AnimatedFrameProps = {
  children: React.ReactNode;
};

const AnimatedFrame = ({ children }: AnimatedFrameProps) => {
  const ref = useRef(null);

  const isInView = useInView({ element: ref.current });

  return (
    <div className={css.wrap} ref={ref}>
      <div className={isInView ? css.visible : css.hidden}>{children}</div>
    </div>
  );
};

export default AnimatedFrame;
