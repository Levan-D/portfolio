/** @format */

"use client"

import Icon from "@mdi/react"
import { mdiChevronDown } from "@mdi/js"

export default function ScrollBtn() {
  const scrollToElementSmooth = () => {
    const element = document.getElementById("projects")
    element?.scrollIntoView({ behavior: "smooth" })
  }
  return (
    <div className="scrollWrap group absolute -bottom-28 left-1/2 hidden -translate-x-1/2 rounded-full    duration-500 hover:p-14 md:block">
      <button
        aria-label="scroll down"
        onClick={scrollToElementSmooth}
        className="rounded-full border-2 border-teal-400 p-28 duration-500 group-hover:bg-teal-400   group-hover:p-14 "
      >
        <div className="arrow transition-opacity group-hover:opacity-0">
          <Icon path={mdiChevronDown} size={2.5} />
        </div>
        <div className="arrowDelay">
          <Icon path={mdiChevronDown} size={2.5} />
        </div>
        <div className="arrowDelaySecond">
          <Icon path={mdiChevronDown} size={2.5} />
        </div>
      </button>
    </div>
  )
}
