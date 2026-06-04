export function TechDecor() {
  return (
    <>
      <div className="tech__ring tech__ring--tl" aria-hidden>
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle
            cx="100"
            cy="100"
            r="99"
            fill="none"
            stroke="var(--ring-line)"
            strokeWidth="0.75"
          />
        </svg>
      </div>
      <div className="tech__ring tech__ring--bl" aria-hidden>
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle
            cx="100"
            cy="100"
            r="99"
            fill="none"
            stroke="var(--ring-line)"
            strokeWidth="0.75"
          />
        </svg>
      </div>
    </>
  );
}
