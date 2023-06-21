/** @format */
"use client"
import { useAppSelector, useAppDispatch } from "@/lib/redux/hooks"
import { setActiveLink } from "@/lib/redux/slices/globalSlice"

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

export default function Navbar() {
  const { activeLink } = useAppSelector(state => state.global)
  const dispatch = useAppDispatch()

  const handleActiveLink = (name: string) => {
    dispatch(setActiveLink(name))
    scrollToElementSmooth(name)
  }

  const scrollToElementSmooth = (elementId: string) => {
    const element = document.getElementById(elementId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav className="p-8">
      <ul className="flex items-center justify-end gap-12 font-semibold ">
        {routes.map((route, i) => {
          if (i !== 0) {
            return (
              <li
                key={route.name}
                className={`${
                  activeLink === route.name && "!text-teal-400"
                } duration-300 hover:text-teal-200`}
                onClick={() => handleActiveLink(route.name)}
              >
                <button>
                  {route.name.charAt(0).toUpperCase() + route.name.slice(1)}
                </button>
              </li>
            )
          }
        })}
        <li
          className={` ml-8 rounded-full  border-2 border-teal-400 px-4 py-2 duration-300 hover:text-teal-200 active:text-teal-400`}
        >
          <button> Get in touch</button>
        </li>
      </ul>
    </nav>
  )
}
