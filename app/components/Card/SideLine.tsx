/** @format */

import React from "react"
import styles from "./SideLine.module.css"
import { useAppSelector } from "@/lib/redux/hooks"

type Props = {
  children: JSX.Element
  sideLine: boolean
}

export default function SideLine({ children, sideLine }: Props) {
  const { screenWidth } = useAppSelector(state => state.global)

  return (
    <div className={`${screenWidth > 540 && sideLine ? styles.sideLine : ""} rounded-xl relative`}>
      {children}
    </div>
  )
}
