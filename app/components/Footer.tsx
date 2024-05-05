/** @format */
import { personalData } from "../data/personalData"

export default function Footer() {
  const profile = personalData.profile
  return (
    <footer>
      <p className="textTertiary p-8 text-center">
        © 2024 {profile.name}. All Rights Reserved.
      </p>
    </footer>
  )
}
