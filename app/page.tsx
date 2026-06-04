import { About } from '@/components/about';
import { Contact } from '@/components/contact';
import { Gallery } from '@/components/gallery';
import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { Projects } from '@/components/projects';
import { Tech } from '@/components/tech';

export default function Home() {
  return (
    <>
      <Header />
      <main className="page">
        <Hero />
        <Tech />
        <Projects />
        <About />
        <Gallery />
        <Contact />
      </main>
    </>
  );
}
