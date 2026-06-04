import { Ring } from './ring';
import { Availability } from './availability';
import { Brand } from './brand';
import { Menu } from './menu';
import { Nav } from './nav';

export function Header() {
  return (
    <header className="topbar">
      <Ring />

      <div className="rail topbar__rail">
        <div className="rail__body topbar__inner">
          {/* mobile */}
          <div className="topbar__mobile">
            <Brand />
            <Menu />
          </div>

          {/* desktop */}
          <div className="topbar__desktop">
            <Brand />
            <Nav />
            <Availability />
          </div>
        </div>
      </div>
    </header>
  );
}
