import React, { forwardRef } from "react";
import clsx from "clsx";

import { DIRECTION } from "@/constants/shared";

import css from "./animatedFrame.module.css";
import { AnimatedFrameLayoutProps } from "./types";

const AnimatedFrameLayout = forwardRef<HTMLDivElement, AnimatedFrameLayoutProps>(
  ({ children, isInView, direction = DIRECTION.LEFT }, ref) => {
    return (
      <div className={css.wrap} ref={ref}>
        <div
          className={clsx(css[direction], {
            [css.visible]: isInView,
            [css.hidden]: !isInView,
          })}
        >
          {children}
        </div>
      </div>
    );
  },
);

AnimatedFrameLayout.displayName = "AnimatedFrameLayout";

export default AnimatedFrameLayout;
