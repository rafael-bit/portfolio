import { TechQuote } from './quote';
import { TechTicker } from './ticker';

export function Tech() {
  return (
    <section id="tech" className="tech" aria-label="Tecnologias">
      <div className="rail tech__rail">
        <div className="rail__body tech__body">
          <div className="tech__layout">
            <TechQuote />
            <TechTicker />
          </div>
        </div>
      </div>
    </section>
  );
}
