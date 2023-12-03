import Image from "next/image";

function Posts({ post, setPosts, content, setContent }) {
  const handlePost = () => {
    setPosts(false);
    setContent({});
  };
  return (
    <div className="posts posting absolute z-[500] w-[70%] sm:w-[80%] h-[50rem] sm:h-[65rem] md:h-[70rem] lg:h-[60rem] ">
      <div className="flex lg:flex-row flex-col">
        <div className="posting w-[99.5%] lg:w-[60%] h-[20rem] sm:h-[30rem] md:h-[40rem] lg:h-[59rem] flex items-center justify-center">
          <Image
            src={content.folder2}
            alt={content.name}
            width={1920}
            height={1080}
            className="pt-2 pl-2 w-full h-full  "
          />
          <div
            className="flex lg:hidden absolute -top-4 -right-3"
            onClick={handlePost}
          >
            <i
              class="bx bx-minus  text-6xl border-2 border-transparent hover:border-[#5d91b6] bg-[#1e547a] font-bold hover:cursor-pointer"
              onClick={handlePost}
            ></i>
          </div>
        </div>
        <div className="flex flex-col relative items-center lg:pt-[8rem] w-full lg:w-[40%]">
          {/* Exit bar */}
          <div
            className="hidden lg:flex absolute top-3 right-2"
            onClick={handlePost}
          >
            <i
              class="bx bx-minus  text-6xl border-2 border-[#1e547a] hover:bg-[#1e547a] hover:border-transparent font-bold hover:cursor-pointer"
              onClick={handlePost}
            ></i>
          </div>

          <h1 className="text-3xl  pt-5 sm:pt-10 lg:pt-0 sm:text-5xl md:text-6xl xl:text-7xl font-bold">
            {content.title}
          </h1>
          <p className="text-xl sm:text-2xl pt-2 border-b-[1px] pb-5 lg:pb-10 w-[90%] text-center border-[#5196b1]">
            {content.stack}
          </p>

          <p className="text-justify px-10 pt-8 lg:pt-16 text-[1rem] sm:text-[1.3rem] md:text-[1.5rem] lg:text-[1.4rem] xl:text-[1.65rem] indent-10 md:indent-20">
            {content.description}
          </p>
          <button className="flex items-center mt-10 justify-center px-[1rem] py-3 blg:px-[2rem] blg:py-5 rounded-xl   hover:cursor-pointer duration-[400ms] bg-[#00abf0] hover:bg-transparent text-[#112e42] hover:text-white gap-3">
            <a
              href={`http://${content.link}`}
              className="flex"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="bx bx-link-external pt-[1px] text-2xl sm:text-3xl md:text-4xl xl:text-5xl"></i>
              <p className="text-lg sm:text-xl md:text-2xl xl:text-3xl">
                View Site
              </p>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Posts;
