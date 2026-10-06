import React, { useEffect, useRef, useState } from 'react';

interface AnimatedCounterProps {
  value: number | string;
  suffix?: string;
  duration?: number; // in ms
  className?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  suffix = '',
  duration = 1400,
  className = ''
}) => {
  const [displayCount, setDisplayCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  // Extract numeric part
  const numericValue = typeof value === 'number' ? value : parseInt(value.replace(/[^0-9]/g, ''), 10);
  const isValidNumber = !isNaN(numericValue);

  useEffect(() => {
    if (!isValidNumber) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setDisplayCount(numericValue);
      setHasAnimated(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTime: number | null = null;

          const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            // Ease out quad curve: 1 - (1 - t) * (1 - t)
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);
            const currentVal = Math.floor(easeOutProgress * numericValue);

            setDisplayCount(currentVal);

            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setDisplayCount(numericValue);
            }
          };

          window.requestAnimationFrame(step);
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [numericValue, duration, hasAnimated, isValidNumber]);

  if (!isValidNumber) {
    return <span className={className}>{value}{suffix}</span>;
  }

  // Format with thousands comma separator if >= 10,000
  const formattedDisplay = numericValue >= 10000 
    ? displayCount.toLocaleString() 
    : displayCount.toString();

  return (
    <span ref={ref} className={`font-mono tabular-nums ${className}`}>
      {formattedDisplay}{suffix}
    </span>
  );
};
