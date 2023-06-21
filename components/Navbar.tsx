/** @format */
"use client"
import { useAppSelector, useAppDispatch } from "@/lib/redux/hooks"
import { setActiveLink } from "@/lib/redux/slices/globalSlice"

const routes = [
  {
    name: "landing",
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

export default function Navbar() {
  const { activeLink } = useAppSelector(state => state.global)
  const dispatch = useAppDispatch()

  const handleActive = (name: string) => {
    dispatch(setActiveLink(name))
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
                onClick={() => handleActive(route.name)}
              >
                <a href={`#${route.name}`}>
                  {route.name.charAt(0).toUpperCase() + route.name.slice(1)}
                </a>
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
