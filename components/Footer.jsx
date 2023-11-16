"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Footer() {
  const pathname = usePathname();
  return (
    <div className="flex items-center flex-col  justify-center w-full h-32 foter bg-[#112e42] ">
      <nav className="flex flex-1 max-w-[550px] items-center justify-evenly navbar">
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
      <h3 className="text-xl text-center">
        &#169; 2023 Jed @jed.donaire08@gmail.com{" "}
      </h3>
    </div>
  );
}

export default Footer;
