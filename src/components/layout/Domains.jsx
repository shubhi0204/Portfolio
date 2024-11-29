import React from "react";

const Domains = () => {
  return (
    // Wrapper
    <div className="w-[100vw] h-[80dvh] mt-[-6rem]">
      {/* Big dibba */}
      <div className="w-full h-full mx-auto flex justify-between items-center">
        {/* Chota dibba -- 1 */}
        <div
          className="w-[25%] h-full flex-shrink-0 bg-black text-[6.4rem] leading-[8rem] flex flex-col jucc
         items-center pt-[5.6rem] text-stone-100 relative"
        >
          I. <br /> Like. <br /> Doing.
          <div className="w-[56%] h-2 bg-gradient-to-r from-blue-400 via-green-400 via-yellow-400 via-red-400 to-purple-500 mt-12 rounded-lg absolute left-12 bottom-36">
            &nbsp;
          </div>
        </div>
        {/* Chota dibba -- 2 */}
        <div className="w-[25%] h-full flex-shrink-0 bg-[url('/public/drawables/domain_design.jpg')] bg-center bg-cover object-contain object-center relative overflow-clip">
          <div className="absolute h-full inset-0 bg-gradient-to-b from-transparent via-[#000000ec] to-black opacity-90">
            &nbsp;
          </div>
          <div className="flex flex-col w-full">
            <img
              src="/drawables/1.svg"
              alt="1_icon"
              className="bg-center bg-contain object-contain object-fill mt-24 h-[24rem] w-auto bg-center bg-cover object-fill object-center ml-[-6.4rem]"
            />

            <p className="text-[2.4rem] text-stone-100 absolute left-6 bottom-12">
              #design
            </p>
          </div>
        </div>

        {/* Chota dibba -- 3 */}
        <div className="w-[25%] h-full flex-shrink-0 bg-[url('/public/drawables/domain_code.jpg')] bg-center bg-contain object-contain object-center relative overflow-clip">
          <div className="absolute h-full inset-0 bg-gradient-to-b from-transparent via-[#000000ec] to-black opacity-90">
            &nbsp;
          </div>
          <div className="flex flex-col w-full">
            {/* <p className="text-[40rem] leading-[44rem] font-black gradient-stroke">
              1
            </p> */}

            <img
              src="/drawables/2.svg"
              alt="1_icon"
              className="bg-center bg-contain object-contain object-fill mt-24 h-[24rem] w-auto bg-center bg-contain object-contain object-center ml-[-6.4rem]"
            />

            <p className="text-[2.4rem] text-stone-100 absolute left-6 bottom-12">
              #develop
            </p>
          </div>
        </div>

        {/* Chota dibba -- 4 */}
        <div className="w-[25%] h-full flex-shrink-0 bg-[url('/public/drawables/domain_deploy.jpg')] bg-center bg-cover object-contain object-center relative overflow-clip">
          <div className="absolute h-full inset-0 bg-gradient-to-b from-transparent via-[#000000ec] to-black opacity-90">
            &nbsp;
          </div>
          <div className="flex flex-col w-full">
            {/* <p className="text-[40rem] leading-[44rem] font-black gradient-stroke">
              1
            </p> */}

            <img
              src="/drawables/3.svg"
              alt="1_icon"
              className="bg-center bg-contain object-contain object-fill mt-24 h-[24rem] w-auto bg-center bg-cover object-cover object-center ml-[-6.4rem]"
            />

            <p className="text-[2.4rem] text-stone-100 absolute left-6 bottom-12">
              #deploy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Domains;
