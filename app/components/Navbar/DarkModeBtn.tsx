/** @format */
"use client"
import { useState, useEffect } from "react"
import Icon from "@mdi/react"
import { mdiWeatherNight, mdiWhiteBalanceSunny, mdiCircleDouble } from "@mdi/js"
import { useTheme } from "next-themes"

type Props = {
  icon?: boolean
}

export default function DarkModeBtn({ icon }: Props) {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()
  useEffect(() => setMounted(true), [])

  const handleDarkMode = () => {
    if (resolvedTheme === "dark") {
      setTheme("light")
    } else {
      setTheme("dark")
    }
  }

  if (!mounted)
    return (
      <button aria-label="toggle dark mode" className="btnTertiary translate-y-0.5">
        <Icon path={mdiCircleDouble} size={1} />
      </button>
    )

  return !icon ? (
    <button
      aria-label="toggle dark mode"
      onClick={handleDarkMode}
      className="btnTertiary translate-y-0.5"
    >
      <Icon
        path={resolvedTheme !== "dark" ? mdiWeatherNight : mdiWhiteBalanceSunny}
        size={1}
      />
    </button>
  ) : (
    <button
      onClick={handleDarkMode}
      aria-label="toggle dark mode"
      className="btnSecondary mx-auto mb-4 translate-y-0.5"
    >
      <div className="flex gap-4">
        <p> {resolvedTheme !== "dark" ? "Dark mode" : "Light Mode"}</p>
        <Icon
          path={resolvedTheme !== "dark" ? mdiWeatherNight : mdiWhiteBalanceSunny}
          size={1}
        />
      </div>
    </button>
  )
}
