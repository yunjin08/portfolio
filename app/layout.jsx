import "<jed>/styles/globals.css";
import Navbar from "<jed>/components/Navbar";
import Footer from "<jed>/components/Footer";

function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
      </head>
      <body>
        <main className="app">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}

export default RootLayout;
