"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
function Navbar() {
  const [toggle, setToggle] = useState(false);
  const pathname = usePathname();
  return (
    <div className="header">
      <Link href={"/"} className="logo">
        {" "}
        Jed.{" "}
      </Link>
      <div className="md:hidden flex flex-1 justify-end items-center">
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
          className={`link ${pathname === "/skills" ? "active" : ""}`}
          href="/skills"
        >
          Skills
        </Link>
        <Link
          className={`link ${pathname === "/contact" ? "active" : ""}`}
          href="/contact"
        >
          Contact
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
