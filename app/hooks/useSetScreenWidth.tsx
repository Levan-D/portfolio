/** @format */

import { useEffect } from "react"
import { useAppDispatch } from "@/lib/redux/hooks"
import { setScreenWidth } from "@/lib/redux/slices/globalSlice"

export function useSetScreenWidth() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    let timeoutId: any = null

    const handleResize = () => {
      if (timeoutId !== null) {
        clearTimeout(timeoutId)
      }

      timeoutId = setTimeout(() => {
        dispatch(setScreenWidth(window.innerWidth))
      }, 300)
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      if (timeoutId !== null) {
        clearTimeout(timeoutId)
      }
    }
  }, [])
}
