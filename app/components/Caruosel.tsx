/** @format */

"use client"

import React, { useRef, useState, useEffect } from "react"
import Card from "@/app/components/Card/Card"
import { mdiArrowLeft, mdiArrowRight } from "@mdi/js"
import Icon from "@mdi/react"

export default function Carousel({ children }: { children: React.ReactNode }) {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [showLeftButton, setShowLeftButton] = useState(false)
  const [showRightButton, setShowRightButton] = useState(false)

  const updateButtonsVisibility = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current
      setShowLeftButton(scrollLeft > 0)
      setShowRightButton(scrollLeft + clientWidth < scrollWidth)
    }
  }

  useEffect(() => {
    updateButtonsVisibility() // Initial check

    const handleScroll = () => {
      updateButtonsVisibility()
    }

    const refCurrent = carouselRef.current
    if (refCurrent) {
      refCurrent.addEventListener("scroll", handleScroll)
    }

    return () => {
      if (refCurrent) {
        refCurrent.removeEventListener("scroll", handleScroll)
      }
    }
  }, [])

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" })
    }
  }

  return (
    <div className="relative  ">
      <Card flashLight>
        <div
          className="flex h-full w-full gap-4 overflow-x-auto overflow-y-hidden"
          ref={carouselRef}
        >
          {children}
        </div>
      </Card>
      {showLeftButton && (
        <button
          onClick={scrollLeft}
          className="absolute left-2 top-1/2 -translate-y-1/2 transform rounded-full bg-gray-700 p-2 duration-300 hover:bg-gray-600 "
          aria-label="Scroll Left"
        >
          <Icon path={mdiArrowLeft} size={1} color="white" />
        </button>
      )}
      {showRightButton && (
        <button
          onClick={scrollRight}
          className="absolute right-2 top-1/2 -translate-y-1/2 transform rounded-full bg-gray-700 p-2 duration-300 hover:bg-gray-600 "
          aria-label="Scroll Right"
        >
          <Icon path={mdiArrowRight} size={1} color="white" />
        </button>
      )}
    </div>
  )
}
