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

export const metadata: Metadata = {
  title: "BidZone | Authentic Auction Platform for Iraq",
  description: "BidZone is a fast, secure Iraqi auction platform for authentic imported products, real-time bidding, and trusted sellers.",
  openGraph: {
    title: "BidZone | Authentic Auction Platform for Iraq",
    description: "Fast, secure real-time auctions on authentic products. Join BidZone and start bidding now.",
    url: "https://bidzone.iq",
    siteName: "BidZone",
    locale: "ar",
    type: "website",
    images: [
      {
        url: "https://via.placeholder.com/1200x630?text=BidZone",
        width: 1200,
        height: 630,
        alt: "BidZone Auction Platform",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
