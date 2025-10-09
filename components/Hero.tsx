import { FaLocationArrow } from "react-icons/fa6";

import Image from "next/image";
import { useEffect } from "react";
import PixelatedImage from "./ui/PixelatedImage";
import { animateHero } from "@/animations/layout";
import { MapPin, Calendar, Mail } from "lucide-react";

const Hero = () => {
  useEffect(() => {
    animateHero();
  }, []);

  return (
    <section id="hero" className="overflow-hidden relative">
      {/* background grid, we didn't use the component to make this appear directly, avoiding LCP */}
      <div className={`w-full absolute left-0 top-0 md:-bottom-32`}>
        <Image
          src="/footer-grid.svg"
          alt="grid"
          width={1000}
          height={1000}
          loading="eager"
          quality={75}
          priority={true}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="w-full h-full opacity-50 object-cover"
        />
      </div>
      <div
        className="w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex-center flex-1 lg:flex-row flex-col-reverse h-[15rem] relative z-10">
        <div className="w-full lg:w-[74%] h-full flex flex-col items-start justify-end gap-2">
          {/* Name + verified style dot */}
          <h1 className="text-white text-xl sm:text-xl lg:text-3xl font-extrabold tracking-tight">
            Jed Edison Donaire
            <span className="inline-block align-middle ml-3 w-5 h-5 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 shadow-[0_0_20px_rgba(59,130,246,0.6)]" />
          </h1>

          {/* Location */}
          <div className="flex items-center text-slate-300 gap-2">
            <MapPin className="w-4 h-4" />
            <span className="text-sm md:text-md">Cebu City, Philippines</span>
          </div>

          <div className="flex w-full items-center justify-between pr-[3.75rem]">
            <p className="text-slate-200/90 text-sm sm:text-md lg:text-lg">
              Software Engineer
            </p>

            {/* Callouts / badge */}
            <div>
              <a 
                href="https://www.facebook.com/share/19vPHMbmg8/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs shadow-[0_0_40px_rgba(245,158,11,0.35)] hover:shadow-[0_0_50px_rgba(245,158,11,0.5)] transition-all duration-300 cursor-pointer"
              >
                <span className="text-sm">🏆</span>
                <span>UP Cebu Hackathon Champion</span>
              </a>
            </div>
          </div>

          <div className="mt-2 text-base sm:text-xs flex flex-wrap items-center gap-3">
            <a href="#contact" className="group">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-700/60 bg-slate-800/50 text-slate-200 hover:bg-slate-700/60 transition">
                <Calendar className="w-4 h-4" />
                <span>Schedule a Call</span>
                <FaLocationArrow className="w-3 h-3 opacity-70 group-hover:translate-x-0.5 transition" />
              </div>
            </a>
            <a href="mailto:jed.donaire08@gmail.com">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-700/60 bg-slate-800/50 text-slate-200 hover:bg-slate-700/60 transition">
                <Mail className="w-4 h-4" />
                <span>Send Email</span>
              </div>
            </a>
            <a href="mailto:jed.donaire08@gmail.com">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-700/60 bg-slate-800/50 text-slate-200 hover:bg-slate-700/60 transition">
                <Mail className="w-4 h-4" />
                <span>Visit Community and Engage</span>
              </div>
            </a>
          </div>
        </div>

        {/* Right: Image */}
        <div className="w-full lg:w-[30%] flex-center h-full flex items-end">
          <div className="relative h-full duration-700 hover:scale-[1.02]">
            <div className="absolute borderImg opacity-0 inset-0 rounded-full border-x-4 border-secondary rotate-infinite" />
            <div className="relative w-full h-full flex-center">
              <PixelatedImage
                src="/jed2.webp"
                width={1280}
                height={1280}
                className="rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
