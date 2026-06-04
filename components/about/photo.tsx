import Image from 'next/image';
import { about } from './content';
import { AboutRing } from './ring';

export function AboutPhoto() {
  const { src, alt, width, height } = about.portrait;

  return (
    <div className="about__visual">
      <AboutRing />
      <div className="about__photo-wrap">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="about__photo"
          sizes="(max-width: 849px) min(100%, 28rem), 32rem"
          priority
        />
      </div>
    </div>
  );
}
