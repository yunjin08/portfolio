"use client";
import React, { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [activeHash, setActiveHash] = useState("");
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Function to get hash without the #
    const getCleanHash = () => {
      const hash = window.location.hash;
      return hash ? hash.replace("#", "").toLowerCase() : "";
    };

    setActiveHash(getCleanHash());

    // Function to handle hash changes
    const handleHashChange = () => {
      setActiveHash(getCleanHash());
    };

    // Function to handle scroll and update active section
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let currentSection = "";

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).clientHeight;
        if (window.scrollY >= sectionTop - 100) {
          currentSection = section.id.toLowerCase();
        }
      });

      if (currentSection !== activeHash) {
        setActiveHash(`#${currentSection}`);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex-center w-fit fixed z-[5000] top-6 md:top-8 inset-x-0 mx-auto px-4 sm:px-2 py-3 md:py-4 rounded-lg border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] flex-grow flex-1",
          className
        )}
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: "rgba(17, 25, 40, 0.75)",
          borderRadius: "12px",
          border: "1px solid rgba(255, 255, 255, 0.125)",
        }}
      >
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            target={navItem.name === "Resume" ? "_blank" : "_self"}
            rel={navItem.name === "Resume" ? "noopener noreferrer" : undefined}
            className={cn(
              "relative text-neutral-50 flex-center px-0 sm:px-2 w-full responsive-text space-x-1  hover:text-primary",
              activeHash === navItem.link && "text-primary"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="responsive-text !cursor-pointer">
              {navItem.name}
            </span>
          </Link>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
