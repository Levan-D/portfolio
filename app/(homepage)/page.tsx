/** @format */
"use client"

import About from "./about/About"
import Projects from "./projects/Projects"
import Technologies from "./technologies/Technologies"
import Experience from "./experience/Experience"
import SiderNavbar from "@/app/components/SiderNavbar"
import { useAppSelector } from "@/lib/redux/hooks"
import { setActiveLink } from "@/lib/redux/slices/globalSlice"

import { routes } from "@/app/components/Navbar"

export default function Home() {
  const { activeLink } = useAppSelector(state => state.global)

  return (
    <div>
      <SiderNavbar
        routes={routes}
        activeLink={activeLink}
        setActiveLink={setActiveLink}
      />
      <About />
      <Projects />
      <Technologies />
      <Experience />
    </div>
  )
}
