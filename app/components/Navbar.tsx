/** @format */
"use client"

import { useAppSelector, useAppDispatch } from "@/lib/redux/hooks"
import { setActiveLink, setDarkMode, setSider } from "@/lib/redux/slices/globalSlice"
import { personalData } from "../data/personalData"
import Icon from "@mdi/react"
import {
  mdiMenu,
  mdiBackburger,
  mdiLinkedin,
  mdiGithub,
  mdiWeatherNight,
  mdiWhiteBalanceSunny,
} from "@mdi/js"
import ContactBtn from "./ContactBtn"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { useGlobalEffects } from "../hooks/useGlobalEffects"
import { v4 as uuidv4 } from "uuid"

type RouteType = {
  route: string
  toggleSidebar?: () => void
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

function MobileNavbar() {
  const dispatch = useAppDispatch()
  const { darkMode, activeLink, sider } = useAppSelector(state => state.global)

  const pathname = usePathname()

  const toggleSidebar = () => {
    dispatch(setSider(!sider))
  }
  const siderFalse = () => {
    dispatch(setSider(false))
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

  const RouteScroll = ({ route, toggleSidebar }: RouteType) => {
    const scrollToElementSmooth = (elementId: string) => {
      const element = document.getElementById(elementId)
      element?.scrollIntoView({ behavior: "smooth" })
    }

    const handleActiveLink = (name: string) => {
      dispatch(setActiveLink(name))
      scrollToElementSmooth(name)
      if (toggleSidebar) toggleSidebar()
    }
    return (
      <li
        key={route}
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
                key={uuidv4()}
                route={route.name}
                toggleSidebar={toggleSidebar}
              />
            ))
          ) : (
            <li
              onClick={siderFalse}
              className="btnTertiary   text-center text-xl md:text-base"
            >
              <Link href="/">Home</Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  )
}

function DesktopNavbar() {
  const dispatch = useAppDispatch()
  const { darkMode, activeLink } = useAppSelector(state => state.global)

  const links = personalData.links

  const pathname = usePathname()

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

  const RouteScroll = ({ route }: RouteType) => {
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
        key={route}
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
    <nav className="hidden select-none  p-6 md:block mx-auto w-full max-w-screen-2xl">
      <ul className="flex items-center justify-end ">
        {pathname === "/" ? (
          routes.map(
            (route, i) => i !== 0 && <RouteScroll key={route.name} route={route.name} />
          )
        ) : (
          <li className="btnTertiary mx-4 ">
            <Link href="/">Home</Link>
          </li>
        )}

        <li className=" border-x-2 border-slate-400   border-opacity-70 px-4 dark:border-slate-600">
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
        <li className="pl-4">
          <a
            href={links.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="btnTertiary"
            aria-label="link to personal linkedin profile"
          >
            <Icon path={mdiLinkedin} size={1.1} />
          </a>
        </li>
        <li className=" mr-24 border-r-2 border-slate-400   border-opacity-70 px-4 dark:border-slate-600 lg:mr-[210px]">
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btnTertiary"
            aria-label="link to personal github profile"
          >
            <Icon path={mdiGithub} size={1.1} />
          </a>
        </li>
        <li className={`fixed  z-10 `}>
          <ContactBtn type={"icon"} />
        </li>
      </ul>
    </nav>
  )
}

export default function Navbar() {
  const { screenWidth } = useAppSelector(state => state.global)
  useGlobalEffects()
  return screenWidth > 768 ? <DesktopNavbar /> : <MobileNavbar />
}
