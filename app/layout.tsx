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
  title: "Levan Dolidze - Web Developer",
  description:
    "Professional web developer with expertise in React, Next.js, and other modern web technologies. Explore my work, learn about my skills, and get in touch for collaboration.",
  keywords:
    "Web Developer, React, Next.js, Tailwind, Typescript, Node.js, JavaScript, Portfolio",
  author: "Levan Dolidze",
  image: "https://i.imgur.com/MlF0tGd.png",
  url: "https://levandolidze.com/",
  locale: "en_US",
  type: "website",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Providers>
      <html lang="en">
        <head>
          <link rel="icon" href="../public/favicon.ico" />
        </head>
        <body
          className={`${inter.className} mx-auto flex	 min-h-screen  max-w-screen-2xl flex-col bg-slate-200 text-slate-950  dark:bg-gradient-body-dark dark:text-white`}
        >
          <Navbar />

          <BackToTopBtn />
          <Modal />
          <ToastContainer position="top-center" theme="dark" newestOnTop />

          <main className=" grow  overflow-x-hidden px-8">{children}</main>
          <Footer />
        </body>
      </html>
    </Providers>
  )
}
