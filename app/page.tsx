"use client";

import { navItems } from "@/data";
import { Suspense, lazy, useState, useEffect } from "react";
import Loader from "@/components/Loader";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import StarBackground from "@/components/ui/StarBackground";

const Hero = lazy(() => import("@/components/Hero"));
const About = lazy(() => import("@/components/About"));
const Footer = lazy(() => import("@/components/Footer"));
const Education = lazy(() => import("@/components/Education"));
const Approach = lazy(() => import("@/components/Approach"));
const Experience = lazy(() => import("@/components/Experience"));
const RecentProjects = lazy(() => import("@/components/RecentProjects"));

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Create a component to track when Suspense is done loading
  const ContentLoaded = () => {
    useEffect(() => {
      setIsLoading(false);
    }, []);

    return null;
  };

  return (
    <main
      className={`bg-black-100 max-w-[1650px] flex-center flex-col overflow-hidden mx-auto sm:px-10 px-5 ${
        isLoading ? "relative min-h-screen" : ""
      }`}
    >
      <StarBackground />
      <div className="max-w-7xl w-full overflow-hidden">
        <FloatingNav navItems={navItems} />
        <Suspense fallback={<Loader />}>
          <>
            <Hero />
            <About />
            <RecentProjects />
            <Education />
            <Experience />
            <Approach />
            <Footer />
            <ContentLoaded />
          </>
        </Suspense>
      </div>
    </main>
  );
};

export default Home;
