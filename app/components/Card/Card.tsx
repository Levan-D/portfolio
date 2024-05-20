/** @format */
"use client"

import Glow from "./Glow"
import SideLine from "./SideLine"
import Perspective from "./Perspective"
import FlashLight from "./FlashLight"

type Props = {
  children: JSX.Element
  className?: string
  sideLine?: boolean
  glow?: boolean
  flashLight?: boolean
  perspective?: boolean
}

export default function Card({
  children,
  className,
  sideLine = false,
  glow = false,
  flashLight = false,
  perspective = false,
}: Props) {
  return (
    <Perspective perspective={perspective}>
      <FlashLight flashLight={flashLight}>
        <SideLine sideLine={sideLine}>
          <Glow glow={glow}>
            <div
              className={`${className} h-full w-full rounded-xl bg-gradient-border-light p-0.5  duration-300  dark:bg-gradient-border-dark`}
            >
              <div className="    h-full   w-full   rounded-xl    bg-gradient-card-body-light p-2 dark:bg-gradient-card-body-dark  sm:p-4 ">
                {children}
              </div>
            </div>
          </Glow>
        </SideLine>
      </FlashLight>
    </Perspective>
  )
}
