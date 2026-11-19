import type { MetadataRoute } from 'next';
import { getProjectSlug, projectData } from '@/data/projectData';
import { SITE_URL as BASE_URL } from '@/config/site';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE_URL, lastModified: new Date() },
    ...projectData.map((project) => ({
      url: `${BASE_URL}/${getProjectSlug(project)}`,
      lastModified: new Date(),
    })),
  ];
}
