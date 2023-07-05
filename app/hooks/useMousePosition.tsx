/** @format */

"use client"

import { useState, useEffect, useRef } from "react"

export function useMousePosition() {
  const [mousePos, setMousePos] = useState({ x: 1000, y: 1000 })
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect()
        const x = Math.round(event.clientX - rect.left)
        const y = Math.round(event.clientY - rect.top)
        setMousePos({ x, y })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return { ref, mousePos }
}
