import React from 'react'
import Video from './Video'

const ToHomeHeroText = () => {
  return (
    <div className='text-center'>
      <div className='text-[9.5vw] uppercase font-normal leading-[8vw] flex justify-center items-center'>L'étincelle</div>
      <div className='text-[9.5vw] uppercase font-normal leading-[8vw] flex justify-center items-center'>
        qui
        <div className=' h-[8vw] w-[15vw]  rounded-full   overflow-hidden '>
          <Video />
        </div>
        génère</div>
      <div className='text-[9.5vw] uppercase font-normal leading-[8vw] flex justify-center items-center'>la créativité</div>
    </div>
  )
}

export default ToHomeHeroText
