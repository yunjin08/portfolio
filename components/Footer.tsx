import { FaLocationArrow } from "react-icons/fa6";
import Link from "next/link";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import Image from "next/image";
import WebGrid from "./ui/WebGrid";

const Footer = () => {
  return (
    <footer
      className="w-full pt-8 md:pt-20 relative pb-4 overflow-hidden"
      id="contact"
    >
      <WebGrid className="bottom-0 md:bottom-32" />
      <div className="flex text-xs sm:text-sm md:text-base flex-col items-center">
        <h1 className="heading text-sm sm:text-lg md:text-xl lg:max-w-[45vw]">
          Are you prepared to <span className="text-secondary">elevate</span>{" "}
          your digital presence?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:jed.donaire08@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className=" text-[0.56rem] sm:text-xs md:font-normal font-light">
          Copyright © 2024 Jed Edison Donaire
        </p>

        <div className="flex items-center md:gap-3 gap-2">
          {socialMedia.map((info) => (
            <Link
              href={info.link}
              target="_blank"
              key={info.id}
              className="md:size-10 size-7 sm:size-9 cursor-pointer flex-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <Image src={info.img} alt="icons" width={20} height={20} />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
