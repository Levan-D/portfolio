/** @format */
"use client"

import React from "react"
import Icon from "@mdi/react"
import { mdiChevronDown } from "@mdi/js"
import styles from "./scrollDownBtn.module.css"

export default function ScrollDownBtn() {
  const scrollToElementSmooth = () => {
    const element = document.getElementById("projects")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div
      className={`${styles.scrollWrap} group mx-auto hidden  w-fit translate-y-[40%] rounded-full  duration-500 hover:p-14 md:block`}
    >
      <button
        aria-label="scroll down"
        onClick={scrollToElementSmooth}
        className="rounded-full border-2 border-teal-400 p-28 duration-500 group-hover:bg-teal-400   group-hover:p-14 "
      >
        <div className={`${styles.arrow} transition-opacity group-hover:opacity-0`}>
          <Icon path={mdiChevronDown} size={2.5} />
        </div>
        <div className={styles.arrowDelay}>
          <Icon path={mdiChevronDown} size={2.5} />
        </div>
        <div className={styles.arrowDelaySecond}>
          <Icon path={mdiChevronDown} size={2.5} />
        </div>
      </button>
    </div>
  )
}
