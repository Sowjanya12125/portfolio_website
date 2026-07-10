import Navigation from '@/components/sections/Navigation';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Achievements from '@/components/sections/Achievements';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';
import Marquee from '@/components/Marquee';

const marqueeItems = [
  'Available for opportunities',
  'AI Developer',
  'Full Stack Developer',
  'ML Researcher',
  'Cybersecurity Enthusiast',
  'Open Source Contributor',
];

export default function Home() {
  return (
    <main className="relative min-h-screen bg-ink-950">
      {/* Navigation */}
      <Navigation />

      {/* Sections */}
      <Hero />
      <About />
      <Experience />
      <Marquee items={marqueeItems} speed={45} />
      <Projects />
      <Skills />
      <Achievements />
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
}
