/** @format */
import { personalData } from "@/app/data/personalData"
import Card from "@/app/components/Card"
import { v4 as uuidv4 } from "uuid"

export default function Experience() {
  const exp = personalData.exp
  return (
    <div
      id="experience"
      className=" items-center justify-items-center  py-20 md:min-h-screen lg:flex"
    >
      <div className="  mx-auto  w-fit max-w-sm basis-2/5 py-20 text-center">
        <h2 className="textSecondary   text-2xl font-bold  md:text-3xl lg:text-4xl">
          {exp.title}
        </h2>
        <p className="textTertiary mt-4 font-semibold lg:text-xl">{exp.desc}</p>
      </div>

      <div className="basis-3/5  ">
        <div>
          {exp.pos.map(role => (
            <Card perspective customCSS="max-w-xl mx-auto " key={uuidv4()}>
              <div className="block gap-8 px-4 py-2 md:flex">
                <div>
                  <p className=" textTertiary hidden text-lg font-semibold md:block">
                    {role.date}
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold">{role.title}</h4>
                  <p className=" textTertiary block text-lg font-semibold md:hidden">
                    {role.date}
                  </p>
                  <p className="textTertiary">{role.desc}</p>
                  <div className="mt-2 flex gap-4">
                    {role.tech.map(tech => (
                      <div
                        className=" rounded-full bg-teal-100  px-3 py-0.5 text-sm font-semibold text-teal-700 "
                        key={uuidv4()}
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
