import React, { Children } from "react";

import css from "../styles/carouselLayout.module.css";

type CarouselLayoutProps = {
  children: React.ReactNode;
  currentIndex: number;
  prevIndex: number;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onPrevClick: () => void;
  onNextClick: () => void;
  iconPrev?: React.ReactNode | string;
  iconNext?: React.ReactNode | string;
};

const CarouselLayout: React.FC<CarouselLayoutProps> = ({
  children,
  currentIndex,
  prevIndex,
  onMouseEnter,
  onMouseLeave,
  onPrevClick,
  onNextClick,
  iconPrev,
  iconNext,
}) => {
  return (
    <div className={css.carousel} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <ul className={css.list}>
        {Children.map(children, (child, index) => (
          <li
            className={`${css.item} ${currentIndex === index ? css.active : ""} ${prevIndex === index ? css.prev : ""}`}
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
