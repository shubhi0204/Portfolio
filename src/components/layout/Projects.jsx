import React, { useEffect, useState } from "react";

const Projects = () => {
  /* 
    Local UI state
  */
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  /* 
    Effects
  */
  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentProjectIndex(
        currentProjectIndex >= 2 ? 0 : currentProjectIndex + 1
      );
    }, 5 * 1000);

    return () => clearTimeout(timeout);
  }, [currentProjectIndex]);

  /* 
    JSX
  */
  return (
    <div className="w-[100vw] relative">
      <div className="w-[80%] h-[80vh] mx-auto flex justify-end items-start space-x-4">
        {/* Computer screen */}
        <div className="w-full relative ml-[-10%] mt-[-4%]">
          <span className="text-stone-100 text-7xl font-light absolute left-[12%] mt-4 z-30 tracking-wider pl-8 border-l-4 border-l-pink-400">
            Lawify.io
          </span>

          <div className="absolute top-10 left-[12%] z-30 flex justify-start items-center gap-4 flex-wrap mt-20">
            {[1, 2, 3, 4, 5].map((item, index) => (
              <span
                className="border-[1px] border-pink-200 text-pink-400 rounded px-2 py-1"
                key={index}
              >
                Devops
              </span>
            ))}
          </div>

          <div className="absolute left-0 top-[-10%]">
            <img
              src="/drawables/macbook_no_bg.jpg"
              alt="macbook_image_no_bg"
              className="w-auto h-[100vh] bg-center bg-cover object-cover object-center"
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <video
                src="/drawables/sample_video.mp4"
                autoPlay
                loop
                controls
                className="w-[74%] h-[44%] object-cover"
              ></video>
            </div>
          </div>
        </div>

        <div className="w-[40%] h-[100%] flex flex-col justify-start items-center flex-shrink-0">
          <div className="h-[84%] w-[100%] flex flex-col gap-10 justify-start">
            <div className="min-h-[24%] flex flex-col gap-4 justify-start items-start">
              <span className="text-stone-100 font-semibold text-2xl">
                AI assistent for lawers and financial advisors
              </span>

              <span className="text-stone-300 text-sm font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                voluptatum sequi unde et corrupti molestias hic sunt nesciunt!
                Commodi corrupti iusto deleniti libero sunt sequi mollitia ipsam
                sint voluptatum consequatur.
              </span>
            </div>

            <div className="min-h-[24%] flex flex-col gap-4 justify-start items-start">
              <span className="text-stone-100 font-semibold text-2xl">
                AI assistent for lawers and financial advisors
              </span>

              <span className="text-stone-300 text-sm font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                voluptatum sequi unde et corrupti molestias hic sunt nesciunt!
                Commodi corrupti iusto deleniti libero sunt sequi mollitia ipsam
                sint voluptatum consequatur.
              </span>
            </div>

            <div className="min-h-[24%] flex flex-col gap-4 justify-start items-start">
              <span className="text-stone-100 font-semibold text-2xl">
                AI assistent for lawers and financial advisors
              </span>

              <span className="text-stone-300 text-sm font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                voluptatum sequi unde et corrupti molestias hic sunt nesciunt!
                Commodi corrupti iusto deleniti libero sunt sequi mollitia ipsam
                sint voluptatum consequatur.
              </span>
            </div>
          </div>

          <div className=" flex justify-between items-center space-x-4 w-[100%] self-end mt-10">
            <a
              className="w-[50%] h-full py-3 text-stone-100 text-lg flex justify-center items-center space-x-2 border-[1px] border-stone-200 rounded-full"
              href="wwww.github.com"
            >
              <span className="text-pink-500">{`< />`}</span>
              <span>Source code</span>
            </a>
            <a
              className="w-[50%] h-full py-3 text-stone-100 text-lg flex justify-center space-x-2 items-center border-[1px] border-stone-200 rounded-full "
              href="wwww.github.com"
            >
              <div className="h-2 w-2 rounded-full bg-pink-400 animate-pulse transition-all duration-300 ease-linear">
                &nbsp;
              </div>
              <span>Live link</span>
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-6 pl-4">
          {[1, 2, 3]?.map((item, index) => (
            <div
              className={`${
                currentProjectIndex === index
                  ? "w-3 h-3 outline-double outline-offset-2 outline-white"
                  : "w-3 h-3"
              } rounded-full bg-white cursor-pointer`}
              onClick={() => setCurrentProjectIndex(index)}
            >
              &nbsp;
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
