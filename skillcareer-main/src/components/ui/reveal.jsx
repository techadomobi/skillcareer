"use client";

import React from "react";
import { cn } from "@/lib/utils";

const REVEAL_VARIANTS = {
  rise: {
    hidden: "opacity-0 translate-y-4",
    visible: "opacity-100 translate-y-0",
  },
  zoom: {
    hidden: "opacity-0 translate-y-2 scale-[0.985] blur-[2px]",
    visible: "opacity-100 translate-y-0 scale-100 blur-0",
  },
  slideLeft: {
    hidden: "opacity-0 translate-x-4",
    visible: "opacity-100 translate-x-0",
  },
  slideRight: {
    hidden: "opacity-0 -translate-x-4",
    visible: "opacity-100 translate-x-0",
  },
};

export function Reveal({
  as: Component = "div",
  children,
  className,
  delay = 0,
  once = true,
  threshold = 0.15,
  variant = "rise",
  style,
  ...props
}) {
  const ref = React.useRef(null);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;

        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [once, threshold]);

  const selected = REVEAL_VARIANTS[variant] ?? REVEAL_VARIANTS.rise;

  return (
    <Component
      ref={ref}
      className={cn(
        "motion-reduce:transform-none motion-reduce:transition-none",
        "will-change-transform transition-[transform,opacity,filter] duration-700 ease-out",
        isVisible ? selected.visible : selected.hidden,
        className
      )}
      style={{ transitionDelay: `${delay}ms`, ...style }}
      {...props}
    >
      {children}
    </Component>
  );
}
