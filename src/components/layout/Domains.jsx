import React from 'react'

const Domains = () => {
  return (
    // Wrapper
    <div className='w-[100vw] h-[64dvh]'>
      {/* Big dibba */}
      <div className='w-[80%] h-full mx-auto flex justify-between items-center'>
        {/* Chota dibba -- 1 */}
        <div className='w-[25%] h-full flex-shrink-0 bg-red-400'>&nbsp;</div>
        {/* Chota dibba -- 2 */}
        <div className='w-[25%] h-full flex-shrink-0 bg-blue-400'>&nbsp;</div>
        {/* Chota dibba -- 3 */}
        <div className='w-[25%] h-full flex-shrink-0 bg-pink-200'>&nbsp;</div>
        {/* Chota dibba -- 4 */}
        <div className='w-[25%] h-full flex-shrink-0 bg-green-100'> &nbsp;</div>
      </div>
    </div>
  )
}

export default Domains
