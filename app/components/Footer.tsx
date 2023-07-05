/** @format */
import { personalData } from "../data/personalData"

export default function Footer() {
  const profile = personalData.profile
  return (
    <footer>
      <div className="textTertiary p-8 text-center">
        © 2023 {profile.name}. All Rights Reserved.
      </div>
    </footer>
  )
}
