import React, { forwardRef } from "react";

import css from "../styles/animatedFrame.module.css";

export type AnimationDirectionProps = { direction?: "left" | "right" | "top" | "bottom" };

type AnimatedFrameLayoutProps = {
  children: React.ReactNode;
  isInView: boolean;
} & AnimationDirectionProps;

const AnimatedFrameLayout = forwardRef<HTMLDivElement, AnimatedFrameLayoutProps>(
  ({ children, isInView, direction = "left" }, ref) => {
    return (
      <div className={css.wrap} ref={ref}>
        <div
          className={`
            ${isInView ? css.visible : css.hidden} 
            ${direction ? css[direction] : ""}
          `}
        >
          {children}
        </div>
      </div>
    );
  },
);

AnimatedFrameLayout.displayName = "AnimatedFrameLayout";

export default AnimatedFrameLayout;
