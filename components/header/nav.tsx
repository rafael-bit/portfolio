import { NavLinks } from './nav-links';

export function Nav() {
  return (
    <nav
      className="nav-desktop nav pill hidden shrink-0 items-center p-1 desktop:flex"
      aria-label="Menu"
    >
      <NavLinks layout="row" />
    </nav>
  );
}
