"use client";

import React, { Children } from "react";

import useCarouselControl from "../utils/useCarouselControl";
import CarouselLayout from "../components/CarouselLayout";

type CarouselProps = {
  children: React.ReactNode;
  interval?: number;
  iconPrev?: React.ReactNode | string;
  iconNext?: React.ReactNode | string;
};

const Carousel: React.FC<CarouselProps> = ({ children, interval, ...props }) => {
  const {
    currentIndex,
    prevIndex,
    nextIndex,
    handleShowNext,
    handleShowPrev,
    handleRun,
    handleStop,
    handleTouchStart,
    handleTouchEnd,
    handleTouchMove,
  } = useCarouselControl({
    itemsCount: Children.count(children),
    interval,
  });

  return (
    <CarouselLayout
      currentIndex={currentIndex}
      prevIndex={prevIndex}
      nextIndex={nextIndex}
      onMouseEnter={handleStop}
      onMouseLeave={handleRun}
      onNextClick={handleShowNext}
      onPrevClick={handleShowPrev}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchMove={handleTouchMove}
      {...props}
    >
      {children}
    </CarouselLayout>
  );
};

export default Carousel;
