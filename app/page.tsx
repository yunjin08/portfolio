"use client";

import { navItems } from "@/data";
import { Suspense, lazy } from "react";
import Loader from "@/components/Loader";
import dynamic from "next/dynamic";
import Hero from "@/components/Hero";

const About = lazy(() => import("@/components/About"));
const Footer = lazy(() => import("@/components/Footer"));
const Education = lazy(() => import("@/components/Education"));
const Approach = lazy(() => import("@/components/Approach"));
const Experience = lazy(() => import("@/components/Experience"));
const RecentProjects = lazy(() => import("@/components/RecentProjects"));

const FloatingNav = dynamic(
  () => import("@/components/ui/FloatingNavbar").then((mod) => mod.FloatingNav),
  {
    ssr: false,
    loading: () => <div className="h-16 w-full" />, // Smaller placeholder
  }
);

const StarBackground = dynamic(() => import("@/components/ui/StarBackground"), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-black-100 z-0" />,
});

const Home = () => {

  return (
    <main className="bg-black-100 max-w-[1650px] flex-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <StarBackground />
      <section  className="max-w-7xl w-full overflow-hidden">
        <Suspense fallback={<Loader />}>
          <FloatingNav navItems={navItems} />
          <Hero />
        </Suspense>
        <Suspense fallback={null}>
          <About />
          <RecentProjects />
          <Education />
          <Experience />
          <Approach />
          <Footer />
        </Suspense>
      </section>
    </main>
  );
};

export default Home;