"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
function Footer() {
  const pathname = usePathname();
  return (
    <div className="flex relative items-center flex-col  justify-center w-full h-32 foter bg-[#112e42] ">
      <nav className="flex relative flex-1 max-w-[550px] items-center justify-evenly space-x-3 md:space-x-5 text-[1.3rem] sm:text-[1.7rem] font-medium">
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
      <h3 className="text-sm md:text-xl text-center">
        &#169; 2023 jed.donaire08@gmail.com{" "}
      </h3>
    </div>
  );
}

export default Footer;
