/** @format */

import About from "./About"
import Projects from "./Projects"
import Technologies from "./Technologies"
import Experience from "./Experience"
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
