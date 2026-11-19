import About from './_sections/About';
import Projects from './_sections/Projects';
import Technologies from './_sections/Technologies';
import Experience from './_sections/Experience';
import SiderNavbar from '@/components/navigation/SiderNavbar';

export default function Home() {
  return (
    <section className="overflow-x-hidden">
      <SiderNavbar />
      <About />
      <Projects />
      <Technologies />

      <Experience />
    </section>
  );
}
