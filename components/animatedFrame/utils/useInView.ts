import { useEffect, useState } from "react";

type useInViewProps = {
  element: HTMLDivElement | null;
  options?: IntersectionObserverInit;
};

const useInView = ({
  element,
  options = {
    threshold: 0.5,
  },
}: useInViewProps) => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      options,
    );

    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return isInView;
};

export default useInView;
