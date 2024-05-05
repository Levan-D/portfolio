/** @format */
"use client"

import { useAppSelector } from "@/lib/redux/hooks"
import { useGlobalEffects } from "../../hooks/useGlobalEffects"
import MobileNavbar from "./MobileNavbar"
import DesktopNavbar from "./DesktopNavbar"

export default function Navbar() {
  const { screenWidth } = useAppSelector(state => state.global)
  useGlobalEffects()
  return screenWidth > 768 ? <DesktopNavbar /> : <MobileNavbar />
}
