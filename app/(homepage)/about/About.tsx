/** @format */
import ScrollBtn from "./components/ScrollBtn"

export default function About() {
  return (
    <div id="about" className="  flex h-[calc(100vh-88px)] flex-col justify-between  ">
      <div className="pt-20   text-center md:ml-10 md:pt-[20vh] md:text-left">
        <p className="font-semibold text-teal-400 lg:text-xl">Hey! my name is</p>
        <p className="mt-2 text-2xl font-bold md:text-4xl lg:mt-4  lg:text-5xl xl:text-6xl ">
          Levan Dolidze.
        </p>
        <p className=" mt-2 text-2xl font-bold text-slate-300 md:text-4xl lg:mt-4 lg:text-5xl xl:text-6xl">
          I’m a Front-End Developer.
        </p>
        <p className=" mx-auto mt-2 max-w-[600px] font-bold text-slate-300  md:mx-0  lg:mt-4  lg:max-w-[700px]  lg:text-xl">
          I specialize in building accessible digital experiences for the web using
          cutting-edge technologies, and guided by intelligible design systems.
        </p>
      </div>

      <ScrollBtn />
    </div>
  )
}
