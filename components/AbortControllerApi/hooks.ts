import { useEffect } from "react";

export const useClickListener = () => {
  useEffect(() => {
    const controller = new AbortController();

    document.addEventListener(
      "click",
      () => {
        console.log("click");
      },
      { signal: controller.signal },
    );

    return () => {
      controller.abort();
    };
  }, []);
};
