import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jed Edison Donaire",
  description: "Philippine Based Experienced Programmer",
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
        <link rel="preload" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="preload" href="/about-image.webp" />

        <meta name="msapplication-TileColor" content="#112e42" />
        <meta name="theme-color" content="#112e42"></meta>

        <meta property="og:title" content="Jed Edison Portfolio" />
        <meta
          property="og:description"
          content="Philippine Based Experienced Programmer"
        />
        <meta property="og:image" content="https://i.imgur.com/s9jjfVs.jpeg" />
        <meta property="og:url" content="https://jed-edison.com/" />
        <meta property="og:type" content="website" />
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
