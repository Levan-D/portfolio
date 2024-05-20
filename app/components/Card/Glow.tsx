/** @format */

import React from "react"
import styles from "./Glow.module.css"
import { useAppSelector } from "@/lib/redux/hooks"

type Props = {
  children: JSX.Element
  glow: boolean
}

export default function Glow({ children, glow }: Props) {
  const { screenWidth } = useAppSelector(state => state.global)

  return (
    <div className={`${screenWidth > 540 && glow ? styles.glow : ""} rounded-xl`}>
      {children}
    </div>
  )
}
