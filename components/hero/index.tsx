import { hero } from './content';
import { HeroRing } from './ring';
import { HeroSocials } from './socials';

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <HeroRing />

      <div className="rail hero__rail">
        <div className="rail__body hero__body">
        <div className="hero__top">
          <h1 id="hero-title" className="hero__title">
            <span className="hero__title-line">{hero.title[0]}</span>
            <span className="hero__title-line hero__title-line--accent">
              {hero.title[1]}
            </span>
          </h1>

          <div className="hero__aside">
            <p className="hero__bio">{hero.bio}</p>
            <a href={hero.cta.href} className="hero__cta">
              {hero.cta.label}
            </a>
          </div>
        </div>

        <HeroSocials />
        </div>
      </div>
    </section>
  );
}
