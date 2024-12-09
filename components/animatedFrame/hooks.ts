import { useEffect, useState } from "react";

const useInView = (
  ref: React.MutableRefObject<HTMLElement | null>,
  options?: IntersectionObserverInit,
): boolean => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      {
        threshold: 1,
        ...options,
      },
    );

    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return isInView;
};

export default useInView;
