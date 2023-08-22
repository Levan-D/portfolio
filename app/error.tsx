/** @format */

"use client"
import Link from "next/link"

export default function error({}: {}) {
  return (
    <div className="mx-auto mt-[30vh]  w-fit">
      <h2 className="mb-4 text-center text-xl  font-semibold">Unknown Error</h2>
      <p>Return to homepage and try again</p>
      <Link href="/" className="btnSecondary mt-8 text-center">
        Return Home
      </Link>
    </div>
  )
}
