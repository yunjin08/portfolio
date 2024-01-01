"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
function Footer() {
  const pathname = usePathname();
  return (
    <div className="flex relative  items-center justify-between px-[2rem] min:px-[4rem]  md:px-[13.5rem] w-full h-36 foter border-t-2 border-[#112e42] bg-[#112e42]">
      <div className="flex relative  items-center   gap-2 md:gap-10 justify-start  ">
        <Link href="/" className="flex ">
          {" "}
          <Image
            src="/favicon/favicon.ico"
            alt="favicon"
            width={120}
            height={180}
            className="w-[3.5rem] md:w-[4rem]"
          />
        </Link>
        <h3 className="text-md font-serif md:text-2xl text-center">
          &#169;JED - 2023{" "}
        </h3>
      </div>
      <div className="flex flex-col gap-2 text-md sm:text-lg md:text-xl font-serif">
        <p>Email me @ jed.donaire@gmail.com</p>
        <p>Call me @ 09662781586</p>
      </div>
    </div>
  );
}

export default Footer;
