"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import WebGrid from "./ui/WebGrid";
import { animateRecentProjects } from "@/animations/layout";
import { useEffect, useState } from "react";
import { memo } from "react";
import type { Project } from "@/interfaces";
import MobileProjectModal from "./ui/MobileProjectModal";
import type { Slide } from "./ui/MobileProjectModal";

const DEDUCTLY_VIDEO = "https://res.cloudinary.com/desssomsw/video/upload/v1752747905/deductly_gn1w6v.mp4";

const DEDUCTLY_SLIDES: Slide[] = [
  {
    type: "video",
    src: DEDUCTLY_VIDEO,
    description: "The Deductly chatbot leverages a specialized knowledge base focused on Philippine tax deduction rules. Users can interact with the chatbot to get instant, context-aware answers about what receipts and expenses are deductible, making tax management easier and more accurate.",
  },
  {
    type: "image",
    src: "/deductly/deductly1.webp",
    description: "We analyze a receipt to determine if it's deductible. The app uses AI to scan and interpret receipt details, helping users maximize their deductions with minimal effort.",
  },
  {
    type: "image",
    src: "/deductly/deductly2.webp",
    description: "We store receipt details from scanning. All extracted information is securely saved, allowing users to easily track, organize, and retrieve their receipts for future reference.",
  },
];

const ProjectItem = memo(({ project, onClick }: { project: Project; onClick?: () => void }) => {
  const handleNavigation = (link?: string) => {
    if (link) {
      window.open(link, "_blank");
    }
  };

  const handleClick = () => {
    if (project.isMobile || !project.link) {
      onClick && onClick();
    } else {
      handleNavigation(project.link);
    }
  };

  return (
    <div
      className="portfolio-items group lg:min-h-[27rem] sm:h-[25rem] h-[23rem] flex-center w-full"
      key={project.id}
    >
      <div
        onClick={handleClick}
        className="w-full h-full cursor-pointer"
      >
        <PinContainer title={project.title} href={project.link}>
          <div className="relative flex-center w-full overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl h-[25vh] lg:h-[30vh] mb-5 sm:mb-7 md:mb-10">
            <div
              className="relative w-full h-full overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl"
              style={{ backgroundColor: "#13162D" }}
            >
              <Image src="/bg.webp" alt="bgimg" width={1000} height={1000} />
            </div>
            <Image
              src={project.img}
              alt="cover"
              className="z-10 absolute group-hover:scale-125 transition-all duration-300 bottom-0 rounded-xl sm:rounded-2xl lg:rounded-3xl "
              width={1000}
              height={1000}
            />
          </div>

          <h1 className="font-bold text-sm md:text-md sm:text-base line-clamp-1">
            {project.title}
          </h1>

          <p
            className="lg:font-normal font-light text-xs line-clamp-2"
            style={{
              color: "#BEC1DD",
              margin: "1vh 0",
            }}
          >
            {project.des}
          </p>

          <div className="flex items-center justify-between mt-3 sm:mt-5 mb-3">
            <div className="flex items-center">
              {project.iconLists.map((icon: string, index: number) => (
                <div
                  key={index}
                  className="border border-white/[.2] rounded-full bg-black lg:size-8 sm:w-8 w-7 flex-center"
                  style={{
                    transform: `translateX(-${5 * index + 2}px)`,
                  }}
                >
                  <Image
                    src={icon}
                    alt="icon5"
                    className="p-2"
                    width={1000}
                    height={1000}
                  />
                </div>
              ))}
            </div>

            <div className="flex-center">
              <p className="flex text-xs text-purple">
                View
              </p>
              <FaLocationArrow
                className="ms-2 sm:ms-3 size-3 sm:size-auto"
                color="#CBACF9"
              />
            </div>
          </div>
        </PinContainer>
      </div>
    </div>
  );
});
ProjectItem.displayName = "ProjectItem";

const RecentProjects = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProject, setModalProject] = useState<Project | null>(null);

  useEffect(() => {
    animateRecentProjects();
  }, []);

  const handleProjectClick = (project: Project) => {
    if (project.isMobile || !project.link) {
      setModalProject(project);
      setModalOpen(true);
    }
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setModalProject(null);
  };

  return (
    <section id="projects" className="relative">
      <WebGrid className="top-0 md:top-32" />
      <WebGrid className="bottom-0" />

      <h1 className="heading flex-center gap-2">
        <p className="textAnimProjects opacity-0">My</p>
        <span className="text-primary textAnimProjects opacity-0">
          Projects
        </span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center py-4 px-1 gap-x-4 mt-2 sm:mt-10 md:mt-14 sm:gap-y-0 gap-y-10">
        {projects.map((item) => (
          <ProjectItem
            key={item.id}
            project={item}
            onClick={() => handleProjectClick(item)}
          />
        ))}
      </div>

      {/* Modal for mobile projects */}
      {modalProject && modalProject.title === "Deductly" && (
        <MobileProjectModal
          open={modalOpen}
          onClose={handleModalClose}
          slides={DEDUCTLY_SLIDES}
        />
      )}
    </section>
  );
};

export default RecentProjects;
