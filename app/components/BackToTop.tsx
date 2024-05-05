/** @format */
"use client"

import Icon from "@mdi/react"
import { mdiChevronUp } from "@mdi/js"
import { useAppSelector } from "@/lib/redux/hooks"

const BackToTopBtn = () => {
  const { screenWidth } = useAppSelector(state => state.global)

  const scrollToTopSmooth = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return screenWidth > 300 ? (
    <button
      aria-label="back to top"
      onClick={scrollToTopSmooth}
      className={` fixed bottom-4 right-4 z-20 hidden cursor-pointer rounded-full bg-slate-700 p-1.5  duration-300 sm:sm:hover:translate-y-[-5px]  md:block 8xl:right-[calc(50%-1240px)]`}
    >
      <Icon path={mdiChevronUp} title="Up Arrow" size={1.5} color="#cbd5e1" />
    </button>
  ) : (
    <></>
  )
}

export default BackToTopBtn
