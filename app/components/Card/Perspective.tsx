/** @format */

import React, { CSSProperties, useState, useEffect, useRef } from "react"
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
  const [constants, setConstants] = useState({ constantX: 0.005, constantY: 0.008 })

  const handleHoverEnter = () => {
    setPersp(true)
    setHover(true)

    const incrementInterval = 10
    const duration = 500
    const steps = duration / incrementInterval
    const incrementX = (0.015 - 0.005) / steps
    const incrementY = (0.025 - 0.008) / steps

    let currentStep = 0
    const interval = setInterval(() => {
      if (currentStep >= steps) {
        clearInterval(interval)
      } else {
        setConstants(prev => ({
          constantX: prev.constantX + incrementX,
          constantY: prev.constantY + incrementY,
        }))
        currentStep++
      }
    }, incrementInterval)
  }

  const handleHoverLeave = () => {
    setPersp(false)
    setHover(false)
    setConstants({ constantX: 0.005, constantY: 0.008 })
  }

  const { ref, mousePos } = useMousePosition()
  const largerContainerRef = useRef<HTMLDivElement>(null)

  const calculatePerspective = (x: number, y: number): CSSProperties => {
    if (typeof window === "undefined") return {}

    const rect = largerContainerRef.current?.getBoundingClientRect()
    const deltaX = rect ? rect.width / 2 - x : 0
    const deltaY = rect ? rect.height / 2 - y : 0

    return {
      transform: `perspective(600px) rotateX(${
        constants.constantY * deltaY
      }deg) rotateY(${-constants.constantX * deltaX}deg)`,
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
      ref={largerContainerRef}
      className="relative"
      style={{ padding: "30px", margin: "-30px" }}
      onMouseEnter={handleHoverEnter}
      onMouseLeave={handleHoverLeave}
    >
      <div style={perspectiveStyle} ref={ref} className="relative rounded-xl">
        {children}
      </div>
    </div>
  )
}
