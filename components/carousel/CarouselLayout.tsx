import React, { Children } from "react";
import clsx from "clsx";

import css from "./carousel.module.css";
import { CarouselLayoutProps } from "./types";

const CarouselLayout: React.FC<CarouselLayoutProps> = ({
  children,
  currentIndex,
  prevIndex,
  nextIndex,
  onMouseEnter,
  onMouseLeave,
  onPrevClick,
  onNextClick,
  onTouchStart,
  onTouchEnd,
  onTouchMove,
  iconPrev,
  iconNext,
}) => {
  return (
    <div
      className={css.carousel}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onTouchMove={onTouchMove}
    >
      <ul className={css.list}>
        {Children.map(children, (child, index) => (
          <li
            className={clsx(css.item, {
              [css.current]: currentIndex === index,
              [css.prev]: prevIndex === index,
              [css.next]: nextIndex === index,
            })}
            key={index}
          >
            {child}
          </li>
        ))}
      </ul>
      <button onClick={onPrevClick} className={css.buttonLeft} type="button">
        {iconPrev || <i className={css.iconLeft} />}
      </button>
      <button onClick={onNextClick} className={css.buttonRight} type="button">
        {iconNext || <i className={css.iconRight} />}
      </button>
    </div>
  );
};

export default CarouselLayout;
