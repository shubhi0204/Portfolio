import React, { useEffect, useState } from "react";

const Skills = () => {
  /* 
    Local UI state
  */
  const [currentEducationIndex, setCurrentEducationIndex] = useState(0);
  const [currentTechIndex, setCurrentTechIndex] = useState(0);

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

  const techIconsMetaData = [
    [
      {
        url: "/icons/git_scm.svg",
      },
      {
        url: "/icons/github.svg",
      },
      {
        url: "/icons/azure.svg",
      },
      {
        url: "/icons/gcp.svg",
      },
      {
        url: "/icons/docker.svg",
      },
      {
        url: "/icons/kubernetes.svg",
      },
      {
        url: "/icons/netlify.svg",
      },
      {
        url: "/icons/vercel.svg",
      },
    ],
    [
      {
        url: "/icons/node.svg",
      },
      {
        url: "/icons/flask.svg",
      },
      {
        url: "/icons/postgre.svg",
      },
      {
        url: "/icons/mongo.svg",
      },
    ],
    [
      {
        url: "/icons/postman.svg",
      },
      {
        url: "/icons/mocha.svg",
      },
      {
        url: "/icons/shell_scripting.svg",
      },
      {
        url: "/icons/ci_cd.svg",
      },
      {
        url: "/icons/railway.svg",
      },
    ],
  ];

  const softSkillsMetaData = [
    {
      title: "Communication",
    },
    {
      title: "Logical thinking",
    },
    {
      title: "Problem solving",
    },
    {
      title: "Time managment",
    },
  ];

  const skillSetMetaData = [
    {
      title: "Development"
    },
    {
      title: "Deployment"
    },
    {
      title: "Testing"
    },
    {
      title: "Integration"
    }
  ];
  
  const languagesMetaData = [
    {
      title: "English"
    },
    {
      title: "French"
    }
  ]

  /* 
    Effects
  */
  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentEducationIndex(
        currentEducationIndex >= 2 ? 0 : currentEducationIndex + 1
      );

      setCurrentTechIndex(
        currentEducationIndex >= 2 ? 0 : currentEducationIndex + 1
      );
    }, 5 * 1000);

    return () => clearTimeout(timeout);
  }, [currentEducationIndex, currentTechIndex]);

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
          {/* Education section */}
          <div className="w-[100%] h-[50%]">
            <span className="font-semibold text-5xl">Education</span>
            <div className="flex justify-between items-center">
              <div className="w-[96%] p-4 flex flex-col gap-4">
                <div className="flex justify-between items-end space-x-2">
                  <span className="text-2xl mt-6">
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

          {/* Technical section */}
          <div className="w-[100%] h-[50%]">
            <span className="font-semibold text-5xl">Technical skills</span>

            <div className="flex justify-between items-start mt-6 ml-6 h-full">
              <div className="w-[90%] flex justify-start items-center gap-x-4 flex-wrap">
                {techIconsMetaData?.[currentTechIndex].map((item, index) => (
                  <div
                    className="w-20 h-20 rounded-lg flex justify-center items-center p-3"
                    key={index}
                  >
                    <img
                      src={item?.url}
                      alt="technology_icon"
                      className="h-full w-full"
                    />
                  </div>
                ))}
              </div>

              <div className="flex flex-col justify-center items-center gap-4 mt-6">
                {[1, 2, 3]?.map((item, index) => (
                  <div
                    className={`${currentTechIndex === index ? "w-2 h-2 outline-double outline-offset-1" : "w-2 h-2"} rounded-full bg-white cursor-pointer`}
                    onClick={() => setCurrentTechIndex(index)}
                  >
                    &nbsp;
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* chota dibba */}
        <div className="w-[44%] h-[64vh] flex-shrink-0 flex flex-col gap-6 justify-between items-center">
          <div className="w-full">
            {/* Soft skills */}
            <span className="font-semibold text-5xl">Soft skills</span>

            <div className="flex justify-between items-center mt-6 ml-6 flex-wrap gap-4">
              {softSkillsMetaData?.map((item, index) => (
                <span
                  className="text-stone-200 text-lg w-[48%] flex-shrink-0 pl-4 border-l-[2px] border-l-pink-400"
                  key={index}
                >
                  {item?.title}
                </span>
              ))}
            </div>
          </div>

          <div className="w-full">
            {/* Skill set */}
            <span className="font-semibold text-5xl">Skill set</span>

            <div className="flex justify-between items-center mt-6 ml-6 flex-wrap gap-4">
              {skillSetMetaData?.map((item, index) => (
                <span
                  className="text-stone-200 text-lg w-[48%] flex-shrink-0 pl-4 border-l-[2px] border-l-pink-400"
                  key={index}
                >
                  {item?.title}
                </span>
              ))}
            </div>
          </div>

          <div className="w-full">
            {/* Languages */}
            <span className="font-semibold text-5xl">Languages</span>

            <div className="flex justify-between items-center mt-6 ml-6 flex-wrap gap-4">
              {languagesMetaData?.map((item, index) => (
                <span
                  className="text-stone-200 text-lg w-[48%] flex-shrink-0 pl-4 border-l-[2px] border-l-pink-400"
                  key={index}
                >
                  {item?.title}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
