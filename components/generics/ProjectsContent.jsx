import React from "react";
import Image from "next/image";

function ProjectsContent(props) {
  const {
    post,
    projects,
    handleMouseLeave,
    projectHovered,
    handlePosts,
    handleHover,
    projectType,
    fade,
  } = props;
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:w-[120rem] mt-24 gap-7 px-10 md:px-0 mb-44 ${
        fade ? "fade-in" : ""
      } ${post && "hidden"}`}
    >
      {projectType === "all"
        ? projects.map((projects, index) => (
            <div
              className="imagedet"
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={handleMouseLeave}
              key={projects.name}
            >
              {projectHovered === index && (
                <div className="absolute top-[50%] left-[50%] z-[100] transform -translate-x-1/2 -translate-y-1/2 ">
                  <div className="posting flex flex-col w-full items-center justify-center">
                    <h1 className="text-4xl font-medium">{projects.title}</h1>
                    <p className="text-3xl pt-3 pb-20">{projects.stack}</p>
                    <button
                      className="w-[20rem] text-4xl  h-[5rem] border-2  border-[#00abf0] object-cover hover:cursor-pointer hover:bg-[#00abf0] hover:text-[#112e42]"
                      onClick={() => handlePosts(projects)}
                    >
                      LEARN MORE
                    </button>
                  </div>
                </div>
              )}
              <Image
                src={projects.folder}
                alt={projects.name}
                width={1920}
                height={1080}
                className="w-[45rem] h-[20rem] sm:h-[25rem] border-[0.2px] border-[#00abf0] object-cover  hover:opacity-[0.2]"
              />
            </div>
          ))
        : projects.map(
            (projects, index) =>
              projects.type === projectType && (
                <div
                  className="imagedet"
                  onMouseEnter={() => handleHover(index)}
                  onMouseLeave={handleMouseLeave}
                  key={projects.name}
                >
                  {projectHovered === index && (
                    <div className="absolute top-[50%] left-[50%] z-[100] transform -translate-x-1/2 -translate-y-1/2 ">
                      <div className="posting flex flex-col w-full items-center justify-center">
                        <h1 className="text-4xl font-extrabold">
                          {projects.title}
                        </h1>
                        <p className="text-3xl pt-3 pb-20">{projects.stack}</p>
                        <button
                          className="w-[20rem] text-4xl  h-[5rem] border-2  border-[#00abf0] object-cover hover:cursor-pointer hover:bg-[#00abf0] hover:text-[#112e42]"
                          onClick={() => handlePosts(projects)}
                        >
                          LEARN MORE
                        </button>
                      </div>
                    </div>
                  )}
                  <Image
                    src={projects.folder}
                    alt={projects.name}
                    width={1920}
                    height={1080}
                    className="w-[45rem] h-[20rem] sm:h-[25rem] border-[0.2px] border-[#00abf0] object-cover  hover:opacity-[0.2]"
                  />
                </div>
              )
          )}
    </div>
  );
}

export default ProjectsContent;
