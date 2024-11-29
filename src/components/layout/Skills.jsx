import React, { useEffect, useState } from "react";

const Skills = () => {
  /* 
    Local UI state
  */
  const [currentEducationIndex, setCurrentEducationIndex] = useState(0);

  /* 
    Meta data
  */
  const educationMetaData = [
    {
      title: "B.Tech (CSE)",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat maxime magnam distinctio mollitia nulla, eaque rem ad dolor sunt nobis animi officia ratione perspiciatis, excepturimodi nesciunt veritatis voluptatum quia.",
      from: "2020",
      to: "2024",
    },
    {
      title: "Intermediate",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat maxime magnam distinctio mollitia nulla, eaque rem ad dolor sunt nobis animi officia ratione perspiciatis, excepturimodi nesciunt veritatis voluptatum quia.",
      from: "2019",
      to: "2020",
    },
    {
      title: "High school",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat maxime magnam distinctio mollitia nulla, eaque rem ad dolor sunt nobis animi officia ratione perspiciatis, excepturimodi nesciunt veritatis voluptatum quia.",
      from: "2017",
      to: "2018",
    },
  ];

  /* 
    Effects
  */
  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentEducationIndex(
        currentEducationIndex >= 2 ? 0 : currentEducationIndex + 1
      );
    }, 5 * 1000);

    return () => clearTimeout(timeout);
  }, [currentEducationIndex]);

  /* 
    JSX
  */
  return (
    // wrapper
    <div className="w-[100vw] !text-stone-100">
      {/* bada dibba */}
      <div className="flex justify-between items-stretch space-x-10 w-[80%] mx-auto">
        {/* chota dibba */}
        <div className="w-[50%] h-[64vh] flex-shrink-0 flex flex-col gap-6 justify-between items-center">
          <div className="w-[100%] h-[50%]">
            <span className="font-semibold text-5xl">Education</span>
            <div className="flex justify-between items-center">
              <div className="w-[96%] p-4 flex flex-col gap-4">
                <div className="flex justify-between items-end space-x-2">
                  <span className="text-2xl mt-6 ml-1">
                    {educationMetaData?.[currentEducationIndex]?.title}
                  </span>
                  <span className="text-lg mt-6 ml-1 text-pink-600 border-2 border-pink-500 px-5 py-1 rounded-full">
                    {educationMetaData?.[currentEducationIndex]?.from} -{" "}
                    {educationMetaData?.[currentEducationIndex]?.to}
                  </span>
                </div>
                <span className="text-sm font-light">
                  {educationMetaData?.[currentEducationIndex]?.description}
                </span>
              </div>

              <div className="flex flex-col justify-center items-center gap-4">
                {[1, 2, 3]?.map((item, index) => (
                  <div
                    className={`${currentEducationIndex === index ? "w-2 h-2 outline-double outline-offset-1" : "w-2 h-2"} rounded-full bg-white cursor-pointer`}
                    onClick={() => setCurrentEducationIndex(index)}
                  >
                    &nbsp;
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-[100%] h-[50%] bg-yellow-200">&nbsp;</div>
        </div>

        {/* chota dibba */}
        <div className="w-[44%] h-[64vh] flex-shrink-0 flex flex-col gap-6 justify-between items-center">
          <div className="w-full h-[30%] bg-green-300">&nbsp;</div>

          <div className="w-full h-[30%] bg-purple-200">&nbsp;</div>

          <div className="w-full h-[30%] bg-orange-300">&nbsp;</div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
