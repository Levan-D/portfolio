/** @format */
"use client"

import { useAppSelector, useAppDispatch } from "@/lib/redux/hooks"
import { setActiveLink } from "@/lib/redux/slices/globalSlice"
import Icon from "@mdi/react"
import { mdiMenu, mdiBackburger, mdiLinkedin, mdiGithub } from "@mdi/js"
import { useState, useEffect } from "react"
import ContactBtn from "./ContactBtn"
import { usePathname } from "next/navigation"
import Link from "next/link"

type RouteType = {
  route: {
    name: string
    icon: string
  }
  handleActiveLink: (name: string) => void
  activeLink: string
}

export const routes = [
  {
    name: "about",
    icon: "mdiAccount",
  },
  {
    name: "projects",
    icon: "mdiNewspaperVariant",
  },
  {
    name: "technologies",
    icon: "mdiCpu32Bit",
  },
  {
    name: "experience",
    icon: "mdiBriefcase",
  },
]

const Route = ({ route, handleActiveLink, activeLink }: RouteType) => (
  <li
    key={route.name}
    className={`${
      activeLink === route.name ? "!text-teal-400" : ""
    } text-center   text-xl font-semibold duration-300 hover:text-teal-200 active:text-teal-400 md:text-base  `}
  >
    <button onClick={() => handleActiveLink(route.name)} className="w-2/5 p-2  md:w-full">
      {route.name.charAt(0).toUpperCase() + route.name.slice(1)}
    </button>
  </li>
)

export default function Navbar() {
  const pathname = usePathname()
  const dispatch = useAppDispatch()
  const { activeLink } = useAppSelector(state => state.global)

  const [sider, setSider] = useState(false)

  const handleActiveLink = (name: string) => {
    dispatch(setActiveLink(name))
    scrollToElementSmooth(name)
    setSider(false)
  }

  const scrollToElementSmooth = (elementId: string) => {
    const element = document.getElementById(elementId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  const toggleSidebar = () => {
    setSider(!sider)
  }

  const handleCloseSider = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      toggleSidebar()
    }
  }

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
        <ul className="  flex items-center justify-between   font-semibold">
          <div className="basis-1/3"></div>
          <div className="flex basis-1/3 items-center justify-center gap-12">
            {pathname === "/" ? (
              routes.map(
                (route, i) =>
                  i !== 0 && (
                    <Route
                      key={route.name}
                      route={route}
                      handleActiveLink={handleActiveLink}
                      activeLink={activeLink}
                    />
                  )
              )
            ) : (
              <li className="duration-300 hover:text-teal-200 active:text-teal-400">
                <Link href="/">Home</Link>
              </li>
            )}
          </div>

          <div className="flex basis-1/3 items-center justify-end gap-8 ">
            <li>
              <a
                href={"https://www.linkedin.com/in/levan-dolidze/"}
                target="_blank"
                rel="noopener noreferrer"
                className="duration-300 hover:text-teal-200 active:text-teal-400"
              >
                <Icon path={mdiLinkedin} size={1.1} />
              </a>
            </li>
            <li>
              <a
                href={"https://github.com/Levan-D"}
                target="_blank"
                rel="noopener noreferrer"
                className="duration-300 hover:text-teal-200 active:text-teal-400"
              >
                <Icon path={mdiGithub} size={1.1} />
              </a>
            </li>
            <span className=" ml-12 lg:ml-[170px]"></span>
            <li className={`fixed  z-10 `}>
              <ContactBtn type={"icon"} />
            </li>
          </div>
        </ul>
      </nav>

      {/* - md  screen nav */}
      <nav className="fixed z-40 block w-screen p-2 [background:linear-gradient(0deg,_rgba(255,_255,_255,_0)_0%,rgba(2,_6,_23,_1)_80%)] md:hidden ">
        <button onClick={toggleSidebar} className="text-slate-300">
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
            } fixed top-0  z-40 flex h-screen w-screen  flex-col gap-4 bg-slate-950 px-4 pt-2 duration-300 `}
          >
            <li className="mb-12 flex justify-end text-slate-300">
              <button onClick={toggleSidebar}>
                <Icon path={mdiBackburger} size={1.5} />
              </button>
            </li>

            <li className="mx-auto mb-8 w-fit">
              <ContactBtn />
            </li>
            {routes.map(route => (
              <Route
                key={route.name}
                route={route}
                handleActiveLink={handleActiveLink}
                activeLink={activeLink}
              />
            ))}
          </ul>
        </div>
      </nav>
    </>
  )
}
