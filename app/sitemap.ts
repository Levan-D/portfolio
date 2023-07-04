/** @format */

import { MetadataRoute } from "next"
import { projectData } from "./data/projectData"

const projectUrls = projectData.map(project => {
  return { url: project.id, lastModified: new Date() }
})

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://levandolidze.com",
      lastModified: new Date(),
    },
    ...projectUrls,
  ]
}
