/** @format */

import About from "./about/About"
import Projects from "./projects/Projects"
import Technologies from "./technologies/Technologies"
import Experience from "./experience/Experience"
import SiderNavbar from "@/app/components/SiderNavbar"

export default function Home() {
  return (
    <div>
      <SiderNavbar />
      <About />
      <Projects />
      <Technologies />
      <Experience />
    </div>
  )
}
