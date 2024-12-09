import { useEffect, useRef, useState } from "react";
import { useCarouselControlProps, useCarouselControlReturn } from "./types";

export const useCarouselControl = ({
  itemsCount,
  interval,
}: useCarouselControlProps): useCarouselControlReturn => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalId = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef<number | null>(null);

  // Next/Prev handlers
  const handleShowNext = () =>
    setCurrentIndex((prevIndex) => (prevIndex + 1) % itemsCount);

  const handleShowPrev = () =>
    setCurrentIndex((prevIndex) => (prevIndex - 1 + itemsCount) % itemsCount);

  // Stop/Run handlers
  const handleStop = () => {
    if (intervalId.current) clearInterval(intervalId.current);
  };

  const handleRun = () => {
    if (interval) {
      intervalId.current = setInterval(() => handleShowNext(), interval);
    }
  };

  // Swipe handlers
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    touchStartX.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!touchStartX.current) return;

    const touchEndX = e.touches[0].clientX;
    const diffX = touchStartX.current - touchEndX;

    if (Math.abs(diffX) > 50) {
      if (diffX > 0) {
        handleShowNext();
      } else {
        handleShowPrev();
      }

      touchStartX.current = null;
    }
  };

  useEffect(() => {
    handleRun();

    return () => handleStop();
  }, []);

  return {
    currentIndex,
    prevIndex: currentIndex - 1 === -1 ? itemsCount - 1 : currentIndex - 1,
    nextIndex: currentIndex + 1 === itemsCount ? 0 : currentIndex + 1,
    handleShowNext,
    handleShowPrev,
    handleRun,
    handleStop,
    handleTouchStart,
    handleTouchEnd,
    handleTouchMove,
  };
};
