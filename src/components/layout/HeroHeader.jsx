import React from "react";

const HeroHeader = () => {
  return (
    <div className="w-[100vw] h-[100dvh]">
      <img
        src="/public/drawables/cloud_bg_black.svg"
        alt="cloud_illustration"
        className="cloud-illustration w-full h-full bg-center bg-cover !object-cover !object-center"
      />

      {/* <div className="h-full w-full bg-black">
        &nbsp;
      </div> */}

      <div className="w-[80%] h-[80%] bg-[#000000a1] bg-opacity-50 p-16 rounded-md flex flex-col gap-10 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] backdrop-filter backdrop-blur-sm border border-white border-opacity-20 ">
        <div className="flex justify-between items-center">
          <span className="font-semibold text-xl text-stone-100">Shubhangi</span>
          <div className="flex justify-between items-center space-x-10 !text-stone-100">
            <button className="text-lg">Education</button>
            <button className="text-lg">Skills</button>
            <button className="text-lg">Projects</button>
            <button className="text-lg">Recommendations</button>
          </div>
        </div>

        <span>
          <h1 className="text-stone-100 text-5xl font-semibold font-serif w-[56%] mt-24">
            Hi I am Shubhangi 👋
          </h1>
        </span>

        <span>
          <p className="text-stone-200 text-lg w-[56%]">
            Great ideas lead to great products and a good engineer can bridge
            the gap between an idea and reality, so lets create some good
            products together.
          </p>
        </span>

        <button className="w-fit text-lg px-16 py-3 bg-pink-700 text-stone-100 rounded-lg flex justify-between items-center space-x-2 font-semibold">
          Say Hello{" "}
          <img src="/icons/send.svg" alt="send_icon" className="w-5 h-5 ml-2" />
        </button>

        <img
          src="/drawables/cloud_vector_image.svg"
          alt="cloud_vector_img"
          className="h-[24rem] w-[24rem] absolute right-[-8rem] bottom-[-2rem]"
        />
      </div>
    </div>
  );
};

export default HeroHeader;
