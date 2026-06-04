'use client';

import { useLayoutEffect, useMemo, useRef } from 'react';
import { tech } from './content';

const WHITE_INDEXES = new Set([1, 2]);
const EASE = 'cubic-bezier(0.45, 0, 0.2, 1)';

function buildSlides(items: readonly string[], size: number): string[][] {
  const slides: string[][] = [];

  for (let i = 0; i < items.length; i += size) {
    const chunk = [...items.slice(i, i + size)];
    if (chunk.length === 0) continue;

    let pad = 0;
    while (chunk.length < size) {
      chunk.push(items[pad % items.length]);
      pad += 1;
    }

    slides.push(chunk);
  }

  return slides;
}

function slideDurationMs(): number {
  const raw = getComputedStyle(document.documentElement)
    .getPropertyValue('--tech-slide-duration')
    .trim();
  if (!raw) return 4000;
  if (raw.endsWith('ms')) return parseFloat(raw) || 4000;
  if (raw.endsWith('s')) return (parseFloat(raw) || 4) * 1000;
  return 4000;
}

function sleep(ms: number, signal: { cancelled: boolean }) {
  return new Promise<void>((resolve) => {
    const start = performance.now();
    const tick = (now: number) => {
      if (signal.cancelled) {
        resolve();
        return;
      }
      if (now - start >= ms) {
        resolve();
        return;
      }
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  });
}

function TechPanel({ names }: { names: readonly string[] }) {
  return (
    <div className="tech-ticker__panel">
      {names.map((name, i) => (
        <p
          key={`${name}-${i}`}
          className={
            WHITE_INDEXES.has(i)
              ? 'tech-ticker__line'
              : 'tech-ticker__line tech-ticker__line--accent'
          }
        >
          {name}
        </p>
      ))}
    </div>
  );
}

export function TechTicker() {
  const trackRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const slides = useMemo(
    () => buildSlides(tech.items, tech.visibleCount),
    []
  );
  const panels = useMemo(() => [...slides, ...slides], [slides]);

  useLayoutEffect(() => {
    const track = trackRef.current;
    if (!track || slides.length === 0) return;

    const signal = { cancelled: false, paused: false };
    let panelH = 0;
    let index = 0;

    const measure = () => {
      const panel = track.querySelector<HTMLElement>('.tech-ticker__panel');
      panelH = panel?.offsetHeight ?? 0;
    };

    const setY = (i: number) => {
      track.style.transform = `translate3d(0, ${-i * panelH}px, 0)`;
    };

    const run = async () => {
      const sectionMs = slideDurationMs();
      const holdMs = sectionMs * 0.68;
      const moveMs = sectionMs * 0.32;

      while (!signal.cancelled) {
        if (signal.paused || panelH <= 0) {
          await sleep(80, signal);
          continue;
        }

        await sleep(holdMs, signal);
        if (signal.cancelled) break;

        const fromY = -index * panelH;
        const nextIndex = index + 1;
        const toY = -nextIndex * panelH;

        const anim = track.animate(
          [
            { transform: `translate3d(0, ${fromY}px, 0)` },
            { transform: `translate3d(0, ${toY}px, 0)` },
          ],
          { duration: moveMs, easing: EASE, fill: 'forwards' }
        );

        try {
          await anim.finished;
        } catch {
          break;
        }

        if (signal.cancelled) break;

        index = nextIndex;

        if (index >= slides.length) {
          track.getAnimations().forEach((a) => a.cancel());
          index = 0;
          setY(0);
        }
      }
    };

    const boot = () => {
      measure();
      setY(index);
    };

    boot();
    void run();

    const ro = new ResizeObserver(() => {
      boot();
    });
    ro.observe(track);
    void document.fonts.ready.then(boot);

    const viewport = viewportRef.current;
    const onEnter = () => {
      signal.paused = true;
      track.getAnimations().forEach((a) => a.pause());
    };
    const onLeave = () => {
      signal.paused = false;
      track.getAnimations().forEach((a) => a.play());
    };
    viewport?.addEventListener('mouseenter', onEnter);
    viewport?.addEventListener('mouseleave', onLeave);

    return () => {
      signal.cancelled = true;
      track.getAnimations().forEach((a) => a.cancel());
      ro.disconnect();
      viewport?.removeEventListener('mouseenter', onEnter);
      viewport?.removeEventListener('mouseleave', onLeave);
      track.style.transform = '';
    };
  }, [slides.length]);

  if (panels.length === 0) return null;

  return (
    <div className="tech-ticker">
      <div
        ref={viewportRef}
        className="tech-ticker__viewport"
        aria-label="Tecnologias"
      >
        <div ref={trackRef} className="tech-ticker__track">
          {panels.map((names, i) => (
            <TechPanel key={`panel-${i}`} names={names} />
          ))}
        </div>
      </div>
    </div>
  );
}
