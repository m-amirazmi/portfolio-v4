import { Hero } from '@/components/homepage/hero';
import { Projects } from '@/components/homepage/projects';

export default function Homepage() {
  return (
    <main className="flex flex-col gap-20">
      <Hero />
      <Projects />
    </main>
  );
}
