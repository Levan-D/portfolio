/** @format */
import { personalData } from "@/app/data/personalData"
import Card from "@/app/components/Card"
import { v4 as uuidv4 } from "uuid"

export default function Experience() {
  const exp = personalData.exp
  return (
    <div
      id="experience"
      className="  justify-items-center  py-20 md:min-h-screen lg:flex"
    >
      <div className=" top-0 mx-auto h-fit w-fit  max-w-2xl basis-1/2  py-20 lg:sticky ">
        <h2 className="textSecondary   text-2xl font-bold  md:text-3xl lg:text-4xl">
          {exp.title}
        </h2>
        <div className="textTertiary mt-4 font-semibold xl:text-lg">{exp.desc}</div>
      </div>

      <div className="  basis-1/2  lg:mr-10 ">
        <div>
          {exp.pos.map(role => (
            <Card perspective customCSS="max-w-2xl mx-auto " key={uuidv4()}>
              <div className="px-4 py-2 ">
                <h3 className="  text-lg font-semibold">{role.title}</h3>

                <p className="textTertiary    text-sm  italic">{role.location}</p>

                <p className=" textTertiary mb-2  text-sm  ">{role.date}</p>
                <div className="textTertiary">{role.desc}</div>
                <div className="mt-4 flex flex-wrap gap-4">
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
