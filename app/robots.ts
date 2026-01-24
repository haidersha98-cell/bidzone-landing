import { MetadataRoute } from 'next';

// Robots.txt for BidZone
// Accessible at: https://bidzone-iq.com/robots.txt
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://bidzone-iq.com/sitemap.xml',
  };
}
