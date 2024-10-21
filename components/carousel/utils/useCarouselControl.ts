import { useEffect, useRef, useState } from "react";

type useCarouselControlProps = {
  itemsCount: number;
  interval?: number;
};

type useCarouselControlReturn = {
  currentIndex: number;
  prevIndex: number;
  showNext: () => void;
  showPrev: () => void;
  stopCarousel: () => void;
  runCarousel: () => void;
};

const useCarouselControl = ({
  itemsCount,
  interval,
}: useCarouselControlProps): useCarouselControlReturn => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalId = useRef<NodeJS.Timeout | null>(null);

  const showNext = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % itemsCount);

  const showPrev = () =>
    setCurrentIndex((prevIndex) => (prevIndex - 1 + itemsCount) % itemsCount);

  const stopCarousel = () => {
    if (intervalId.current) clearInterval(intervalId.current);
  };

  const runCarousel = () => {
    if (interval) {
      intervalId.current = setInterval(() => showNext(), interval);
    }
  };

  useEffect(() => {
    runCarousel();

    return () => stopCarousel();
  }, []);

  return {
    currentIndex,
    prevIndex: currentIndex - 1 === -1 ? itemsCount - 1 : currentIndex - 1,
    showNext,
    showPrev,
    stopCarousel,
    runCarousel,
  };
};

export default useCarouselControl;
