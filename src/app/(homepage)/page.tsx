import SiderNavbar from '@/components/navigation/SiderNavbar';
import About from './_sections/About';
import Experience from './_sections/Experience';
import Projects from './_sections/Projects';
import Technologies from './_sections/Technologies';

export default function Home() {
  return (
    <section className="overflow-x-clip">
      <SiderNavbar />
      <About />
      <Experience />
      <Technologies />
      <Projects />
    </section>
  );
}
