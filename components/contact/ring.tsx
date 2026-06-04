export function ContactRings() {
  return (
    <>
      <div className="contact__ring contact__ring--bl" aria-hidden="true">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle
            cx="100"
            cy="100"
            r="70"
            fill="none"
            stroke="var(--contact-ring-line)"
            strokeWidth="0.75"
          />
        </svg>
      </div>
      <div className="contact__ring contact__ring--br" aria-hidden="true">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle
            cx="100"
            cy="100"
            r="70"
            fill="none"
            stroke="var(--contact-ring-line)"
            strokeWidth="0.75"
          />
        </svg>
      </div>
    </>
  );
}
