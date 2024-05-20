/** @format */

import About from "./About"
import Projects from "./Projects"
import Technologies from "./Technologies"
import Experience from "./Experience"
import SiderNavbar from "@/app/components/SiderNavbar"

export default function Home() {
  return (
    <section className=" overflow-x-hidden">
      <SiderNavbar />
      <About />
      <Projects />
      <Technologies />

      <Experience />
    </section>
  )
}
