/** @format */

import "./globals.css"
import { Inter } from "next/font/google"
import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"
import { Providers } from "@/lib/provider"
import BackToTopBtn from "@/app/components/BackToTop"
import Modal from "./components/Modal"
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Levan Dolidze",
  description: "Generated by create next app",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <html lang="en">
        <head>
          <link rel="icon" href="../public/favicon.ico" />
        </head>
        <body
          className={`${inter.className} mx-auto flex	 min-h-screen  max-w-screen-2xl flex-col bg-gradient-body text-white`}
        >
          <Navbar />

          <BackToTopBtn />
          <Modal />
          <ToastContainer position="top-center" theme="dark" newestOnTop />

          <main className="grow px-8 flex flex-col overflow-x-hidden">{children}</main>
          <Footer />
        </body>
      </html>
    </Providers>
  )
}
