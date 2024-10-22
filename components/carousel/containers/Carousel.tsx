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
    showNext,
    showPrev,
    stopCarousel,
    runCarousel,
  } = useCarouselControl({
    itemsCount: Children.count(children),
    interval,
  });

  return (
    <CarouselLayout
      currentIndex={currentIndex}
      prevIndex={prevIndex}
      nextIndex={nextIndex}
      onMouseEnter={stopCarousel}
      onMouseLeave={runCarousel}
      onNextClick={showNext}
      onPrevClick={showPrev}
      {...props}
    >
      {children}
    </CarouselLayout>
  );
};

export default Carousel;
