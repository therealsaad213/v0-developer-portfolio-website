'use client';

import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Skills } from '@/components/skills';
import { Experience } from '@/components/experience';
import { Projects } from '@/components/projects';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';
import { ScrollProgress } from '@/components/scroll-progress';
import { CursorGlow } from '@/components/cursor-glow';
import { Toaster } from 'sonner';

export default function Home() {
  return (
    <main className="bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 overflow-x-hidden transition-colors duration-300">
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
      <Toaster position="bottom-right" />
    </main>
  );
}
