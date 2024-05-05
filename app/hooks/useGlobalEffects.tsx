/** @format */

"use client"
import { useAppSelector, useAppDispatch } from "@/lib/redux/hooks"
import { useEffect } from "react"
import { setScreenWidth } from "@/lib/redux/slices/globalSlice"
import { setDarkMode } from "@/lib/redux/slices/globalSlice"

export function useGlobalEffects() {
  const dispatch = useAppDispatch()
 
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


}
