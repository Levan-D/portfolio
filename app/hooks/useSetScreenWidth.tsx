/** @format */

"use client"
import { useAppDispatch } from "@/lib/redux/hooks"
import { useEffect } from "react"
import { setScreenWidth } from "@/lib/redux/slices/globalSlice"

export function useSetScreenWidth() {
  const dispatch = useAppDispatch()

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
}
