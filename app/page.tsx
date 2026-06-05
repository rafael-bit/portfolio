import { About } from '@/components/about';
import { Contact } from '@/components/contact';
import { Gallery } from '@/components/gallery';
import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { Reveal } from '@/components/layout/reveal';
import { Projects } from '@/components/projects';
import { Tech } from '@/components/tech';

export default function Home() {
  return (
    <>
      <Header />
      <main className="page">
        <Reveal immediate>
          <Hero />
        </Reveal>
        <Reveal>
          <Tech />
        </Reveal>
        <Reveal>
          <Projects />
        </Reveal>
        <Reveal>
          <About />
        </Reveal>
        <Reveal>
          <Gallery />
        </Reveal>
        <Reveal>
          <Contact />
        </Reveal>
      </main>
    </>
  );
}
