/** @format */
"use client"

import { useMousePosition } from "@/app/hooks/useMousePosition"
import { useAppSelector } from "@/lib/redux/hooks"

import React, { CSSProperties, useState } from "react"

type Props = {
  children: JSX.Element
  customCSS?: string
  sideLine?: boolean
  glow?: boolean
  glimmer?: boolean
  perspective?: boolean
}

export default function Card({
  children,
  customCSS,
  sideLine,
  glow,
  glimmer = true,
  perspective,
}: Props) {
  const { screenWidth } = useAppSelector(state => state.global)

  const { ref, mousePos } = useMousePosition()
  const [hover, setHover] = useState(false)
  const [persp, setPersp] = useState(false)

  const handleHoverEnter = () => {
    setHover(true)
  }

  const handleHoverLeave = () => {
    setHover(false)
  }
  const handlePerspEnter = () => {
    setPersp(true)
  }

  const handlePerspLeave = () => {
    setPersp(false)
  }

  const calculatePerspective = (x: number, y: number): CSSProperties => {
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

  let glowClassName = screenWidth > 540 && glow ? "flickerBox" : ""
  let flickerBoxClassName = screenWidth > 540 && glow ? "flickerBox" : ""
  let sideLineClassName = screenWidth && sideLine ? "sideLine" : ""
  let perspectiveStyle
  let outerGlimmerSyle
  let innerGlimmerSyle

  if (typeof window !== "undefined") {
    perspectiveStyle =
      perspective && hover && screenWidth > 540
        ? calculatePerspective(mousePos.x, mousePos.y)
        : {}

    outerGlimmerSyle = {
      background:
        screenWidth > 540 && glimmer
          ? `radial-gradient(
      600px circle at ${mousePos.x}px ${mousePos.y}px,
      rgba(203, 213, 225, 0.3),
      transparent 40%`
          : "",
    }
    innerGlimmerSyle = {
      background:
        screenWidth > 540 && glimmer && typeof window !== "undefined"
          ? `radial-gradient(
    600px circle at ${mousePos.x}px ${mousePos.y}px,
    rgba(100, 116, 139, 0.2),
    transparent 40%`
          : "",
    }
  }

  return (
    <div
      ref={ref}
      onMouseEnter={handleHoverEnter}
      onMouseLeave={handleHoverLeave}
      className={`${customCSS}  ${
        perspective && "mb-8 sm:mb-0 sm:p-6"
      } relative h-full w-full duration-300`}
    >
      <div
        onMouseEnter={handlePerspEnter}
        onMouseLeave={handlePerspLeave}
        style={perspectiveStyle}
        className={`${flickerBoxClassName} ${sideLineClassName}  group relative h-full w-full rounded-xl bg-gradient-border-light duration-300  dark:bg-gradient-border-dark  `}
      >
        <div style={outerGlimmerSyle} className="h-full w-full rounded-xl p-0.5 ">
          <div className="h-full w-full  rounded-xl bg-gradient-card-body-light dark:bg-gradient-card-body-dark">
            <div
              className="absolute  z-10  h-full w-full rounded-xl opacity-0 duration-300 group-hover:opacity-100  "
              style={innerGlimmerSyle}
            ></div>

            <div className=" relative z-20 flex h-full flex-col rounded-xl bg-opacity-0 p-4 sm:hover:bg-opacity-100">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
