/** @format */

"use client"

import { useRef, useEffect } from "react"

type IntersectionCallback = () => void

export default function useIntersectionObserver(
  onIntersect: IntersectionCallback,
  options = {}
) {
  const ref = useRef(null)

  useEffect(() => {
    const target = ref.current

    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        onIntersect()
      }
    }, options)

    if (target) {
      observer.observe(target)
    }

    return () => {
      if (target) {
        observer.unobserve(target)
      }
    }
  }, [onIntersect, options])

  return ref
}
