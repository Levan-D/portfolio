/** @format */

"use client"
import { useAppSelector, useAppDispatch } from "@/lib/redux/hooks"
import { useEffect } from "react"
import { setScreenWidth } from "@/lib/redux/slices/globalSlice"
import { setDarkMode } from "@/lib/redux/slices/globalSlice"

export function useGlobalEffects() {
  const dispatch = useAppDispatch()
  const { darkMode, sider } = useAppSelector(state => state.global)
  // set screen size
  useEffect(() => {
    const handleResize = () => {
      dispatch(setScreenWidth(window.innerWidth))
    }
    handleResize()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  // Add or remove dark class on load
  useEffect(() => {
    if (typeof window === "undefined") return

    const darkModeLS = localStorage.getItem("darkMode")

    if (darkModeLS) {
      const darkModeParsed = JSON.parse(darkModeLS)
      dispatch(setDarkMode(darkModeParsed))

      if (darkModeParsed) {
        document.documentElement.classList.add("dark")
        document.documentElement.classList.remove("light")
      } else {
        document.documentElement.classList.add("light")
        document.documentElement.classList.remove("dark")
      }
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
}
