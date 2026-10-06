import React, { useEffect, useRef, useState } from 'react';

interface MaskRevealTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'div' | 'span' | 'p';
}

export const MaskRevealText: React.FC<MaskRevealTextProps> = ({
  children,
  className = '',
  delay = 100,
  as: Component = 'div'
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <Component
        style={{
          transform: isVisible ? 'translate3d(0, 0, 0)' : 'translate3d(0, 105%, 0)',
          opacity: isVisible ? 1 : 0.01,
          transitionProperty: 'transform, opacity',
          transitionDuration: '800ms',
          transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
          transitionDelay: `${delay}ms`,
          willChange: 'transform, opacity'
        }}
      >
        {children}
      </Component>
    </div>
  );
};
