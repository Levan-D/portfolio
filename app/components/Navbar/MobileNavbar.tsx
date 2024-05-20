/** @format */
"use client"
import { useState } from "react"
import { useAppSelector, useAppDispatch } from "@/lib/redux/hooks"
import { setActiveLink } from "@/lib/redux/slices/globalSlice"
import Icon from "@mdi/react"
import { mdiMenu, mdiBackburger } from "@mdi/js"
import ContactBtn from "../ContactBtn"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { routes } from "./routes"
import DarkModeBtn from "./DarkModeBtn"

export default function MobileNavbar() {
  const dispatch = useAppDispatch()
  const [sider, setSider] = useState(false)

  const { activeLink } = useAppSelector(state => state.global)

  const pathname = usePathname()

  const handleOpenSider = () => {
    document.documentElement.style.overflow = "hidden"
    setSider(true)
  }

  const handleCloseSider = () => {
    document.documentElement.style.overflow = "unset"
    setSider(false)
  }

  const routeBtn = (route: string, i: number) => {
    const scrollToElementSmooth = (elementId: string) => {
      const element = document.getElementById(elementId)
      element?.scrollIntoView({ behavior: "smooth" })
    }

    const handleActiveLink = (name: string) => {
      dispatch(setActiveLink(name))
      scrollToElementSmooth(name)
      handleCloseSider()
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
    <nav className="fixed z-40 block w-screen p-2 dark:[background:linear-gradient(0deg,_rgba(255,_255,_255,_0)_0%,rgba(2,_6,_23,_1)_80%)] md:hidden ">
      <button
        aria-label="open mobile menu"
        onClick={handleOpenSider}
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
            <button aria-label="close mobile menu" onClick={handleCloseSider}>
              <Icon path={mdiBackburger} size={1.5} />
            </button>
          </li>

          <li>
            <DarkModeBtn icon />
          </li>

          <li className="mx-auto mb-8 w-fit">
            <ContactBtn />
          </li>

          {pathname === "/" ? (
            routes.map((route, i) => routeBtn(route.name, i))
          ) : (
            <li
              onClick={handleCloseSider}
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
