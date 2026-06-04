import { Availability } from '@/components/header/availability';
import { Brand } from '@/components/header/brand';
import { contact } from './content';
import { ContactLinkIcon } from './icons';
import { ContactRings } from './ring';

export function Contact() {
  return (
    <section className="contact" aria-labelledby="contact-heading">
      <ContactRings />

      <div className="rail contact__rail">
        <div className="rail__body contact__body">
          <div className="contact__main">
            <Availability />

            <h2 id="contact-heading" className="contact__heading">
              {contact.heading}
            </h2>

            <div className="contact__actions">
              <a
                href={contact.cv.href}
                target="_blank"
                rel="noopener noreferrer"
                className="contact__cv"
              >
                {contact.cv.label}
              </a>

              <ul className="contact__links">
                {contact.links.map((link) => (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      className="contact__link"
                      aria-label={link.label}
                      {...(link.id !== 'email'
                        ? { target: '_blank', rel: 'noopener noreferrer' }
                        : {})}
                    >
                      <ContactLinkIcon id={link.id} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <footer className="contact__bar">
            <Brand />
            <p className="contact__copy">{contact.copyright}</p>
          </footer>
        </div>
      </div>
    </section>
  );
}
