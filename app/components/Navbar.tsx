/** @format */
"use client"
import { useAppSelector, useAppDispatch } from "@/lib/redux/hooks"
import { setActiveLink } from "@/lib/redux/slices/globalSlice"
import { openModal } from "@/lib/redux/slices/globalSlice"
import Icon from "@mdi/react"
import { mdiEmailFastOutline } from "@mdi/js"

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
  const {
    activeLink,
    modal: { vis },
  } = useAppSelector(state => state.global)
  const dispatch = useAppDispatch()

  const handleActiveLink = (name: string) => {
    dispatch(setActiveLink(name))
    scrollToElementSmooth(name)
  }

  const scrollToElementSmooth = (elementId: string) => {
    const element = document.getElementById(elementId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  const handleOpenModal = () => {
    dispatch(openModal({ vis: true, type: "contentForm" }))
  }

  return (
    <nav className="select-none p-8">
      <ul className=" hidden items-center justify-end gap-12 font-semibold md:flex ">
        {routes.map((route, i) => {
          if (i !== 0) {
            return (
              <li
                key={route.name}
                className={`${
                  activeLink === route.name && "!text-teal-400"
                } duration-300 hover:text-teal-200 active:text-teal-400`}
                onClick={() => handleActiveLink(route.name)}
              >
                <button>
                  {route.name.charAt(0).toUpperCase() + route.name.slice(1)}
                </button>
              </li>
            )
          }
        })}
        <span className=" mr-12 lg:mr-40"></span>
        <li className={`fixed   `}>
          <button
            className={`${
              vis && "!text-teal-400"
            }  flex gap-4 rounded-full border-2  border-teal-400 px-4 py-2 duration-300 hover:text-teal-200 active:text-teal-400 `}
            onClick={handleOpenModal}
          >
            <div className="  hidden lg:block ">Get in touch</div>
            <div>
              <Icon path={mdiEmailFastOutline} size={1} />
            </div>
          </button>
        </li>
      </ul>
    </nav>
  )
}
