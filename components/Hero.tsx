import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { useEffect } from "react";
import PixelatedImage from "./ui/PixelatedImage";
import WebGrid from "./ui/WebGrid";
import { animateHero } from "@/animations/layout";

const Hero = () => {
  useEffect(() => {
    setTimeout(() => {
      animateHero();
    }, 1000);
  }, []);

  return (
    <section id="hero" className="pb-20 overflow-hidden h-[100svh] md:h-auto">
 hell
    </section>
  );
};

export default Hero;
