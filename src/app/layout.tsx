// app/layout.tsx or similar file

import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "BarScout - Discover the Best Bars",
  description: "BarScout helps you find and explore the best bars around. Join us to discover exciting new places and stay updated with our app.",
  keywords: "bars, nightlife, bar finder, drinks, nightlife app, BarScout",
  authors: [{ name: "BarScout Team", },],
  openGraph: {
    type: 'website',
    url: 'https://barscout.com',
    title: 'BarScout - Discover the Best Bars',
    description: 'BarScout helps you find and explore the best bars around. Join us to discover exciting new places and stay updated with our app.',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@barscout2024',
    title: 'BarScout - Discover the Best Bars',
    description: 'BarScout helps you find and explore the best bars around. Join us to discover exciting new places and stay updated with our app.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2054354585755647"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-0JXQVG8QL6"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0JXQVG8QL6');
          `}
        </Script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
