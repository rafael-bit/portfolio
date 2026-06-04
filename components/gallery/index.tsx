import { GalleryCard } from './card';
import { galleryHeading, galleryItems } from './content';
import { GalleryRing } from './ring';

export function Gallery() {
  return (
    <section id="gallery" className="gallery" aria-labelledby="gallery-heading">
      <GalleryRing />

      <div className="rail gallery__rail">
        <div className="rail__body gallery__body">
          <header className="gallery__header">
            <h2 id="gallery-heading" className="section-label gallery__heading">
              <span className="section-label__muted gallery__heading-muted">
                {galleryHeading.prefix}
              </span>
              {galleryHeading.label}
              <span className="section-label__muted gallery__heading-muted">
                {galleryHeading.suffix}
              </span>
            </h2>
          </header>

          <div className="gallery__grid">
            {galleryItems.map((item) => (
              <GalleryCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
