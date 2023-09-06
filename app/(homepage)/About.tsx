/** @format */
"use client"
import ContactBtn from "@/app/components/ContactBtn"
import { personalData } from "@/app/data/personalData"
import { useAppSelector } from "@/lib/redux/hooks"
import { v4 as uuidv4 } from "uuid"

import Icon from "@mdi/react"
import { mdiChevronDown } from "@mdi/js"

export default function About() {
  const profile = personalData.profile
  const { screenWidth } = useAppSelector(state => state.global)

  const scrollToElementSmooth = () => {
    const element = document.getElementById("projects")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div
      id="about"
      className={`${
        screenWidth > 768 && "blob"
      } max-w-screen flex flex-col justify-between   md:h-[calc(100vh-88px)]`}
    >
      <div className="pt-36   text-center md:ml-10 md:pt-[20vh] md:text-left">
        <div
          className={`md: mx-auto flex w-fit  text-lg font-semibold md:w-full lg:text-xl`}
        >
          {profile.greetings.split("").map((letter, i) =>
            letter === " " ? (
              <span
                key={uuidv4()}
                style={{ width: "0.25em", display: "inline-block" }}
              ></span>
            ) : (
              <div
                key={uuidv4()}
                style={{ animationDelay: `${0.1 * i}s` }}
                className={`waveText`}
              >
                {letter}
              </div>
            )
          )}
        </div>
        <p className="mt-2 text-2xl font-bold md:text-4xl lg:mt-4  lg:text-5xl xl:text-6xl ">
          {profile.name}.
        </p>
        <p className=" textTertiary mt-2 text-2xl font-bold md:text-4xl lg:mt-4 lg:text-5xl xl:text-6xl">
          I’m a {profile.role}.
        </p>
        <div className=" textTertiary mx-auto mt-2 max-w-[600px] font-bold  md:mx-0  lg:mt-4  lg:max-w-[700px]  lg:text-xl">
          {profile.desc}
        </div>
        <div className="  mx-auto my-20 block w-fit md:hidden">
          <ContactBtn />
        </div>
      </div>

      <div className="scrollWrap group mx-auto hidden  w-fit translate-y-[40%] rounded-full  duration-500 hover:p-14 md:block">
        <button
          aria-label="scroll down"
          onClick={scrollToElementSmooth}
          className="rounded-full border-2 border-teal-400 p-28 duration-500 group-hover:bg-teal-400   group-hover:p-14 "
        >
          <div className="arrow transition-opacity group-hover:opacity-0">
            <Icon path={mdiChevronDown} size={2.5} />
          </div>
          <div className="arrowDelay">
            <Icon path={mdiChevronDown} size={2.5} />
          </div>
          <div className="arrowDelaySecond">
            <Icon path={mdiChevronDown} size={2.5} />
          </div>
        </button>
      </div>
    </div>
  )
}
