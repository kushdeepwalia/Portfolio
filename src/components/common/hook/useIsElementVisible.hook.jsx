import { useEffect, useState } from "react";

export const useForceRerender = () => {
   const [, setValue] = useState(0); // we don't need the value of this state.
   return () => setValue(value => value + 1);
};

export const useIsElementVisible = (target, options = undefined) => {
   const [isVisible, setIsVisible] = useState(false);
   const forceUpdate = useForceRerender();

   useEffect(() => {
      forceUpdate(); // to ensure that ref.current is attached to the DOM element
   }, []);

   useEffect(() => {
      if (!target) return;

      const observer = new IntersectionObserver(handleVisibilityChange, options);
      observer.observe(target);

      return () => observer.unobserve(target);
   }, [target, options]);

   const handleVisibilityChange = ([entry]) =>
      setIsVisible(entry.isIntersecting);
   console.log(target, isVisible);
   return isVisible;
};