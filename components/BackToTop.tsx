/** @format */
"use client"

import { useState, useEffect } from "react"
import Icon from "@mdi/react"
import { mdiChevronUp } from "@mdi/js"

const BackToTopBtn = () => {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    })
    return window.removeEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    })
  }, [])

  const scrollToTopSmooth = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div
      onClick={scrollToTopSmooth}
      className={`${
        !showButton ? " collapse opacity-0" : " opacity-100"
      }  fixed bottom-4 right-4 z-50 cursor-pointer rounded-full bg-gradient-main  p-1.5 duration-300  sm:hover:translate-y-[-5px] 8xl:right-[calc(50%-1240px)]`}
    >
      <Icon path={mdiChevronUp} title="Up Arrow" size={1.5} color="#cbd5e1" />
    </div>
  )
}

export default BackToTopBtn
