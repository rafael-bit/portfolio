'use client';

import {
  useCallback,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { flushSync } from 'react-dom';
import { projects } from './content';
import { ProjectCard } from './card';

function IconChevron({ direction }: { direction: 'left' | 'right' }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
    >
      <path
        d={direction === 'left' ? 'M11 4L6 9L11 14' : 'M7 4L12 9L7 14'}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function buildLoopSlides<T>(items: T[]): T[] {
  if (items.length === 0) return [];
  if (items.length === 1) return [items[0], items[0], items[0]];
  return [items[items.length - 1], ...items, items[0]];
}

export function ProjectsCarousel() {
  const count = projects.length;
  const slides = useMemo(() => buildLoopSlides(projects), []);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const slideIndexRef = useRef(1);
  const animatingRef = useRef(false);

  const [slideIndex, setSlideIndex] = useState(1);
  const [offset, setOffset] = useState(0);
  const [instant, setInstant] = useState(true);

  slideIndexRef.current = slideIndex;

  const realIndex =
    count === 0
      ? 0
      : ((slideIndex - 1 + count) % count + count) % count;

  const alignToIndex = useCallback((target: number, instantMove: boolean) => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    const card = track?.children.item(target) as HTMLElement | null;
    if (!viewport || !track || !card) return;

    if (instantMove) {
      track.classList.add('projects__track--instant');
    }

    const vpRect = viewport.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();
    const vpCenter = vpRect.left + vpRect.width / 2;
    const cardCenter = cardRect.left + cardRect.width / 2;
    const delta = vpCenter - cardCenter;

    if (Math.abs(delta) > 0.5) {
      setOffset((prev) => prev + delta);
    }

    if (instantMove) {
      track.classList.remove('projects__track--instant');
    }
  }, []);

  const snapTo = useCallback(
    (next: number) => {
      animatingRef.current = false;
      flushSync(() => {
        slideIndexRef.current = next;
        setSlideIndex(next);
      });
      alignToIndex(next, true);
    },
    [alignToIndex]
  );

  useLayoutEffect(() => {
    alignToIndex(slideIndex, instant);
    if (instant) {
      requestAnimationFrame(() => setInstant(false));
    }
  }, [slideIndex, alignToIndex, instant, slides.length]);

  useLayoutEffect(() => {
    if (instant) return;
    const timer = window.setTimeout(() => {
      animatingRef.current = false;
    }, 700);
    return () => window.clearTimeout(timer);
  }, [slideIndex, instant]);

  useLayoutEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return;

    const update = () => alignToIndex(slideIndexRef.current, true);

    const ro = new ResizeObserver(update);
    ro.observe(viewport);
    ro.observe(track);
    void document.fonts.ready.then(update);

    return () => ro.disconnect();
  }, [alignToIndex]);

  const onTrackTransitionEnd = useCallback(
    (e: React.TransitionEvent<HTMLDivElement>) => {
      if (e.target !== trackRef.current || e.propertyName !== 'transform') return;
      if (count <= 1) return;

      animatingRef.current = false;
      const idx = slideIndexRef.current;

      if (idx === 0) {
        snapTo(count);
        return;
      }

      if (idx === count + 1) {
        snapTo(1);
        return;
      }

      alignToIndex(idx, true);
    },
    [count, snapTo, alignToIndex]
  );

  const go = useCallback((delta: number) => {
    if (count === 0 || animatingRef.current) return;
    animatingRef.current = true;
    setSlideIndex((i) => i + delta);
  }, [count]);

  const cardState = (i: number) => {
    if (i === slideIndex) return 'active' as const;
    if (i === slideIndex - 1 || i === slideIndex + 1) return 'side' as const;
    return 'far' as const;
  };

  if (slides.length === 0) return null;

  return (
    <div className="projects__stage">
      <button
        type="button"
        className="projects__nav projects__nav--prev"
        onClick={() => go(-1)}
        aria-label="Projeto anterior"
      >
        <IconChevron direction="left" />
      </button>

      <div ref={viewportRef} className="projects__viewport">
        <div
          ref={trackRef}
          className={
            instant
              ? 'projects__track projects__track--instant'
              : 'projects__track'
          }
          style={{ transform: `translate3d(${offset}px, 0, 0)` }}
          onTransitionEnd={onTrackTransitionEnd}
        >
          {slides.map((project, i) => (
            <ProjectCard
              key={`${project.id}-${i}`}
              project={project}
              state={cardState(i)}
            />
          ))}
        </div>
      </div>

      <button
        type="button"
        className="projects__nav projects__nav--next"
        onClick={() => go(1)}
        aria-label="Próximo projeto"
      >
        <IconChevron direction="right" />
      </button>

      <p className="sr-only" aria-live="polite">
        {projects[realIndex]?.title}
      </p>
    </div>
  );
}
