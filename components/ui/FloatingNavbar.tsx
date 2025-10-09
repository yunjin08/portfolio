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
import type { NavItem } from "@/interfaces";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: NavItem[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [activeHash, setActiveHash] = useState("");
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "auto";
    document.body.style.height = "auto";

    // Delay showing the navbar, I do this manually because I cant access gsap or frame for this
    const mountTimer = setTimeout(() => {
      setMounted(true);
      setVisible(true); // Show navbar after delay
    }, 2000);

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

    // Initial scroll check
    setTimeout(handleScroll, 100);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeHash]);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (!mounted) return;

    if (typeof current === "number") {
      // Show navbar when at the top of the page
      if (window.scrollY < 100) {
        setVisible(true);
        return;
      }

      // Compare with previous scroll position
      const direction = current! - scrollYProgress.getPrevious()!;

      // Show when scrolling up, hide when scrolling down
      setVisible(direction < 0);
    }
  });

  if (!mounted) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 0,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 0.7 : 0,
        }}
        transition={{
          duration: 0.4,
          ease: [0.22, 1, 0.36, 1],
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
        {navItems.map((navItem: NavItem, idx: number) => (
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
            <span className="responsive-text text-xs !cursor-pointer">
              {navItem.name}
            </span>
          </Link>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
