import { MetadataRoute } from 'next';

// Sitemap for BidZone landing page
// Accessible at: https://bidzone-iq.com/sitemap.xml
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://bidzone-iq.com/',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ];
}
