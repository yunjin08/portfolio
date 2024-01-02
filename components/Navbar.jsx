"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
function Navbar() {
  const [toggle, setToggle] = useState(false);
  const pathname = usePathname();
  return (
    <div className="header relative overflow-x-hidden">
      <Link href={"/"} className="logo">
        {" "}
        Jed.{" "}
      </Link>
      <div className="md:hidden flex flex-1 justify-end ">
        <Image
          src={toggle ? "./close.svg" : "./menu.svg"}
          alt="menu"
          width={30}
          height={30}
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
      </div>
      <nav className="hidden md:flex flex-1 max-w-[550px] items-center justify-evenly navbar">
        <Link className={`link ${pathname === "/" ? "active" : ""}`} href="/">
          Home
        </Link>
        <Link
          className={`link ${pathname === "/about" ? "active" : ""}`}
          href="/about"
        >
          About
        </Link>
        <Link
          className={`link ${pathname === "/education" ? "active" : ""}`}
          href="/education"
        >
          Education
        </Link>
        <Link
          className={`link ${pathname === "/portfolio" ? "active" : ""}`}
          href="/portfolio"
        >
          Portfolio
        </Link>
        <a
          href="resume.pdf"
          className={`link ${pathname === "/contact" ? "active" : ""}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </nav>
      {toggle && (
        <nav className="flex absolute top-[8rem] border-2 border-[#00abf0] right-10 md:hidden flex-col items-center justify-center  rounded-2xl bg-gradient-to-r from-[#133146] via-[#112e42] to-[#10334a]  z-50 overflow-hidden ">
          <div className="flex toggle flex-col items-center justify-center text-3xl font-semibold py-10 px-16 space-y-8">
            <Link
              className={`link ${pathname === "/" ? "active" : ""}`}
              href="/"
            >
              Home
            </Link>
            <Link
              className={`link ${pathname === "/about" ? "active" : ""}`}
              href="/about"
            >
              About
            </Link>
            <Link
              className={`link ${pathname === "/education" ? "active" : ""}`}
              href="/education"
            >
              Education
            </Link>
            <Link
              className={`link ${pathname === "/portfolio" ? "active" : ""}`}
              href="/portfolio"
            >
              Portfolio
            </Link>
            <Link
              className={`link ${pathname === "/contact" ? "active" : ""}`}
              href="/resume.pdf"
            >
              Resume
            </Link>
          </div>
        </nav>
      )}
    </div>
  );
}

export default Navbar;
