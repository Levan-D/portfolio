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
import { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://levandolidze.com"),
  themeColor: "black",

  title: "Levan Dolidze - Web Developer",
  description:
    "Professional web developer with expertise in React, Next.js, and other modern web technologies. Explore my work, learn about my skills, and get in touch for collaboration.",
  keywords:
    "Web Developer, React, Next.js, Tailwind, Typescript, Node.js, JavaScript, Portfolio",
  authors: [{ name: "Levan Dolidze" }],
  colorScheme: "dark",
  creator: "Levan Dolidze",
  publisher: "Levan Dolidze",

  openGraph: {
    title: "Levan Dolidze - Web Developer",
    description:
      "Professional web developer with expertise in React, Next.js, and other modern web technologies. Explore my work, learn about my skills, and get in touch for collaboration.",

    url: "https://levandolidze.com",
    siteName: "Levan Dolidze - Web Developer",
    images: [
      {
        url: "https://i.imgur.com/pKweUJY.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <html lang="en" className="dark overflow-x-hidden">
        <head>
          <link rel="icon" href="../public/favicon.ico" />
        </head>
        <body
          className={`${inter.className}  backgroundGrid  relative flex	 min-h-screen  flex-col    bg-slate-200 text-slate-950  dark:bg-gradient-body-dark dark:text-white`}
        >
          <Navbar />

          <BackToTopBtn />
          <Modal />
          <ToastContainer position="top-center" theme="dark" newestOnTop />

          <main className=" mx-auto w-full max-w-screen-2xl grow   px-8">{children}</main>
          <Footer />
        </body>
      </html>
    </Providers>
  )
}
