import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jed Edison Donaire - Philippine Based Experienced Programmer",
  description: "Philippine Based Experienced Programmer - Full Stack Developer specializing in modern web technologies and innovative solutions",
  metadataBase: new URL("https://jed-edison.com"),
  keywords: ["Jed Edison Donaire", "Philippine Programmer", "Full Stack Developer", "Web Developer", "React", "Next.js", "TypeScript", "Portfolio"],
  authors: [{ name: "Jed Edison Donaire" }],
  creator: "Jed Edison Donaire",
  publisher: "Jed Edison Donaire",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jed-edison.com",
    siteName: "Jed Edison Portfolio",
    title: "Jed Edison Donaire - Philippine Based Experienced Programmer",
    description: "Philippine Based Experienced Programmer - Full Stack Developer specializing in modern web technologies and innovative solutions",
    images: [
      {
        url: "https://i.imgur.com/s9jjfVs.jpeg",
        width: 1200,
        height: 630,
        alt: "Jed Edison Donaire - Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jed Edison Donaire - Philippine Based Experienced Programmer",
    description: "Philippine Based Experienced Programmer - Full Stack Developer specializing in modern web technologies and innovative solutions",
    images: ["https://i.imgur.com/s9jjfVs.jpeg"],
  },
  alternates: {
    canonical: "https://jed-edison.com",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/jedicon.webp" sizes="any" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="preload" href="/jed2.webp" as="image" />
        <link rel="preload" href="https://fonts.googleapis.com"  as="font"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="preload" href="/footer-grid.svg" as="image" />

        <meta name="msapplication-TileColor" content="#112e42" />
        <meta name="theme-color" content="#112e42"></meta>
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Jed Edison Donaire",
              "jobTitle": "Full Stack Developer",
              "description": "Philippine Based Experienced Programmer - Full Stack Developer specializing in modern web technologies and innovative solutions",
              "url": "https://jed-edison.com",
              "image": "https://i.imgur.com/s9jjfVs.jpeg",
              "sameAs": [
                "https://github.com/jededisondonaire",
                "https://linkedin.com/in/jed-edison-donaire"
              ],
              "knowsAbout": [
                "React",
                "Next.js",
                "TypeScript",
                "JavaScript",
                "Node.js",
                "Full Stack Development",
                "Web Development"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "Philippines"
              }
            })
          }}
        />
      </head>
      <body className={`${inter.className} overflow-x-hidden`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
