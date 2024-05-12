/** @format */

"use client"

/* Core */
import { Provider } from "react-redux"
import { ThemeProvider } from "next-themes"

/* Instruments */
import { reduxStore } from "./redux/store"

export const Providers = (props: React.PropsWithChildren) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" >
      <Provider store={reduxStore}>{props.children}</Provider>
    </ThemeProvider>
  )
}
