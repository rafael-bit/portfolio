'use client';

import { useEffect, useId, useState } from 'react';
import { cn } from '@/lib/utils';
import { Availability } from './availability';
import { NavLinks } from './nav-links';

export function Menu() {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <div className="menu desktop:hidden">
      <button
        type="button"
        className="menu__trigger pill"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        onClick={() => setOpen((v) => !v)}
      >
        <span
          className={cn('menu__icon', open && 'menu__icon--open')}
          aria-hidden="true"
        />
      </button>

      <div
        className={cn('menu__backdrop', open && 'menu__backdrop--open')}
        aria-hidden={!open}
        onClick={() => setOpen(false)}
      />

      <div
        id={panelId}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        aria-hidden={!open}
        className={cn('menu__panel pill', open && 'menu__panel--open')}
      >
        <nav aria-label="Menu mobile">
          <NavLinks layout="column" onNavigate={() => setOpen(false)} />
        </nav>
        <div className="menu__footer">
          <Availability />
        </div>
      </div>
    </div>
  );
}
