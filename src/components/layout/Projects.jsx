import React from 'react'

const Projects = () => {
  return (
    <div className='w-[100vw] relative'>
      <div className='w-[80%] h-[64vh] mx-auto flex justify-end items-center space-x-4'>
        {/* Computer screen */}
        <div className='absolute left-0 top-0 w-[50%] h-[100%] bg-stone-500 border-2 border-stone-800'>&nbsp;</div>
        
        <div className='w-[44%] h-[100%] flex flex-col justify-between items-center gap-3'>
          <div className='h-[84%] w-[100%] flex flex-col gap-5 justify-between'>
            <div className='h-[33%] bg-red-400'>&nbsp;</div>
            <div className='h-[33%] bg-red-400'>&nbsp;</div>
            <div className='h-[33%] bg-red-400'>&nbsp;</div>
          </div>
          <div className=' flex justify-between items-center space-x-4 h-[16%] w-[100%]'>
           <div className='w-[50%] h-full bg-slate-500'>&nbsp;</div>
           <div className='w-[50%] h-full bg-slate-500'>&nbsp;</div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Projects
