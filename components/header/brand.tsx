import Image from 'next/image';
import Link from 'next/link';

export function Brand() {
  return (
    <Link
      href="/"
      className="brand group flex shrink-0 items-center gap-3 transition-opacity duration-base hover:opacity-90"
      aria-label="Rafael Áquila — início"
    >
      <Image
        src="/logo.svg"
        alt=""
        width={47}
        height={40}
        className="h-9 w-auto md:h-10"
        priority
      />
      <span className="text-sm font-medium tracking-tight text-foreground md:text-base">
        Rafael Áquila.
      </span>
    </Link>
  );
}
