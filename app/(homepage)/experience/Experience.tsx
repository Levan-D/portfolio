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
      <div className="  mx-auto  w-fit max-w-2xl  basis-1/2 py-20 ">
        <h2 className="textSecondary   text-2xl font-bold  md:text-3xl lg:text-4xl">
          {exp.title}
        </h2>
        <div className="textTertiary mt-4 font-semibold xl:text-lg">{exp.desc}</div>
      </div>

      <div className="max-h-screen  basis-1/2 overflow-x-scroll lg:mr-10 ">
        <div>
          {exp.pos.map(role => (
            <Card perspective customCSS="max-w-2xl mx-auto " key={uuidv4()}>
              <div className="px-4 py-2 ">
                <h3 className="  text-lg font-semibold">{role.title}</h3>

                <p className="textTertiary    text-sm  italic">{role.location}</p>

                <p className=" textTertiary mb-2  text-sm  ">{role.date}</p>
                <div className="textTertiary">{role.desc}</div>
                <div className="mt-2 flex gap-4">
                  {role.tech.map(tech => (
                    <div
                      className=" rounded-full bg-teal-100  px-3 py-0.5 text-sm font-semibold text-teal-800 "
                      key={uuidv4()}
                    >
                      {tech}
                    </div>
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
