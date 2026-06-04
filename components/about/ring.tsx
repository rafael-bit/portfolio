export function AboutRing() {
  return (
    <div className="about__ring" aria-hidden="true">
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle
          cx="100"
          cy="100"
          r="70"
          fill="none"
          stroke="var(--about-ring-line)"
          strokeWidth="0.75"
        />
      </svg>
    </div>
  );
}
