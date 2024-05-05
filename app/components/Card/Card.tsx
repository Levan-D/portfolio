/** @format */
"use client"

import React, { useState, useEffect } from "react"
import { useMousePosition } from "@/app/hooks/useMousePosition"
import { useAppSelector } from "@/lib/redux/hooks"
import Glow from "./Glow"
import SideLine from "./SideLine"
import Perspective from "./Perspective"
import FlashLight from "./FlashLight"

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
  sideLine = true,
  glow = true,
  glimmer = true,
  perspective = true,
}: Props) {
  return (
    <div
      className={`${customCSS}  ${
        perspective && "mb-8 sm:mb-0 sm:p-6"
      } relative h-full w-full duration-300`}
    >
      <div
        className={`   group relative h-full w-full rounded-xl bg-gradient-border-light duration-300  dark:bg-gradient-border-dark  `}
      >
        <div className="h-full w-full rounded-xl p-0.5 ">
          <div className="h-full w-full  rounded-xl bg-gradient-card-body-light dark:bg-gradient-card-body-dark">
            <div className="absolute  z-10  h-full w-full rounded-xl opacity-0 duration-300 group-hover:opacity-100  "></div>

            <FlashLight flashLight={glimmer}>
              <Perspective perspective={perspective}>
                <SideLine sideLine={sideLine}>
                  <Glow glow={glow}>
                    <div className=" relative z-20 flex h-full flex-col rounded-xl bg-opacity-0 p-4 sm:hover:bg-opacity-100">
                      {children}{" "}
                    </div>
                  </Glow>
                </SideLine>
              </Perspective>
            </FlashLight>
          </div>
        </div>
      </div>
    </div>
  )
}
