/** @format */

"use client"

import { useEffect, useState } from "react"
import { useAppDispatch } from "@/lib/redux/hooks"
import Tooltip from "./Tooltip"
import { ActionCreatorWithPayload } from "@reduxjs/toolkit"

type Props = {
  activeLink: string
  setActiveLink: ActionCreatorWithPayload<string>
  routes: { name: string }[]
}

export default function SiderNavbar({ activeLink, setActiveLink, routes }: Props) {
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
  }, [dispatch, routes, setActiveLink])

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
      } fixed right-10 top-1/2 hidden select-none duration-500 md:block`}
    >
      <ul className="flex translate-y-[-50%]  flex-col  items-end gap-3 font-semibold ">
        {routes.map((route, i) => (
          <li
            key={route.name}
            className={`${
              activeLink === route.name && "!text-teal-400"
            }  text-xs text-slate-300 duration-300  hover:text-teal-200`}
            onClick={() => scrollToElementSmooth(route.name)}
          >
            <Tooltip
              position="left"
              text={route.name.charAt(0).toUpperCase() + route.name.slice(1)}
            >
              <button className="p-2">0{i}</button>
            </Tooltip>
          </li>
        ))}
      </ul>
    </nav>
  )
}
