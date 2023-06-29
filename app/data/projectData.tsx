/** @format */
import type { StaticImageData } from "next/image"
import cssMateCoverWeb from "@/app/assets/projects/css-mate-cover-web.png"

export type ProjectsDataType = {
  id: string
  height: string
  stagger: string
  visibility: string
  mobile: boolean
  title: string
  pitch: string
  desc: string
  tech: string[]
  images: {
    coverWeb: StaticImageData
    coverMobile?: StaticImageData
    leftMobile?: StaticImageData
    rightMobile?: StaticImageData
  }
}

export const projectData: ProjectsDataType[] = [
  {
    id: "ef2f82cf-a5ef-4247-ba38-8cc23cbb46c2",
    height: "row-span-3 lg:row-span-5 xl:row-span-6 ",
    stagger: "   lg:translate-y-0 xl:-translate-y-10",
    visibility: "visible",
    mobile: true,
    title: "card title",
    pitch:
      "By default, Tailwind includes grid-template-row utilities for creating basic grids with up to 6 equal width rows. You can customize these values by editing theme.gridTemplateRows or theme.extend.gridTemplateRows in your tailwind.config.js file.",
    desc: "By default, Tailwind includes grid-template-row utilities for creating basic grids with up to 6 equal width rows. You can customize these values by editing theme.gridTemplateRows or theme.extend.gridTemplateRows in your tailwind.config.js file.",
    tech: ["react", "ts"],
    images: {
      coverWeb: cssMateCoverWeb,
      coverMobile: cssMateCoverWeb,
      leftMobile: cssMateCoverWeb,
      rightMobile: cssMateCoverWeb,
    },
  },
  {
    id: "7a8a95e1-0a2f-4947-8de7-f93e004616f5",
    height: "row-span-3 lg:row-span-5 xl:row-span-6  ",
    stagger: "   lg:translate-y-0 xl:-translate-y-10",
    visibility: "visible",
    mobile: false,
    title: "card title",
    pitch:
      "By default, Tailwind includes grid-template-row utilities for creating basic grids with up to 6 equal width rows. You can customize these values by editing theme.gridTemplateRows or theme.extend.gridTemplateRows in your tailwind.config.js file.",
    desc: "desc",
    tech: [""],
    images: {
      coverWeb: cssMateCoverWeb,
    },
  },

  {
    id: "a1623c93-ef1f-4575-a6b7-ea5adb50d120",
    height: "row-span-2 xl:row-span-3",
    stagger: "   lg:translate-y-0 xl:translate-y-56",
    visibility: "visible",
    mobile: false,
    title: "card title",
    pitch:
      "By default, Tailwind includes grid-template-row utilities for creating basic grids with up to 6 equal width rows. You can customize these values by editing theme.gridTemplateRows or theme.extend.gridTemplateRows in your tailwind.config.js file.",
    desc: "desc",
    tech: [""],
    images: {
      coverWeb: cssMateCoverWeb,
    },
  },

  {
    id: "5aa8e6c4-c9a6-455f-bf6e-c072cb721695",
    height: " row-span-3 lg:row-span-4 xl:row-span-6 ",
    stagger: "   lg:translate-y-20 xl:translate-y-56",
    visibility: "visible",
    mobile: false,
    title: "card title",
    pitch:
      "By default, Tailwind includes grid-template-row utilities for creating basic grids with up to 6 equal width rows. You can customize these values by editing theme.gridTemplateRows or theme.extend.gridTemplateRows in your tailwind.config.js file.",
    desc: "desc",
    tech: [""],
    images: {
      coverWeb: cssMateCoverWeb,
    },
  },

  {
    id: "9cd7f7f8-7577-451c-9d24-c6e1c4d1a96e",
    height: "row-span-3 lg:row-span-4 xl:row-span-6 ",
    stagger: " lg:translate-y-20 xl:translate-y-28",
    visibility: "visible",
    mobile: false,
    title: "card title",
    pitch:
      "By default, Tailwind includes grid-template-row utilities for creating basic grids with up to 6 equal width rows. You can customize these values by editing theme.gridTemplateRows or theme.extend.gridTemplateRows in your tailwind.config.js file.",
    desc: "desc",
    tech: [""],
    images: {
      coverWeb: cssMateCoverWeb,
    },
  },

  {
    id: "4e283124-4d2b-4045-b6e5-1cf28ce82ab9",
    height: "row-span-3 lg:row-span-4 xl:row-span-6 ",
    stagger: " lg:translate-y-20 xl:translate-y-28",
    visibility: "visible",
    mobile: false,
    title: "card title",
    pitch:
      "By default, Tailwind includes grid-template-row utilities for creating basic grids with up to 6 equal width rows. You can customize these values by editing theme.gridTemplateRows or theme.extend.gridTemplateRows in your tailwind.config.js file.",
    desc: "desc",
    tech: [""],
    images: {
      coverWeb: cssMateCoverWeb,
    },
  },

  {
    id: "1a1edb85-6188-407d-acb8-713f2aa4aa04",
    height: "row-span-2 lg:row-span-4 ",
    stagger: " lg:translate-y-10 xl:translate-y-0",
    visibility: "visible",
    mobile: false,
    title: "card title",
    pitch:
      "By default, Tailwind includes grid-template-row utilities for creating basic grids with up to 6 equal width rows. You can customize these values by editing theme.gridTemplateRows or theme.extend.gridTemplateRows in your tailwind.config.js file.",
    desc: "desc",
    tech: [""],
    images: {
      coverWeb: cssMateCoverWeb,
    },
  },

  {
    id: "ab758fed-de8d-408e-a903-87f81dcf1905",
    height: "row-span-2 lg:row-span-4 ",
    stagger: " lg:translate-y-10 xl:translate-y-0",
    visibility: "visible",
    mobile: false,
    title: "card title",
    pitch:
      "By default, Tailwind includes grid-template-row utilities for creating basic grids with up to 6 equal width rows. You can customize these values by editing theme.gridTemplateRows or theme.extend.gridTemplateRows in your tailwind.config.js file.",
    desc: "desc",
    tech: [""],
    images: {
      coverWeb: cssMateCoverWeb,
    },
  },

  {
    id: "214294e2-e05d-4478-9640-fe73a9dae164",
    height: "row-span-2 lg:row-span-4 ",
    stagger: " lg:translate-y-10 xl:translate-y-0",
    visibility: "visible",
    mobile: false,
    title: "card title",
    pitch:
      "By default, Tailwind includes grid-template-row utilities for creating basic grids with up to 6 equal width rows. You can customize these values by editing theme.gridTemplateRows or theme.extend.gridTemplateRows in your tailwind.config.js file.",
    desc: "desc",
    tech: [""],
    images: {
      coverWeb: cssMateCoverWeb,
    },
  },
]
