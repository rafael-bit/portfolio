import { about, aboutHeading } from './content';
import { AboutPhoto } from './photo';

export function About() {
  return (
    <section id="about" className="about" aria-labelledby="about-heading">
      <div className="rail about__rail">
        <div className="rail__body about__body">
          <div className="about__layout">
            <div className="about__copy">
              <h2 id="about-heading" className="section-label about__heading">
                <span className="section-label__muted about__heading-muted">
                  {aboutHeading.prefix}
                </span>
                {aboutHeading.label}
                <span className="section-label__muted about__heading-muted">
                  {aboutHeading.suffix}
                </span>
              </h2>

              {about.lead.map((paragraph) => (
                <p key={paragraph} className="section-copy about__lead">
                  {paragraph}
                </p>
              ))}

              <p className="about__callout">{about.highlight}</p>
            </div>

            <AboutPhoto />
          </div>
        </div>
      </div>
    </section>
  );
}
