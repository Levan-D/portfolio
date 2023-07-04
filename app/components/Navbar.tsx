/** @format */
"use client"

import { useAppSelector, useAppDispatch } from "@/lib/redux/hooks"
import { setActiveLink, setDarkMode } from "@/lib/redux/slices/globalSlice"
import Icon from "@mdi/react"
import {
  mdiMenu,
  mdiBackburger,
  mdiLinkedin,
  mdiGithub,
  mdiWeatherNight,
  mdiWhiteBalanceSunny,
} from "@mdi/js"
import { useState, useEffect } from "react"
import ContactBtn from "./ContactBtn"
import { usePathname } from "next/navigation"
import Link from "next/link"

type RouteType = {
  route: string
  toggleSidebar: () => void
}

export const routes = [
  {
    name: "about",
  },
  {
    name: "projects",
  },
  {
    name: "technologies",
  },
  {
    name: "experience",
  },
]

const RouteScroll = ({ route, toggleSidebar }: RouteType) => {
  const dispatch = useAppDispatch()
  const { activeLink } = useAppSelector(state => state.global)

  const scrollToElementSmooth = (elementId: string) => {
    const element = document.getElementById(elementId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  const handleActiveLink = (name: string) => {
    dispatch(setActiveLink(name))
    scrollToElementSmooth(name)
    toggleSidebar()
  }
  return (
    <li
      key={route}
      className={`${
        activeLink === route ? "!text-teal-700 dark:!text-teal-400" : ""
      } btnTertiary   text-center  text-xl md:text-base  `}
    >
      <button onClick={() => handleActiveLink(route)} className="w-2/5 p-2  md:w-full">
        {route.charAt(0).toUpperCase() + route.slice(1)}
      </button>
    </li>
  )
}

export default function Navbar() {
  const dispatch = useAppDispatch()
  const { darkMode } = useAppSelector(state => state.global)
  const pathname = usePathname()

  const [sider, setSider] = useState(false)

  const toggleSidebar = () => {
    setSider(!sider)
  }

  const handleCloseSider = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      toggleSidebar()
    }
  }

  const handleDarkMode = () => {
    const newDarkMode = !darkMode
    dispatch(setDarkMode(newDarkMode))
    if (newDarkMode) {
      document.documentElement.classList.add("dark")
      document.documentElement.classList.remove("light")
    } else {
      document.documentElement.classList.add("light")
      document.documentElement.classList.remove("dark")
    }
  }

  // Add or remove dark class on load and on click
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
      document.documentElement.classList.remove("light")
    } else {
      document.documentElement.classList.add("light")
      document.documentElement.classList.remove("dark")
    }
  }, [])

  // Disable scroll when sider is visible
  useEffect(() => {
    if (sider) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    // Cleanup function to prevent side-effects
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [sider])

  return (
    <>
      {/* md + screen nav */}
      <nav className="hidden select-none  p-6 md:block">
        <div className="  flex items-center justify-between   font-semibold">
          <div className="basis-1/3"></div>

          <ul className="flex basis-1/3 items-center justify-center gap-12">
            {pathname === "/" ? (
              routes.map(
                (route, i) =>
                  i !== 0 && (
                    <RouteScroll
                      key={route.name}
                      route={route.name}
                      toggleSidebar={toggleSidebar}
                    />
                  )
              )
            ) : (
              <li className="btnTertiary">
                <Link href="/">Home</Link>
              </li>
            )}
          </ul>

          <ul className="flex basis-1/3 items-center justify-end gap-8 ">
            <li>
              <button
                aria-label="toggle dark mode"
                onClick={handleDarkMode}
                className="btnTertiary translate-y-0.5"
              >
                {!darkMode ? (
                  <Icon path={mdiWeatherNight} size={1} />
                ) : (
                  <Icon path={mdiWhiteBalanceSunny} size={1} />
                )}
              </button>
            </li>
            <li>
              <a
                href={"https://www.linkedin.com/in/levan-dolidze/"}
                target="_blank"
                rel="noopener noreferrer"
                className="btnTertiary"
                aria-label="link to personal linkedin profile"
              >
                <Icon path={mdiLinkedin} size={1.1} />
              </a>
            </li>
            <li>
              <a
                href={"https://github.com/Levan-D"}
                target="_blank"
                rel="noopener noreferrer"
                className="btnTertiary"
                aria-label="link to personal github profile"
              >
                <Icon path={mdiGithub} size={1.1} />
              </a>
            </li>
            <span className=" ml-12 lg:ml-[200px]"></span>
            <li className={`fixed  z-10 `}>
              <ContactBtn type={"icon"} />
            </li>
          </ul>
        </div>
      </nav>

      {/* - md  screen nav */}
      <nav className="fixed z-40 block w-screen p-2 dark:[background:linear-gradient(0deg,_rgba(255,_255,_255,_0)_0%,rgba(2,_6,_23,_1)_80%)] md:hidden ">
        <button
          aria-label="open mobile menu"
          onClick={toggleSidebar}
          className="textTertiary"
        >
          <Icon path={mdiMenu} size={1.5} />
        </button>

        <div
          onClick={handleCloseSider}
          className={`fixed inset-0 z-40  bg-black bg-opacity-50 transition-opacity duration-300 ${
            sider ? "visible opacity-100" : "collapse opacity-0"
          }`}
        >
          <ul
            className={`${
              sider ? "left-0" : "left-screen"
            } fixed top-0  z-40 flex h-screen w-screen  flex-col gap-4 bg-slate-200 px-4 pt-2 duration-300 dark:bg-slate-950 `}
          >
            <li className="textTertiary mb-12 flex justify-end">
              <button aria-label="close mobile menu" onClick={toggleSidebar}>
                <Icon path={mdiBackburger} size={1.5} />
              </button>
            </li>

            <li>
              <button
                onClick={handleDarkMode}
                aria-label="toggle dark mode"
                className="btnSecondary mx-auto mb-4 translate-y-0.5"
              >
                {!darkMode ? (
                  <div className="flex gap-4">
                    <div>Dark mode</div> <Icon path={mdiWeatherNight} size={1} />
                  </div>
                ) : (
                  <div className="flex gap-4">
                    <div>Light mode</div> <Icon path={mdiWhiteBalanceSunny} size={1} />
                  </div>
                )}
              </button>
            </li>

            <li className="mx-auto mb-8 w-fit">
              <ContactBtn />
            </li>

            {pathname === "/" ? (
              routes.map(route => (
                <RouteScroll
                  key={route.name}
                  route={route.name}
                  toggleSidebar={toggleSidebar}
                />
              ))
            ) : (
              <li
                onClick={() => setSider(false)}
                className="btnTertiary   text-center text-xl md:text-base"
              >
                <Link href="/">Home</Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </>
  )
}
