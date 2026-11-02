import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// SEO Metadata for BidZone homepage
export const metadata: Metadata = {
  title: "بيدزون – مزادات فورية على منتجات أصلية",
  description: "بيدزون هي منصة مزادات إلكترونية في العراق تتيح لك شراء منتجات أصلية بأسعار تنافسية من خلال مزادات فورية وآمنة عبر تطبيق سهل وموثوق.",
  authors: [{ name: "BidZone" }],
  verification: {
    other: {
      "facebook-domain-verification": "3e4tjmudtxyw487jdg19c6bw5awwj",
    },
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "بيدزون – مزادات فورية على منتجات أصلية",
    description: "بيدزون هي منصة مزادات إلكترونية في العراق تتيح لك شراء منتجات أصلية بأسعار تنافسية من خلال مزادات فورية وآمنة عبر تطبيق سهل وموثوق.",
    url: "https://bidzone-iq.com",
    siteName: "BidZone",
    locale: "ar_IQ",
    type: "website",
    images: [
      {
        url: "https://bidzone-iq.com/images/hero/hero.webp",
        width: 1600,
        height: 800,
        alt: "بيدزون - منصة المزادات الإلكترونية في العراق",
      },
    ],
  },
};

// JSON-LD Structured Data for SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'بيدزون',
      description: 'منصة مزادات فورية على منتجات أصلية بأسعار تنافسية في العراق',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Android, iOS',
      url: 'https://bidzone-iq.com',
    },
    {
      '@type': 'Organization',
      name: 'BidZone',
      url: 'https://bidzone-iq.com',
      logo: 'https://bidzone-iq.com/images/logo.png',
      areaServed: {
        '@type': 'Country',
        name: 'IQ',
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar-IQ" dir="rtl">
      <head>
        {/* Structured Data (JSON-LD) for Google Rich Results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
