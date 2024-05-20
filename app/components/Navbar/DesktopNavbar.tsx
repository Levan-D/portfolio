/** @format */
"use client"

import { useAppSelector, useAppDispatch } from "@/lib/redux/hooks"
import { setActiveLink } from "@/lib/redux/slices/globalSlice"
import Icon from "@mdi/react"
import { mdiLinkedin, mdiGithub } from "@mdi/js"
import ContactBtn from "../ContactBtn"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { routes } from "./routes"
import DarkModeBtn from "./DarkModeBtn"

export default function DesktopNavbar() {
  const dispatch = useAppDispatch()
  const { activeLink, screenWidth } = useAppSelector(state => state.global)

  const pathname = usePathname()

  const navButton = (route: string, i: number) => {
    const scrollToElementSmooth = (elementId: string) => {
      const element = document.getElementById(elementId)
      element?.scrollIntoView({ behavior: "smooth" })
    }

    const handleActiveLink = (name: string) => {
      dispatch(setActiveLink(name))
      scrollToElementSmooth(name)
    }
    return (
      <li
        key={route + i}
        className={`${
          activeLink === route ? "!text-teal-700 dark:!text-teal-400" : ""
        } btnTertiary   mx-4  text-center text-xl md:text-base `}
      >
        <button onClick={() => handleActiveLink(route)} className="w-2/5 p-2  md:w-full">
          {route.charAt(0).toUpperCase() + route.slice(1)}
        </button>
      </li>
    )
  }

  return (
    <nav className="mx-auto hidden  w-full max-w-screen-2xl select-none p-6 md:block">
      <ul className="flex items-center justify-end ">
        {pathname === "/" ? (
          routes.map((route, i) => i !== 0 && navButton(route.name, i))
        ) : (
          <li className="btnTertiary mx-4 ">
            <Link href="/">Home</Link>
          </li>
        )}

        <li className=" border-x-2 border-slate-400   border-opacity-70 px-4 dark:border-slate-600">
          <DarkModeBtn />
        </li>
        <li className="pl-4">
          <Link
            href={`https://www.linkedin.com/in/levan-dolidze`}
            target="_blank"
            rel="noopener noreferrer"
            className="btnTertiary"
            aria-label="link to personal linkedin profile"
          >
            <Icon path={mdiLinkedin} size={1.1} />
          </Link>
        </li>
        <li className=" mr-24 border-r-2 border-slate-400   border-opacity-70 px-4 dark:border-slate-600 lg:mr-[210px]">
          <Link
            href={`https://github.com/Levan-D`}
            target="_blank"
            rel="noopener noreferrer"
            className="btnTertiary"
            aria-label="link to personal github profile"
          >
            <Icon path={mdiGithub} size={1.1} />
          </Link>
        </li>
        <li className={`fixed  z-10 `}>
          <ContactBtn icon={screenWidth < 1024} />
        </li>
      </ul>
    </nav>
  )
}
