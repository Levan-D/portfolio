/** @format */

"use client"

import Icon from "@mdi/react"
import { mdiArrowDown } from "@mdi/js"

export default function ScrollBtn() {
  const scrollToElementSmooth = () => {
    const element = document.getElementById("projects")
    element?.scrollIntoView({ behavior: "smooth" })
  }
  return (
    <div className="group absolute -bottom-28 left-1/2 hidden -translate-x-1/2 rounded-full    duration-500 hover:p-14 md:block">
      <button
        onClick={scrollToElementSmooth}
        className="rounded-full border-2 border-teal-400 p-28 duration-500 group-hover:bg-teal-400  group-hover:p-14 "
      >
        <Icon path={mdiArrowDown} size={2} />
      </button>
    </div>
  )
}
