import { useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import dynamic from "next/dynamic";
import { memo } from "react";

const IoCopyOutline = dynamic(
  () => import("react-icons/io5").then(mod => mod.IoCopyOutline),
  {
    ssr: false,
    loading: () => <span className="h-5 w-5 inline-block" />, // placeholder
  }
);

const BackgroundGradientAnimation = dynamic(
  () => import("./GradientBg").then(mod => mod.BackgroundGradientAnimation),
  { ssr: false, loading: () => <div className="h-[100vh] w-full" /> }
);

const MagicButton = dynamic(() => import("../MagicButton"), {
  ssr: false,
  loading: () => <div className="h-96 w-96" />,
});

const GridGlobe = dynamic(() => import("./GridGlobe"), {
  ssr: false,
  loading: () => <div className="h-96 w-96" />,
});

const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
});

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        // change gap-4 to gap-8, change grid-cols-3 to grid-cols-5, remove md:auto-rows-[18rem], add responsive code
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = memo(
  ({
    className,
    id,
    title,
    description,
    //   remove unecessary things here
    img,
    imgClassName,
    titleClassName,
    spareImg,
  }: {
    className?: string;
    id: number;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    img?: string;
    imgClassName?: string;
    titleClassName?: string;
    spareImg?: string;
  }) => {
    const leftLists = ["NextJS", "Typescript", "React", "Svelte", "Redis", "MongoDB", "Directus", "Airtable", "Make", "N8n", "Apache", "Terraform", "Ansible", "Supabase", "Python"];
    const rightLists = ["Kubernetes", "Golang", "Django", "Ruby", "Kafka", "GCP", "AWS", "Docker", "Posgresl"];

    const [copied, setCopied] = useState(false);
    // const [animationData, setAnimationData] = useState<any | null>(null);

    const handleCopy = async () => {
      const text = "jed.donaire08@gmail.com";
      navigator.clipboard.writeText(text);
      setCopied(true);
      // Remove cofetti animation for now, too much js execution time
      // const data = await import("@/data/confetti.json");
      // setAnimationData(data.default);
    };

    return (
      <div
        className={cn(
          // remove p-4 rounded-3xl dark:bg-black dark:border-white/[0.2] bg-white  border border-transparent, add border border-white/[0.1] overflow-hidden relative
          "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
          className
        )}
        style={{
          background: "#081b29",
          backgroundColor: "linear-gradient(90deg, #102e44 0%, #173e56 100%)",
        }}
      >
        {/* add img divs */}
        <div className={`${id === 6 && "flex justify-center"} h-full`}>
          <div className="w-full h-full absolute">
            {img && (
              <Image
                src={img}
                alt={img}
                className={cn(imgClassName, "object-cover object-center ")}
                width={1000}
                height={1000}
              />
            )}
          </div>
          <div
            className={`absolute right-0 -bottom-5 ${
              id === 5 && "w-full opacity-80"
            } `}
          >
            {spareImg && (
              <Image
                src={spareImg}
                alt={spareImg}
                //   width={220}
                className="object-cover object-center w-full h-full"
                width={1000}
                height={1000}
              />
            )}
          </div>
          {id === 6 && (
            // add background animation , remove the p tag
            <BackgroundGradientAnimation>
              <div className="absolute z-50 inset-0 flex-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
            </BackgroundGradientAnimation>
          )}

          <div
            className={cn(
              titleClassName,
              "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-32 sm:min-h-36 md:min-h-40 flex flex-col p-4"
            )}
          >
            {/* change the order of the title and des, font-extralight, remove text-xs text-neutral-600 dark:text-neutral-300 , change the text-color */}
            <div className="font-sans font-extralight md:max-w-32 md:text-md text-sm text-[#C1C2D3] z-10">
              {description}
            </div>
            {/* add text-3xl max-w-96 , remove text-neutral-600 dark:text-neutral-300*/}
            {/* remove mb-2 mt-2 */}
            <div
              className={`font-sans text-sm md:text-md max-w-96 font-bold z-10`}
            >
              {title}
            </div>

            {/* for the github 3d globe */}
            {id === 2 && <GridGlobe />}

            {/* Tech stack list div */}
            {id === 3 && (
              <div className="absolute inset-4 top-12 bottom-4">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-3 h-full content-start">
                  {[...leftLists, ...rightLists].map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-2 text-xs bg-secondary/20 text-white/70 rounded-md border border-white/10 flex items-center justify-center text-center whitespace-nowrap overflow-hidden"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {id === 6 && (
              <div className="mt-5 relative">
                {/* button border magic from tailwind css buttons  */}
                {/* add rounded-md h-8 md:h-8, remove rounded-full */}
                {/* remove focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 */}
                {/* add handleCopy() for the copy the text */}
                <MagicButton
                  title={copied ? "Email is Copied!" : "Copy my email address"}
                  icon={<IoCopyOutline />}
                  position="left"
                  handleClick={handleCopy}
                  otherClasses="!bg-[#161A31]"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
);

BentoGridItem.displayName = "BentoGridItem";
