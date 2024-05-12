/** @format */
"use client"

import { useAppSelector } from "@/lib/redux/hooks"
import { useSetScreenWidth } from "../../hooks/useSetScreenWidth"
import MobileNavbar from "./MobileNavbar"
import DesktopNavbar from "./DesktopNavbar"

export default function Navbar() {
  const { screenWidth } = useAppSelector(state => state.global)
  useSetScreenWidth()
  return screenWidth > 768 ? <DesktopNavbar /> : <MobileNavbar />
}
