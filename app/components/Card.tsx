/** @format */

"use client"
import { useMousePosition } from "@/app/hooks/useMousePosition"

import React from "react"

type Props = {
  children: JSX.Element
  customCSS?: string
  sideLine?: boolean
  glow?: boolean
  glimmer?: boolean
}

export default function Card({
  children,
  customCSS,
  sideLine,
  glow,
  glimmer = true,
}: Props) {
  const { ref, mousePos } = useMousePosition()

  return (
    <div
      ref={ref}
      className={`${customCSS} ${sideLine && "sideLine"} ${
        glow && "flickerBox"
      }     group relative h-full w-full rounded-xl dark:bg-gradient-border-dark bg-gradient-border-light  duration-300   `}
    >
      <div
        style={{
          background: glimmer
            ? `radial-gradient(
            600px circle at ${mousePos.x}px ${mousePos.y}px,
            rgba(203, 213, 225, 0.3),
            transparent 40%`
            : "",
        }}
        className="h-full w-full rounded-xl p-0.5 "
      >
        <div className="bg-gradient-card-body-light h-full  w-full rounded-xl dark:bg-gradient-card-body-dark">
          <div
            className="absolute  z-10  h-full w-full rounded-xl opacity-0 duration-300 group-hover:opacity-100  "
            style={{
              background: glimmer
                ? `radial-gradient(
              600px circle at ${mousePos.x}px ${mousePos.y}px,
              rgba(100, 116, 139, 0.2),
              transparent 40%`
                : "",
            }}
          ></div>

          <div className=" relative z-20 flex h-full flex-col rounded-xl bg-opacity-0 p-4 hover:bg-opacity-100">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
