/** @format */
"use client"

import { useState } from "react"
import { expData } from "@/app/data/expData"
import Card from "@/app/components/Card/Card"
import useIntersectionObserver from "@/app/hooks/useIntersectionObserver"

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false)

  const handleIntersect = () => {
    setIsVisible(true)
  }

  const ref = useIntersectionObserver(handleIntersect, {
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
  })

  return (
    <div
      ref={ref}
      id="experience"
      className=" md:mx-4  mt-20 justify-items-center  gap-12 overflow-hidden py-20 md:min-h-screen lg:flex"
    >
      <div
        className={` ${
          isVisible
            ? " md:translate-x-0 md:opacity-100"
            : "md:-translate-x-[800px] md:opacity-0"
        }  top-0 mx-auto h-fit w-fit max-w-2xl basis-1/2 py-20  text-center duration-500  lg:sticky lg:text-left`}
      >
        <h2 className="textSecondary   text-2xl font-bold  md:text-3xl lg:text-4xl">
          Experience
        </h2>
        <div className="textTertiary mt-4 font-semibold xl:text-lg">
          <p>
            I&apos;m an enthusiastic Web Developer with a knack for building compelling
            websites and applications. My expertise lies in developing high-performance,
            mobile-optimized solutions.
          </p>
          <br />
          <p>
            I&apos;m an advocate for accessibility, ensuring that my projects are
            inclusive and user-friendly for everyone. In my work, I adhere to coding best
            practices, resulting in efficient and maintainable end products.
          </p>
          <br />
          <p>
            From conceptualization and design to architecture and deployment, I&apos;ve
            covered the entire web development spectrum. I&apos;m equally at home managing
            independent projects or contributing within a team setting, always working
            towards the common goal of delivering digital solutions that align with user
            needs and business objectives.
          </p>
          <br />
          <p>
            In all I do, I strive to combine technical precision with a focus on user
            experience, creating web products that not only perform well but also resonate
            with the end user.
          </p>
        </div>
      </div>

      <div
        className={` ${
          isVisible
            ? " md:translate-x-0 md:translate-y-0 md:opacity-100"
            : "md:translate-x-[800px] md:translate-y-[400px] md:opacity-0"
        } basis-1/2 duration-500  lg:mr-10`}
      >
        <div>
          {expData.map((role, i) => (
            <Card perspective className="mx-auto mb-8 max-w-2xl " key={role.title + i}>
              <div className="px-4 py-2 ">
                <h3 className="  text-lg font-semibold">{role.title}</h3>

                <p className="textTertiary    text-sm  italic">{role.location}</p>

                <p className=" textTertiary mb-2  text-sm  ">{role.date}</p>
                <div className="textTertiary">
                  {role.desc.map((para, i) => (
                    <p className="mb-2" key={para.slice(5) + i}>
                      {para}
                    </p>
                  ))}
                </div>
                <div className="mt-4 flex flex-wrap gap-4">
                  {role.tech.map((tech, i) => (
                    <p
                      className=" rounded-full bg-teal-100  px-3 py-0.5 text-sm font-semibold text-teal-800 "
                      key={tech + i}
                    >
                      {tech}
                    </p>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
