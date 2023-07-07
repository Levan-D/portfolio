/** @format */
"use client"

import { useState, useEffect } from "react"
import Icon from "@mdi/react"
import { mdiChevronUp } from "@mdi/js"

const BackToTopBtn = () => {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToTopSmooth = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <button
      aria-label="back to top"
      onClick={scrollToTopSmooth}
      className={`${
        !showButton ? " collapse opacity-0" : " opacity-100"
      } fixed bottom-4 right-4 z-20 hidden cursor-pointer rounded-full bg-slate-700 p-1.5  duration-300 sm:sm:hover:translate-y-[-5px]  md:block 8xl:right-[calc(50%-1240px)]`}
    >
      <Icon path={mdiChevronUp} title="Up Arrow" size={1.5} color="#cbd5e1" />
    </button>
  )
}

export default BackToTopBtn
