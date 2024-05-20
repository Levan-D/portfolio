/** @format */

import ContactBtn from "@/app/components/ContactBtn"
import ScrollDownBtn from "@/app/components/ScrollDownBtn/ScrollDownBtn"
import TextBounce from "@/app/components/TextBounce/TextBounce"

export default function About() {
  return (
    <div
      id="about"
      className={`
       max-w-screen flex flex-col justify-between   md:h-[calc(100vh-88px)]`}
    >
      <div className="pt-36   text-center md:ml-10 md:pt-[20vh] md:text-left">
        <div className={`md: mx-auto  w-fit  text-lg font-semibold md:w-full lg:text-xl`}>
          <TextBounce text="Hey! My name is" />
        </div>

        <p className="mt-2 text-2xl font-bold md:text-4xl lg:mt-4  lg:text-5xl xl:text-6xl ">
          Levan Dolidze.
        </p>

        <p className=" textTertiary mt-2 text-2xl font-bold md:text-4xl lg:mt-4 lg:text-5xl xl:text-6xl">
          I&#8217;m a Web Developer.
        </p>

        <p className=" textTertiary mx-auto mt-2 max-w-[600px] font-bold  md:mx-0  lg:mt-4  lg:max-w-[700px]  lg:text-xl">
          I specialize in building accessible digital experiences for the web using
          cutting-edge technologies and guided by intelligible design systems.
        </p>

        <div className="  mx-auto my-20 block w-fit md:hidden">
          <ContactBtn />
        </div>
      </div>

      <ScrollDownBtn />
    </div>
  )
}
