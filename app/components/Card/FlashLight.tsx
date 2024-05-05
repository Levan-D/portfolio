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

  const outerGlimmerSyle =
    typeof window !== "undefined"
      ? {
          background:
            screenWidth > 540 && flashLight
              ? `radial-gradient(
    600px circle at ${mousePos.x}px ${mousePos.y}px,
    rgba(203, 213, 225, 0.3),
    transparent 40%`
              : "",
        }
      : {}

  const innerGlimmerSyle =
    typeof window !== "undefined"
      ? {
          background:
            screenWidth > 540 && flashLight && typeof window !== "undefined"
              ? `radial-gradient(
600px circle at ${mousePos.x}px ${mousePos.y}px,
rgba(100, 116, 139, 0.2),
transparent 40%`
              : "",
        }
      : {}

  return (
    <div style={outerGlimmerSyle} ref={ref}>
      <div style={innerGlimmerSyle}>{children}</div>
    </div>
  )
}
