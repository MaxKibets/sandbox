"use client";

import React, { Children } from "react";

import { useCarouselControl } from "./hooks";
import CarouselLayout from "./CarouselLayout";
import { CarouselProps } from "./types";

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
