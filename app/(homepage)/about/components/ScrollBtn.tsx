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
        className="rounded-full border-2 border-teal-400 p-28 duration-500 group-hover:p-14  group-hover:text-slate-950 group-hover:[background:linear-gradient(135deg,_rgba(94,_234,_212,_1)_20%,rgba(45,_212,_191,_1)_80%)] "
      >
        <Icon path={mdiArrowDown} size={2} />
      </button>
    </div>
  )
}
