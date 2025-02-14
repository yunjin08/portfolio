"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Education from "@/components/Education";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

const Home = () => {
  return (
    <main className=" bg-black-100 max-w-[1650px] flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full overflow-hidden">
        <FloatingNav navItems={navItems} />
        <Hero />
        <About />
        <RecentProjects />
        <Education />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
