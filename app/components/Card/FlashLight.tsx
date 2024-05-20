/** @format */

import React from "react"
import { useMousePosition } from "@/app/hooks/useMousePosition"
import { useAppSelector } from "@/lib/redux/hooks"

type Props = {
  children: JSX.Element
  flashLight: boolean
}

export default function FlashLight({ children, flashLight }: Props) {
  const { screenWidth } = useAppSelector(state => state.global)

  const { ref, mousePos } = useMousePosition()

  const outerGlimmerStyle: React.CSSProperties =
    screenWidth > 540 && flashLight
      ? {
          background: `radial-gradient(
      600px circle at ${mousePos.x}px ${mousePos.y}px,
      rgba(203, 213, 225, 0.3),
      transparent 40%)`,
          zIndex: 1,
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }
      : {}

  const innerGlimmerStyle: React.CSSProperties =
    screenWidth > 540 && flashLight
      ? {
          background: `radial-gradient(
      600px circle at ${mousePos.x}px ${mousePos.y}px,
      rgba(100, 116, 139, 0.2),
      transparent 30%)`,
          zIndex: 2,
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }
      : {}

  return (
    <div ref={ref} className="relative rounded-xl">
      <div className="relative rounded-xl" style={outerGlimmerStyle}></div>
      <div className="relative rounded-xl" style={innerGlimmerStyle}></div>
      {children}
    </div>
  )
}
