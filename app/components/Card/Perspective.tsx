/** @format */

import React, { CSSProperties, useEffect, useRef, useState } from "react"
import { useAppSelector } from "@/lib/redux/hooks"
import { useMousePosition } from "@/app/hooks/useMousePosition"

type Props = {
  children: React.JSX.Element
  perspective: boolean
}

export default function Perspective({ children, perspective }: Props) {
  const { screenWidth } = useAppSelector(state => state.global)

  const [persp, setPersp] = useState(false)
  const [hover, setHover] = useState(false)
  const [constants, setConstants] = useState({ constantX: 0.005, constantY: 0.008 })
  const [size, setSize] = useState({ width: 0, height: 0 })
  const rampRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const stopRamp = () => {
    if (rampRef.current !== null) {
      clearInterval(rampRef.current)
      rampRef.current = null
    }
  }

  // stop the ramp if the card unmounts mid-hover
  useEffect(() => stopRamp, [])

  const handleHoverEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    stopRamp()
    const { width, height } = e.currentTarget.getBoundingClientRect()
    setSize({ width, height })
    setPersp(true)
    setHover(true)

    const incrementInterval = 10
    const duration = 500
    const steps = duration / incrementInterval
    const incrementX = (0.015 - 0.005) / steps
    const incrementY = (0.025 - 0.008) / steps

    let currentStep = 0
    rampRef.current = setInterval(() => {
      if (currentStep >= steps) {
        stopRamp()
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
    stopRamp()
    setPersp(false)
    setHover(false)
    setConstants({ constantX: 0.005, constantY: 0.008 })
  }

  const { ref, mousePos } = useMousePosition()

  const calculatePerspective = (x: number, y: number): CSSProperties => {
    const deltaX = size.width / 2 - x
    const deltaY = size.height / 2 - y

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
