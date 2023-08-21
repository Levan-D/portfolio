/** @format */
import ScrollBtn from "./components/ScrollBtn"
import ContactBtn from "@/app/components/ContactBtn"
import { personalData } from "@/app/data/personalData"

export default function About() {
  const profile = personalData.profile

  return (
    <div id="about" className="  blob flex flex-col justify-between md:h-[calc(100vh-88px)]">
      <div className="pt-36   text-center md:ml-10 md:pt-[20vh] md:text-left">
        <p className="textSecondary font-semibold lg:text-xl">{profile.greetings}</p>
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

      <ScrollBtn />
    </div>
  )
}
