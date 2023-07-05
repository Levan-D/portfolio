/** @format */

import { MetadataRoute } from "next"
import { projectData } from "../data/projectData"

const baseURL = "https://levandolidze.com"

const projectUrls = projectData.map(project => {
  return { url: baseURL + "/" + project.id, lastModified: new Date() }
})

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseURL,
      lastModified: new Date(),
    },
    ...projectUrls,
  ]
}
