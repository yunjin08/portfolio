import "<jed>/styles/globals.css";
import Navbar from "<jed>/components/Navbar";
import Footer from "<jed>/components/Footer";
import Image from "next/image";

export const metadata = {
  title: "Jed Edison Donaire",
  description: "Portfolio",
};

function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#102e44"></meta>

        <meta property="og:title" content="Your Page Title"/>
        <meta property="og:description" content="Jed Edison Donaire Portfolio"/>
        <meta property="og:image" content="https://imgur.com/a/YWoM7E6"/>
        <meta property="og:url" content="https://jed-donaire.vercel.app/"/>
        <meta property="og:type" content="website"/>

      </head>
      <body>
        <main className="app relative overflow-x-hidden">
          <Image
            src="/moon.png"
            alt="moon"
            width={250}
            height={250}
            className="absolute right-[-20rem] top-[-20rem] opacity-10  z-[-20] w-[50rem]"
          />

          <Navbar />
          <Image
            src="/bg2.png"
            alt="bg"
            width={250}
            height={250}
            className="absolute right-0 bottom-32 opacity-10  z-[-20] w-full"
          />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}

export default RootLayout;
