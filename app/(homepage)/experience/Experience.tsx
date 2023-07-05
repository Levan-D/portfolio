/** @format */
import { personalData } from "@/app/data/personalData"

export default function Experience() {
  const exp = personalData.exp
  return (
    <div
      id="experience"
      className=" flex items-center justify-items-center gap-40 py-20 md:min-h-screen"
    >
      <div className="  mx-auto  w-fit max-w-sm basis-1/2 py-20 text-center">
        <h2 className="textSecondary   text-2xl font-bold  md:text-3xl lg:text-4xl">
          {exp.title}
        </h2>
        <p className="textTertiary mt-4 font-semibold lg:text-xl">{exp.desc}</p>
      </div>

      <div className="basis-1/2 ">dasdasdasd</div>
    </div>
  )
}
