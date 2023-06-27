/** @format */

export type CardsDataType = {
  height: string
  stagger: string
  visibility: string
  title: string
  desc: string
  cover: string
}

export const cardsData: CardsDataType[] = [
  {
    height: "lg:row-span-5 xl:row-span-6 row-span-3",
    stagger: "   lg:translate-y-0 xl:-translate-y-10",
    visibility: "visible",
    title: "card title",
    desc: "By default, Tailwind includes grid-template-row utilities for creating basic grids with up to 6 equal width rows. You can customize these values by editing theme.gridTemplateRows or theme.extend.gridTemplateRows in your tailwind.config.js file.",
    cover: "cover",
  },
  {
    height: "lg:row-span-5 xl:row-span-6  row-span-3",
    stagger: "   lg:translate-y-0 xl:-translate-y-10",
    visibility: "visible",
    title: "card title",
    desc: "desc",
    cover: "cover",
  },

  {
    height: "row-span-2 xl:row-span-3",
    stagger: "   lg:translate-y-0 xl:translate-y-56",
    visibility: "visible",
    title: "card title",
    desc: "desc",
    cover: "cover",
  },
  {
    height: " row-span-3 lg:row-span-4 xl:row-span-6 ",
    stagger: "   lg:translate-y-20 xl:translate-y-56",
    visibility: "visible",
    title: "card title",
    desc: "desc",
    cover: "cover",
  },
  {
    height: "lg:row-span-4 xl:row-span-6 row-span-3",
    stagger: " lg:translate-y-20 xl:translate-y-28",
    visibility: "visible",
    title: "card title",
    desc: "desc",
    cover: "cover",
  },
  {
    height: "lg:row-span-4 xl:row-span-6 row-span-3",
    stagger: " lg:translate-y-20 xl:translate-y-28",
    visibility: "visible",
    title: "card title",
    desc: "desc",
    cover: "cover",
  },
  {
    height: "lg:row-span-4 row-span-2",
    stagger: " lg:translate-y-10 xl:translate-y-0",
    visibility: "visible",
    title: "card title",
    desc: "desc",
    cover: "cover",
  },
  {
    height: "lg:row-span-4 row-span-2",
    stagger: " lg:translate-y-10 xl:translate-y-0",
    visibility: "visible",
    title: "card title",
    desc: "desc",
    cover: "cover",
  },
  {
    height: "lg:row-span-4 row-span-2",
    stagger: " lg:translate-y-10 xl:translate-y-0",
    visibility: "visible",
    title: "card title",
    desc: "desc",
    cover: "cover",
  },
]
