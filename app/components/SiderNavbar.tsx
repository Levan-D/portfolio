/** @format */

"use client"

import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks"
import Tooltip from "./Tooltip"
import { setActiveLink } from "@/lib/redux/slices/globalSlice"
import { routes } from "./Navbar"

export default function SiderNavbar() {
  const { activeLink } = useAppSelector(state => state.global)

  const dispatch = useAppDispatch()

  const [showNav, setShowNav] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        let largestRatio = 0
        let largestRatioId = ""

        entries.forEach(entry => {
          if (entry.intersectionRatio > largestRatio) {
            largestRatio = entry.intersectionRatio
            largestRatioId = entry.target.id
          }
        })

        if (largestRatio > 0.5) {
          dispatch(setActiveLink(largestRatioId))
        }
      },
      { threshold: [0.1, 0.25, 0.5, 0.75, 1] }
    )

    const ids = routes.map(route => `#${route.name}`)

    const sections = document.querySelectorAll(ids.join(", "))

    sections.forEach(section => observer.observe(section))

    return () => {
      observer.disconnect()
    }
  }, [dispatch])

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 800) {
        setShowNav(true)
      } else {
        setShowNav(false)
      }
    })
    return window.removeEventListener("scroll", () => {
      if (window.scrollY > 800) {
        setShowNav(true)
      } else {
        setShowNav(false)
      }
    })
  }, [])

  const scrollToElementSmooth = (elementId: string) => {
    if (elementId === routes[0].name) {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      const element = document.getElementById(elementId)
      element?.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav
      className={` ${
        !showNav ? " collapse opacity-0" : " collapse opacity-100 sm:visible"
      } fixed right-10 top-1/2 z-10 hidden select-none duration-500 md:block`}
    >
      <ul className="flex translate-y-[-50%]  flex-col  items-end gap-3 font-semibold ">
        {routes.map((route, i) => (
          <li
            key={route.name}
            className={`${
              activeLink === route.name && "!text-teal-700 dark:!text-teal-400"
            }  textTertiary text-xs `}
            onClick={() => scrollToElementSmooth(route.name)}
          >
            <Tooltip
              position="left"
              text={route.name.charAt(0).toUpperCase() + route.name.slice(1)}
            >
              <button aria-label="scroll to anchor" className="p-2">
                0{i}
              </button>
            </Tooltip>
          </li>
        ))}
      </ul>
    </nav>
  )
}
