/** @format */
"use client"

import { useAppSelector, useAppDispatch } from "@/lib/redux/hooks"
import { setActiveLink } from "@/lib/redux/slices/globalSlice"
import Icon from "@mdi/react"
import { mdiMenu, mdiBackburger } from "@mdi/js"
import { useState, useEffect } from "react"
import ContactBtn from "./ContactBtn"

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
    } text-center  text-xl font-semibold duration-300 hover:text-teal-200 active:text-teal-400 md:text-base  `}
  >
    <button onClick={() => handleActiveLink(route.name)} className="w-2/5  p-2">
      {route.name.charAt(0).toUpperCase() + route.name.slice(1)}
    </button>
  </li>
)

export default function Navbar() {
  const [sider, setSider] = useState(false)

  const { activeLink } = useAppSelector(state => state.global)
  const dispatch = useAppDispatch()

  const handleActiveLink = (name: string) => {
    dispatch(setActiveLink(name))
    scrollToElementSmooth(name)
    setSider(false)
  }

  const scrollToElementSmooth = (elementId: string) => {
    const element = document.getElementById(elementId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  const handleToggleSider = () => {
    setSider(!sider)
  }

  const handleCloseSider = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      handleToggleSider()
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
      <nav className="hidden select-none p-6 md:block">
        <ul className="  flex items-center justify-end gap-12  font-semibold">
          {routes.map(
            (route, i) =>
              i !== 0 && (
                <Route
                  key={route.name}
                  route={route}
                  handleActiveLink={handleActiveLink}
                  activeLink={activeLink}
                />
              )
          )}
          <span className=" mr-12 lg:mr-[200px]"></span>
          <li className={`fixed   `}>
            <ContactBtn type={"icon"} />
          </li>
        </ul>
      </nav>

      {/* - md  screen nav */}
      <nav className="fixed block w-screen p-2 [background:linear-gradient(0deg,_rgba(255,_255,_255,_0)_0%,rgba(2,_6,_23,_1)_80%)] md:hidden ">
        <button onClick={handleToggleSider} className="text-slate-300">
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
            } fixed top-0  z-50 flex h-screen w-screen  flex-col gap-4 bg-slate-950 px-4 pt-2 duration-300 `}
          >
            <li className="mb-12 flex justify-end text-slate-300">
              <button onClick={handleToggleSider}>
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
