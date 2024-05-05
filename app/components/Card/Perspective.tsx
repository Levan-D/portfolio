/** @format */

import React, { CSSProperties, useState, useEffect } from "react"
import { useAppSelector } from "@/lib/redux/hooks"
import { useMousePosition } from "@/app/hooks/useMousePosition"

type Props = {
  children: JSX.Element
  perspective: boolean
}

export default function Perspective({ children, perspective }: Props) {
  const { screenWidth } = useAppSelector(state => state.global)

  const [persp, setPersp] = useState(false)
  const [hover, setHover] = useState(false)

  const handleHoverEnter = () => {
    setPersp(true)
    setHover(true)
  }

  const handleHoverLeave = () => {
    setPersp(false)
    setHover(false)
  }

  const { ref, mousePos } = useMousePosition()

  const calculatePerspective = (x: number, y: number): CSSProperties => {
    if (typeof window === "undefined") return {}

    const rect = ref.current?.getBoundingClientRect()
    const deltaX = rect ? rect.width / 2 - x : 0
    const deltaY = rect ? rect.height / 2 - y : 0

    const constantX = 0.02
    const constantY = 0.035

    return {
      transform: `perspective(600px) rotateX(${constantY * deltaY}deg) rotateY(${
        -constantX * deltaX
      }deg)`,
      transition: persp ? "transform 0.0s" : "transform 0.3s",
      backfaceVisibility: "hidden",
    }
  }

  const perspectiveStyle =
    perspective && hover && screenWidth > 540
      ? calculatePerspective(mousePos.x, mousePos.y)
      : {}

  return (
    <div
      style={perspectiveStyle}
      ref={ref}
      onMouseEnter={handleHoverEnter}
      onMouseLeave={handleHoverLeave}
    >
      {children}
    </div>
  )
}
