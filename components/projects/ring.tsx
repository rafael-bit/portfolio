export function ProjectsRing() {
  return (
    <div className="projects__ring" aria-hidden="true">
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle
          cx="100"
          cy="100"
          r="99"
          fill="none"
          stroke="var(--projects-ring-line)"
          strokeWidth="0.75"
        />
      </svg>
    </div>
  );
}
