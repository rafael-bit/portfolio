import Image from 'next/image';
import type { GalleryItem } from './content';

type GalleryCardProps = {
  item: GalleryItem;
};

export function GalleryCard({ item }: GalleryCardProps) {
  return (
    <figure className="gallery__card">
      <span className="gallery__card-plate" aria-hidden="true" />
      <div className="gallery__card-media">
        <Image
          src={item.src}
          alt={item.alt}
          fill
          sizes="(max-width: 549px) 100vw, (max-width: 849px) 50vw, 33vw"
          className="gallery__card-img"
        />
      </div>
    </figure>
  );
}
