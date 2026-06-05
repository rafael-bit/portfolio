'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

function canUseCustomCursor() {
  if (typeof window === 'undefined') return false;
  const touchOnly = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
  return !touchOnly;
}

export function AuraCursor() {
  const [ready, setReady] = useState(false);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const frame = useRef<number>();

  useEffect(() => {
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready || !canUseCustomCursor()) return;

    const dot = dotRef.current;
    const ringEl = ringRef.current;
    if (!dot || !ringEl) return;

    const setVisible = (visible: boolean) => {
      dot.classList.toggle('aura-cursor__dot--visible', visible);
      ringEl.classList.toggle('aura-cursor__ring--visible', visible);
    };

    let hovering = false;

    const setHover = (hover: boolean) => {
      hovering = hover;
      dot.classList.toggle('aura-cursor__dot--hover', hover);
      ringEl.classList.toggle('aura-cursor__ring--hover', hover);
    };

    const place = (
      el: HTMLDivElement,
      x: number,
      y: number,
      scale = 1,
    ) => {
      el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) scale(${scale})`;
    };

    const onMove = (event: MouseEvent) => {
      mouse.current = { x: event.clientX, y: event.clientY };
      document.body.classList.add('has-aura-cursor');
      setVisible(true);
      place(dot, event.clientX, event.clientY, hovering ? 1.35 : 1);
    };

    const onLeave = () => {
      setVisible(false);
      document.body.classList.remove('has-aura-cursor');
    };

    const onOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const interactive = target?.closest(
        'a, button, [role="button"], input, textarea, select, label, summary',
      );
      setHover(Boolean(interactive));
    };

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    const lag = reducedMotion ? 1 : 0.14;

    const tick = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * lag;
      ring.current.y += (mouse.current.y - ring.current.y) * lag;
      place(ringEl, ring.current.x, ring.current.y);
      frame.current = requestAnimationFrame(tick);
    };

    frame.current = requestAnimationFrame(tick);

    window.addEventListener('mousemove', onMove, { passive: true });
    document.documentElement.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseover', onOver, { passive: true });

    return () => {
      document.body.classList.remove('has-aura-cursor');
      window.removeEventListener('mousemove', onMove);
      document.documentElement.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseover', onOver);
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, [ready]);

  if (!ready || !canUseCustomCursor()) return null;

  return createPortal(
    <div className="aura-cursor" aria-hidden>
      <div ref={dotRef} className="aura-cursor__dot" />
      <div ref={ringRef} className="aura-cursor__ring" />
    </div>,
    document.body,
  );
}
