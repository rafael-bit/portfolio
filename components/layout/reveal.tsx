'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  immediate?: boolean;
};

function isInViewport(el: HTMLElement) {
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight * 0.92 && rect.bottom > 0;
}

export function Reveal({
  children,
  className,
  delay = 0,
  immediate = false,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const show = () => setVisible(true);

    if (immediate) {
      const timer = window.setTimeout(show, 100 + delay);
      return () => window.clearTimeout(timer);
    }

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (reducedMotion) {
      show();
      return;
    }

    let observer: IntersectionObserver | null = null;

    const start = () => {
      if (isInViewport(el)) {
        show();
        return;
      }

      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            show();
            observer?.disconnect();
          }
        },
        { threshold: 0, rootMargin: '0px 0px -40px 0px' },
      );

      observer.observe(el);
    };

    const frame = window.requestAnimationFrame(start);

    return () => {
      window.cancelAnimationFrame(frame);
      observer?.disconnect();
    };
  }, [delay, immediate]);

  return (
    <div
      ref={ref}
      className={cn('reveal', visible && 'reveal--visible', className)}
      style={
        delay
          ? ({ '--reveal-delay': `${delay}ms` } as React.CSSProperties)
          : undefined
      }
    >
      {children}
    </div>
  );
}
