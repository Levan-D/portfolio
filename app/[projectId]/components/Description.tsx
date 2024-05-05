/** @format */

import Icon from "@mdi/react"
import { mdiGithub, mdiWeb } from "@mdi/js"
import Link from "next/link"
import { v4 as uuidv4 } from "uuid"

type Props = {
  title: string
  tech: string[]
  links: {
    github?: string
    website?: string
  }
  desc: string
}

export default function Description({ title, tech, links, desc }: Props) {
  return (
    <>
      <h2 className="textSecondary text-center text-2xl font-bold  md:text-3xl lg:text-left lg:text-4xl ">
        {title}
      </h2>
      <p className=" textTertiary  mt-4 font-semibold  xl:text-lg">{desc}</p>
      <div className="  mt-4  flex flex-wrap  gap-4">
        {tech.map((tech: string) => (
          <div
            className="rounded-full bg-teal-100 px-4  py-1 text-sm font-semibold text-teal-800 xl:text-base "
            key={uuidv4()}
          >
            {tech}
          </div>
        ))}
      </div>
      <div className="textTertiary mt-4 flex gap-4 lg:block ">
        {links.github && (
          <Link
            target="_blank"
            className="btnTertiary flex w-fit items-center gap-2 lg:mb-2"
            href={links.github}
          >
            <Icon path={mdiGithub} size={1.2} />
            <div className="hidden lg:block">Github</div>
          </Link>
        )}
        {links.website && (
          <Link
            target="_blank"
            className="btnTertiary flex w-fit items-center gap-2 lg:mb-2"
            href={links.website}
          >
            <Icon path={mdiWeb} size={1.2} />
            <div className="hidden lg:block">{title}</div>
          </Link>
        )}
      </div>
    </>
  )
}
