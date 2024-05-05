/** @format */

import { useAppSelector, useAppDispatch } from "@/lib/redux/hooks"
import { setDarkMode } from "@/lib/redux/slices/globalSlice"
import Icon from "@mdi/react"
import { mdiWeatherNight, mdiWhiteBalanceSunny } from "@mdi/js"

type Props = {
  icon?: boolean
}

export default function DarkModeBtn({ icon }: Props) {
  const { darkMode } = useAppSelector(state => state.global)

  const dispatch = useAppDispatch()

  const handleDarkMode = () => {
    const newDarkMode = !darkMode
    dispatch(setDarkMode(newDarkMode))
    if (newDarkMode) {
      document.documentElement.classList.add("dark")
      document.documentElement.classList.remove("light")
    } else {
      document.documentElement.classList.add("light")
      document.documentElement.classList.remove("dark")
    }
  }

  return !icon ? (
    <button
      aria-label="toggle dark mode"
      onClick={handleDarkMode}
      className="btnTertiary translate-y-0.5"
    >
      <Icon path={!darkMode ? mdiWeatherNight : mdiWhiteBalanceSunny} size={1} />
    </button>
  ) : (
    <button
      onClick={handleDarkMode}
      aria-label="toggle dark mode"
      className="btnSecondary mx-auto mb-4 translate-y-0.5"
    >
      <div className="flex gap-4">
        <p> {!darkMode ? "Dark mode" : "Light Mode"}</p>
        <Icon path={!darkMode ? mdiWeatherNight : mdiWhiteBalanceSunny} size={1} />
      </div>
    </button>
  )
}
