'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { links } from './links';

type NavLinksProps = {
  layout?: 'row' | 'column';
  onNavigate?: () => void;
};

function isCurrent(pathname: string, href: string, id: string) {
  if (id === 'home') return pathname === '/';
  return pathname === href || pathname.includes(id);
}

export function NavLinks({ layout = 'row', onNavigate }: NavLinksProps) {
  const pathname = usePathname();

  return (
    <ul
      className={cn(
        'flex list-none p-0',
        layout === 'row'
          ? 'items-center gap-0.5'
          : 'w-full flex-col gap-1'
      )}
    >
      {links.map(({ href, label, id }) => {
        const current = isCurrent(pathname, href, id);

        return (
          <li key={label} className={layout === 'column' ? 'w-full' : undefined}>
            <Link
              href={href}
              onClick={onNavigate}
              className={cn(
                'block rounded-pill text-[11px] font-medium tracking-[0.12em] transition-colors duration-base',
                layout === 'row' ? 'px-4 py-2' : 'px-4 py-3 text-sm',
                current
                  ? 'bg-pill-on text-foreground'
                  : 'text-dim hover:bg-surface-hover hover:text-soft'
              )}
              aria-current={current ? 'page' : undefined}
            >
              {label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
