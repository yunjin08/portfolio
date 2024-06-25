import About from "<jed>/components/About";
import Education from "<jed>/components/Education";
import Navbar from "<jed>/components/Navbar";
import Footer from "<jed>/components/Footer";
import Hero from "<jed>/components/Hero";
import Portfolio from "<jed>/components/Portfolio";
import { FloatingNav } from "<jed>/components/ui/FloatingNavbar";
import Grid from "<jed>/components/Grid";

function page() {
  return (
    <>
      <FloatingNav />
      <Navbar />
      <Grid />
      <Hero />
      <About />
      <Education />
      <Portfolio />
      <Footer />
    </>
  );
}

export default page;
