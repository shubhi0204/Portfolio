import React from 'react'

const Skills = () => {
  return (
    // wrapper
    <div className='w-[100vw]'>
      {/* bada dibba */}
      <div className='flex justify-between items-stretch space-x-10 w-[80%] mx-auto'>
        {/* chota dibba */}
        <div className='w-[50%] h-[64vh] flex-shrink-0 flex flex-col gap-6 justify-between items-center'>
           <div className='w-[100%] h-[50%] bg-red-400'>&nbsp;</div>

           <div className='w-[100%] h-[50%] bg-yellow-200'>&nbsp;</div>
        </div>

        {/* chota dibba */}
        <div className='w-[44%] h-[64vh] flex-shrink-0 flex flex-col gap-6 justify-between items-center'>
          <div className='w-full h-[30%] bg-green-300'>&nbsp;</div>
          
          <div className='w-full h-[30%] bg-purple-200'>&nbsp;</div>
          
          <div className='w-full h-[30%] bg-orange-300'>&nbsp;</div>
        </div>
      </div>
    </div>
  )
}

export default Skills
