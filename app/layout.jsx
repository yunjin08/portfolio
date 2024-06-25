import "<jed>/styles/globals.css";
import { ThemeProvider } from "./provider";

export const metadata = {
  title: "Jed Edison Donaire",
  description: "Fullstack Developer Portfolio",
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
        <meta name="theme-color" content="#081b29"></meta>

        <meta property="og:title" content="Jed Edison Portfolio"/>
        <meta property="og:description" content="Jed Edison Portfolio"/>
        <meta property="og:image" content="https://i.imgur.com/L67K8z1_d.webp?maxwidth=760&fidelity=grand"/>
        <meta property="og:url" content="https://jed-donaire.vercel.app/"/>
        <meta property="og:type" content="website"/>

      </head>
      <body>
        <main className="app relative overflow-x-hidden">
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
          {children}
          </ThemeProvider>
        </main>
      </body>
    </html>
  );
}

export default RootLayout;
