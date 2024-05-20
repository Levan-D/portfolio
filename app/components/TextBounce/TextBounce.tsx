/** @format */

import React from "react"
import styles from "./textBounce.module.css"

type Props = {
  text: string
}

export default function TextBounce({ text }: Props) {
  return (
    <div className="flex">
      {text.split("").map((letter, i) =>
        letter === " " ? (
          <span
            key={letter + i}
            style={{ width: "0.25em", display: "inline-block" }}
          ></span>
        ) : (
          <div
            key={letter + i + "Q"}
            style={{ animationDelay: `${0.1 * i}s` }}
            className={styles.waveText}
          >
            {letter}
          </div>
        )
      )}
    </div>
  )
}
