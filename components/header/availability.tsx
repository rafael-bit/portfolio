export function Availability() {
  return (
    <div className="availability pill relative z-[1] flex shrink-0 items-center gap-2.5 px-4 py-2">
      <span className="dot-online" aria-hidden="true" />
      <span className="text-xs font-medium tracking-wide text-soft">
        Available to work
      </span>
    </div>
  );
}
